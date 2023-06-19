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

##### Removal of deprecated device-grid model classes, column implementations and services

As announced earlier, most recently with [release 10.17](/release-10-17-0/announcements-10-17-0), shared classes, components and services from the @c8y/ngx-components/device-grid are deprecated. Those deprecated items are removed with this release.

This change only affects you, if you or your development team use the Web SDK to extend Cumulocity IoT UI applications or to build your own web applications. If you use the device-grid functionalities, check the deprecation documentation and alter your code accordingly. Refer to the deprecations in the [WebSDK resources documentation for the device-grid service](http://resources.cumulocity.com/documentation/websdk/ngx-components/injectables/DeviceGridService.html). Other deprecations for reference are also marked in this documentation.

### Streaming Analytics

#### Planned

#### Implemented
