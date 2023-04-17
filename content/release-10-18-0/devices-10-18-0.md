---
weight: 50
title: Device management & connectivity
layout: bundle
---

<!--10.17.1.0 - 10.17.187.0; 10.18.0.0-10.18.0.16-->

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
<td>Two new LWM2M shell commands have been added.
- The new <code>executelegacy</code> command allows LWM2M execute requests with non-standard LWM2M parameters. The behavior of this operation resembles the semantics of the existing <code>execute</code> operation until version 10.15.
- The new <code>coap</code> shell command enables making raw CoAP requests to devices to facilitate non-standard communication in exceptional cases.
<br>Refer to the <a href="https://cumulocity.com/guides/10.18.0/protocol-integration/lwm2m/#shell-commands" class="no-ajaxy">LWM2M > Handling LWM2M shell commands<a/> in the <i>Protocol integration guide</i> for details on these operations.</td>
<td>DM-2153</td>
<td>10.18.0.6</td>
</tr>

<tr>
<td>LWM2M</td>
<td>The performance of the <code>migrateLwm2mDevices</code> operation has been improved. New command line arguments were introduced with the operation. A list of legacy LWM2M devices can be directly specified from the shell command. Moreover, the migration of the LWM2M client registration objects can also be skipped using an argument. For details, refer to <a href="https://cumulocity.com/guides/10.18.0/protocol-integration/lwm2m/#migration-of-the-lwm2m-devices" class="no-ajaxy">LWM2M > LWM2M connector device > Migration of the LWM2M devices<a/> in the <i>Protocol integration guide</i>.</td>
<td>DM-1866</td>
<td>10.18.0.5</td>
</tr>

<tr>
<td>LWM2M</td>
<td>A LWM2M device can now completely be deleted from the devices list without an additional clean-up operation. This is done in the same way as any other device is deleted, that is, via the delete icon in the respective row.</td>
<td>DM-867</td>
<td>10.17.173.0</td>
</tr>

<tr>
<td>LWM2M</td>
<td>If event logging is enabled for the LWM2M microservice from the configuration file of the LWM2M agent, the agent now creates new logs as events with detailed information about the reason of failure when a device operation is not executed due to the device connectivity.</td>
<td>DM-231</td>
<td>10.17.37.0</td>
</tr>

<tr>
<td>OPC UA</td>
<td>The OPC UA device gateway can now be run with Thin Edge. The gateway device is automatically created as a child of the Thin Edge device. For more information on the configurations, refer to the Thin Edge section in <a href="https://cumulocity.com/guides/10.18.0/protocol-integration/opcua/#gateway-register" class="no-ajaxy">OPC UA > Gateway configuration and registration<a/> in the <i>Protocol integration guide</i>.</td>
<td>DM-887</td>
<td>10.17.174.0</td>
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
<td>On the <b>Services</b> tab in the device details, the filter for the "Status" column did not work properly and did not return any results when filtering was applied. This is now fixed.</td>
<td>DM-2002</td>
<td>10.17.186.0</td>
</tr>

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
<td>Loriot</td>
<td>Events created by the Loriot agent when sending uplink requests are now considered device requests and provide connectivity status and availability monitoring.</td>
<td>DM-2139</td>
<td>10.17.170.0</td>
</tr>

<tr>
<td>LWM2M</td>
<td>The "TYPE" CSV column is now treated as case-insensitive in the LWM2M bulk device registration. This means that the device type gets properly assigned, no matter if "type", "TYPE", "Type" or other variants are used in the CSV file.</td>
<td>DM-2120</td>
<td>10.17.185.0</td>
</tr>

<tr>
<td>LWM2M</td>
<td>The LWM2M agent now ensures that a LWM2M client registration is expired and removed from the database if the LWM2M client does not update its registration within the respective registration lifetime period.</td>
<td>DM-1895</td>
<td>10.17.185.0</td>
</tr>

<tr>
<td>LWM2M</td>
<td>During the LWM2M client registration, if the agent failed to find the registered device from the database due to a communication problem, an internal object related to the device managed object was automatically removed by the agent. Afterwards, LWM2M clients always failed to connect. This is now fixed and the internal object is only removed if the actual device managed object does not exist in the database.</td>
<td>DM-2131</td>
<td>10.17.178.0</td>
</tr>


<tr>
<td>LWM2M</td>
<td>The LWM2M device type can freely be chosen by the user. Therefore, devices which do not have the type "c8y_lwm2m" but still are LWM2M devices now also show the LWM2M bootstrap parameters view.</td>
<td>DM-2066</td>
<td>10.17.171.0</td>
</tr>

<tr>
<td>LWM2M</td>
<td>Due to a limitation of the Leshan library used by the LWM2M agent, only device registration messages were supported where the LWM2M version is attached to the LWM2M object. The LWM2M agent has now been extended to also accept LWM2M registration messages where the LWM2M version is attached to the LWM2M object instance.</td>
<td>DM-1893</td>
<td>10.17.169.0</td>
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
