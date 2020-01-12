---
id: changelog
title: Changelog
---

## 0.0.5
Added instance mapper support

It's possible now to pass a function which map ids from elasticsearch to structure definded by instance mapper function.

When specifying `source(false)`, elasticsearch returns only _id of found document in `hit._source` field.

```javascript

const cluster = new Cluster(client, 'my_doc_index');

const query = cluster.searchQuery()
  .filter(MyDoc.status.eq(1))
  .source(false)
  .withInstanceMapper(async (ids: number[]): any => {
    const entitiesFromDb = await dbConnection.select().whereIn('id', ids);
    // create entity id -> entity map
    const entitiesMap = new Map(entitiesFromDb.map((entity) => [entity.id, entity]));
    // suppose entity has fields id, name, status, createdAt
    return ids.map((id) => {
      const entity = entitiesMap.get(id);
      return entity.toJSON();
    });
  })

const result = await query.getResult();

// instances is an ordered list of objects returned by instance mapper
const instances = await result.getInstances();

// You can pass { lazy: true } to withInstanceMapper function second paramenter
//  so elasicmagic will not call instance mapper. This allows you get instancess when you need them.
```
