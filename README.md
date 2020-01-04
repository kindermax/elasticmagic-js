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
import { Client } from '@elastic/elasticsearch';
import { Cluster } from "elasticmagic-js/cluster";
import { Field, Integer, Document } from "elasticmagic-js/document";
import { Bool } from "elasticmagic-js/expression";

class OrderDocument extends Document {
  public static _docType = 'order;
  
  public static companyId: Field = new Field(Integer, 'company_id')
  public static status: Field = new Field(Integer, 'status')
  public static source: Field = new Field(Integer, 'source')
}

const client = new Client({ node: 'http://es6-test:9200' });
const cluster = new Cluster(client, 'test_opinion_index');

const query = cluster.searchQuery({ routing: 123, docClass: OrderDocument })
  .source(false)
  .filter(
    Bool.must(
      OrderDocument.companyId.in_([123]),
      OrderDocument.status.in_([1, 5]),
      OrderDocument.source.not_(16),
    )
  )
  .limit(0);

console.log(query.toJSON()) // or console.log(query.body)
```

It will print:

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

To fetch results from elasticsearch:

```javascript
const result = await query.getResult();
```

# Development


#### Tests

First build base image

```bash
make build # 
```

Run all tests

```bash
make test
```

# TODO

- [x] query generation
- [ ] elasticsearch must be devDep or peerDep, but not production dep
- [ ] meta document creation
- [ ] requests
- [ ] scroll
- [ ] aggregations
- [ ] pagination
- [ ] queryFilters
- [ ] inline functions
- [ ] compilers for different es versions
- [ ] sub documents
- [ ] more tests
- [ ] indexing
- [ ] delete
- [ ] bulk

