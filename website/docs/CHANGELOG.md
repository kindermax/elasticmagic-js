---
id: changelog
title: Changelog
---

## 0.0.5
Added instance mapper support

It's possible now to pass a function which map ids from elasticsearch to structure definded by instance mapper function.

When specifying `source(false)`, elasticsearch returns only _id of found document in `hit._source` field.

See an example in [docs](instance_mapper.md)
