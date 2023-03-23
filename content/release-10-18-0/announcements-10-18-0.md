---
weight: 12
title: Important announcements
layout: bundle
---

### REST API changes

#### Planned

##### Breaking change in the Inventory API -- change of the return code for the deletion of managed objects

As announced with [release 10.17](/release-10-17-0/announcements-10-17-0), as of release 10.19+, if the deletion of a managed object and its dependencies doesn´t finish immediately, the platform will return a 202 (Accepted) HTTP status code instead of 204 (No content).
The return code will still be 204 if the control can be returned immediately.
This change is required to make the API consistent with the HTTP protocol semantics (asynchronous request).

#### Implemented


### Security changes

#### Planned

#### Implemented


### SDK changes

#### Planned

#### Implemented


### Streaming Analytics

#### Implemented
