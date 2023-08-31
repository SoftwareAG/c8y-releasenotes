---
weight: 12
title: Important announcements
layout: bundle
---

### Transition to continuous updates

For all public cloud instances, we are moving from quarterly releases towards a continuous deployment of software updates. The 10.18 release will be the last release deployed using our current release model. After the 10.18 release, the different components of our platform will be updated on a continuous basis.

Continuous updates will provide you with a steady stream of enhancements, bug fixes, and exciting new functionalities as they become available. This change allows us to respond swiftly to your feedback and ensure you always have the most up-to-date version of our product.

If you own a dedicated Cumulocity IoT instance, we will collaborate with you on an individual basis to plan the transition to either continuous deployment or the alternative yearly release model.

We appreciate your support as we embark on this transition. Your feedback and suggestions are invaluable as we shape the future of our product. You will find more details about the planned changes in the 10.18 release announcement.

Find more details in the document [Continuous Deployment for Cumulocity IoT](/files/202307-CumulocityIoT-CD-Customer-Communication-v1.2.pdf).


### Changes in build components

Cumulocity IoT releases consist of various components such as Core (backend) and UI (frontend). In earlier releases these components were released as one build component at the same time with the same [maintenance release version](/about/release-types). This has changed in release 10.17.

Starting from release 10.17, Core, UI, and several other components such as Messaging Service are released as separate build components with independent maintenance release versions, that is, fix release versions might be different for each component. Consequently, the release notes entries now show the build component (Core, UI, Messaging Service) in conjunction with the component's build version.


### REST API changes

#### Planned

##### Breaking change in the Alarms, Events, Measurements APIs - required parameters will be introduced

As announced with [release 10.16](/release-10-16-0/announcements-10-16-0), in a future version, at least one query parameter limiting the affected data will be required to prevent accidental deletion of too many objects during a bulk delete operation.
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

In a future version, the default value for the `withChildren` parameter of the `GET /inventory/managedObjects` endpoint will be changed from `true` to `false`.
As a consequence, if a request is supposed to return child assets, devices and additions, a parameter `?withChildren=true` has to be provided in the query. This change is necessary to improve the Inventory API performance.


##### Breaking change in the Inventory API -- change of the return code for the deletion of managed objects

In a future version, if the deletion of a managed object and its dependencies doesn´t finish immediately, the platform will return a 202 (Accepted) HTTP status code instead of 204 (No content). The return code will still be 204 if the control can be returned immediately. This change is required to make the API consistent with the HTTP protocol semantics (asynchronous request).

##### Breaking change in all REST APIs

As of release 10.18+, wrong values for `pageSize` or `currentPage` result in a 422 (Unprocessable entity) HTTP status code instead of a 500 (Internal server error) HTTP status code.

In a future version, the `totalPages` statistics value by default is no longer returned for REST API requests without search criteria.
A `withTotalPages=true` parameter has to be explicitly provided to the requests when `totalPages` is expected.

For example:
`GET /user/users?pageSize=1000` does not return `totalPages` statistics.
`GET /user/users?withTotalPages=true` does return `totalPages` statistics.

The change is enforced by performance reasons.

##### Change in the Application API (REST API and Java SDK)

In a future version, we will remove the `resourcesUrl` field from the Application API (both REST API and Java SDK). The `resourcesUrl` is a legacy field, and the functionality behind it was removed.

This change will not affect any user in a negative way, nor break an existing functionality.

#### Implemented

##### Breaking change in SmartREST 2.0 - DATE field used as custom property will be stored as string

As announced with [release 10.16](/release-10-16-0/announcements-10-16-0), as of release 10.17+, a SmartREST 2.0 DATE field used as a custom property will be stored as a string in the Cumulocity IoT database.
This affects the REST response format.

Example of previous response format (note `aCustomDateField` field):

```json
{
  "source": {
    "id": "91123"
  },
  "type": "TYPE-911",
  "aCustomDateField": {
    "date": {
      "date": 14,
      "seconds": 15,
      "hours": 12,
      "month": 10,
      "year": 122,
      "timezoneOffset": -60,
      "minutes": 41,
      "time": 1668426075840,
      "day": 1
    },
    "offset": 120
  },
  "c8y_TemperatureMeasurement": {
    "T": {
      "unit": "C",
      "value": 10
    }
  }
}
```

