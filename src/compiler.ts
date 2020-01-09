import { AggExpression, BucketAgg, Filter } from './agg';
import { Field } from './document';
import {
  Bool,
  FieldQueryExpression,
  Literal,
  Params,
  QueryExpression,
  RangeExpr,
  Sort,
  Term,
  Terms,
  Source,
 } from './expression';
import { Query, QueryOverride, SearchQueryContext } from './query';
import { arrayKVToDict, isObject, isString, isNullOrUndef, isBoolean, isArray } from './util';

// TODO can not move to utils due to cirular inports
export function isField(x: any): x is Field {
  return x instanceof Field;
}

export class CompilerVisitor {
  public params: Query = {};

  public compile(queryContext: SearchQueryContext): Query {
    return this.visit(queryContext);
  }

  private visit(expression: any): any {
    let visitName;

    if (expression?.visitName) {
      visitName = expression.visitName;
    }

    // TODO visitName must be constant
    switch (visitName) {
      case 'searchQueryContext':
        return this.visitSearchQueryContext(expression);
      case 'queryExpression':
        return this.visitQueryExpression(expression);
      case 'params':
        return this.visitParams(expression);
      case 'fieldQuery':
        return this.visitFieldQuery(expression);
      case 'field':
        return this.visitField(expression);
      case 'term':
        return this.visitTerm(expression);
      case 'terms':
        return this.visitTerms(expression);
      case 'literal':
        return this.visitLiteral(expression);
      case 'agg':
        return this.visitAgg(expression);
      case 'bucketAgg':
        return this.visitBucketAgg(expression);
      case 'filterAgg':
        return this.visitFilterAgg(expression);
      case 'range':
        return this.visitRange(expression);
      case 'sort':
        return this.visitSort(expression);
      case 'source':
        return this.visitSource(expression);
      default:
    }

    if (Array.isArray(expression)) {
      return this.visitArray(expression);
    }

    if (isObject(expression)) {
      return this.visitObject(expression);
    }

    return expression;
  }

  private getQuery(queryContext: SearchQueryContext): QueryOverride {
    return queryContext.query;
  }
  private getFilteredQuery(queryContext: SearchQueryContext): QueryOverride {
    const q = this.getQuery(queryContext);
    const filterClauses = [];
    if (queryContext.filters.length > 0) {
      filterClauses.push(...queryContext.filters);
    }
    if (filterClauses.length > 0) {
      if (filterClauses.length === 1) {
        const clause = filterClauses[0];
        return new Bool({ must: q, filter: clause });
      }
      return new Bool({ must: q, filter: filterClauses });
    }
    return q;
  }

  /**
   * This is where we start building our query
   * @param queryContext
   */
  private visitSearchQueryContext(queryContext: SearchQueryContext): Query {
    const params: Query = {};
    const query = this.getFilteredQuery(queryContext);
    if (query) {
      params.query = this.visit(query);
    }

    if (queryContext.sort.length > 0) {
      params.sort = this.visit(queryContext.sort);
    }
    if (!isNullOrUndef(queryContext.source)) {
      params._source = this.visit(queryContext.source);
    }
    if (queryContext.limit !== null) {
      params.size = queryContext.limit;
    }

    if (queryContext.aggregations.length > 0) {
      params.aggregations = this.visit(queryContext.aggregations);
    }

    return params;
  }

  private visitQueryExpression(expression: QueryExpression): any {
    return {
      [expression.queryName]: this.visit(expression.params),
    };
  }

  private visitFieldQuery(expression: FieldQueryExpression): any {
    const exprParams = expression.params;

    if (exprParams.length > 0) {
      let params = { [expression.queryKey]: this.visit(expression.query) };
      params = { ...params, ...exprParams };
      return {
        [expression.queryName]: {
          [this.visit(expression.field)]: params,
        },
      };
    }
    return {
      [expression.queryName]: {
        [this.visit(expression.field)]: this.visit(expression.query),
      },
    };
  }

  private visitTerm(term: Term): any {
    return this.visitFieldQuery(term);
  }

  private visitTerms(expression: Terms): any {
    const fieldName = this.visit(expression.field);
    const params = { [fieldName]: this.visit(expression.terms)};
    return {
      terms: { ...params, ...this.visit(expression.params) },
    };
  }

  private visitParams(params: Params): any {
    const res: any = {};
    params.getParamsKvList().forEach(([key, val]) => {
      res[this.visit(key)] = this.visit(val);
    });
    return res;
  }

  private visitField(field: Field): any {
    return field.name;
  }

  private visitLiteral(expression: Literal): any {
    return expression.obj;
  }

  private visitArray(expression: any[]): any {
    return expression.map((exp) => this.visit(exp));
  }

  private visitObject(expression: object): any {
    const visited = Object.entries(expression).map(([key, value]) => {
      return [this.visit(key), this.visit(value)];
    });
    return arrayKVToDict(visited);
  }

  private visitAgg(agg: AggExpression): any {
    return {
      [agg.aggName]: this.visit(agg.params),
    };
  }

  private visitBucketAgg(agg: BucketAgg): any {
    const params: any = {
      [agg.aggName]: this.visit(agg.params),
    };
    if (agg.aggregations.length > 0) {
      params.aggregations = this.visit(agg.aggregations);
    }
    return params;
  }

  private visitFilterAgg(agg: Filter): any {
    const params = this.visitBucketAgg(agg);
    params[agg.aggName] = this.visit(agg.filter);
    return params;
  }

  private visitRange(expr: RangeExpr): any {
    const fieldParams: any = {
      [this.visit(expr.field)]: this.visit(expr.params),
    };

    return {
      range: {
        ...this.visit(expr.rangeParams),
        ...fieldParams,
      },
    };
  }

  private visitSort(expr: Sort): any {
    if (expr.params.length) {
      const params = {
        order: this.visit(expr.order),
        ...this.visit(expr.params),
      };
      return {
        [this.visit(expr.field)]: params,
      };
    } else if (expr.order) {
      return {
        [this.visit(expr.field)]: this.visit(expr.order),
      };
    }
    return this.visit(expr.field);
  }

  private visitSource(expr: Source): any {
    if (expr.include || expr.exclude) {
      const params: any = {};
      if (expr.exclude?.length) {
          const exclude = this.visit(expr.exclude);
          if (exclude.length) {
            params.exclude = exclude;
          }
      }
      if (expr.include?.length) {
        const include = this.visit(expr.include);
        if (include.length) {
          params.include = include;
        }
    }
      return params;
    }
    if (isBoolean(expr.fields)) {
      return expr.fields;
    }
    if (isString(expr.fields)) {
      return expr.fields;
    }
    if (isField(expr.fields)) {
      return this.visit(expr.fields);
    }
    const fields: any = expr.fields;
    return fields.map((field: Field | string) => this.visit(field));
  }
}
