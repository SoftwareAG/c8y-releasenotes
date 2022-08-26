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

As announced with [release 10.14](/release-10-14-0/announcements-10-14-0), as of release 10.16+, when an administrator changes permissions inside a role, users who have this specific role assigned and use OAI-Secure will be logged out.

The purpose of this measure is to enhance security and to make sure that all OAI-Secure users have access to the relevant information in Cumulocity IoT, without compromising secure access to the information. We recommend that administrators announce this change and notify about the change, because the logged-in users will immediately be logged out, and all their changes will get lost. Therefore this action requires scheduling.

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

#### Planned

##### Deprecated events in com.apama.cumulocity

The `SMSResponse` and `SMSResourceReference` events in the `com.apama.cumulocity` package are now deprecated. They are not used by Cumolocity IoT and will therefore be removed in a future release.

#### Implemented

##### Analytics Builder - removal of frgment property

As announced in [release 10.14](/release-10-14-0/announcements-10-14-0/), the `frgment` property has been removed in 10.15.
If you have not already done so, you must now change `frgment` to `fragment` in all of your blocks
(for example, the value of the **Property Path** parameter in the **Extract Property** block).

##### Changed events in com.apama.cumulocity

The `GenericRequest` event in the `com.apama.cumulocity` package has been changed to improve consistency in error handling. 
In all cases of a response from the server, a `GenericResponseComplete` event is now sent to the correct response channel. 
In addition, the `GenericResponseComplete` event now has the following additional members:

- `boolean error` - Set to `true` if the `GenericRequest` received either an error content type or a non-2xx HTTP return code.
- `integer status` - The HTTP return code.
- `string details` - Details of the response which were not sent as a `GenericResponse`.

It is recommended that you now use the updated `GenericResponseComplete` event instead of the `Error` event 
since the `GenericResponseComplete` event is sent to the same channel as the `GenericResponse` event.

In addition, there is a change in behavior where previously some `GenericRequest` events which received non-2xx response codes were still sending `GenericResponse` events. 
As of this version, only requests where `error` is `false` and the payload is JSON will send `GenericResponse` events. 
For more details, see the `com.apama.cumulocity` package in the [API Reference for EPL (ApamaDoc)](https://documentation.softwareag.com/pam/10.15.0/en/webhelp/related/ApamaDoc/index.html).

In previous versions, no response events were sent at all in some cases. 
As of this version, the `GenericResponseComplete` event is always sent for all `GenericRequest` events in any error case.

##### Cumulocity IoT transport in Apama

To improve performance, the Cumulocity IoT transport now sends requests to the Cumulocity IoT platform concurrently using multiple clients. 
New API and configuration options have been added to control this behavior. 
For a complete description of the new concurrency behavior and options to control it, 
see [Optimizing requests to Cumulocity IoT with concurrent connections](https://documentation.softwareag.com/pam/10.15.0/en/webhelp/pam-webhelp/index.html#page/pam-webhelp%2Fco-ConApaAppToExtCom_cumulocity_optimizing_requests_to_cumulocity_iot_with_concurrent_connections.html) 
in the Apama documentation.

The Cumulocity IoT transport now supports multi-tenant deployment. For this purpose, the following new configuration options are now available:

- `CUMULOCITY_MULTI_TENANT_APPLICATION`
- `CUMULOCITY_MULTI_TENANT_MICROSERVICE_NAME`

See also [Configuring the Cumulocity IoT transport](https://documentation.softwareag.com/pam/10.15.0/en/webhelp/pam-webhelp/index.html#page/pam-webhelp%2Fco-ConApaAppToExtCom_cumulocity_configuring_the_cumulocity_transport.html) 
and [Working with multi-tenant deployments](https://documentation.softwareag.com/pam/10.15.0/en/webhelp/pam-webhelp/index.html#page/pam-webhelp%2Fco-ConApaAppToExtCom_cumulocity_working_with_multi_tenant_deployments.html)
in the Apama documentation.

The following new configuration properties, which correspond to existing configuration options in the YAML configuration file, are now available:

- `CUMULOCITY_REQUEST_ALL_DEVICES` (corresponds to `requestAllDevices`)
- `CUMULOCITY_SUBSCRIBE_ALL_MEASUREMENTS` (corresponds to `subscribeToAllMeasurements`)
- `CUMULOCITY_SUBSCRIBE_DEVICES` (corresponds to `subscribeToDevices`)
- `CUMULOCITY_SUBSCRIBE_OPERATIONS` (corresponds to `subscribeToOperations`)

It is recommended to use the new configuration properties instead of editing the YAML configuration file. 
See also [Configuring the Cumulocity IoT transport](https://documentation.softwareag.com/pam/10.15.0/en/webhelp/pam-webhelp/index.html#page/pam-webhelp%2Fco-ConApaAppToExtCom_cumulocity_configuring_the_cumulocity_transport.html) 
in the Apama documentation.

##### Docker images

Apama 10.15.0 introduces several new container images provided via Docker Hub and some of the existing container images have changed content.
See also [Published Apama container images](https://documentation.softwareag.com/pam/10.15.0/en/webhelp/pam-webhelp/index.html#page/pam-webhelp%2Fco-DepAndManApaApp_published_apama_container_images.html)
in the Apama documentation.

When building images for use as a Cumulocity IoT microservice, then you must use the 
[softwareag/apama-cumulocity-jre](https://hub.docker.com/r/softwareag/apama-cumulocity-jre) image with the new
[softwareag/apama-cumulocity-builder](https://hub.docker.com/r/softwareag/apama-cumulocity-builder) image as a builder image. 
To do this with the default project Dockerfile created by Software AG Designer, either change the `FROM` lines in the Dockerfile appropriately or build using the following flags:

```
--build-arg APAMA_BUILDER=softwareag/apama-cumulocity-builder:10.15 --build-arg APAMA_IMAGE=softwareag/apama-cumulocity-jre:10.15
``` 

##### Support lifetimes for connectivity components

With Apama 10.15.0, the support lifetimes for the components for connectivity to Cumulocity IoT, and the Apama Docker images with that connectivity, 
have been aligned with the Cumulocity IoT support schedule. For more details, refer to the *Release Availability* document for version 10.15. 
This is available from the following web page: https://documentation.softwareag.com/apama/index.htm.

##### Removal of Esper

Further to the CEL (Esper) deprecation notice in [release 10.5](/release-10-5-0/migration-10-5-0/) and the subsequent announcement of end of support in [release 10.7](/release-10-7-0/announcements-10-7-0/) it has been possible to continue using Esper in an unsupported mode. With effect from release 10.15 the CEL (Esper) functionality has been removed completely and cannot be used anymore.

If you need assistance to migrate your streaming analytics logic from Esper to Apama, please contact [Software AG Global Support](/about/contacting-support/).
