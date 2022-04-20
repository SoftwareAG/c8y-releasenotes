---
weight: 12
title: Important announcements
layout: bundle
---

### REST API changes

#### Planned

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

##### Cumulocity IoT microservice user privilege deprecation

**What will happen**

With release 10.14, Software AG announces the availability of the Microservice API version 2 and the deprecation of Microservice API version 1 to comply with new security requirements.

Microservice API version 2 provides an improved microservice container security context restricting the invocation of privileged Linux Kernel APIs.  In details this means that the Microservice API version 2 does not grant the microservice container user the following privileges:

•	CAP_AUDIT_CONTROL
•	CAP_AUDIT_READ
•	CAP_AUDIT_WRITE
•	CAP_BLOCK_SUSPEND
•	CAP_BPF
•	CAP_CHECKPOINT_RESTORE
•	CAP_CHOWN
•	CAP_DAC_OVERRIDE
•	CAP_DAC_READ_SEARCH
•	CAP_FOWNER
•	CAP_FSETID
•	CAP_IPC_LOCK
•	CAP_IPC_OWNER
•	CAP_KILL
•	CAP_LEASE
•	CAP_LINUX_IMMUTABLE
•	CAP_MAC_ADMIN
•	CAP_MAC_OVERRIDE
•	CAP_MKNOD
•	CAP_NET_ADMIN
•	CAP_NET_BROADCAST
•	CAP_NET_RAW
•	CAP_PERFMON
•	CAP_SETGID
•	CAP_SETFCAP
•	CAP_SETPCAP
•	CAP_SETUID
•	CAP_SYS_ADMIN
•	CAP_SYS_BOOT
•	CAP_SYS_CHROOT
•	CAP_SYS_MODULE
•	CAP_SYS_NICE
•	CAP_SYS_PACCT
•	CAP_SYS_PTRACE
•	CAP_SYS_RAWIO
•	CAP_SYS_RESOURCE
•	CAP_SYS_TIME
•	CAP_SYS_TTY_CONFIG
•	CAP_SYSLOG
•	CAP_WAKE_ALARM

Refer to [this Linux man page](https://man7.org/linux/man-pages/man7/capabilities.7.html) for more information.

**What you need to do by XX.YY.ZZZZ**

Migrate your microservice to the new API version 2. In the simplest case it is sufficient to set the API version 2 in your microservice manifest. However, for microservices which currently make use of Linux Kernel API which requires one of the above-mentioned user privileges you additionally must refactor the source code so that the service doesn’t require the invocation of these privileged Linux Kernel APIs anymore. For details refer to [Microservice migration to API version 2](https:/cumulocity.com/guides/10.14.0//microservice-sdk/concept/migration) in the <i>Microservice SDK guide </i>.

**How to check whether your microservice is impacted?**

Set the API version field in the microservice manifest to “2” and deploy this service to your Cumulocity IoT test environment. This environment must be in version 10.14. Verify that the functionality provided by the microservice still works as expected.

**What happens if your Cumulocity IoT microservice is still using one of these user privileges after the upgrade of the environment to the 10.15 release**

If your microservice is using the deprecated API version 1 and is deployed to a Cumulocity IoT environment in version 10.15 or higher it might, depending on the configuration of this environment, no longer work.


#### Implemented



### SDK changes

#### Planned

#### Implemented

##### Removing PlatformImpl Spring bean from Microservice SDK

With release 10.14 we closed a design gap, which previously existed in Cumulocity IoT and allowed to wrongly use Cumulocity IoT APIs (by mixing Spring injection with raw Java).

PlatformImpl will no longer be exposed as a Spring Bean and it will not be feasible to inject it.

Instead of creating new instances using PlatformImpl, you should always inject Cumulocity IoT API beans, such as InventoryApi, AlarmApi, IndentityApi, for example:

```
@Autowired //injection
private InventoryApi inventoryApi;
```

### Other changes


#### Planned

(MTM-44895)
Upon tenant creation, its admin's password will be validated according to the selected tenant policy. If no policy is selected, the password will be validated according to the options set in the current tenant (parent tenant). This is a consequence of the standard tenant policies handling.


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
