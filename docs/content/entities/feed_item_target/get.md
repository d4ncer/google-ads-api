---
title: Get FeedItemTarget
order: 2
type: get
entity: FeedItemTarget
---

### Get FeedItemTarget

The `customer.feedItemTargets.get()` method returns all fields for one FeedItemTarget, as well as all other entities related to it. Note that this function is heavily rate-limited by Google, so avoid using it in production.

```javascript
// Getting the entity
let result = await customer.feedItemTargets.get('customers/1234567890/feedItemTargets/123123123')
```

```javascript

// Example result
(// Todo: add example get() return here)

```