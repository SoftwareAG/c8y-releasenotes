---
weight: 50
title: Device management & connectivity
layout: bundle
---

{{< c8y-admon-info >}}
These release notes refer to the build versions
- Core 10.18.497.0
- UI 10.18.497.0
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
<td>In subasset views, smart group filters are now represented by a filter chips dropdown instead of displaying the raw text filter.</td>
<td>DM-1615</td>
<td>10.18.491.0</td>
<td>UI</td>
</tr>


<tr>
<td>Device management</td>
<td>If a pending device in the registration list has been accepted, the device is now removed from the list instead of the list showing the "accepted" status for the device.</td>
<td>DM-1723</td>
<td>10.18.458.0</td>
<td>UI</td>
</tr>

<tr>
<td>Device management</td>
<td>If the last version of a software is deleted, the software is entirely removed from the repository.</td>
<td>DM-2266</td>
<td>10.18.442.0</td>
<td>UI</td>
</tr>


<tr>
<td>Device management</td>
<td>Users can now customize the dashboard on the <b>Info</b> tab in the device details. Widgets can be moved and resized, and new widgets can be added from a list of available widgets. The dashboard can be reset anytime to the default dashboard settings. By default, the "Asset notes" widget has been removed.</td>
<td>DM-2279</td>
<td>10.18.327.0</td>
<td>UI</td>
</tr>

<tr>
<td>Device management</td>
<td>In the data grid component, a new filter overview dropdown has been added. It displays all active filters in one place and allows users to remove filters.
For custom column implementations, the WebSDK allows developers to provide their own logic to display active filters as items in the filter overview.</td>
<td>DM-1616</td>
<td>10.18.246.0</td>
<td>UI</td>
</tr>

<tr>
<td>Device management</td>
<td>In the Device management application, a wizard has been implemented which guides users through replacing a physical device with another one. The replacing device must be registered in the platform in advance and is removed after the replacement procedure has been finished.</td>
<td>DM-2168</td>
<td>10.18.242.0</td>
<td>UI</td>
</tr>

<tr>
<td>Device management</td>
<td>The Device management home page now also provides a customizable dashboard which lets users add customized widgets.</td>
<td>DM-1644</td>
<td>10.18.39.0</td>
<td>UI</td>
</tr>

<tr>
<td>Device management</td>
<td>The "Connect Smartphone" wizard illustrations have been updated.</td>
<td>DM-2221</td>
<td>10.18.23.0</td>
<td>UI</td>
</tr>

<tr>
<td>LWM2M</td>
<td>The details of a LWM2M device now show a <b>LWM2M configuration</b> tab which replaces the <b>LWM2M bootstrap parameters</b> tab. The new tab is better structured and allows detailed configuration. It contains all configuration options of the former <b>LWM2M bootstrap parameters</b> tab as well as additional setting options:
<br>- LWM2M device settings such as awake time registration parameter, request timeout, serialization format, binary delivery encoding, use timestamp resources, keeping old values
<br>- Device security modes selection including the new X.509 certificate mode and selection for LWM2M bootstrap and server individually
<br>- Firmware update configurations
<br>- A set of LWM2M Server configurations that can be written to the device during bootstrap
<br>For details, refer to <a href="https://cumulocity.com/docs/protocol-integration/lwm2m/" class="no-ajaxy"LWM2M</a> in the user documentation.
<br>If the new <b>LWM2M configuration</b> tab is not displayed and the <b>LWM2M bootstrap parameters</b> tab is displayed instead, the LWM2M agent is installed in an older version that does not yet support the new tab.</td>
<td>DM-342</td>
<td>10.18.483.0</td>
<td>Core</td>
</tr>

<tr>
<td>LWM2M</td>
<td>The performance of the <code>migrateLwm2mDevices</code> operation has been improved. New command line arguments have been introduced with the operation. A list of legacy LWM2M devices can be specified directly from the shell command. Moreover, the migration of the LWM2M client registration objects can be skipped by using an argument. For details, refer to <a href="https://cumulocity.com/docs/protocol-integration/lwm2m/#migration-of-the-lwm2m-devices" class="no-ajaxy"Migration of the LWM2M devices</a> in the user documentation.</td>
<td>DM-1866</td>
<td>10.18.10.0</td>
<td>Core</td>
</tr>

