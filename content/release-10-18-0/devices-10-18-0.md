---
weight: 50
title: Device management & connectivity
layout: bundle
---

<!--10.17.1.0 - 10.17.100.0-->

### Improvements

<div><table ><colgroup>
<col style="width: 15%;"><col style="width: 55%;"><col style="width: 15%;"><col style="width: 15%;"></colgroup><thead><tr>
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
<td>Added support for rendering dropdown fields in Formly from JSON Schema in the extensible device registration.</td>
<td>DM-1921</td>
<td>10.17.67.0</td>
</tr>

<tr>
<td>Device Management</td>
<td>The step headers "1, 2, 3 ..." of the "Connect smartphone" wizard can no longer be clicked. The navigation now works exclusively via the buttons in the footer of the wizard. Moreover, the text which is displayed if an error occurs during the registration has been revised. If the last step ends in an error message, the last header now also reflects this error status.</td>
<td>DM-1930</td>
<td>10.17.25.0</td>
</tr>

<tr>
<td>LWM2M</td>
<td>If event logging is enabled for the LWM2M microservice from the configuration file of the LWM2M agent, the agent now creates new logs as events with detailed information about the reason of failure when a device operation is not executed due to the device connectivity.</td>
<td>DM-231</td>
<td>10.17.37.0</td>
</tr>

</tbody></table></div>

### Fixes

<div><table ><colgroup>
<col style="width: 15%;"><col style="width: 55%;"><col style="width: 15%;"><col style="width: 15%;"></colgroup><thead><tr>
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
<td>On the <b>Shell</b> tab in the device details, when a shell command operation is created, its name now corresponds to the command text if available. If no command text is available then it displays the operation description.</td>
<td>DM-2069</td>
<td>10.17.74.0</td>
</tr>

<tr>
<td>Device Management</td>
<td>In device list views, when a device was deleted, any related child devices were deleted as well. This functionality has now been enhanced. On device deletion, any existing child hierarchy types, that is, not only devices but also additions and assets are deleted accordingly.</td>
<td>DM-2003</td>
<td>10.17.73.0</td>
</tr>

<tr>
<td>Device Management</td>
<td>The <b>Assign devices<b> button is now disabled for users without the required permissions.</td>
<td>MTM-50928</td>
<td>10.17.16.0</td>
</tr>

<tr>
<td>LWM2M</td>
<td>The <b>Objects</b> tab now correctly displays JSON values in string fields.</td>
<td>DM-1973</td>
<td>10.17.47.0</td>
</tr>

<tr>
<td>OPC UA</td>
<td>If the namespace is not defined for a specific node, a missing error handler in the past prevented the scan operation to complete. This is now fixed by skipping nodes that cannot be read. The opcua-device-gateway logs further detail in such cases. The log level INFO contains the failure message and DEBUG contains the stacktrace.</td>
<td>DM-1920</td>
<td>10.17.48.0</td>
</tr>

</tbody></table></div>
