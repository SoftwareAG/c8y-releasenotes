---
weight: 50
title: Device management & connectivity
layout: bundle
---

{{< c8y-admon-info >}}
These release notes contain all changes until build versions
- Core: 10.18.0.127
- UI: 10.18.0.97
{{< /c8y-admon-info >}}

### Improvements

<table>
<colgroup>
<col style="width: 15%;">
<col style="width:50%;">
<col style="width: 10%;">
<col style="width: 12%;">
<col style="width: 13%;">
</colgroup>
<thead><tr>
<th>
Product area</th>
<th>
Description</th>
<th>
Issue</th>
<th>
Build version</th>
<th>Build comp.</th>
</tr>
</thead><tbody>

<tr>
<td>Device management</td>
<td>The Device Management home page now also provides a customizable dashboard so that users can add customized widgets.</td>
<td>DM-1644</td>
<td>10.17.194.0</td>
<td>UI</td>
</tr>

<tr>
<td>Device management</td>
<td>Added support for rendering dropdown fields in JSON Schema Formly in the extensible device registration.</td>
<td>DM-1921</td>
<td>10.17.67.0</td>
<td>UI</td>
</tr>

<tr>
<td>Device management</td>
<td>The step headers "1, 2, 3 ..." of the "Connect smartphone" wizard can no longer be clicked. The navigation now works exclusively via the buttons in the footer of the wizard. Moreover, the text which is displayed if an error occurs during the registration has been revised. If the last step ends in an error message, the last header now also reflects this error status.</td>
<td>DM-1930</td>
<td>10.17.25.0</td>
<td>UI</td>
</tr>

<tr>
<td>LWM2M</td>
<td>The performance of the <code>migrateLwm2mDevices</code> operation has been improved. New command line arguments have been introduced with the operation. A list of legacy LWM2M devices can be specified directly from the shell command. Moreover, the migration of the LWM2M client registration objects can be skipped by using an argument. For details, refer to <a href="https://cumulocity.com/guides/protocol-integration/lwm2m/#migration-of-the-lwm2m-devices" class="no-ajaxy">LWM2M > LWM2M connector device > Migration of the LWM2M devices</a> in the <i>Protocol integration guide</i>.</td>
<td>DM-1866</td>
<td>10.18.0.5</td>
<td>Core</td>
</tr>

<tr>
<td>LWM2M</td>
<td>A LWM2M device can now completely be deleted from the devices list without an additional clean-up operation. This is done in the same way as any other device is deleted, that is, via the delete icon in the respective row.</td>
<td>DM-867</td>
<td>10.17.173.0</td>
<td>UI</td>
</tr>

<tr>
<td>LWM2M</td>
<td>If event logging is enabled for the LWM2M microservice from the configuration file of the LWM2M agent, the agent now creates new logs as events with detailed information about the reason of failure when a device operation is not executed due to the device connectivity.</td>
<td>DM-231</td>
<td>10.17.37.0</td>
<td>Core</td>
</tr>

<tr>
<td>OPC UA</td>
<td>The OPC UA device gateway can now be run with Thin Edge. The gateway device is automatically created as a child of the Thin Edge device. For more information on the configurations, refer to the Thin Edge section in <a href="https://cumulocity.com/guides/10.18.0/protocol-integration/opcua/#gateway-register" class="no-ajaxy">OPC UA > Gateway configuration and registration<a/> in the <i>Protocol integration guide</i>.</td>
<td>DM-887</td>
<td>10.17.174.0</td>
<td>Core</td>
</tr>

<tr>
<td>SmartREST 2.0</td>
<td>Added the SmartREST static template 143 for setting device-supported software types.</td>
<td>DM-1820</td>
<td>10.17.224.0</td>
<td>Core</td>
</tr>

<tr>
<td>SmartREST 2.0</td>
<td>Added SmartREST static templates for updating the operation status by its internal ID. 504 for setting the status to executing, 505 for failed, 506 for successful.</td>
<td>DM-1832</td>
<td>10.17.188.0</td>
<td>Core</td>
</tr>

<tr>
<td>SmartREST 2.0</td>
<td>Added SmartREST static templates for requesting the device's internal ID (123 for request, 124 for response).</td>
<td>DM-1821</td>
<td>10.17.188.0</td>
<td>Core</td>
</tr>

<tr>
<td>SmartREST 2.0</td>
<td>Added the SmartREST static template 201 for creating measurements with multiple fragments and series.</td>
<td>DM-1860</td>
<td>10.17.128.0</td>
<td>Core</td>
</tr>

</tbody></table>

### Fixes

<table>
<colgroup>
<col style="width: 15%;">
<col style="width:50%;">
<col style="width: 10%;">
<col style="width: 12%;">
<col style="width: 13%;">
</colgroup>
<thead><tr>
<th>
Product area</th>
<th>
Description</th>
<th>
Issue</th>
<th>
Build version</th>
<th>Build comp.</th>
</tr>
</thead><tbody>