<tr>
<td>LWM2M</td>
<td>Two new LWM2M shell commands have been added.
<br>- The new <code>executelegacy</code> command allows LWM2M execute requests with non-standard LWM2M parameters. The behavior of this operation resembles the semantics of the existing <code>execute</code> operation until version 10.15.
<br>- The new <code>coap</code> shell command enables making raw CoAP requests to devices to facilitate non-standard communication in exceptional cases.
<br>For details, refer to <a href="https://cumulocity.com/docs/protocol-integration/lwm2m/#shell-commands" class="no-ajaxy">Handling LWM2M shell commands<a/> in the user documentation.</td>
<td>DM-2153</td>
<td>10.18.6.0</td>
<td>Core</td>
</tr>

<tr>
<td>SmartREST 2.0</td>
<td>Added the SmartREST static template 507 for changing the device operations status from EXECUTING to FAILED. The operations can be filtered by type. The template is intended for facilitating an operations cleanup after a crash.</td>
<td>DM-2347</td>
<td>10.18.114.0</td>
<td>Core</td>
</tr>

<tr>
<td>SmartREST 2.0</td>
<td>Added the SmartREST static template 125 for sending heartbeat from a device.</td>
<td>DM-2346</td>
<td>10.18.110.0</td>
<td>Messaging Service</td>
</tr>

<tr>
<td>SmartREST2.0 </td>
<td>Added the SmartREST static template 201 for creating measurements with multiple fragments and series.</td>
<td>DM-1860</td>
<td>10.18.34.0</td>
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
<td>Cloud Fieldbus</td>
<td>Previously, the CAN bus protocol limited the representation of numeric values in the maximum value field, which posed limitations when dealing with exceptionally large numbers. To address this limitation, we have implemented a transformation mechanism that allows numeric fields to be defined using textual representations.</td>
<td>DM-2691</td>
<td>10.18.483.0</td>
<td>UI</td>
</tr>

<tr>
<td>Connectivity</td>
<td>The performance of MQTT connections has been improved.  MQTT devices can now connect or reconnect faster, especially if the platform already has a large number of MQTT devices connected.</td>
<td>MTM-53819</td>
<td>10.18.157.0</td>
<td>Core</td>
</tr>

<tr>
<td>Device management</td>
<td>In device protocols, users can now longer create measurement fragments (<b>Measurement type</b> and <b>Measurement series</b> fields) which contain characters that are not allowed by the Measurements API.</td>
<td>DM-2782</td>
<td>10.18.494.0</td>
<td>UI</td>
</tr>

<tr>
<td>Device management</td>
<td>The availability calculations in the "Availability" overview and for individual devices were not correct. Percentages were calculated for the respective time (24 hours, last 7 days and last 30 days) plus an additional 24 hours. The time interval has now been corrected.</td>
<td>DM-2737</td>
<td>10.18.490.0</td>
<td>UI</td>
</tr>


<tr>
<td>Device management</td>
<td>After editing a device protocol details page and leaving the page, a confirmation pop-up is now always properly shown.</td>
<td>DM-2700</td>
<td>10.18.487.0</td>
<td>UI</td>
</tr>

<tr>
<td>Device management</td>
<td>Fixed an issue in the data grid and device grid components where specific string, Boolean, and numeric cell values were wrongly formatted as dates.</td>
<td>DM-2746</td>
<td>10.18.487.0</td>
<td>UI</td>
</tr>

<tr>
<td>Device management</td>
<td>In bulk operations, restrictions on the <code>creationRamp</code> property have been introduced. This allows better control over bulk operation creation and ensures adherence to specified limits. They are determined and can be modified by the system options <code>device-control.bulkoperation.maxcreationramp</code> and <code>device-control.bulkoperation.mincreationramp</code>.</td>
<td>DM-2661</td>
<td>10.18.483.0</td>
<td>UI</td>
</tr>

<tr>
<td>Device management</td>
<td>The device grid now displays an alert if an issue occurs while retrieving the device data. This includes among others errors caused by custom columns configured with an invalid fragment path.</td>
<td>DM-2479</td>
<td>10.18.483.0</td>
<td>UI</td>
</tr>

<tr>
<td>Device management</td>
<td>In the <b>Device profiles</b> page, when adding a repository item (software, firmware, configuration) if the device profile has a device type defined, the items shown either correspond to this device type or they don't have a device type specified. In some cases, repository items without a filter were not visualized in the window for adding an item. These items are now correctly shown.</td>
<td>DM-2547</td>
<td>10.18.417.0</td>
<td>UI</td>
</tr>

<tr>
<td>Device management</td>
<td>The alarms column has been removed from top-level groups because groups do not contain alarms themselves and the column only shows direct alarms.</td>
<td>DM-2106</td>
<td>10.18.405.0</td>
<td>UI</td>
</tr>


