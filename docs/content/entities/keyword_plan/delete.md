---
title: Delete KeywordPlan 
order: 6
type: delete
entity: KeywordPlan 
---

### Delete a KeywordPlan 

The `customer.keywordPlans.delete(resource_name)` sets the `status` field of a KeywordPlan to `REMOVED`. Those entities and their metrics will continue to exist, but they will be read-only. Removed entities cannot be re-enabled.


#### Arguments

- ##### resource_name *required*
    The resource_name of that KeywordPlan


#### Returns

_Nothing_