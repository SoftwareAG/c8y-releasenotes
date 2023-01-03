---
weight: 50
title: Device management & connectivity
layout: bundle
---

<!--10.16.1.0 - 10.16.179.0-->

### Improvements

<div><table ><colgroup>
<col style="width: 15%;"><col style="width: 55%;"><col style="width: 15%;"><col style="width: 15%;"></colgroup>
<thead><tr>
<th>
Component</th>
<th>
Description</th>
<th>
Issue</th>
<th>
Fix Version</th>
</tr>
</thead><tbody>

<tr>
<td>Device Management</td>
<td>The user experience has been improved by notifying the user with a confirmation popup while changing the owner of the device.</td>
<td>DM-1709</td>
<td>10.16.142.0</td>
</tr>

<tr>
<td>Device Management</td>
<td>The data grid's configuration context has been extended with options to omit certain configuration parts when the configuration is persisted. This includes sorting, filtering, column order, column visibility and custom columns.
In the <b>Filter target devices</b> grid in bulk operations and in the <b>Assign devices</b> grid in groups, filters are no longer persisted in order to not disturb users with previously applied filters.</td>
<td>DM-1584</td>
<td>10.16.66.0</td>
</tr>


<tr>
<td>LWM2M</td>
<td>The LWM2M bulk registration now also supports the creation of external IDs and extra fragments in managed objects like it is supported in the general bulk registration. Furthermore, it is now possible to assign LWM2M devices to groups as part of the LWM2M bulk registration process.</td>
<td>DM-1544</td>
<td>10.16.110.0</td>
</tr>

<tr>
<td>OPC UA</td>
<td>The OPC UA Management microservice now uses the Microservice SDK API version 2.</td>
<td>DM-1583</td>
<td>10.16.166.0</td>
</tr>

</tbody></table></div>



### Fixes

<div><table ><colgroup>
<col style="width: 15%;"><col style="width: 55%;"><col style="width: 15%;"><col style="width: 15%;"></colgroup>
<thead><tr>
<th>
Component</th>
<th>
Description</th>
<th>
Issue</th>
</tr>
</thead><tbody>

<tr>
<td>Cloud Fieldbus</td>
<td>The <b>Offset property</b> field in the register configuration now accepts all values.</td>
<td>MTM-48256</td>
<td>10.16.119.0</td>
</tr>

<tr>
<td>Device Management</td>
<td>On the <b>Measurements</b> tab in the device details, a tooltip has been added which shows the whole values in case of truncated values in the Y-axis. Moreover, the information is provided that you can see the whole values by hovering over the axis.</td>
<td>MTM-48603</td>
<td>10.16.142.0</td>
</tr>

<tr>
<td>Device Management</td>
<td>Devices can now send installed software information to the advanced-software-mgmt microservice without including the URL and software type. These parameters were incorrectly required before and are now made optional.</td>
<td>DM-1431</td>
<td>10.16.129.0</td>
</tr>

<tr>
<td>Device Management</td>
<td>Fixed an issue where users could not find a location on the map based on the address they entered.</td>
<td>MTM-49644</td>
<td>10.16.104.0</td>
</tr>

<tr>
<td>Device Management</td>
<td>In the <b>Software repository</b> page, the <b>Add software</b> dialog accepted a software without software type although
the field <b>Software type</b> is mandatory. This has been fixed and the <b>Add software</b> button is now active only when the
mandatory <b>Software type</b> field is filled.</td>
<td>DM-1713</td>
<td>10.16.103.0</td>
</tr>

<tr>
<td>Device Management</td>
<td>In the <b>Software repository</b> page, sorting for the column "Device type" did not function properly. This issue is now fixed.</td>
<td>DM-1712</td>
<td>10.16.103.0</td>
</tr>

<tr>
<td>Device Management</td>
<td>In case of many active alarms of different severities, in the "Active critical alarms" widget users might have needed to press the <b>Load more</b> button several times on an empty list in order to see their active critical alarms. This is now fixed - the widget always initially shows active critical alarms if available and the <b>Load more</b> button does not load empty pages.</td>
<td>DM-1646</td>
<td>10.16.31.0</td>
</tr>

<tr>
<td>Device Management</td>
<td>On the <b>Location</b> tab in the device details, you can now again change the location of the device on the map by dragging the position marker.</td>
<td>DM-1565</td>
<td>10.16.12.0</td>
</tr>

<tr>
<td>Device Management</td>
<td>The device registration wizard had several layout and functionality issues which were fixed by aligning it to the default platform user experience.</td>
<td>DM-1335</td>
<td>10.16.8.0</td>
</tr>

<tr>
<td>LWM2M</td>
<td>- The LWM2M FOTA process now raises an alarm if the observation to the update state resource of object 5 cannot be established.
<br>-All CoAP requests sent to devices and corresponding responses are now consistently logged.</td>
<td>DM-1711</td>
<td>10.16.161.0</td>
</tr>

<tr>
<td>LWM2M</td>
<td>The LWM2M agent now fetches a limited number of pending operations if an LWM2M device sends a registration or a registration update.</td>
<td>DM-1474</td>
<td>10.16.119.0</td>
</tr>

<tr>
<td>LWM2M</td>
<td>A security vulnerability CVE-2022-39368 was found in Leshan 2.0.0-M8 and Californium 3.6.0. The dependencies were updated to the latest versions Leshan 2.0.0-M9 and Californium 3.7.0.</td>
<td>DM-1734</td>
<td>10.16.114.0</td>
</tr>

<tr>
<td>LWM2M</td>
<td>On the <b>Objects</b> tab in the device details, if you select an object containing a timestamp resource, the text box which displays the timestamp now receives the correct timestamp data type and no error message is displayed.</td>
<td>DM-1673</td>
<td>10.16.113.0</td>
</tr>

<tr>
<td>LWM2M</td>
<td>
- The LWM2M agent always retrieved the external decoder events from one month back only. So if an event remained unprocessed over a month, then it wasn't processed anymore. The time period is now configurable from the agent's configuration.
<br>
- Events, measurements, and alarms created by the LWM2M agent are flushed every 10 mins. If a high number of devices connects concurrently or in a short time period, the size of the queue can increase significantly, which in turn leads to high memory usage until all elements are flushed. The flush time interval can now be configured from the agent's properties.</td>
<td>DM-1602</td>
<td>10.16.12.0</td>
</tr>

<tr>
<td>OPC UA</td>
<td>On editing the OPC UA device details, it could happen under certain circumstances that the data reporting value was not saved properly. This issue is now fixed.</td>
<td>DM-1668</td>
<td>10.16.102.0</td>
</tr>

<tr>
<td>OPC UA</td>
<td>Canceling the editing of a variable in the OPC UA device protocol no longer resets the variable data subscriptions to default.</td>
<td>DM-592</td>
<td>10.16.79.0</td>
</tr>

<tr>
<td>OPC UA</td>
<td>Due to a change introduced in 10.14, the opcua-device-gateway on OPC UA server connects or reconnects did a full device type matching with a comparison of device types to the server's address space to find matched nodes and the application of these matched nodes. With this fix, the opcua-device-gateway directly applies the matched nodes settings if there was a matching done previously and no more recent updates to the device types were done.</td>
<td>DM-1651</td>
<td>10.16.13.0</td>
</tr>

</tbody></table></div>
