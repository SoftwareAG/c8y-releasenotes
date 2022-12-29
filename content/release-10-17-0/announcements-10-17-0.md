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

#### Implemented

##### Support for new OAuth2 access token type in single sign-on authentication

Cumulocity IoT supports new standard OAuth2 access tokens with the "at+jwt" type header parameter. For more information on this parameter, see [OAuth2 Access Tokens](https://datatracker.ietf.org/doc/html/rfc9068#name-header).
Single-sign-on users managed by new authorization servers (that is, generating OAuth2 access tokens with type "at+jwt") can thus login successfully into Cumulocity IoT.
To process this new token type, Cumulocity IoT uses the [Nimbus JOSE + JWT](https://connect2id.com/products/nimbus-jose-jwt).

### SDK changes

#### Planned

#### Implemented


### Streaming Analytics

#### Implemented

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