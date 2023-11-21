---
weight: 12
title: Important announcements
layout: bundle
---

### REST API changes

#### Feature preview:  Latest measurement values can be stored as part of a device managed object

{{< c8y-admon-important >}}
The feature is in Public Preview mode, that is, it is not enabled by default and maybe subject to change in future.
{{< /c8y-admon-important >}}

Starting from this release we introduce the support of automated persistence of measurement values under the `c8y_LatestMeasurements` fragment.

##### How to enable it

Use the tenant options to create a category named `measurement.series.latestvalue` with a PUT request to a [tenant options category](https://cumulocity.com/api/core/#operation/putCategoryOptionResource).
Example:
```
PUT /tenant/options/measurement.series.latestvalue
{
  "c8y_Humidity.H":"", // to enable single series c8y_Humidity.H
  "c8y_Temperature.*":"", // to able series under fragment c8y_Temperature
  // or "*":"" to enable all
}
```
where the key is a filter of measurement series that must be persistent and its value must always be an empty string (left for a future use case).

##### How it works

If a measurement is created with a series that matches the configuration the device managed object
is updated with the last series sent to the platform.
Example:

If you send
```
POST /measurement/measurements
{
  "source":"5413"
  "time":"2024-02-01T10:00:00Z"
  "c8y_Temperature":{
     "T": {
        "value": 15,
        "unit":"C"
     }
  }
  "c8y_Speed":{
    "S": {
      "value": 15,
      "unit":"m/s"
    }
  }
}
```
then,  considering the example configuration, only `c8y_Temperature.T` is stored as part of the device, while `c8y_Speed.S` is ignored.
This means, that the measurement is stored like before, only the state update is skipped.
To read the latest values on device level you must use the Inventory API.
To get a single device:
```
GET /inventory/managedObjects/5413?withLatestValues=true
{
   ...
   "c8y_LatestMeasurements":{
        "c8y_Temperature":{
           "T":{
             "value":15,
             "time":"2024-02-01T10:00:00Z",
             "unit":"C"
           }
        }
   }
}

```
To get a list of devices matching the expected criteria,
for example, get all devices which have a reported temperature higher than 10 degrees:

```
GET /inventory/managedObjects?withLatestValues=true&query=$filter=c8y_LatestMeasurements.c8y_Temperature.T.value+gt+10
{
  managedObjects: [
    {
        ...
        "c8y_LatestMeasurements":{
            "c8y_Temperature":{
                "T":{
                    "value":15,
                    "time":"2024-02-01T10:00:00Z",
                    "unit":"C"
                }
            }
        }
    }
  ]
}

```
##### Implications & Precondition

This feature introduces an additional operation upon measurement creation.
This results in performance degradation, depending on the number of series to be
stored in each measurement, reaching from 5% for single series in each measurement to
more than 20% in case of 50 series per measurement. Such drawback applies if the text index is disabled. In other cases,
the performance degradation can be much higher, up to more than 100%. Therefore
**disabling the text index is considered as a precondition**.

##### Limitations

**Security**

The latest measurement values are part of the managed object and they follow the managed object inventory role permissions instead of respecting the inventory roles for measurements.

**Data model**

The latest measurements do not store the measurement type. This information
can be obtained using the Measurements API.

**Last value**

The value stored in the device managed object is the last value sent to the platform.
If the order of measurement delivery to the platform is different from the measurement creation time
then also that latest values will be affected.



#### Planned

#### Implemented

##### Breaking change in the Alarms, Events, Measurements APIs - required parameters will be introduced

As announced earlier, most recently with [release 10.17](/release-10-17-0/announcements-10-17-0), at least one query parameter limiting the affected data will be required to prevent accidental deletion of too many objects during a bulk delete operation.
This change affects the following APIs:

* `DELETE /alarm/alarms` requires at least one of the following parameters: `source`, `dateFrom`, `dateTo`, `createdFrom`, `createdTo`
* `DELETE /event/events` requires at least one of the following parameters: `source`, `dateFrom`, `dateTo`, `createdFrom`, `createdTo`
* `DELETE /measurements/measurement` requires at least one of the following parameters: `source`, `dateFrom`, `dateTo`


##### Change in full text search feature of Inventory API

As of a future version, the full text search functionality will only include the following properties:
* `_id`
* `name`
* `type`
* `owner`
* `external id`

A text search functionality corresponds to a `text` parameter of `GET {url}/inventory/managedObjects`.

Example:
When executing the following query: `GET {url}/inventory/managedObjects?text=c8y_MajorDevice` only the properties `id`, `name`, `type`, `owner` and `external id` will be examined.

This change improves the user experience of the text search functionality by returning more relevant managed objects.
At the same time it improves the Inventory API performance.

This change will be implemented after a 3-month period at the earliest.

### Security changes

#### Planned

##### User administrator can no longer set password for other users
As announced earlier, see [release 10.17](/release-10-17-0/announcements-10-17-0), to improve security, from a future version, user administrators will no longer be able to explicitly set passwords or email addresses for other users in the tenant.
This change prevents that an attacker could have access to all users, in case the administrator account was compromised.
Note that the administrator will still have the option to force the user to reset the password on the next login or disable the user.

### SDK changes

#### Planned

#### Implemented

##### Removal of deprecated device-grid model classes, column implementations and services

As announced earlier, most recently with [release 10.17](/release-10-17-0/announcements-10-17-0), shared classes, components and services from the @c8y/ngx-components/device-grid are deprecated. Those deprecated items are removed with this release.

This change only affects you, if you or your development team use the Web SDK to extend Cumulocity IoT UI applications or to build your own web applications. If you use the device-grid functionalities, check the deprecation documentation and alter your code accordingly. Refer to the deprecations in the [WebSDK resources documentation for the device-grid service](http://resources.cumulocity.com/documentation/websdk/ngx-components/injectables/DeviceGridService.html). Other deprecations for reference are also marked in this documentation.

### Streaming Analytics

#### Planned

#### Implemented

##### Removal of Machine Learning

As announced with [release 10.16](/release-10-16-0/announcements-10-16-0), the **Machine Learning** block in Analytics Builder has been removed.
This is in line with the deprecation of [Machine Learning Engine](/release-10-16-0/announcements-10-16-0/#machine-learning-deprecation) announced in release 10.16.

##### Cumulocity IoT transport in Apama 10.15.4 - breaking change in REST APIs

Due to a change in Cumulocity IoT announced with [release 10.17](/release-10-17-0/announcements-10-17-0), Apama 10.15.4 now explicitly sets `withTotalPages` to `true` for applicable requests.

##### Updated events in com.apama.cumulocity in Apama 10.15.4

To avoid confusion as to whether events were being sent towards Cumulocity IoT or being received back as updates from Cumulocity IoT, the Cumulocity event definitions API was changed in a previous release (10.5.2.0) so that the existing `CHANNEL` constant was deprecated and replaced by either `SEND_CHANNEL` or `SUBSCRIBE_CHANNEL` constants as appropriate. Some events were omitted from these changes and this has now been rectified. Therefore, the `CHANNEL` constant is deprecated on the following events:

* `SubscribeMeasurements`
* `UnsubscribeMeasurements`
* `FindManagedObjectResponseAck`
* `FindMeasurementResponseAck`
* `GenericResponseComplete`
* `Subscribe`
* `Unsubscribe`

In addition, a new `SUBSCRIBE_CHANNEL` or `SEND_CHANNEL` has been added to the following events instead:

* `SubscribeMeasurements`
* `UnsubscribeMeasurements`
* `Subscribe`
* `Unsubscribe`

The constants on the following events are instead replaced with `SUBSCRIBE_CHANNEL` constants on their corresponding `Response` types:

* `FindManagedObjectResponseAck`
* `FindMeasurementResponseAck`
* `GenericResponseComplete`

The [API Reference for EPL (ApamaDoc)](https://documentation.softwareag.com/pam/10.15.4/en/webhelp/related/ApamaDoc/index.html) has been amended to make it clear that acknowledgement events are always received on the same channel as the corresponding response events, and to avoid confusion the `CHANNEL` constant has been deprecated on those acknowledgement events where it had been defined.

##### Handling uncaught exceptions in Apama 10.15.4

EPL monitors are no longer terminated by default when an uncaught exception is thrown in some cases.

Programming errors and unexpected data in incoming events can cause an uncaught exception in EPL. This causes the monitor instance to be terminated, rendering the application unusable. To provide a better experience, exceptions thrown from listeners and stream listeners which are not caught no longer terminate the monitor instance. Instead, they just stop the handling of the current event.

Developers are still encouraged to correctly catch and handle the exceptions in their EPL. If an exception is thrown and not caught, it is still possible for the events to be lost and not correctly handled.

This is a change in behavior. Some users may be relying on this previous behavior, in combination with an `ondie()` action. EPL with an `ondie()` action retains the previous behavior of always terminating the monitor and calling `ondie()`. If you need to retain the previous behavior, you can add an empty `ondie()` action to your monitor.

{{< c8y-admon-info >}}
If you have an action that is called from within a stream query (for example, as part of a `where` or `group by` clause, or a window definition) which throws an exception, this still terminates the monitor instance.
{{< /c8y-admon-info >}}

### Device Management

#### Planned

##### Deprecation of LWM2M device audit configuration

As announced in [release 10.18](/release-10-18-0/announcements-10-18-0), the [LWM2M device audit configuration](https://cumulocity.com/guides/10.18.0/protocol-integration/lwm2m/#audit-configuration) feature is deprecated. This feature will be disabled by default in a future version.
