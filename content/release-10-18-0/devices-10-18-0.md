---
weight: 50
title: Device management & connectivity
layout: bundle
---

<!--10.17.1.0 - 10.17.159.0-->

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
<td>Added support for rendering dropdown fields in JSON Schema Formly in the extensible device registration.</td>
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
<td>On the <b>Software</b> tab in the device details, the <b>Reload</b> button now correctly updates the <b>Installed software</b> list.</td>
<td>DM-2005</td>
<td>10.17.141.0</td>
</tr>

<tr>
<td>Device Management</td>
<td>In events and alarms views, custom properties with numeric values were incorrectly parsed and displayed as dates in the Chrome browser. This is now fixed.</td>
<td>DM-1999</td>
<td>10.17.118.0</td>
</tr>

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
<td>In certain cases the migration of LWM2M devices registered on versions before 10.15 reported "Unable to process device" for certain devices. This happened due to adjustments to the device configuration, for example when editing the registration lifetime. With this fix, the migration logic robustness has been improved.</td>
<td>10.17.107.0</td>
<td>DM-2022</td>
</tr>

<tr>
<td>LWM2M</td>
<td>In the older Leshan demo client, the device registration requests for the Cumulocity IoT LWM2M demo device and possibly also some other devices could contain spaces between the core link separators. This was successfully handled by the LWM2M agent 10.14 and below but caused the LWM2M agent 10.15 and above to reject these device requests. Now, the LWM2M server accepts these requests again. The older device registration requests can be processed again.</td>
<td>10.17.105.0</td>
<td>DM-2070</td>
</tr>

<tr>
<td>LWM2M</td>
<td>The <b>Objects</b> tab now correctly displays JSON values in string fields.</td>
<td>DM-1973</td>
<td>10.17.47.0</td>
</tr>

<tr>
<td>OPC UA</td>
<td>If the namespace is not defined for a specific node, a missing error handler in the past prevented the scan operation to complete. This is now fixed by skipping nodes that cannot be read. The opcua-device-gateway logs further detail in such cases. The log level INFO contains the failure message and DEBUG contains the stack trace.</td>
<td>DM-1920</td>
<td>10.17.48.0</td>
</tr>

</tbody></table></div>
