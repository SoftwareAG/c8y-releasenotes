---
weight: 12
title: Important announcements
layout: bundle
---

### REST API changes

#### Planned

##### Breaking change in SmartREST 2.0 - DATE field used as custom property will be stored as string
As announced with [release 10.15](/release-10-15-0/announcements-10-15-0), as of release 10.17+, a SmartREST 2.0 DATE field used as a custom property will be stored as a string in the Cumulocity IoT database.
This affects the REST response format.

Example of previous response format (note `aCustomDateField` field):

```json
{
   "source":{
      "id":"91123"
   },
   "type":"TYPE-911",
   "aCustomDateField":{
      "date":{
         "date":14,
         "seconds":15,
         "hours":12,
         "month":10,
         "year":122,
         "timezoneOffset":-60,
         "minutes":41,
         "time":1668426075840,
         "day":1
      },
      "offset":120
   },
   "c8y_TemperatureMeasurement":{
      "T":{
         "unit":"C",
         "value":10
      }
   }
}
```

New format:

```json
{
   "source":{
      "id":"91123"
   },
   "type":"TYPE-911",
   "aCustomDateField":"2022-11-14T12:44:11.481+01:00",
   "c8y_TemperatureMeasurement":{
      "T":{
         "unit":"C",
         "value":10
      }
   }
}
```
The change will be introduced to improve the consistency between different Cumulocity IoT protocols.

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

##### New default branding

As announced with [release 10.15](/release-10-15-0/announcements-10-15-0), as of Release 10.17, we will update the default branding for all Cumulocity IoT default applications. Branded applications will not be affected, however, as the new navigator changes from a dark color to a light color, the default navigator font color might not work with your current branding settings. You might end up with a dark font color on a dark background, which might not be readable or accessible by your users. You can review this by opening the branding editor in the Administration application and check what font color you are using in the current version.

#### Planned

##### HOOK_SEARCH will be refactored
The HOOK_SEARCH can be used by developers to extend the search of Cumulocity IoT. As of release 10.18, we will refactor the HOOK_SEARCH interface. If you use this interface, you must migrate to the new version. Details on how to use the new interface will be provided in the Web SDK documentation of the respective release.

#### Implemented

##### Updating the Web SDK to Angular 14

As announced with [release 10.15](/release-10-15-0/announcements-10-15-0) the Web SDK has been updated to Angular 14. See the [Angular upgrade guide](https://v14.angular.io/guide/update-to-latest-version) for more information on what needs to be changed in your custom application. You can use our [default upgrade instructions](https://cumulocity.com/guides/web/upgrade/#update-to-an-newer-version) to update the files provided by the Cumulocity CLI tool.


### Streaming Analytics

#### Implemented
