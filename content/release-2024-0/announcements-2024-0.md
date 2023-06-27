---
weight: 12
title: Important announcements
layout: bundle
---

### REST API changes

#### Planned

#### Implemented

##### Breaking change in the Alarms, Events, Measurements APIs - required parameters will be introduced

As announced earlier, most recently with [release 10.17](/release-10-17-0/announcements-10-17-0), at least one query parameter limiting the affected data will be required to prevent accidental deletion of too many objects during a bulk delete operation.
This change affects the following APIs:

* `DELETE /alarm/alarms` requires at least one of the following parameters: `source`, `dateFrom`, `dateTo`, `createdFrom`, `createdTo`
* `DELETE /event/events` requires at least one of the following parameters: `source`, `dateFrom`, `dateTo`, `createdFrom`, `createdTo`
* `DELETE /measurements/measurement` requires at least one of the following parameters: `source`, `dateFrom`, `dateTo`


##### *[Feature Preview]* Latest measurement values can be stored as part of Device Managed Object
**Important:** The feature is at Public Preview stage means that it's not enabled by default and maybe subject to change in future.

Starting from this release we are introducing the support of automated persistence of measurement values under `c8y_LatestMeasurements` fragment.

##### How to enable it
Using tenant options you should create a category named `measurement.series.latestvalue` with put request to [ tenant options category ](https://cumulocity.com/api/core/#operation/putCategoryOptionResource)
Example: 
```
PUT /tenant/options/measurement.series.latestvalue
{
  "c8y_Humidity.H":"", // to enable single series c8y_Humidity.H
  "c8y_Temperature.*":"", // to able series under fragment c8y_Temperature
  // or "*":"" to enable all 
}
```
Where the key is a filter of measurement series that should be persistent and value must be always empty string, it's left for future use case.

##### How it works

When measurement is created with series that are matching to configuration then device managed object
will be updated with last series send to platform.
E.g. when you send 
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
Then if you consider our example configuration only `c8y_Temperature.T` will be stored as part of device,the `c8y_Speed.S` will be ignored.
Means measurement will be stored as before, only the state update is skipped.
To read the latest values on device level you need to use inventory api.
To get single device:
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
or to get list of devices matching expected criteria 
e.g. get all devices which have reported temperature higher than 10 degrees :

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
##### Implications

The feature is introducing addition operation upon measurement creation.
That will result in performance degradation, which depends on number of series that needs to be 
stored with each and goes from 5% for single series in each measurement to 
more than 20% in case of 50 series per measurement.

### SDK changes

#### Planned

#### Implemented

##### Removal of deprecated device-grid model classes, column implementations and services

As announced earlier, most recently with [release 10.17](/release-10-17-0/announcements-10-17-0), shared classes, components and services from the @c8y/ngx-components/device-grid are deprecated. Those deprecated items are removed with this release.

This change only affects you, if you or your development team use the Web SDK to extend Cumulocity IoT UI applications or to build your own web applications. If you use the device-grid functionalities, check the deprecation documentation and alter your code accordingly. Refer to the deprecations in the [WebSDK resources documentation for the device-grid service](http://resources.cumulocity.com/documentation/websdk/ngx-components/injectables/DeviceGridService.html). Other deprecations for reference are also marked in this documentation.

### Streaming Analytics

#### Planned

#### Implemented
