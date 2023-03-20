---
weight: 50
title: Device management & connectivity
layout: bundle
---

<!--10.16.1.0 - 10.16.260.0; 10.17.0.65-->

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
<td>In the device list view and groups list view, a <b>Search</b> field has been implemented that allows searching for devices/assets where any of their properties match the search term. In the <b>All devices</b> page the search term is not reflected in the query filter of smart groups.</td>
<td>DM-1591</td>
<td>10.16.253.0</td>
</tr>

<tr>
<td>Device Management</td>
<td>Several accessibility issues have been fixed in the Device Management application.</td>
<td>DM-1689</td>
<td>10.16.248.0</td>
</tr>

<tr>
<td>Device Management</td>
<td>In the <b>Groups</b> page for smart groups, the columns in the <b>Subassets</b> list are now configured in the same way as the <b>All devices</b> list at the time when the respective smart group is created, including sorting, visibility, order and custom columns. Filters that are part of the smart group definition are not displayed. Further filters can be applied to search among group devices.</td>
<td>DM-1545</td>
<td>10.16.208.0</td>
</tr>

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
<td>The accessibility of the LWM2M UI has been improved, for example, in the <b>LWM2M bootstrap parameters</b> tab and in the <b>LWM2M post-operations</b> page.</td>
<td>DM-1692</td>
<td>10.16.248.0</td>
</tr>

<tr>
<td>LWM2M</td>
<td>The LWM2M bulk registration now also supports the creation of external IDs and extra fragments in managed objects like it is supported in the general bulk registration. Furthermore, it is now possible to assign LWM2M devices to groups as part of the LWM2M bulk registration process.</td>
<td>DM-1544</td>
<td>10.16.110.0</td>
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
<td>On the <b>Software</b> tab in the device details, the <b>Reload</b> button now correctly updates the <b>Installed software</b> list.</td>
<td>DM-2005</td>
<td>10.17.0.64</td>
</tr>

<tr>
<td>Device Management</td>
<td>In events and alarms views, custom properties with numeric values were incorrectly parsed and displayed as dates in the Chrome browser. This is now fixed.</td>
<td>DM-1999</td>
<td>10.17.0.46</td>
</tr>

<tr>
<td>Device Management</td>
<td>In device list views, when a device was deleted, any related child devices were deleted as well. This functionality has now been enhanced. On device deletion, any existing child hierarchy types, that is, not only devices but also additions and assets are deleted accordingly.</td>
<td>DM-2003</td>
<td>10.17.0.34</td>
</tr>

<tr>
<td>Device Management</td>
<td>On the <b>Shell</b> tab in the device details, when a shell command operation is created, its name now corresponds to the command text if available. If no command text is available then it displays the operation description.</td>
<td>DM-2069</td>
<td>10.17.0.33</td>
</tr>

<tr>
<td>Device Management</td>
<td>On bulk device registration views the <b>Upload</b> button is now disabled if there is no file selected or if the selected file is invalid.</td>
<td>DM-1641</td>
<td>10.16.260.0</td>
</tr>

<tr>
<td>Device Management</td>
<td>By adding or removing an external identifier of type <code>c8y_Serial</code> to/from the monitored device, the device connection monitoring is notified accordingly to start or stop with the specified external identifier.</td>
<td>MTM-50025</td>
<td>10.16.260.0</td>
</tr>

<tr>
<td>Device Management</td>
<td>The "Groups" column in the device list formerly displayed all groups higher in the hierarchy to which the device belonged directly or transitively. This has been fixed and now only the direct parent groups are displayed.</td>
<td>DM-1870</td>
<td>10.16.246.0</td>
</tr>

<tr>
<td>Device Management</td>
<td>The option to copy the home page dashboard has been removed since it didn't provide useful functionality.</td>
<td>DM-1869</td>
<td>10.16.191.0</td>
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
<td>Digital Twin Manager</td>
<td>For assets created with the Digital Twin Manager, custom properties of the type "number" with the value "0" are now displayed properly as "0", not as "Undefined".</td>
<td>MTM-49870</td>
<td>10.16.185.0</td>
</tr>

