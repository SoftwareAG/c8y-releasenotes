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

##### Breaking change in the Alarms, Events, Measurements APIs - required parameters will be introduced

As announced with [release 10.15](/release-10-15-0/announcements-10-15-0), as of release 10.17, at least one query parameter limiting the affected data will be required to prevent accidental deletion of too many objects during a bulk delete operation.
This change affects the following APIs:

* `DELETE /alarm/alarms` requires at least one of the following parameters: `source`, `dateFrom`, `dateTo`, `createdFrom`, `createdTo`
* `DELETE /event/events` requires at least one of the following parameters: `source`, `dateFrom`, `dateTo`, `createdFrom`, `createdTo`
* `DELETE /measurements/measurement` requires at least one of the following parameters: `source`, `dateFrom`, `dateTo`

##### Breaking change in the Inventory API - restrictions for a set of properties

As of release 10.18+, a set of properties in the Inventory API will be restricted to internal system usage and cannot be set by external users. This change is motivated by planned features and future use cases.

In case of a request sent with these properties, they will be ignored by the platform and not set.

This change applies to the following fragments: `c8y_LatestMeasurements`, `c8y_LatestEvents`, `c8y_LatestAlarms`, `c8y_LatestOperations`, `c8y_LastAlarm`, `c8y_LastEvent`, `c8y_LastOperation`.

For example, if a user sends a request in the following format:

```
{
    "name": "testDevice",
    "owner": "device_654321",
    "c8y_IsDevice": {},
    "c8y_LatestMeasurements":{
      "c8y_Temperature":{
         "T": :{
            "value" : 25.4,
            "unit" : "C"
         }
      }
    }
}
```

currently the whole payload is saved. In the future, the `c8y_LatestMeasurements` fragment will be ignored and not saved.

#### Implemented

##### Breaking change in the Measurements API - several APIs will no longer be supported when "enhanced time-series support" is enabled

As announced with [release 10.14](/release-10-14-0/announcements-10-14-0), as of release 10.16+ new tenants can utilize a new enhanced time-series support for the Cumulocity IoT Operational Store. As a result, several APIs are no longer supported when the feature is enabled.

The following APIs have been removed without any replacement:

* `GET /measurement/measurements/{id}`
* `DEL /measurements/measurement/{id}`

The following API is partially supported:

* `DEL /measurements/measurement/`

In release 10.16, the parameters `dateFrom` and `dateTo` are not supported. Instead, retention rules can be used to remove expired measurements data from the Operational Store.

In 10.17+ the parameters `dateFrom` and `dateTo` must be truncated to full hours (for example, 2022-08-19T14:00:00.000Z), otherwise an error will be returned.

### Security changes

#### Planned

##### Deprecation of SMS TFA feature

As announced with [release 10.15](/release-10-15-0/announcements-10-15-0), the SMS TFA (Two-Factor Authentication) feature is deprecated. With release 10.17+, it will be removed and not be functional any longer, and we will no longer support SMS TFA.

What does this mean for users?

