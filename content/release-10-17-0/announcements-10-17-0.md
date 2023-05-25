---
weight: 12
title: Important announcements
layout: bundle
---

### REST API changes

#### Planned

##### Breaking change in the Alarms, Events, Measurements APIs - required parameters will be introduced

As announced with [release 10.16](/release-10-16-0/announcements-10-16-0), in a future release, at least one query parameter limiting the affected data will be required to prevent accidental deletion of too many objects during a bulk delete operation.
This change affects the following APIs:

* `DELETE /alarm/alarms` requires at least one of the following parameters: `source`, `dateFrom`, `dateTo`, `createdFrom`, `createdTo`
* `DELETE /event/events` requires at least one of the following parameters: `source`, `dateFrom`, `dateTo`, `createdFrom`, `createdTo`
* `DELETE /measurements/measurement` requires at least one of the following parameters: `source`, `dateFrom`, `dateTo`


##### Breaking change in the Inventory API - restrictions for a set of properties

As announced with [release 10.16](/release-10-16-0/announcements-10-16-0), as of release 10.18+, a set of properties in the Inventory API will be restricted to internal system usage and cannot be set by external users. This change is motivated by planned features and future use cases.

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

currently the whole payload is saved. In the future, the `c8y_LatestMeasurements` fragment will be ignored and not saved.

##### Breaking change in the Inventory API -- change of the default value for the `withChildren` parameter

As of release 10.20+, the default value for the `withChildren` parameter of the `GET /inventory/managedObjects` endpoint will be changed from `true` to `false`.
As a consequence, if a request is supposed to return child assets, devices and additions, a parameter `?withChildren=true` has to be provided in the query.
This change is necessary to improve the Inventory API performance.

##### Breaking change in the Inventory API -- change of the return code for the deletion of managed objects

As of release 10.19+, if the deletion of a managed object and its dependencies doesn´t finish immediately, the platform will return a 202 (Accepted) HTTP status code instead of 204 (No content).
The return code will still be 204 if the control can be returned immediately.
This change is required to make the API consistent with the HTTP protocol semantics (asynchronous request).

##### Breaking change in all REST APIs

As of release 10.18+, wrong values for `pageSize` or `currentPage` result in a 422 (Unprocessable entity) HTTP status code instead of a 500 (Internal server error) HTTP status code.

As of release 10.19+, the `totalPages` statistics value by default is no longer returned for REST API requests without search criteria.
A `withTotalPages=true` parameter has to be explicitly provided to the requests when `totalPages` is expected.

For example:
`GET /user/users?pageSize=1000` does not return `totalPages` statistics.
`GET /user/users?withTotalPages=true` does return `totalPages` statistics.

The change is enforced by performance reasons.

##### Announcing API changes in application API (REST API and Java SDK)

In a future release, we will remove the “resourcesUrl” field from the application API (both REST API and java sdk). The “resourcesUrl” is a legacy field, and the functionality behind it was removed. 
This change should not affect any user in a negative way, nor break an existing functionality.

#### Implemented

##### Breaking change in SmartREST 2.0 - DATE field used as custom property will be stored as string

As announced with [release 10.16](/release-10-16-0/announcements-10-16-0), as of release 10.17+, a SmartREST 2.0 DATE field used as a custom property will be stored as a string in the Cumulocity IoT database.
This affects the REST response format.

Example of previous response format (note `aCustomDateField` field):

```json
{
   "source":{
      "id":"91123"
   },
   "type":"TYPE-911",
   "aCustomDateField":{
      "date":{
         "date":14,
         "seconds":15,
         "hours":12,
         "month":10,
         "year":122,
         "timezoneOffset":-60,
         "minutes":41,
         "time":1668426075840,
         "day":1
      },
      "offset":120
   },
   "c8y_TemperatureMeasurement":{
      "T":{
         "unit":"C",
         "value":10
      }
   }
}
```

New format:

```json
{
   "source":{
      "id":"91123"
   },
   "type":"TYPE-911",
   "aCustomDateField":"2022-11-14T12:44:11.481+01:00",
   "c8y_TemperatureMeasurement":{
      "T":{
         "unit":"C",
         "value":10
      }
   }
}
```
The change has been introduced to improve the consistency between different Cumulocity IoT protocols.

### Security changes

#### Planned

##### User administrator can no longer set password for other users

To improve security, from release 10.20, user administrators will no longer be able to explicitly set passwords for other users in the tenant.
This change prevents that an attacker could have access to all users, in case the administrator account was compromised.
Note that the administrator will still have the option to force the user to reset the password on the next login or disable the user.

##### Deprecation of SMS TFA feature

Unlike the former announcement with [release 10.16](/release-10-16-0/announcements-10-16-0), the SMS TFA (Two-Factor Authentication) feature will not be removed, and we will continue to support SMS TFA.


#### Implemented

##### Support for new OAuth2 access token type in single sign-on authentication