<tr>
<td>Device management</td>
<td>Fixed an issue with incorrect loading of certificates to the trust store during core startup/restart, which caused errors in authenticating MQTT devices using certificates.</td>
<td>MTM-55328</td>
<td>10.18.335.0</td>
<td>Core</td>
</tr>


<tr>
<td>Device management</td>
<td>The device list now shows complex columns like <code>c8y_SoftwareList</code> correctly after converting them to strings.</td>
<td>DM-2410</td>
<td>10.18.226.0</td>
<td>UI</td>
</tr>


<tr>
<td>Device management</td>
<td>Issues with the group filter in device grids resulting in empty result lists have been fixed. The first matching asset is now correctly shown as the filter value.</td>
<td>DM-2371</td>
<td>10.18.236.0</td>
<td>UI</td>
</tr>

<tr>
<td>Device management</td>
<td>The Device simulator microservice sent some internal requests without application key header which resulted in these requests being counted as device requests. The appropriate application key header has been added so that all requests are now counted correctly.</td>
<td>DM-2306</td>
<td>10.18.127.0</td>
<td>Core</td>
</tr>

<tr>
<td>Device management</td>
<td>In the SmartREST template editor, issues with the presentation of the <b>External ID type</b> field for Inventory POST messages have been fixed. Under <b>CSV preview</b> the generated "Template creation CSV" has been adjusted to include the "ID", "externalId" and "externalIdType" values.</td>
<td>DM-2093</td>
<td>10.18.122.0</td>
<td>UI</td>
</tr>

<tr>
<td>Device management</td>
<td>In the device grid, issues with applying filters have been fixed.</td>
<td>DM-2321</td>
<td>10.18.128.0</td>
<td>UI</td>
</tr>

<tr>
<td>Device Management</td>
<td>Issues with the Ericsson DCP SMS provider when attempting to send an SMS have been resolved and outgoing requests are sent as expected to the Ericsson DCP API.</td>
<td>DM-2215</td>
<td>10.18.101.0</td>
<td>Core</td>
</tr>

<tr>
<td>Device management</td>
<td>Issues with flashing the device availability connection status have been fixed.</td>
<td>MTM-51541</td>
<td>10.18.106.0</td>
<td>Core</td>
</tr>

<tr>
<td>Device management</td>
<td>In the SmartREST template editor, issues with the presentation of the <b>External ID type</b> field for Inventory POST messages have been fixed. Under <b>CSV preview</b> the generated "Template creation CSV" has been adjusted to include the "ID", "externalId" and "externalIdType" values.</td>
<td>DM-2093</td>
<td>10.18.22.0</td>
<td>UI</td>
</tr>

<tr>
<td>Device management</td>
<td>SmartREST Inventory GET templates created in the UI did not generate responses when there was no external ID type declared in the template. This issue has been addressed for both existing and newly created templates.</td>
<td>DM-2126</td>
<td>10.18.7.0</td>
<td>Core</td>
</tr>

<tr>
<td>Loriot</td>
<td>The memory limit for the Loriot microservice has been increased to 2Gi.</td>
<td>DM-2427</td>
<td>10.18.112.0</td>
<td>Core</td>
</tr>

<tr>
<td>LWM2M</td>
<td>Fixed an issue with the LWM2M bulk device registration not accepting CSV-typed files when using the Firefox browser on Windows environments.</td>
<td>DM-2623</td>
<td>10.18.483.0</td>
<td>UI</td>
</tr>

<tr>
<td>LWM2M</td>
<td>A fail-safe mechanism to regularly get pending LWM2M device connector operations from the platform has been added in addition to the real-time mechanism in the LWM2M agent. This mechanism is beneficial when real-time connections between the LWM2M agent and the platform are unstable.</td>
<td>DM-2652</td>
<td>10.18.289.0</td>
<td>Core</td>
</tr>

<tr>
<td>LWM2M</td>
<td>During a large number of parallel LWM2M DTLS device connection requests, used for devices using PSK secured mode, the LWM2M agent was not able to handle all connections at the same time. This caused platform connection failures for the devices. In the LWM2M agent, the default settings for this part have been adjusted and made configurable to serve large parallel connections.</td>
<td>DM-2651</td>
<td>10.18.280.0</td>
<td>Core</td>
</tr>

<tr>
<td>LWM2M</td>
<td>When reading an entire LWM2M object which contains multiple object instances in a simple read, observer or send operation, the LWM2M agent processed and stored only one of the resources of these object instances. This is now resolved and the LWM2M agent processes and stores all resource data from multiple object instances correctly.</td>
<td>DM-2426</td>
<td>10.18.253.0</td>
<td>Core</td>
</tr>

