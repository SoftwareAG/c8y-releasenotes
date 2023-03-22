---
weight: 12
title: Important announcements
layout: bundle
---

### REST API changes

#### Planned

##### Breaking change in the Inventory API -- change of the return code for delete of managed object

As announced with [release 10.17](/release-10-17-0/announcements-10-17-0), as of release 10.19+, when delete of managed object and its dependencies doesn't finish right away, the platform will return 202 (Accepted) http status code instead of 204 (No content).
A return code will be still 204 if the control can be returned immediately.
The change is required to make API consistent with HTTP protocol semantics (asynchronous request).

#### Implemented


### Security changes

#### Planned

#### Implemented


### SDK changes

#### Planned

#### Implemented


### Streaming Analytics

#### Implemented
