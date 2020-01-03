elasticmagic-js
===============

JS/Typescript DSL for Elasticsearch

This lib is a port of original library written in `python` by [@anti-social]( https://github.com/anti-social/elasticmagic )

# Getting Started

Install elasticmagic-js using [`npm`](https://www.npmjs.com/):

```bash
npm install elasticmagic-js
```

# Examples

Let's get started by writing a simple query.

```javascript
import { Index } from "elasticmagic-js/index";
import { Field, Integer, Document } from "elasticmagic-js/document";
import { Bool } from "elasticmagic-js/expression";

class OrderDocument extends Document {
  public static companyId: Field = new Field(Integer, 'company_id')
  public static status: Field = new Field(Integer, 'status')
  public static source: Field = new Field(Integer, 'source')
}

const index = new Index();

const query = index.searchQuery()
  .source(false)
  .filter(
    Bool.must(
      OrderDocument.companyId.in_([123]),
      OrderDocument.status.in_([1, 5]),
      OrderDocument.source.not_(16),
    )
  )
  .limit(0);

console.log(query.toDict())
```

It will output:

```bash
{
  query: {
    bool: {
      filter: {
        bool: {
          must: [
            {terms: {company_id: [123]}},
            {terms: {status: [1, 5]}},
            {bool: {
              must_not: [
                {term: {source: 16}}
              ]
            }}
          ]
        }
      }
    }
  },
  _source: false,
  size: 0
}
```
