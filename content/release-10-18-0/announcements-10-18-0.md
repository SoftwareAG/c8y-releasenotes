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

##### Breaking change in the Inventory API -- change of the default value for the `withChildren` parameter

As announced with [release 10.17](/release-10-17-0/announcements-10-17-0), as of a future release, the default value for the `withChildren` parameter of the `GET /inventory/managedObjects` endpoint will be changed from `true` to `false`.
As a consequence, if a request is supposed to return child assets, devices and additions, a parameter `?withChildren=true` has to be provided in the query.
This change is necessary to improve the Inventory API performance.

##### Breaking change in all REST APIs

As announced with [release 10.17](/release-10-17-0/announcements-10-17-0), as of release 10.19+,
the `totalPages` statistics value by default is no longer returned for REST API requests without search criteria.
A `withTotalPages=true` parameter has to be explicitly provided to the requests when `totalPages` is expected.

For example:
`GET /user/users?pageSize=1000` does not return `totalPages` statistics.
`GET /user/users?withTotalPages=true` does return `totalPages` statistics.

The change is enforced by performance reasons.

##### Change in the Application API (REST API and Java SDK)

In a future release, we will remove the `resourcesUrl` field from the Application API (both REST API and Java SDK). The `resourcesUrl` is a legacy field, and the functionality behind it was removed. 
This change will not affect any user in a negative way, nor break an existing functionality.

#### Implemented

##### Breaking change in the Alarms, Events, Measurements APIs - required parameters will be introduced

As announced earlier, most recently with [release 10.17](/release-10-17-0/announcements-10-17-0), at least one query parameter limiting the affected data will be required to prevent accidental deletion of too many objects during a bulk delete operation.
This change affects the following APIs:

* `DELETE /alarm/alarms` requires at least one of the following parameters: `source`, `dateFrom`, `dateTo`, `createdFrom`, `createdTo`
* `DELETE /event/events` requires at least one of the following parameters: `source`, `dateFrom`, `dateTo`, `createdFrom`, `createdTo`
* `DELETE /measurements/measurement` requires at least one of the following parameters: `source`, `dateFrom`, `dateTo`


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

##### Breaking change in all REST APIs

As announced with [release 10.17](/release-10-17-0/announcements-10-17-0), as of release 10.18+, wrong values for `pageSize` or `currentPage` result in a 422 (Unprocessable entity) HTTP status code instead of a 500 (Internal server error) HTTP status code.

### Security changes

#### Planned

##### User administrator can no longer set password for other users

As announced with [release 10.17](/release-10-17-0/announcements-10-17-0), to improve security, as of a future releases, user administrators will no longer be able to explicitly set passwords for other users in the tenant.
This change prevents that an attacker could have access to all users, in case the administrator account was compromised.
Note that the administrator will still have the option to force the user to reset the password on the next login or disable the user.

### Microservice infrastructure changes

#### Planned

##### Breaking change: Use of Linux cgroup v2
As of release 2024, microservices must use a Linux cgroup v2 aware application runtime. When executing microservices which are not compatible with cgroup v2 on Cumulocity IoT in version 2024 and higher it might happen that the information provided by the application runtime concerning available CPU and memory is not correct. This might lead to incorrect memory and thread allocation in the microservice container process. 

cgroup is a Linux kernel feature to organize processes hierarchically and distribute system resources along the hierarchy in a controlled and configurable manner. Every process in the system belongs to one and only one cgroup. In Cumulocity IoT cgroups are used to enforce container resource limits. 
Starting with Cumulocity IoT version 2024, it will be necessary for all microservices to be compatible with Linux cgroup v2. This updated version brings significant improvements and enhanced functionality for resource management and isolation, ensuring better performance and scalability of your applications. Linux cgroup v2 was released with kernel version 4.5 in March 2016.

When using the Cumulocity IoT Microservice SDK for developing microservices, ensure to configure a Java version which is cgroup v2 aware when building your microservice. When using Java 8, ensure to use openjdk8u372 or higher. When using Java 11, use Java 11.0.16 or higher, or use Java 15 or higher.
When using a server runtime other than OpenJDK Java as microservice application runtime, refer to the documentation of the provider. 

### SDK changes

#### Planned

##### Breaking change in the Web SDK - deprecation of HOOK_ prefixed injection tokens

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

##### The Web SDK extension HOOK_SEARCH will be refactored

The HOOK_SEARCH can be used by developers to extend the web integration of the search in a custom web application. As announced with [release 10.17](/release-10-17-0/announcements-10-17-0), as of a future release, we will refactor the HOOK_SEARCH interface. If you use this interface in a custom-developed UI application, you must migrate to the new version. Details on how to use the new interface will be provided in the Web SDK documentation of the respective release.

#### Implemented

##### Breaking change in the Map widget

As announced with [release 10.17](/release-10-17-0/announcements-10-17-0), with release 10.18+, the "Map" widget has been migrated and support for real-time updates on all devices has been replaced by a configurable refresh interval. This change allows us to display more then 100 devices on the map by default. Additionally, the "Map" widget no longer supports the "show track" option.


### Streaming Analytics

#### Planned

##### Deprecation of Machine Learning

As announced with [release 10.16](/release-10-16-0/announcements-10-16-0), the **Machine Learning** block in Analytics Builder is deprecated and will be removed in a future release.
This is in line with the deprecation of [Machine Learning Engine](/release-10-16-0/announcements-10-16-0/#machine-learning-deprecation) announced in release 10.16.

#### Implemented

##### New sample for calling another microservice

As announced with [release 10.16](/release-10-16-0/announcements-10-16-0), the EPL Apps sample "Call Zementis microservice" sample has been removed.
It has been replaced by a new "Call another microservice" sample which now uses the `/health` endpoint of an Apama-ctrl microservice.
See also [Connecting Apama to other microservices](https://cumulocity.com/guides/10.18.0/streaming-analytics/epl-apps/#microservices) in the *Streaming Analytics guide*.

##### Removal of required roles from the manifest

For security reasons, ROLE_APPLICATION_MANAGEMENT_ADMIN and ROLE_OPTION_MANAGEMENT_ADMIN have been
removed from the required roles which are defined in the manifest file of the Apama-ctrl microservice.
Any applications deployed with the Streaming Analytics application (for example, EPL apps) can no longer
perform security-sensitive operations such as application creation or modification of tenant options.

##### Updated events in com.apama.cumulocity

In Apama 10.15.3, the following events of the `com.apama.cumulocity` package have been updated to improve consistency in error handling:

- `FindAlarmResponseAck`
- `FindEventResponseAck`
- `FindManagedObjectResponseAck`
- `FindMeasurementResponseAck`
- `FindOperationResponseAck`
- `FindTenantOptionsResponse`

In all cases of a server acknowledgement, the response is now sent to the correct response channel.
The above events now have the following additional members:

- `boolean error` - Set to true if the find request received either an error content type or an error response HTTP return code.
- `integer status` - The HTTP return code.
- `string errorDetails` - Details of the error.

You should now use the updated events listed above instead of the `Error` event since it is sent to the same channel as the updated events.
For more details, see the [API Reference for EPL (ApamaDoc)](https://documentation.softwareag.com/pam/10.15.3/en/webhelp/related/ApamaDoc/index.html).

##### Documentation

As announced with [release 10.17](/release-10-17-0/announcements-10-17-0), the German version of the Analytics Builder documentation,
which is available as a separate webhelp until release 10.17, is no longer provided.
See also the information on the restructured *Streaming Analytics guide* in the [Streaming Analytics](/release-10-18-0/streaming-analytics-10-18-0/) release notes.