<tr>
<td>Device management</td>
<td>The device list now shows complex columns like <code>c8y_SoftwareList</code> correctly after converting them to strings.</td>
<td>DM-2410</td>
<td>10.18.0.78</td>
<td>UI</td>
</tr>

<tr>
<td>Device management</td>
<td>Issues with flashing the device availability connection status have been fixed.</td>
<td>MTM-51541</td>
<td>10.18.0.73</td>
<td>None</td>
</tr>

<tr>
<td>Device management</td>
<td>In the device grid, issues with applying filters have been fixed.</td>
<td>DM-2321</td>
<td>10.18.0.57</td>
<td>UI</td>
</tr>

<tr>
<td>Device management</td>
<td>In the SmartREST template editor, issues with the presentation of the <b>External ID type</b> field for Inventory POST messages have been fixed. Under <b>CSV preview</b> the generated "Template creation CSV" has been adjusted to include the "ID", "externalId" and "externalIdType" values.</td>
<td>DM-2093</td>
<td>10.18.0.55</td>
<td>UI</td>
</tr>

<tr>
<td>Device management</td>
<td>When removing a device which has child devices, users can now select either to remove a device user or to remove all child devices. Prior to this change, it was possible to select both options in the UI, but such an action is not supported by the backend.</td>
<td>MTM-45277</td>
<td>10.17.262.0</td>
<td>UI</td>
</tr>

<tr>
<td>Device management</td>
<td>On the <b>Software</b> tab in the device details, the <b>Reload</b> button now correctly updates the <b>Installed software</b> list.</td>
<td>DM-2005</td>
<td>10.17.141.0</td>
<td>UI</td>
</tr>

<tr>
<td>Device management</td>
<td>In events and alarms views, custom properties with numeric values were incorrectly parsed and displayed as dates in the Chrome browser. This is now fixed.</td>
<td>DM-1999</td>
<td>10.17.118.0</td>
<td>UI</td>
</tr>

<tr>
<td>Device management</td>
<td>On the <b>Shell</b> tab in the device details, when a shell command operation is created, its name now corresponds to the command text if available. If no command text is available then it displays the operation description.</td>
<td>DM-2069</td>
<td>10.17.74.0</td>
<td>UI</td>
</tr>

<tr>
<td>Device management</td>
<td>In device list views, when a device was deleted, any related child devices were deleted as well. This functionality has now been enhanced. On device deletion, any existing child hierarchy types, that is, not only devices but also additions and assets are deleted accordingly.</td>
<td>DM-2003</td>
<td>10.17.73.0</td>
<td>UI</td>
</tr>

<tr>
<td>Device management</td>
<td>The <b>Assign devices</b> button is now disabled for users without the required permissions.</td>
<td>MTM-50928</td>
<td>10.17.16.0</td>
<td>UI</td>
</tr>

<tr>
<td>Loriot</td>
<td>The memory limit for the Loriot microservice has been increased to 2Gi.</td>
<td>DM-2427</td>
<td>10.18.0.74</td>
<td>Core</td>
</tr>

<tr>
<td>Loriot</td>
<td>Events created by the Loriot agent when sending uplink requests are now considered device requests and provide connectivity status and availability monitoring.</td>
<td>DM-2139</td>
<td>10.17.170.0</td>
<td>Core</td>
</tr>

<tr>
<td>LWM2M</td>
<td>Custom actions were not always executed if a LWM2M device used a SEND operation to report the whole LWM2M object data. This issue is now resolved and the custom actions are always executed for the resource instances for which they are defined.</td>
<td>DM-2188</td>
<td>10.18.0.57</td>
<td>Messaging Service</td>
</tr>

<tr>
<td>LWM2M</td>
<td>Bulk device registrations and other operations being executed on the LWM2M connector device now show the status FAILED if a problem occurs. Prior to this change, partial failures were reported as SUCCESSFUL.</td>
<td>DM-1951</td>
<td>10.18.0.54</td>
<td>Core</td>
</tr>

<tr>
<td>LWM2M</td>
<td>In certain cases, the registration couldn't be associated with a LWM2M 1.1 SEND request, leading to a 4.04 CoAP response. This is now fixed.</td>
<td>DM-2270</td>
<td>10.18.0.47</td>
<td>Core</td>
</tr>

<tr>
<td>LWM2M</td>
<td>The LWM2M agent now ignores trailing commas at the end of object links in the registration request of a LWM2M client.</td>
<td>DM-2342</td>
<td>10.18.0.46</td>
<td>Core</td>
</tr>

<tr>
<td>LWM2M</td>
<td>The LWM2M agent is now able to properly convert the timestamps from the SenML data reported by the LWM2M client to a platform compatible date-time format for performing respective resource actions.</td>
<td>DM-2150</td>
<td>10.18.0.43</td>
<td>Core</td>
</tr>