Cumulocity IoT supports new standard OAuth2 access tokens with the "at+jwt" type header parameter. For more information on this parameter, see [OAuth2 Access Tokens](https://datatracker.ietf.org/doc/html/rfc9068#name-header).
Single-sign-on users managed by new authorization servers (that is, generating OAuth2 access tokens with type "at+jwt") can thus login successfully into Cumulocity IoT.
To process this new token type, Cumulocity IoT uses the [Nimbus JOSE + JWT](https://connect2id.com/products/nimbus-jose-jwt).

### SDK changes

#### Planned

##### The Web SDK extension HOOK_SEARCH will be refactored

The HOOK_SEARCH can be used by developers to extend the web integration of the search in a custom web application. As announced with [release 10.16](/release-10-16-0/announcements-10-16-0), as of release 10.18, we will refactor the HOOK_SEARCH interface. If you use this interface in a custom-developed UI application, you must migrate to the new version. Details on how to use the new interface will be provided in the Web SDK documentation of the respective release.

##### Breaking change in the Map widget

As announced with [release 10.16](/release-10-16-0/announcements-10-16-0), with release 10.18+, the "Map" widget will be migrated and support for real-time updates on all devices will be replaced by a configurable refresh interval. This change allows us to display more then 100 devices on the map by default. Additionally, the "Map" widget will no longer support the "show track" option.

#### Implemented

##### Breaking change in microservice security configuration

A Spring Boot library was upgraded to 2.7.6, hence upgrading Microservice SDK to 10.17+ may require some additional development.

As announced with [release 10.16](/release-10-16-0/announcements-10-16-0), following the deprecation of `WebSecurityConfigurerAdapter` by Spring Security, the Microservice SDK now uses a direct declaration of the `SecurityFilterChain` bean in its internal configuration instead. At the same time, Spring Security
only allows one of these configuration approaches in a single application. This means that if the old,
adapter-based method has been used in your code before, you will have to migrate to the new, direct filters
declaration for applications to start. Refer to the [Spring Security documentation](https://docs.spring.io/spring-security/reference/5.8/migration/servlet/config.html#_stop_using_websecurityconfigureradapter) for more details.

##### New default branding

As announced with [release 10.15](/release-10-15-0/announcements-10-15-0) and [release 10.16](/release-10-16-0/announcements-10-16-0), as of release 10.17, the default branding for all Cumulocity IoT default applications has been updated. Branded applications will not be affected, however, as the new navigator changes from a dark color to a light color, the default navigator font color might not work with your current branding settings. You might end up with a dark font color on a dark background, which might not be readable or accessible by your users. You can review this by opening the branding editor in the Administration application and check what font color you are using in the current version.

### Streaming Analytics

#### Planned

##### Deprecation of Machine Learning

As announced with [release 10.16](/release-10-16-0/announcements-10-16-0), the **Machine Learning** block in Analytics Builder is deprecated and will be removed in a future release.
In addition, the EPL Apps sample "Call another microservice" which uses the Zementis microservice, has been renamed to "Call Zementis microservice".
This sample is now deprecated and will also be removed in a future release.
This is in line with the deprecation of [Machine Learning Engine](/release-10-16-0/announcements-10-16-0/#machine-learning-deprecation) announced in release 10.16.

##### Documentation

In a future release, we are going to integrate the Analytics Builder documentation into the Cumulocity IoT documentation.
Analytics Builder developers will then be able to search and reference the Analytics Builder documentation within the Cumulocity IoT documentation.
This makes it easier for new users to get started and for advanced users to use a single documentation interface.
The Analytics Builder documentation will then no longer be available as a separate webhelp.
The German version of the Analytics Builder documentation, which is also available as a separate webhelp until release 10.17, is deprecated.
We will focus on our high-quality, up-to-date English user documentation.

#### Implemented

##### Analytics Builder - Change of type for Clear Alarm input port

In the [Alarm Output](https://documentation.softwareag.com/pab/10.17.0/en/webhelp/pab-webhelp/index.html#page/pab-webhelp%2Fre_AnaBui_block_reference_Output_CreateAlarm.html) block,
the type of the **Clear Alarm** input port has changed from `boolean` to `pulse`.
Thus any existing model which has a Boolean input to the port will now only trigger a clear alarm on the transition
from `false` to `true`, instead of the entire time that the input remains `true`.
If you wish to retain the old behavior, connect a
[Pulse](https://documentation.softwareag.com/pab/10.17.0/en/webhelp/pab-webhelp/index.html#page/pab-webhelp%2Fre_AnaBui_block_reference_Flow_Manipulation_Pulse.html)
block to the **Clear Alarm** input port to send a sequence of pulse signals into the **Alarm Output** block.
However, it is unlikely that a model should be attempting to clear the same alarm multiple times,
and the previous behavior had the effect of sending numerous unnecessary HTTP requests, potentially causing a drop in performance.
For more information on the `pulse` type and how inputs are converted, see
[The pulse type](https://documentation.softwareag.com/pab/10.17.0/en/webhelp/pab-webhelp/index.html#page/pab-webhelp%2Fco-AnaBui_pulse_type.html) and
[Type conversions](https://documentation.softwareag.com/pab/10.17.0/en/webhelp/pab-webhelp/index.html#page/pab-webhelp%2Fco-AnaBui_type_conversions.html),
both in the Analytics Builder documentation.

##### Changes to microservice health endpoint

For reasons of security and performance, the REST endpoint `/service/cep/health` no longer returns a comprehensive list of status values. All of the same information is still available from REST endpoints under `/service/cep/diagnostics/...`.

##### Removal of application_queue_full alarm type

The `application_queue_full` alarm type has been removed. It has been replaced by three new types of
performance alarms which give a better explanation of why the input and output queues are filling up.
For more details, see the Streaming Analytics release notes for
[release 10.17.0](/release-10-17-0/streaming-analytics-10-17-0).

##### Removal of version 1 API of Analytics Builder Block SDK

The deprecated version 1 API of the Analytics Builder Block SDK for writing input and output blocks has been removed.
See also the announcement in the Streaming Analytics release notes for
[release 10.7.0](/release-10-7-0/streaming-analytics-10-7-0/#10_7_0).
Existing blocks that use the version 1 API must be migrated to use the version 2 API.
See [Migrating input and output blocks to the version 2 API](https://github.com/SoftwareAG/apama-analytics-builder-block-sdk/blob/rel/10.17.0.x/doc/150-MigrateInputOutputBlocks.md)
in the Analytics Builder Block SDK documentation on GitHub for more details.

##### Cumulocity IoT transport in Apama

The following applies as of Apama 10.15.2:

User status metrics with names containing labels in the form `{keyA=valueA,keyB=valueB}` are now converted
to Prometheus metrics with those labels in the Prometheus labels.
The HTTP server transport now uses this syntax for chains that it creates dynamically.
For example, if you have `somename{key=value}` as part of the user status name,
this is now converted to a Prometheus label on the metric `somename`.
Previously, a user status with a name like this did not appear in Prometheus at all.

As a result, the HTTP server transport, which used to prefix all metrics on its chains for example
with `httpServer_instance_5_`, now prefixes them with `httpServer{chain=5}` instead.
This means, that the resulting metrics now look like this:

`sag_apama_correlator_user_httpServer_metricname{chain=5}`

instead of

`sag_apama_correlator_user_httpServer_instance_5_metricname`

### Cumulocity IoT DataHub

#### Planned

##### Breaking change in the offloading mechanism - deprecation of support for mixed types

In a future release of Cumulocity IoT DataHub a newer version of Dremio will be adopted that removes support for mixed data types. The offloading process will be adapted so that mixed types will be automatically resolved during offloading. Cumulocity IoT DataHub will not be able to read data lake tables containing mixed data types, so corresponding data needs to be converted.

##### Breaking change in the offloading mechanism - switch to new table format may introduce incompatibilities

In future releases of Cumulocity IoT DataHub the offloading mechanism may leverage the Apache Iceberg table format, which is an open format supported by Dremio. Due to this change, current offloading configurations may fail. For example, they may fail due to rarely used data types which are incompatible with the Apache Iceberg format. Further details and remediation actions will be provided closer to the respective release.

##### Breaking change in the offloading mechanism - removal of history column in alarms collection

In a future release of Cumulocity IoT core the history attribute will be removed from the alarms. Therefore, Cumulocity IoT DataHub does no longer include this column in newly defined offloadings. If alarms data has been already offloaded into the data lake, the Dremio table associated with that data lake table still includes the history column, but for new offloading runs the value will not be included anymore and thus will be null.

### Cumulocity IoT Machine Learning

#### Planned

<a name="machine-learning-deprecation"></a>
##### Deprecation of Machine Learning Engine and Machine Learning Workbench

As of Cumulocity IoT 10.16, Machine Learning Engine and Machine Learning Workbench are deprecated, and we will end further development of these components. After Cumulocity IoT 10.17, both will be removed from the platform. If you have existing (production) projects which rely on MLE and/or MLW applications, then Software AG is committed to work together with you to find an appropriate transition path. If we have not yet been in contact for this matter, feel free to contact us at [c8y_mlw_mle_sunsetting@softwareag.com](mailto:c8y_mlw_mle_sunsetting@softwareag.com).

For details, see the announcement in the release notes for [release 10.16](/release-10-16-0/announcements-10-16-0).

### Digital Twin Manager

#### Implemented

##### Deprecation of former asset navigation

The former asset navigation using left navigation, which allowed users to navigate to different assets and move them to another asset hierarchy, is deprecated. With release 10.17, we introduce an improved way of viewing the hierarchical representation of an asset with our new asset tree feature which allows users to easily view the hierarchical representation of an asset and navigate to different hierarchies.
