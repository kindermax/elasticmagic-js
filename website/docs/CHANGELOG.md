---
id: changelog
title: Changelog
---
## 0.0.6

* Added `withIndex` method to `SearchQuery` - allows to specify index for onlt one query. In the contrast `withIndex` method on `Cluster` will override index for all search queries.
* Deleted `body` and `prettyBody` getters from `SearchQuery` - this is done in order to allow passing compiler version as an argument when multiple elasticsearch versions support will be implemented.
* Added `toPrettyJSON` method to `SearchQuery` - was known as `pretyBody` getter. The reason is same as above.

## 0.0.5
Added instance mapper support

It's possible now to pass a function which map ids from elasticsearch to structure definded by instance mapper function.

When specifying `source(false)`, elasticsearch returns only _id of found document in `hit._source` field.

See an example in [docs](instance_mapper.md)