<tr>
<td>LWM2M</td>
<td>The <code>queueMode</code> property of LWM2M registrations is now persisted correctly for the LWM2M registration updates.</td>
<td>DM-2563</td>
<td>10.18.230.0</td>
<td>Core</td>
</tr>

<tr>
<td>LWM2M</td>
<td>The LWM2M agent now correctly persists all registration update parameters. Previously, the LWM2M agent did not store changes of registration parameters, for example, updated registration lifetimes. This is now fixed.</td>
<td>DM-2503</td>
<td>10.18.196.0</td>
<td>Core</td>
</tr>

<tr>
<td>LWM2M</td>
<td>For operation execution the LWM2M agent now selects the content format based on the set of content formats supported by the device.</td>
<td>DM-2269</td>
<td>10.18.117.0</td>
<td>Core</td>
</tr>

<tr>
<td>LWM2M</td>
<td>The configuration flag <code>fwResetStateMachineOnStart</code> has been added to control if the LWM2M agent resets the firmware update state machine on the client at the beginning of a firmware update. The default of this flag is <code>true</code> which matches the existing behaviour of the LWM2M agent. It is available in the [device registration settings](https://cumulocity.com/docs/protocol-integration/lwm2m/#device-registration-settings).</td>
<td>DM-2292</td>
<td>10.18.107.0</td>
<td>Core</td>
</tr>

<tr>
<td>LWM2M</td>
<td>Bulk device registrations and other operations being executed on the LWM2M connector device now show the status FAILED if a problem occurs. Prior to this change, partial failures were reported as SUCCESSFUL.</td>
<td>DM-1951</td>
<td>10.18.71.0</td>
<td>Core</td>
</tr>

<tr>
<td>LWM2M</td>
<td>In certain cases, the registration couldn't be associated with a LWM2M 1.1 SEND request, leading to a 4.04 CoAP response. This is now fixed.</td>
<td>DM-2270</td>
<td>10.18.69.0</td>
<td>Core</td>
</tr>

<tr>
<td>LWM2M</td>
<td>The LWM2M agent now ignores trailing commas at the end of object links in the registration request of a LWM2M client.</td>
<td>DM-2342</td>
<td>10.18.69.0</td>
<td>Core</td>
</tr>

<tr>
<td>LWM2M</td>
<td>Multi-line LWM2M post-operations were not executed right after the LWM2M device's new registration when realtime was disabled for the tenant who owns the device. As a result the device might not receive these operations until the next LWM2M device's registration update. This issue is now resolved and LWM2M post-operations are executed right after the LWM2M device's new registration, no matter whether realtime is enabled or not for this kind of devices.</td>
<td>DM-2100</td>
<td>10.18.58.0</td>
<td>Core</td>
</tr>

<tr>
<td>LWM2M</td>
<td>The LWM2M agent can now properly convert the timestamps from the SenML data reported by the LWM2M client to a platform compatible date-time format for performing respective resource actions.</td>
<td>DM-2150</td>
<td>10.18.58.0</td>
<td>Core</td>
</tr>

<tr>
<td>OPC UA</td>
<td>The endpoint validation happening during the connection to an OPC UA server can now optionally be disabled. This can be done in the gateway configuration by changing the <code>gateway.connectivity.validateDiscoveredEndpoints</code> setting to "false". Alternatively, it can be controlled via the OPC UA server managed object by setting the fragment <code>validateDiscoveredEndpoints</code> to "false".  For more details, refer to <a href="https://cumulocity.com/guides/protocol-integration/opcua/" class="no-ajaxy">OPC UA</a> in the <i>Protocol integration guide</i>.</td>
<td>DM-2425</td>
<td>10.18.253.0</td>
<td>Core</td>
</tr>

<tr>
<td>OPC UA</td>
<td>The application of OPC UA device protocols was unreliable when there were more than 1000 protocols. This is now fixed.</td>
<td>DM-2634</td>
<td>10.18.253.0</td>
<td>Core</td>
</tr>

<tr>
<td>OPC UA</td>
<td>In OPC UA device gateway nodes, expected but missing information prevented the completion of the address space scan operation. This is now fixed by skipping these nodes and adding an error message in the opcua-device-gateway log files.
Additionally, the overall scanning speed has been improved for the full and partial address space scan operations.</td>
<td>DM-2365</td>
<td>10.18.198.0</td>
<td>Core</td>
</tr>

<tr>
<td>OPC UA</td>
<td>In case of bad connectivity or network delay gateway devices could go to a state where they were disconnected. This resulted in operation execution being suspended. This issue is now resolved.</td>
<td>DM-2037</td>
<td>10.18.50.0</td>
<td>Messaging Service</td>
</tr>

</tbody></table>
