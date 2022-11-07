---
weight: 12
title: Important announcements
layout: bundle
---

### REST API changes

#### Planned

#### Implemented

##### Breaking change in the Measurements API - several APIs will no longer be supported when "enhanced time-series support" is enabled

As announced with [release 10.14](/release-10-14-0/announcements-10-14-0), as of release 10.16+ new tenants can utilize a new enhanced time-series support for the Cumulocity IoT Operational Store. As a result, several APIs are no longer supported when the feature is enabled.

The following APIs have been removed without any replacement:

* `GET /measurement/measurements/{id}`
* `DEL /measurements/measurement/getById`

The following API is no longer supported:

* `DEL /measurements/measurement/`

Instead, a time-to-live configuration or retention rules can be used to remove expired measurements data from the Operational Store.

### Security changes

##### Deprecation of SMS TFA feature

As announced with [release 10.15](/release-10-15-0/announcements-10-15-0), the SMS TFA (Two-Factor Authentication) feature is deprecated. With release 10.17+, it will be removed and not be functional any longer, and we will no longer support SMS TFA.

What does this mean for users?

We recommend you to gradually start switching off SMS TFA in earlier versions (10.15 or 10.16) in order to be able to detect any issues, and be prepared when it is unavailable as of release 10.17. Instead of TFA SMS you can use TFA TOTP.

If you don´t know what is required to switch off SMS TFA, please contact our customer service at Software AG.

#### Planned

#### Implemented


### SDK changes

#### Planned

#### Implemented

##### Updating the Web SDK to Angular 14

As announced with [release 10.15](/release-10-15-0/announcements-10-15-0) the Web SDK has been updated to Angular 14. See the [Angular upgrade guide](https://v14.angular.io/guide/update-to-latest-version) for more information on what needs to be changed in your custom application. You can use our [default upgrade instructions](https://cumulocity.com/guides/web/upgrade/#update-to-an-newer-version) to update the files provided by the Cumulocity CLI tool.


### Streaming Analytics

#### Implemented
