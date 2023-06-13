---
weight: 12
title: Important announcements
layout: bundle
---

### REST API changes

#### Planned

#### Implemented

##### Breaking change in the Alarms, Events, Measurements APIs - required parameters will be introduced

As announced earlier, most recently with [release 10.17](/release-10-17-0/announcements-10-17-0), at least one query parameter limiting the affected data will be required to prevent accidental deletion of too many objects during a bulk delete operation.
This change affects the following APIs:

* `DELETE /alarm/alarms` requires at least one of the following parameters: `source`, `dateFrom`, `dateTo`, `createdFrom`, `createdTo`
* `DELETE /event/events` requires at least one of the following parameters: `source`, `dateFrom`, `dateTo`, `createdFrom`, `createdTo`
* `DELETE /measurements/measurement` requires at least one of the following parameters: `source`, `dateFrom`, `dateTo`


### SDK changes

#### Planned

#### Implemented


### Streaming Analytics

#### Planned

#### Implemented
