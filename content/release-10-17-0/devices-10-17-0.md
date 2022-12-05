---
weight: 50
title: Device management & connectivity
layout: bundle
---

<!--10.16.1.0 - 10.16.69.0-->

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
<td>The data grid's configuration context has been extended with options to omit certain configuration parts when the configuration is persisted. This includes sorting, filtering, column order, column visibility and custom columns.
In the <b>Filter target devices</b> grid in bulk operations and in the <b>Assign devices</b> grid in groups, filters are no longer persisted in order to not disturb users with previously applied filters.</td>
<td>DM-1584</td>
<td>10.16.66.0</td>
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
<td>Device Management</td>
<td>In case of many active alarms of different severities, in the "Active critical alarms" widget users might have needed to press the <b>Load more</b> button several times on an empty list in order to see their active critical alarms. This is now fixed - the widget always initially shows active critical alarms if available and the <b>Load more</b> button does not load empty pages.</td>
<td>DM-1646</td>
<td>10.16.31.0</td>
</tr>

<tr>
<td>OPC UA</td>
<td>Due to a change introduced in 10.14, the opcua-device-gateway on OPC UA server connects or reconnects did a full device type matching with a comparison of device types to the server's address space to find matched nodes and the application of these matched nodes. With this fix, the opcua-device-gateway directly applies the matched nodes settings if there was a matching done previously and no more recent updates to the device types were done.</td>
<td>DM-1651</td>
<td>10.16.13.0</td>
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

</tbody></table></div>
