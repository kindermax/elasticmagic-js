import { SearchQueryContext, Query, QueryOverride } from "./query";
import { Bool, QueryExpression, FieldQueryExpression, Params, Literal, Term, Terms } from "./expression";
import { Field } from "./document";
import { arrayKVToDict, isObject } from "./util";
import { AggExpression, BucketAgg } from "./agg";


export class CompilerVisitor {
  public params: Query = {};

  public compile(queryContext: SearchQueryContext): Query {
    return this.visit(queryContext);
  }

  private visit(expression: any): any {
    let visitName;

    if (expression && expression._visitName) {
      visitName = expression._visitName;
    }
    
    // visitName must be constant
    switch (visitName) {
      case 'searchQueryContext':
        return this.visitSearchQueryContext(expression);
      case 'queryExpression':
        return this.visitQueryExpression(expression);
      case 'params':
        return this.visitParams(expression);
      case 'fieldExpression':
        console.log('in python it is not implemented')
        return;
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
      default:
    }

    if (Array.isArray(expression)) {
      return this.visitArray(expression);
    }

    // if this is object
    if (isObject(expression)) {
      return this.visitObject(expression);
    }

    // return as is, mostly for simple types
    return expression;
  }

  private getQuery(queryContext: SearchQueryContext): QueryOverride {
    const q = queryContext.query;
    // TODO if wrap_function_score:
    return q;
  }
  private getFilteredQuery(queryContext: SearchQueryContext): QueryOverride {
    const q = this.getQuery(queryContext);
    const filterClauses = [];
    if (queryContext.filters.length > 0) {
      filterClauses.push(...queryContext.filters);
    }
    // TODO(for es > 6) if not features.supports_mapping_types and doc_classes:
    if (filterClauses.length > 0) {
      // features.supports_bool_filter is always true for es > 2
      if (filterClauses.length === 1) {
        return new Bool({ must: q, filter: filterClauses[0]})
      }
      return new Bool({ must: q, filter: filterClauses });
    }
    return q;
  }

  /**
   * This is where we start and finish building our query (doc must be rewrited)
   * @param queryContext 
   */
  private visitSearchQueryContext(queryContext: SearchQueryContext): Query {
    const params: Query = {};
    const query = this.getFilteredQuery(queryContext)
    if (query) {
      params.query = this.visit(query);
    }
    // TODO order_by (sort)
    if (queryContext.source != null && queryContext !== undefined) {
      params._source = queryContext.source;
    }
    if (queryContext.limit !== null) {
      params.size = queryContext.limit;
    }

    if (Object.keys(queryContext.aggregations).length > 0) {
      params.aggregations = this.visit(queryContext.aggregations);
    }

    return params;
  }

  /**
   * @param expression 
   */
  // TODO return type
  private visitQueryExpression(expression: QueryExpression): any {
    return {
      [expression._queryName]: this.visit(expression.params)
    }
  }

  /**
   * @param expression 
   */
  // TODO return type
  private visitFieldQuery(expression: FieldQueryExpression): any {
    // const exprParams = new Params(expression.params);
    const exprParams = expression.params;

    if (exprParams.length > 0) { // TODO maybe implement iterator for Params
      let params = { [expression._queryKey]: this.visit(expression.query) };
      params = { ...params, ...exprParams }; // TODo here can be broken line
      return {
        [expression._queryName]: {
          [this.visit(expression.field)]: params
        }
      }
    }
    return {
      [expression._queryName]: {
        [this.visit(expression.field)]: this.visit(expression.query)
      }
    }
  }

  private visitTerm(term: Term): any {
    // TODO in python there is a visit call to field type but we do not have it yet
    // const fieldName = term.field;
    // TODO if field_name == '_id':
    return this.visitFieldQuery(term);
  }

  private visitTerms(expression: Terms): any {
    const fieldName = this.visit(expression.field);
    let params = { [fieldName]: this.visit(expression.terms)};
    params = { ...params, ...this.visit(expression.params) }; // { company_id: [123] }
    return {
      'terms': params
    }
  }

  private visitParams(params: Params): any {
    const res: any = {}
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

  private visitArray(expression: Array<any>): any {
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
      [agg._aggName]: this.visit(agg.params)
    };
  }

  private visitBucketAgg(agg: BucketAgg): any {
    const params: any = {
      [agg._aggName]: this.visit(agg.params),
    };
    if (agg._aggregations.length > 0) {
      params.aggregations = this.visit(agg._aggregations);
    }
    return params;
  }
}