New format:

```json
{
  "source": {
    "id": "91123"
  },
  "type": "TYPE-911",
  "aCustomDateField": "2022-11-14T12:44:11.481+01:00",
  "c8y_TemperatureMeasurement": {
    "T": {
      "unit": "C",
      "value": 10
    }
  }
}
```

The change has been introduced to improve the consistency between different Cumulocity IoT protocols.

### Security changes

#### Planned

##### User administrator can no longer set password for other users

To improve security, from a future version, user administrators will no longer be able to explicitly set passwords for other users in the tenant.
This change prevents that an attacker could have access to all users, in case the administrator account was compromised.
Note that the administrator will still have the option to force the user to reset the password on the next login or disable the user.

##### Deprecation of SMS TFA feature

Unlike the former announcement with [release 10.16](/release-10-16-0/announcements-10-16-0), the SMS TFA (Two-Factor Authentication) feature will not be removed, and we will continue to support SMS TFA.

#### Implemented

##### Support for new OAuth2 access token type in single sign-on authentication

Cumulocity IoT supports new standard OAuth2 access tokens with the "at+jwt" type header parameter. For more information on this parameter, see [OAuth2 Access Tokens](https://datatracker.ietf.org/doc/html/rfc9068#name-header).
Single-sign-on users managed by new authorization servers (that is, generating OAuth2 access tokens with type "at+jwt") can thus login successfully into Cumulocity IoT.
To process this new token type, Cumulocity IoT uses the [Nimbus JOSE + JWT](https://connect2id.com/products/nimbus-jose-jwt).

### Microservice infrastructure changes

#### Planned

##### Breaking change: Use of Linux cgroup v2
In Cumulocity IoT versions higher than 10.18, microservices must use a Linux cgroup v2 aware application runtime. When executing microservices which are not compatible with cgroup v2 on Cumulocity IoT in these versions it might happen that the information provided by the application runtime concerning available CPU and memory is not correct. This might lead to incorrect memory and thread allocation in the microservice container process.

cgroup is a Linux kernel feature to organize processes hierarchically and distribute system resources along the hierarchy in a controlled and configurable manner. Every process in the system belongs to one and only one cgroup. In Cumulocity IoT cgroups are used to enforce container resource limits.

In versions higher than 10.18 it will be necessary for all microservices to be compatible with Linux cgroup v2. This updated version brings significant improvements and enhanced functionality for resource management and isolation, ensuring better performance and scalability of your applications. Linux cgroup v2 was released with kernel version 4.5 in March 2016.

When using the Cumulocity IoT Microservice SDK for developing microservices, ensure to configure a Java version which is cgroup v2 aware when building your microservice. When using Java 8, ensure to use openjdk8u372 or higher. When using Java 11, use Java 11.0.16 or higher, or use Java 15 or higher.
When using a server runtime other than OpenJDK Java as microservice application runtime, refer to the documentation of the provider.

### SDK changes

#### Planned

##### The Web SDK extension HOOK_SEARCH will be refactored

The HOOK_SEARCH can be used by developers to extend the web integration of the search in a custom web application. As announced with [release 10.16](/release-10-16-0/announcements-10-16-0), in a future version we will refactor the HOOK_SEARCH interface. If you use this interface in a custom-developed UI application, you must migrate to the new version. Details on how to use the new interface will be provided in the Web SDK documentation of the respective release.

##### Breaking change in the Map widget

As announced with [release 10.16](/release-10-16-0/announcements-10-16-0), with release 10.18+, the "Map" widget will be migrated and support for real-time updates on all devices will be replaced by a configurable refresh interval. This change allows us to display more then 100 devices on the map by default. Additionally, the "Map" widget will no longer support the "show track" option.

##### Deprecation of device-grid model classes, column implementations and services

Shared classes, components and services previously defined in @c8y/ngx-components/device-grid have been moved to @c8y/ngx-components. Therefore the obsolete items are deprecated.

This change only affects you, if you or your development team use the Web SDK to extend Cumulocity IoT UI applications or to build your own web applications. If you use the device-grid functionalities, check the deprecation documentation and alter your code accordingly. Refer to the deprecations in the [WebSDK resources documentation for the device-grid service](http://resources.cumulocity.com/documentation/websdk/ngx-components/injectables/DeviceGridService.html). Other deprecations for reference are also marked in this documentation.

#### Implemented

##### Breaking change in microservice security configuration

A Spring Boot library was upgraded to 2.7.6, hence upgrading Microservice SDK to 10.17+ may require some additional development.

As announced with [release 10.16](/release-10-16-0/announcements-10-16-0), following the deprecation of `WebSecurityConfigurerAdapter` by Spring Security, the Microservice SDK now uses a direct declaration of the `SecurityFilterChain` bean in its internal configuration instead. At the same time, Spring Security
only allows one of these configuration approaches in a single application. This means that if the old,
adapter-based method has been used in your code before, you will have to migrate to the new, direct filters
declaration for applications to start. Refer to the [Spring Security documentation](https://docs.spring.io/spring-security/reference/5.8/migration/servlet/config.html#_stop_using_websecurityconfigureradapter) for more details.

##### New default branding

As announced with [release 10.15](/release-10-15-0/announcements-10-15-0) and [release 10.16](/release-10-16-0/announcements-10-16-0), as of release 10.17, the default branding for all Cumulocity IoT default applications has been updated. Branded applications will not be affected, however, as the new navigator changes from a dark color to a light color, the default navigator font color might not work with your current branding settings. You might end up with a dark font color on a dark background, which might not be readable or accessible by your users. You can review this by opening the branding editor in the Administration application and check what font color you are using in the current version.

### Documentation

#### Planned

##### German User guide

The German version of the *User guide* (*Benutzerhandbuch*) is deprecated. In a future version we are going to remove the German *User guide* from the documentation website and focus on our high-quality, up-to-date English user documentation.

#### Implemented

##### Analytics Builder documentation

The English version of the Analytics Builder documentation has been integrated into the Cumulocity IoT documentation.
See also [Restructured Streaming Analytics guide](/release-10-17-0/streaming-analytics-10-17-0/).

The German version of the Analytics Builder documentation, which is available as a separate webhelp until release 10.16, is no longer provided. We will focus on our high-quality, up-to-date English user documentation.



### Streaming Analytics

{{< c8y-admon-important >}}
Cumulocity IoT release 10.17.0 already includes Streaming Analytics release 10.18.0.
{{< /c8y-admon-important >}}

#### Planned

##### Deprecation of Machine Learning

As announced with [release 10.16](/release-10-16-0/announcements-10-16-0), the **Machine Learning** block in Analytics Builder is deprecated and will be removed in a future version.
This is in line with the deprecation of [Machine Learning Engine](/release-10-16-0/announcements-10-16-0/#machine-learning-deprecation) announced in release 10.16.

#### Implemented

##### New sample for calling another microservice

As announced with [release 10.16](/release-10-16-0/announcements-10-16-0), the EPL Apps sample "Call Zementis microservice" sample has been removed.
It has been replaced by a new "Call another microservice" sample which now uses the `/health` endpoint of an Apama-ctrl microservice.
See also [Connecting Apama to other microservices](https://cumulocity.com/guides/10.17.0/streaming-analytics/epl-apps/#microservices) in the *Streaming Analytics guide*.

##### Breaking change in Analytics Builder - Acknowledged alarms

The [Alarm Output](https://cumulocity.com/guides/10.17.0/streaming-analytics/block-reference/#alarm-output) block
no longer reactivates "Acknowledged" alarms with every modification.
See also the fix release note for [10.16.0.4](/release-10-16-0/streaming-analytics-10-16-0/#10_16_0_4).

##### Analytics Builder - Change of type for Clear Alarm input port

In the [Alarm Output](https://cumulocity.com/guides/10.17.0/streaming-analytics/block-reference/#alarm-output) block,
the type of the **Clear Alarm** input port has changed from `boolean` to `pulse`.
Thus any existing model which has a Boolean input to the port will now only trigger a clear alarm on the transition
from `false` to `true`, instead of the entire time that the input remains `true`.
If you wish to retain the old behavior, connect a
[Pulse](https://cumulocity.com/guides/10.17.0/streaming-analytics/block-reference/#pulse)
block to the **Clear Alarm** input port to send a sequence of pulse signals into the **Alarm Output** block.
However, it is unlikely that a model should be attempting to clear the same alarm multiple times,
and the previous behavior had the effect of sending numerous unnecessary HTTP requests, potentially causing a drop in performance.
For more information on the `pulse` type and how inputs are converted, see
[The pulse type](https://cumulocity.com/guides/10.17.0/streaming-analytics/analytics-builder/#the-pulse-type) and
[Type conversions](https://cumulocity.com/guides/10.17.0/streaming-analytics/analytics-builder/#type-conversions),
both in the *Streaming Analytics guide*.

##### Changes to microservice health endpoint

For reasons of security and performance, the REST endpoint `/service/cep/health` no longer returns a comprehensive list of status values. All of the same information is still available from REST endpoints under `/service/cep/diagnostics/...`.

##### Removal of application_queue_full alarm type

The `application_queue_full` alarm type has been removed. It has been replaced by three new types of
performance alarms which give a better explanation of why the input and output queues are filling up.
For more details, see the Streaming Analytics release notes for
[release 10.18.0](/release-10-17-0/streaming-analytics-10-17-0).

##### Removal of required roles from the manifest

For security reasons, ROLE_APPLICATION_MANAGEMENT_ADMIN and ROLE_OPTION_MANAGEMENT_ADMIN have been
removed from the required roles which are defined in the manifest file of the Apama-ctrl microservice.
Any applications deployed with the Streaming Analytics application (for example, EPL apps) can no longer
perform security-sensitive operations such as application creation or modification of tenant options.

##### Removal of version 1 API of Analytics Builder Block SDK

The deprecated version 1 API of the Analytics Builder Block SDK for writing input and output blocks has been removed.
See also the announcement in the Streaming Analytics release notes for
[release 10.7.0](/release-10-7-0/streaming-analytics-10-7-0/#10_7_0).
Existing blocks that use the version 1 API must be migrated to use the version 2 API.
See [Migrating input and output blocks to the version 2 API](https://github.com/SoftwareAG/apama-analytics-builder-block-sdk/blob/rel/10.18.0.x/doc/150-MigrateInputOutputBlocks.md)
in the Analytics Builder Block SDK documentation on GitHub for more details.

##### Cumulocity IoT transport in Apama 10.15.2

In Apama 10.15.2, user status metrics with names containing labels in the form `{keyA=valueA,keyB=valueB}` are converted
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

##### Updated events in com.apama.cumulocity in Apama 10.15.3

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

### Cumulocity IoT DataHub

#### Planned

##### Breaking change in the offloading mechanism - deprecation of support for mixed types

In a future version of Cumulocity IoT DataHub a newer version of Dremio will be adopted that removes support for mixed data types. The offloading process will be adapted so that mixed types will be automatically resolved during offloading. Cumulocity IoT DataHub will not be able to read data lake tables containing mixed data types, so corresponding data needs to be converted.

##### Breaking change in the offloading mechanism - switch to new table format may introduce incompatibilities

In future versions of Cumulocity IoT DataHub the offloading mechanism may leverage the Apache Iceberg table format, which is an open format supported by Dremio. Due to this change, current offloading configurations may fail. For example, they may fail due to rarely used data types which are incompatible with the Apache Iceberg format. Further details and remediation actions will be provided closer to the respective release.

##### Breaking change in the offloading mechanism - removal of history column in alarms collection

In a future version of Cumulocity IoT core the history attribute will be removed from the alarms. Therefore, Cumulocity IoT DataHub does no longer include this column in newly defined offloadings. If alarms data has been already offloaded into the data lake, the Dremio table associated with that data lake table still includes the history column, but for new offloading runs the value will not be included anymore and thus will be null.

##### Deprecation of HDFS support

In a future version of Cumulocity IoT DataHub the use of HDFS as data lake will be removed. Instead of HDFS, one of the other supported data lakes must be used.

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
