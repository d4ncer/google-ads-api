---
order: 1
type: object
entity: AdGroupCriterion
title: AdGroupCriterion
---

## AdGroupCriterion

### The AdGroupCriterion object

This section describes the AdGroupCriterion entity.

```javascript
// Example AdGroupCriterion
const ad_group_criterion = {
  resource_name: 'customers/9262111890/adGroupCriteria/56328868446~1165620981',
  ad_group: 'customers/9262111890/adGroups/56328868446',
  approval_status: 5,
  criterion_id: 1165620981,
  effective_cpc_bid_micros: 1000000,
  effective_cpc_bid_source: 6,
  effective_cpm_bid_micros: 10000,
  effective_cpm_bid_source: 6,
  final_mobile_urls: [],
  final_urls: [],
  keyword: { match_type: 2, text: 'test api' },
  negative: false,
  status: 2,
  system_serving_status: 2,
  type: 2,
  url_custom_parameters: [],
}
```