We recommend you to gradually start switching off SMS TFA in earlier versions (10.15 or 10.16) in order to be able to detect any issues, and be prepared when it is unavailable as of release 10.17. Instead of TFA SMS you can use TFA TOTP. For details, see [Administration > Two-factor authentication > TOTP](https://cumulocity.com/guides/10.16.0/users-guide/administration/#totp-google-authenticator) in the *User guide*.

If you don´t know what is required to switch off SMS TFA, please contact our customer service at Software AG.


### SDK changes

#### Planned

##### Breaking change in microservice security configuration

A Spring Boot library will be upgraded to 2.7.6, hence upgrading Microservice SDK to 10.17+ may require some additional development.

Following the deprecation of `WebSecurityConfigurerAdapter` by Spring Security, the Microservice SDK will use a direct declaration of the `SecurityFilterChain` bean in its internal configuration instead. At the same time, Spring Security
only allows one of these configuration approaches in a single application. This means that if the old,
adapter-based method has been used in your code before, you will have to migrate to the new, direct filters
declaration for applications to start. Refer to the [Spring Security documentation](https://docs.spring.io/spring-security/reference/5.8/migration/servlet/config.html#_stop_using_websecurityconfigureradapter) for more details.

##### New default branding

As announced with [release 10.15](/release-10-15-0/announcements-10-15-0), as of release 10.17, we will update the default branding for all Cumulocity IoT default applications. Branded applications will not be affected, however, as the new navigator changes from a dark color to a light color, the default navigator font color might not work with your current branding settings. You might end up with a dark font color on a dark background, which might not be readable or accessible by your users. You can review this by opening the branding editor in the Administration application and check what font color you are using in the current version.

##### The Web SDK extension HOOK_SEARCH will be refactored
The HOOK_SEARCH can be used by developers to extend the web integration of the search in a custom web application. As of release 10.18, we will refactor the HOOK_SEARCH interface. If you use this interface in a custom-developed UI application, you must migrate to the new version. Details on how to use the new interface will be provided in the Web SDK documentation of the respective release.

#### Implemented

##### Updating the Web SDK to Angular 14

As announced with [release 10.15](/release-10-15-0/announcements-10-15-0) the Web SDK has been updated to Angular 14. See the [Angular upgrade guide](https://v14.angular.io/guide/update-to-latest-version) for more information on what needs to be changed in your custom application. You can use our [default upgrade instructions](https://cumulocity.com/guides/web/upgrade/#update-to-an-newer-version) to update the files provided by the Cumulocity CLI tool.

##### Removal of Cumulocity IoT Device SDKs in favor of thin-edge.io

As announced with [release 10.15](/release-10-15-0/announcements-10-15-0), as of release 10.16, we have removed the Cumulocity IoT Device SDKs. This includes the removal of the [C++ Device SDK instructions](https://cumulocity.com/guides/10.15.0/device-sdk/cpp/), and the [Linux Agent guides](https://cumulocity.com/guides/10.15.0/device-sdk/linux-agent-user-guide/) from our public documentation. While they are not supported or further maintained, the code can be found in our [open-source repositories](https://github.com/SoftwareAG) in case you still have them in use.

As a recommended mechanism to integrate Linux-based devices into Cumulocity IoT we advise you to use [thin-edge.io](https://thin-edge.io/), which is actively developed by Software AG and open-source community partners. For customers with enterprise-grade support & maintenance needs, a commercial variant (Cumulocity IoT Thin Edge) can be purchased.

### Documentation

#### Planned

The German version of the *User guide* (*Benutzerhandbuch*) is deprecated. In a future release we are going to remove the German *User guide* from the documentation website and focus on our high-quality, up-to-date English user documentation.


### Streaming Analytics

#### Planned

##### Analytics Builder - Deprecation of Machine Learning

The Machine Learning block for Analytics Builder is deprecated and will be removed in a future release. This is in line with the deprecation of [Machine Learning Engine](#machine-learning-deprecation).

#### Implemented

##### Analytics Builder - Reset behavior of the Discrete Statistics block

The reset behavior of the **Discrete Statistics** block has been corrected.
Every new value is now sampled *after* the block has been reset. For more details,
see the Streaming Analytics release notes for [release 10.16.0](/release-10-16-0/streaming-analytics-10-16-0).

##### Analytics Builder - Removal of keys for configuring model timeouts

The following keys for configuring model timeouts have been removed and will be ignored when set:
`default_timeout_secs` and `block_promise_timeout_secs`.
Instead, warnings are now logged when request responses or returned promise values take too long to complete, as determined by the Apama-ctrl microservice.

### Cumulocity IoT DataHub

#### Planned

##### Breaking change in the offloading mechanism - deprecation of support for mixed types

In a future release of Cumulocity IoT DataHub a newer version of Dremio will be adopted that removes support for mixed data types in a single column. The offloading process will be adapted so that mixed types will be automatically resolved during offloading. Cumulocity IoT DataHub will not be able to read data lake contents containing mixed data types, so corresponding data needs to be converted.

##### Breaking change in the offloading mechanism - switch to new table format may introduce incompatibilities

In future releases of Cumulocity IoT DataHub the offloading mechanism may leverage the Apache Iceberg table format, which is an open format supported by Dremio. Due to this change, current offloading configurations may fail. For example, they may fail due to rarely used data types which are incompatible with the Apache Iceberg format. Further details and remediation actions will be provided closer to the respective release.

### Cumulocity IoT Machine Learning

#### Planned

<a name="machine-learning-deprecation"></a>
##### Deprecation of Machine Learning Engine and Machine Learning Workbench

Machine Learning is of great importance to many IoT solutions as it helps deliver insights otherwise hidden in data for rapid, automated responses and improved decision making. That’s why we built Machine Learning Engine (MLE) for realtime and batch inferencing and Machine Learning Workbench (MLW) as a multi-modal application for model training.

After experimentation and honest customer feedback, we have decided to adjust our current generic approach to IoT Machine Learning and bring it in line with the strengths of our Cumulocity IoT platform, which is in the lifecycle management of Machine Learning models (including their execution) in distributed architectures from (thin) edge to cloud, rather than building and engineering them.  

This decision means that, as of Cumulocity IoT 10.16, Machine Learning Engine and Machine Learning Workbench are deprecated, and we will end further development of these components. After Cumulocity IoT 10.17, both will be removed from the platform. If you have existing (production) projects which rely on MLE and/or MLW applications, then Software AG is committed to work together with you to find an appropriate transition path. If we have not yet been in contact for this matter, feel free to contact us at [c8y_mlw_mle_sunsetting@softwareag.com](mailto:c8y_mlw_mle_sunsetting@softwareag.com).

Going forward, we will focus on building out Machine Learning operations capabilities in Cumulocity IoT, as well as teaming up with leading ML partners for model creation (for example, hyperscalers, OSS, and specialized domain-specific partners) to provide end-to-end solutions to you.
