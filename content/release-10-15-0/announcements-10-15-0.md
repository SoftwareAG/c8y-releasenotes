---
weight: 12
title: Important announcements
layout: bundle
---

### REST API changes

#### Planned

##### Breaking change in the Application API - the ability to change the application key and contextPath will be blocked

As announced with [release 10.14](/release-10-14-0/announcements-10-14-0), as of release 10.16+ it will no longer be possible to change the contextPath and the key of an application. This is a breaking change and API requests trying to update the values of these application properties will fail.

The reason for this change is that changing the values of these properties would break previous application binaries.

How will users be affected? If the user is hosting an application with a key and a binary with a manifest matching the respective key, and if the key in the application is changed, the binary will no longer work.


### Security changes

#### Planned

##### Improved security for OAI-Secure users

As announced with [release 10.14](/release-10-14-0/announcements-10-14-0), as of release 10.16+, when an administrator changes permissions inside a role, the change impacts users who have the specific role assigned and use OAI-Secure.

The purpose of this measure is to enhance security and to make sure that all OAI-Secure users have access to the relevant information in Cumulocity IoT, without compromising secure access to the information. 

We recommend that administrators announce this change, because logged-in users will be impacted. If they try to perform an operation that is affected by the changed role, they will receive an "access denied" error and will not be able to perform the operation. Therefore this action is recommended to be followed up with notification to the users and scheduling.

Basic authentication users will not be affected by this change.


#### Implemented

##### Cumulocity IoT microservice user privilege deprecation

**What will happen**

With release 10.15, Software AG announces the availability of the Microservice API version 2 and the deprecation of Microservice API version 1 to comply with new security requirements.

Microservice API version 2 provides an improved microservice container security context restricting the invocation of privileged Linux Kernel APIs. More precisely, all capabilities are granted to microservices with API version 1 whereas only the capability `CAP_NET_BIND_SERVICE` is granted to microservices with API version 2.

Refer to [this Linux man page](https://man7.org/linux/man-pages/man7/capabilities.7.html) for more information about these capabilities.

**What you need to do by the 10.15 release**

Migrate your microservice to the new API version 2. In the simplest case it is sufficient to set the API version 2 in your microservice manifest. However, for microservices which currently make use of Linux Kernel API which requires one of the above-mentioned user privileges you additionally must refactor the source code so that the service doesn’t require the invocation of these privileged Linux Kernel APIs anymore. For details refer to [Microservice migration to API version 2](https:/cumulocity.com/guides/10.15.0/microservice-sdk/concept/migration) in the <i>Microservice SDK guide </i>.

**How to check whether your microservice is impacted?**

Set the API version field in the microservice manifest to “2” and deploy this service to your Cumulocity IoT test environment. This environment must be in version 10.15. Verify that the functionality provided by the microservice still works as expected.

**How to identify deprecated microservices?**

An administrator can use the query language of the Inventory REST API to identify deprecated microservices. The microservice manifest of all owned microservices is saved in the inventory of the tenant. The respective microservice manifest objects are marked with a dedicated field, namely `com_cumulocity_model_application_MicroserviceManifest`.

**What happens if your Cumulocity IoT microservice is still using one of these user privileges after the upgrade of the environment to the 10.16 release**

By default, microservices using the deprecated API version 1 still work in version 10.15. But the behavior is configurable per Cumulocity IoT environment (see *Operational procedures* in the *Cumulocity IoT Core - Operations guide*), and it might happen, depending on the configuration of this environment, that your microservice using the deprecated API version 1 will no longer work.


### SDK changes

#### Planned

##### Updating the Web SDK to Angular 14

As of release 10.16 we plan to update the Web SDK to Angular 14. See the [Angular upgrade guide](https://v14.angular.io/guide/update-to-latest-version) for more information on what needs to be changed in your custom application. You can use our [default upgrade instructions](https://cumulocity.com/guides/web/upgrade/#update-to-an-newer-version) to update the files provided by the Cumulocity CLI tool.

#### Implemented

##### Removal of support for Angular Schema Form

As announced with [release 10.14](/release-10-14-0/announcements-10-14-0), as of release 10.15 the support for [Angular Schema Form](http:/schemaform.io/) in the `filteringConfig` of device grid columns has stopped in favor of the more modern [Angular Formly](https://formly.dev/). It is now no longer feasible to build an application until all device grid custom column definitions are migrated to use the new definitions.

In the future, we also plan to stop the support for Angular Schema Form in other parts of the application including AngularJS components. For more information on Angular Formly, see [their official documentation page](https://formly.dev/examples/introduction).


### Streaming Analytics

#### Implemented

##### Analytics Builder - removal of frgment property

As announced in [release 10.14](/release-10-14-0/announcements-10-14-0/), the `frgment` property has been removed in 10.15.
If you have not already done so, you must now change `frgment` to `fragment` in all of your blocks
(for example, the value of the **Property Path** parameter in the **Extract Property** block).

##### Removal of Esper

Further to the CEL (Esper) deprecation notice in [release 10.5](/release-10-5-0/migration-10-5-0/) and the subsequent announcement of end of support in [release 10.7](/release-10-7-0/announcements-10-7-0/) it has been possible to continue using Esper in an unsupported mode. With effect from release 10.15 the CEL (Esper) functionality has been removed completely and cannot be used anymore.

If you need assistance to migrate your streaming analytics logic from Esper to Apama, please contact [Software AG Global Support](/about/contacting-support/).
