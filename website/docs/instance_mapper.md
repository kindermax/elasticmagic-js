---
id: instance_mapper
title: Instance mapper
---

## How it works

It's possible to pass a function which map ids from elasticsearch to structure definded by instance mapper function.

When specifying `source(false)`, elasticsearch returns only _id of found document in `hit._source` field.

## Examples

```javascript

const cluster = new Cluster(client, 'my_doc_index');

type EntityMapped = {
  id: number;
  name: string;
  status: number;
  createdAt: Date;
}

const query = cluster.searchQuery()
  .filter(MyDoc.status.eq(1))
  .source(false)
  .withInstanceMapper(async (ids: number[]): Map<number, EntityMapped> => {
    const entitiesFromDb = await dbConnection.select().whereIn('id', ids);
    // create entity id -> entity map
    const entitiesMap = new Map(entitiesFromDb.map((entity) => [entity.id, entity]));
    // suppose entity has fields id, name, status, createdAt
    return new Map(ids.map((id) => {
      const entity = entitiesMap.get(id);
      return [id, entity.toJSON()];
    }));
  });

const result = await query.getResult();

// instances is an ordered list of objects returned by instance mapper
const instances = await result.getInstances();

// or you can retreive instance from concrete hit
const hit = result.hits[0];
const instance = await hit.getInstance();
```