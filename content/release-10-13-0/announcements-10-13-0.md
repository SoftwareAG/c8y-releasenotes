---
weight: 12
title: Important announcements
layout: bundle
---
### REST API changes

#### Planned

##### Removal of deprecated query parameter dateTill from TenantUsageStatisticsCollection

With the 10.15 release, we intend to remove the already deprecated request query parameter `dateTill` in TenantUsageStatisticsCollection. The reason for the deprecation as of release 10.6.0 (see the 10.6.0 documentation as reference ([https://cumulocity.com/guides/10.6.0/reference/tenants/#get-a-representation-of-a-tenantusagestatisticscollection](https://cumulocity.com/guides/10.6.0/reference/tenants/#get-a-representation-of-a-tenantusagestatisticscollection)) was consistency on the end of Cumulocity IoT. Since the parameter name `dateTo` is used everywhere across Cumulocity IoT and TenantUsageStatisticsCollection was the only place where `dateTill` was used, we decided to change it to `dateTo` and deprecate `dateTill` in 10.6.0.

How does this impact users? After its removal, this deprecated query parameter will no longer work and will no longer be supported. It can easily be replaced by the `dateTo` parameter which serves the same purpose.

Contact us if you have any questions on the removal of this deprecated query parameter.

##### Breaking change in the Inventory API - restrictions for a set of properties

For the Inventory API, as of the 10.14 GA release, a set of properties will be restricted for internal system usage and cannot be set by external users. This change is motivated by performance improvements.

In case of a request sent with these properties, they will be ignored by the platform and not set.

The mentioned internal fragments are: `_c8y_Internal`, `_hierarchyCalculated`, `_hierarchy:root` and every fragment which starts with `_parent:`.

For example, if a user sends a request in the following format:

```
{
	"name": "testDevice",
    "owner": "device_654321",
    "c8y_IsDevice": {},
    "_parent:3":{}
}
```

currently the whole payload is saved. In the future, the `"_parent:3"` fragment will be ignored and not saved.

### Security changes

#### Implemented

##### Change of basic browser-based authentication

**What was the previous state?**

With the 10.5.0 release a new token-based mechanism for browser-based authentication was introduced (OAuth Internal) in order to tighten the security of the Cumulocity IoT platform.

**What is new with release 10.13?**

As announced in [release 10.11](/release-10-11-0/announcements-10-11-0/), with the 10.13 release, the OAI-Secure authentication (successor of OAuth Internal) will be enabled by default for all new created tenants as the authentication method for all browser-based applications.

Basic authentication will still be available as a fallback but must be manually switched on. For details, see [Administration > Changing settings](https://cumulocity.com/guides/10.13.0/users-guide/administration/#changing-settings) in the *User guide*. Note, that basic authentication for devices is not affected by this change.

**What comes next?**

With a future release, the fallback for basic authentication will be removed for browser-based applications and all applications will be forced to use the token-based authentication mechanism OAI-Secure.

**What does this mean for my organization?**

 All custom web applications and microservices which do not support OAI-Secure will not work with newly created tenants.

**What do I need to do?**

In case you have developed your own web applications or microservices, please make sure that they support the OAI-Secure authentication mechanism. This is achieved by changing the authentication mechanism using the appropriate SDK later than 10.5 to rebuild your web applications or microservices.

### SDK changes

#### Planned

##### Deprecation of addHook and clearHooks methods

The methods <code>addHook</code> and <code>clearHooks</code> are deprecated. The method <code>addHook</code> provided the functionality to invoke a custom method populating the managedObject whenever a managedObject with matching owner ('device_${id}') was created. The method <code>clearHooks</code> would flush the registered hooks and therefore no custom method would get invoked. In device management, the hook(s) would run when a newDeviceRequest got accepted.

If you want to recreate the logic you may use the RealtimeService<T> from @c8y/ngx-components to subscribe to /managedObject/* or use the [ManagedObjectRealtimeService](http://resources.cumulocity.com/documentation/websdk/ngx-components/injectables/ManagedObjectRealtimeService.html) which already extends the RealtimeService.

See also the related entry in the [Tech Community](https://tech.forums.softwareag.com/t/deprecation-of-addhook-and-clearhooks/254548).

##### Removing PlatformImpl Spring bean from Microservice SDK

With the upcoming releases 10.15+ we intend to close a design gap, which currently exists in Cumulocity IoT and allows to wrongly use Cumulocity IoT APIs (by mixing Spring injection with raw Java).

In the future, PlatformImpl will no longer be exposed as a Spring Bean and it will not be feasible to inject it.

Instead of creating new instances using PlatformImpl, you should always inject Cumulocity IoT API beans, such as InventoryApi, AlarmApi, IndentityApi, for example:

```
@Autowired //injection
private InventoryApi inventoryApi;
```

Contact us if you have any questions on this change.

##### Deprecation of the variable HOOK_ROUTE_ONCE

In the context of the new Web SDK plugin concept, the variable HOOK_ROUTE_ONCE has been replaced by HOOK_ROUTE. HOOK_ROUTE_ONCE is deprecated and will be removed with release 10.14.

This change will only affect you if you or your development team use the Web SDK to extend Cumulocity IoT UI applications or to build your own web applications. If you update an application including HOOK_ROUTE_ONCE, make sure to use HOOK_ROUTE instead.

#### Implemented

##### Leaflet library has been updated to the latest version

To improve the navigation in the "Map" widget on mobile devices, it is necessary to update the Leaflet library. As announced with [release 10.11](/release-10-11-0/announcements-10-11-0/), the Leaflet library has been updated to the latest version 1.7.1.

This change only affects you if you or your development team use the Web SDK to extend Cumulocity IoT UI applications or to build your own web applications. If you have implemented your own custom map on top of the Cumulocity IoT Web SDK, make sure that your implementation still works properly. In case of any issues, see the [Leaflet changelog](https://github.com/Leaflet/Leaflet/blob/master/CHANGELOG.md) and check if you use any deprecated functionality.

##### Upgrade to Angular 12

As announced with [release 10.11](/release-10-11-0/announcements-10-11-0/), Angular has been updated from version 11 to version 12. Moreover, the default renderer has been changed to Ivy.

This change will only affect you, if you or your development team use the Web SDK to extend Cumulocity IoT UI applications or to build your own web applications.

For instructions on the upgrade process refer to [Upgrade > Updating the Web SDK](https://cumulocity.com/guides/10.13.0/web/upgrade/#update-to-an-newer-version) in the *Web SDK guide*.

Additionally, you can use the following resources for more details on the changes in Ivy and Angular 12:

- https://v12.angular.io/guide/ivy
- https://v12.angular.io/guide/updating-to-version-12

### Other

#### Implemented

##### Removal of cep microservice

Software AG terminated support for using CEL (Esper) in Cumulocity IoT on 31 Dec 2020 following its deprecation in 2018.

As announced with [release 10.11](/release-10-11-0/announcements-10-11-0/), the "cep" microservice has been removed from the list of default microservices for new installations.

With this change, all new Cumulocity IoT subscriptions use the Apama CEP engine. Existing installations are not affected. If you plan a new installation, please check out the *system.property* file for details.

##### Added limit indicator to export files

With GA release 10.13, an indicator row has been added at the end of the export files for alarms, events and measurements when a data limit of 1 million records is exceeded. Previously, when the export files limit was reached, the result was truncated without further notice.

Sample CSV export with indicator:

Time,Device name,Creation time,Device name,ID,Source,Text,Time,Type
<br>2021-11-25T10:37:06.485Z,Position #1,2021-11-25T10:37:06.485Z,Position #1,1266,1195,Location updated,2021-11-25T10:37:06.485Z,c8y_LocationUpdate
<br>2021-11-25T10:37:01.484Z,Position #1,2021-11-25T10:37:01.484Z,Position #1,1265,1195,Location updated,2021-11-25T10:37:01.484Z,c8y_LocationUpdate
<br>[...]
<br>limit exceeded!,result truncated!,limit exceeded!,result truncated!,limit exceeded!,result truncated!,limit exceeded!,result truncated!,limit exceeded!

Automated parsers of export files must be adjusted to handle the indicator row.

### Machine learning

#### Planned

The API to download the serialized source of a PMML model `{{url}}/service/zementis/model/{{model_name}}/serialized` will be a NO_OP starting with 10.13.0 release and will be removed in 10.15.0 release.

#### Implemented

With GA release 10.13.0, Cumulocity IoT Machine Learning Workbench introduces "Role Based Access Control" which is a breaking change for its existing users. Refer to the "Role Based Access Control" section in the [Machine Learning release notes](/release-10-13-0/machine-learning-10-13-0/#10_13_0) to learn more about this change.

### Streaming Analytics

#### Implemented

##### Cumulocity IoT transport in Apama

The following applies as of Apama 10.11.1:

- The `GeoFenceContainer.createGeoFenceContainer()` action no longer throws an exception when provided with any `lat` or `lng` values that cannot be parsed as a float.
  Instead, an empty `optional<GeoFencePoint>` is now created for that coordinate.
  See the `com.apama.cumulocity` package in the [API Reference for EPL (ApamaDoc)](https://documentation.softwareag.com/apama/v10-11/apama10-11/ApamaDoc/index.html)
  for more information on the `GeoFenceContainer` event.

- Warning messages are now logged for Cumulocity IoT queries where `pageSize` is below 50 and `currentPage` is not set (default).
  This is because setting a small `pageSize` without setting `currentPage` can result in queries that run very slowly.
  For example, to request the first 20 items, you must set `pageSize` to 20 and `currentPage` to 1.
  See also [Paging Cumulocity IoT queries](https://documentation.softwareag.com/apama/v10-11/apama10-11/apama-webhelp/index.html#page/apama-webhelp%2Fco-ConApaAppToExtCom_cumulocity_paging_cumulocity_queries.html) in the Apama documentation.

### Machine Learning Workbench

#### Implemented

- Currently, both "Machine Learning Manager" & "Machine Learning Admin" user groups can execute Python scripts, run Python commands using Jupyter notebook, train workflows, and train neural network models.
To further enhance the security, the above functionalities will be limited to the "Machine Learning Admin" user group only.

- The "Machine Learning Admin" user group should be treated as a privileged user group.

- This access limitation will be a breaking change for the existing "Machine Learning Manager" user group.

- The "Machine Learning Manager" user group has been restricted from accessing the following post APIs:

In training workflows:
    ```
    {{url}}/service/mlw/projects/{{projectID}}/resources/{{resourcesID}}/workflow
    ```
In code execution:
    ```
    {{url}}/service/mlw/projects/{{projectID}}/resources/{{resourcesID}}/execute
    ```
    ##### In NeuralNetwork:
    ```
    {{url}}/service/mlw/projects/{{projectID}}/resources/{{resourcesID}}/trainNN
    ```
    
- Below apis are only accessible to  "Machine Learning Admin" user group:

GET - jnb-sessions:
    ```
    {{url}}/service/mlw/jnb-sessions
    ```
GET - jnb-content:
    ```
    {{url}}/service/mlw/projects/{{projectID}}/resources/{{resourceID}}/jnb-content
    ```
PUT - jnb-content:
    ```
    {{url}}/service/mlw/projects/{{projectID}}/resources/{{resourceID}}/jnb-content
    ```

- The "Machine Learning Manager" user group has been restricted from executing Jupyter notebooks and accessing the assets section.

- "Machine Learning User" user group has been restricted from accessing assets section.