<tr>
<td>LWM2M</td>
<td>In certain cases the migration of LWM2M devices registered on versions before 10.15 reported "Unable to process device" for certain devices. This happened due to adjustments to the device configuration, for example when editing the registration lifetime. With this fix, the migration logic robustness has been improved.</td>
<td>10.17.0.47</td>
<td>DM-2022</td>
</tr>

<tr>
<td>LWM2M</td>
<td>In the older Leshan demo client, the device registration requests for the Cumulocity IoT LWM2M demo device and possibly also some other devices could contain spaces between the core link separators. This was successfully handled by the LWM2M agent 10.14 and below but caused the LWM2M agent 10.15 and above to reject these device requests. Now, the LWM2M server accepts these requests again. The older device registration requests can be processed again.</td>
<td>10.17.0.41</td>
<td>DM-2070</td>
</tr>

<tr>
<td>LWM2M</td>
<td>The LWM2M agent now provides a better processing rate of the external decoder events by parallelizing their execution.</td>
<td>DM-1840</td>
<td>10.16.260.0</td>
</tr>


<tr>
<td>LWM2M</td>
<td>A new LWM2M device configuration option has been added to control if the persisted values in the <b>Objects</b> tab get removed in case a read, write or observe observation fails. The option is configurable in the new single device registration in the advanced settings or by having the "c8y_GenericUI_retainOldValuesIfError" fragment in the LWM2M device managed object. For details refer to <a href="https://cumulocity.com/guides/10.17.0/protocol-integration/lwm2m/#advanced-settings" class="no-ajaxy">LWM2M > Registering LWM2M devices > Advanced settings</a> in the <i>Protocol integration guide</i>.</td>
<td>DM-1560</td>
<td>10.16.246.0</td>
</tr>

<tr>
<td>LWM2M</td>
<td>The LWM2M agent now allows users to write binary data to a resource on a device using a shell operation. For more details about the shell command, refer to <a href="https://cumulocity.com/guides/10.17.0/protocol-integration/lwm2m/#shell-commands" class="no-ajaxy">LWM2M > Handling LWM2M shell commands</a> in the <i>Protocol integration guide</i>.</td>
<td>DM-1241</td>
<td>10.16.211.0</td>
</tr>

<tr>
<td>LWM2M</td>
<td>By default, the LWM2M object-resource mappings of the Management tenant that are configured using the LWM2M device protocols were not inherited by the subtenants. With this change, the LWM2M object-resource mappings defined in the Management tenant are applied to all its subtenants by default. The default mappings from the Management tenant can also be overwritten by uploading the LWM2M device protocol for the LWM2M object on the subtenant level as described in <a href="https://cumulocity.com/guides/10.17.0/protocol-integration/lwm2m/#device-protocols" class="no-ajaxy">LWM2M > LWM2M device protocols</a> in the <i>Protocol integration guide</i>. </td>
<td>DM-1778</td>
<td>10.16.206.0</td>
</tr>

<tr>
<td>LWM2M</td>
<td>While updating the security info for PSK devices in the database, the LWM2M agent internally deleted the old security managed object and created a new one. Due to the asynchronous deletion of managed objects in the Cumulocity IoT platform, the agent intermittently failed to update the security info. With the current changes, the LWM2M agent updates the required security details in the same managed object instead of removing it first.</td>
<td>DM-1671</td>
<td>10.16.206.0</td>
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
<td>The LWM2M agent now fetches a limited number of pending operations if a LWM2M device sends a registration or a registration update. This prevents the LWM2M agent to do a high number of requests to the platform if devices have accumulated lots of pending operations. The limit is defined with a property in the LWM2M agent.</td>
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
<td>On editing the OPC UA device details, the data reporting value is now always saved properly.</td>
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
