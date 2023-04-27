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

##### Breaking change in the Inventory API - restrictions for a set of properties

As announced with [release 10.17](/release-10-17-0/announcements-10-17-0), as of release 10.18+, a set of properties in the Inventory API is restricted to internal system usage and cannot be set by external users. This change is motivated by planned features and future use cases.

In case of a request sent with these properties, they will be ignored by the platform and not set.

This change applies to the following fragments: `c8y_LatestMeasurements`, `c8y_LatestEvents`, `c8y_LatestAlarms`, `c8y_LatestOperations`, `c8y_LastAlarm`, `c8y_LastEvent`, `c8y_LastOperation` .

For example, if a user sends a request in the following format:

```
{
    "name": "testDevice",
    "owner": "device_654321",
    "c8y_IsDevice": {},
    "c8y_LatestMeasurements":{
      "c8y_Temperature":{
         "T": :{
            "value" : 25.4,
            "unit" : "C"
         }
      }
    }
}
```
Since this release, the `c8y_LatestMeasurements` fragment will be ignored and not saved.

##### Breaking change in REST APIs

As announced with [release 10.17](/release-10-17-0/announcements-10-17-0), as of release 10.18+, wrong values for `pageSize` or `currentPage` result in a 422 (Unprocessable entity) HTTP status code instead of a 500 (Internal server error) HTTP status code.

### Security changes

#### Planned

#### Implemented


### SDK changes

#### Planned

##### Breaking change in the Web SDK -- deprecation of HOOK_ prefixed injection tokens

As of release 10.20+, the Web SDK will no longer expose the `HOOK_` prefixed injection tokens, like for example `HOOK_COMPONENTS`, `HOOK_ROUTE` or `HOOK_NAVIGATOR_NODES`, to users. In version 10.17 an alternative to these hooks has been introduced, which allows typed usage. This is a significant benefit for Web SDK users since they no longer have to guess the types and attributes offered by these hooks.

A migration is only required for users who used the Web SDK for customizing their user interface.

For example the `HOOK_ROUTE` would be migrated from:

```
providers: [
   {
      provide: HOOK_ROUTE,
      useValue: [{
         context: ViewContext.Device,
         path: 'hello',
         component: HelloComponent,
         label: 'hello',
         priority: 100,
         icon: 'rocket'
      }],
      multi: true
   }
]
```

to the new hook function:

```
providers: [
   hookRoute([
      {
         context: ViewContext.Device,
         path: 'hello',
         component: HelloComponent,
         label: 'hello',
         priority: 100,
         icon: 'rocket'
      }
   ]);
]
```

All of the impacted injection tokens have been marked as deprecated with 10.18, and references to their replacements are provided in the respective documentation and deprecation notice.

##### Breaking change in the Map widget

As announced with [release 10.17](/release-10-17-0/announcements-10-17-0), with release 10.18+, the "Map" widget has been migrated and support for real-time updates on all devices has been replaced by a configurable refresh interval. This change allows us to display more then 100 devices on the map by default. Additionally, the "Map" widget no longer supports the "show track" option.


#### Implemented


### Streaming Analytics

#### Implemented

##### Removal of required roles from the manifest

For security reasons, ROLE_APPLICATION_MANAGEMENT_ADMIN and ROLE_OPTION_MANAGEMENT_ADMIN have been
removed from the required roles which are defined in the manifest file of the Apama-ctrl microservice.
Any applications deployed with the Streaming Analytics application (for example, EPL apps) can no longer
perform security-sensitive operations such as application creation or modification of tenant options.
