---
weight: 12
title: Important announcements
layout: bundle
---

### REST API changes

#### Planned

##### Breaking change in the Application API - blocking the ability to change application key and contextPath

As of release 10.16+, it will no longer be possible to change the contextPath and the key of an application.
This is a breaking change and API requests trying to update the values of these application properties will fail.

The reason for this change is that changing the values of these properties would break previous application binaries.

#### Implemented

##### Breaking change in the Inventory API - restrictions for a set of properties

For the Inventory API, as of the 10.14 GA release, a set of properties has been restricted for internal system usage and cannot be set by external users. This change is motivated by performance improvements.

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

prior to this change the whole payload was saved. Now, the `"_parent:3"` fragment will be ignored and not saved.


### Security changes

#### Planned

##### Improved validation of administrator password

To improve the security of Cumulocity IoT, in a future release 10.15+ the administrator password when creating a new tenant will be validated according to the tenant policy selected. If no policy is selected, the password will be validated according to the options set in the parent tenant.


### SDK changes

#### Planned

##### Removal of support for Angular Schema Form

As of release 10.15 we will stop the support for [Angular Schema Form](http:/schemaform.io/) in the `filteringConfig` of device grid columns in favor of the more modern [Angular Formly](https://formly.dev/). After this change it will no longer be feasible to build an application until all device grid custom column definitions are migrated to use the new definitions.

In the future, we also plan to stop the support for Angular Schema Form in other parts of the application including AngularJS components. For more information on Angular Formly, see [their official documentation page](https://formly.dev/examples/introduction).


#### Implemented

##### Removing PlatformImpl Spring bean from Microservice SDK

With release 10.14 we closed a design gap, which previously existed in Cumulocity IoT and allowed to wrongly use Cumulocity IoT APIs (by mixing Spring injection with raw Java).

PlatformImpl will no longer be exposed as a Spring Bean and it will not be feasible to inject it.

Instead of creating new instances using PlatformImpl, you should always inject Cumulocity IoT API beans, such as InventoryApi, AlarmApi, IndentityApi, for example:

```
@Autowired //injection
private InventoryApi inventoryApi;
```

### Streaming Analytics

#### Implemented

##### Analytics Builder - renaming of frgment property name

The **Measurement Input** block sends the property name that is used for a fragment as part of its output value.
In previous versions, this property name was `frgment`. This has now been changed to `fragment`.
Currently, both property names `frgment` and `fragment` are supported.
`frgment`, however, is now deprecated and will be removed in a future release.
Therefore it is recommended that you now change `frgment` to `fragment` in all of your blocks
(for example, the value of the **Property Path** parameter in the **Extract Property** block).

##### Cumulocity IoT transport in Apama

As of release 10.14, sending email requests from Apama to Cumulocity IoT requires the user to have the ROLE_EMAIL_CREATE permission.
This means that the user name that is used in Software AG Designer projects and any Apama applications connecting externally to the Cumulocity IoT platform must have this permission.
