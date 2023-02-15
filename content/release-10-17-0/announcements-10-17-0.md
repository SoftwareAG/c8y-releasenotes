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

##### User administrator can no longer set password for other users

To improve security, from release 10.20, user administrators will no longer be able to explicitly set passwords for other users in the tenant.
This change prevents that an attacker could have access to all users, in case the administrator account was compromised.
Note that the administrator will still have the option to force the user to reset the password on the next login or disable the user.

#### Implemented

##### Support for new OAuth2 access token type in single sign-on authentication

Cumulocity IoT supports new standard OAuth2 access tokens with the "at+jwt" type header parameter. For more information on this parameter, see [OAuth2 Access Tokens](https://datatracker.ietf.org/doc/html/rfc9068#name-header).
Single-sign-on users managed by new authorization servers (that is, generating OAuth2 access tokens with type "at+jwt") can thus login successfully into Cumulocity IoT.
To process this new token type, Cumulocity IoT uses the [Nimbus JOSE + JWT](https://connect2id.com/products/nimbus-jose-jwt).

### SDK changes

#### Planned

##### The Web SDK extension HOOK_SEARCH will be refactored

The HOOK_SEARCH can be used by developers to extend the web integration of the search in a custom web application. As announced with [release 10.16](/release-10-16-0/announcements-10-16-0), as of release 10.18, we will refactor the HOOK_SEARCH interface. If you use this interface in a custom-developed UI application, you must migrate to the new version. Details on how to use the new interface will be provided in the Web SDK documentation of the respective release.

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