<tr>
<td>LWM2M</td>
<td>Multi-line LWM2M post-operations were not executed right after the LWM2M device's new registration when realtime was disabled for the tenant who owns the device. As a result the device might not receive these operations until the next LWM2M device's registration update. This issue is now resolved and LWM2M post-operations are executed right after the LWM2M device's new registration, no matter whether realtime is enabled or not for this kind of devices.</td>
<td>DM-2100</td>
<td>10.18.0.37</td>
<td>Core</td>
</tr>


<tr>
<td>LWM2M</td>
<td>Two new LWM2M shell commands have been added.
<br>- The new <code>executelegacy</code> command allows LWM2M execute requests with non-standard LWM2M parameters. The behavior of this operation resembles the semantics of the existing <code>execute</code> operation until version 10.15.
<br>- The new <code>coap</code> shell command enables making raw CoAP requests to devices to facilitate non-standard communication in exceptional cases.
<br>For details, refer to <a href="https://cumulocity.com/guides/10.17.0/guides/protocol-integration/lwm2m/#shell-commands" class="no-ajaxy">LWM2M > Handling LWM2M shell commands<a/> in the <i>Protocol integration guide</i>.</td>
<td>DM-2153</td>
<td>10.18.0.6</td>
<td>Core</td>
</tr>

<tr>
<td>LWM2M</td>
<td>In the <b>Device objects</b> tab, an issue with entering a parameter in the <b>Execute with parameters</b> field has been resolved.
<td>DM-2160</td>
<td>10.17.226.0</td>
<td>UI</td>
</tr>

<tr>
<td>LWM2M</td>
<td>The LWM2M agent now ensures that a LWM2M client registration is expired and removed from the database if the LWM2M client does not update its registration within the respective registration lifetime period.</td>
<td>DM-1895</td>
<td>10.17.190.0</td>
<td>Core</td>
</tr>

<tr>
<td>LWM2M</td>
<td>During the LWM2M client registration, if the agent failed to find the registered device from the database due to a communication problem, an internal object related to the device managed object was automatically removed by the agent. Afterwards, LWM2M clients always failed to connect. This is now fixed and the internal object is only removed if the actual device managed object does not exist in the database.</td>
<td>DM-2131</td>
<td>10.17.178.0</td>
<td>Core</td>
</tr>


<tr>
<td>LWM2M</td>
<td>The LWM2M device type can freely be chosen by the user. Therefore, devices which do not have the type "c8y_lwm2m" but still are LWM2M devices now also show the LWM2M bootstrap parameters view.</td>
<td>DM-2066</td>
<td>10.17.171.0</td>
<td>UI</td>
</tr>

<tr>
<td>LWM2M</td>
<td>Due to a limitation of the Leshan library used by the LWM2M agent, only device registration messages were supported where the LWM2M version is attached to the LWM2M object. The LWM2M agent has now been extended to also accept LWM2M registration messages where the LWM2M version is attached to the LWM2M object instance.</td>
<td>DM-1893</td>
<td>10.17.169.0</td>
<td>Core</td>
</tr>

<tr>
<td>LWM2M</td>
<td>In certain cases the migration of LWM2M devices registered on versions before 10.15 reported "Unable to process device" for certain devices. This happened due to adjustments to the device configuration, for example when editing the registration lifetime. With this fix, the migration logic robustness has been improved.</td>
<td>10.17.107.0</td>
<td>DM-2022</td>
<td>Core</td>
</tr>

<tr>
<td>LWM2M</td>
<td>In the older Leshan demo client, the device registration requests for the Cumulocity IoT LWM2M demo device and possibly also some other devices could contain spaces between the core link separators. This was successfully handled by the LWM2M agent 10.14 and below but caused the LWM2M agent 10.15 and above to reject these device requests. Now, the LWM2M server accepts these requests again. The older device registration requests can be processed again.</td>
<td>10.17.105.0</td>
<td>DM-2070</td>
<td>Core</td>
</tr>

<tr>
<td>LWM2M</td>
<td>The <b>Objects</b> tab now correctly displays JSON values in string fields.</td>
<td>DM-1973</td>
<td>10.17.47.0</td>
<td>Core</td>
</tr>

<tr>
<td>OPC UA</td>
<td>In case of bad connectivity or network delay gateway devices could go to a state where they were disconnected. This resulted in operation execution being suspended. This issue is now resolved.</td>
<td>DM-2037</td>
<td>10.18.0.30</td>
<td>Messaging Service</td>
</tr>

<tr>
<td>OPC UA</td>
<td>If the namespace is not defined for a specific node, a missing error handler in the past prevented the scan operation to complete. This is now fixed by skipping nodes that cannot be read. The opcua-device-gateway logs further detail in such cases. The log level INFO contains the failure message and DEBUG contains the stack trace.</td>
<td>DM-1920</td>
<td>10.17.48.0</td>
<td>Core</td>
</tr>

</tbody></table>
