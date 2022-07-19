---
weight: 12
title: Important announcements
layout: bundle
---

### REST API changes

#### Planned
#### Implemented


### Security changes

#### Planned

#### Improved security for OAI-Secure users

With the 10.16+ release, when an administrator changes permissions inside a role, users who have this specific role assigned and use OAI-Secure will be logged out.

The purpose of this measure is to enhance security and to make sure that all OAI-Secure users have access to the relevant information in Cumulocity IoT, without compromising secure access to the information.

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

**What happens if your Cumulocity IoT microservice is still using one of these user privileges after the upgrade of the environment to the 10.16 release**

If your microservice is using the deprecated API version 1 and is deployed to a Cumulocity IoT environment in version 10.16 or higher it might, depending on the configuration of this environment, no longer work.


### SDK changes

#### Planned
#### Implemented


### Streaming Analytics

#### Implemented

##### Analytics Builder - removal of frgment property

As announced in [release 10.14](/releasenotes/release-10-14-0/announcements-10-14-0/), the `frgment` property has been removed in 10.15.
If you have not already done so, you must now change `frgment` to `fragment` in all of your blocks
(for example, the value of the **Property Path** parameter in the **Extract Property** block).

##### Removal of Esper

Further to the CEL (Esper) deprecation notice in [release 10.5](/release-10-5-0/migration-10-5-0/) and the subsequent announcement of end of support in [release 10.7](/release-10-7-0/announcements-10-7-0/) it has been possible to continue using Esper in an unsupported mode. With effect from release 10.15 the CEL (Esper) functionality has been removed completely and cannot be used anymore.

If you need assistance to migrate your streaming analytics logic from Esper to Apama, please contact [Software AG Global Support](/about/contacting-support/).
