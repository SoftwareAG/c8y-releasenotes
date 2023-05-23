---
weight: 50
title: Device management & connectivity
layout: bundle
---

{{< c8y-admon-info >}}
These release notes contain all changes until build version 10.18.120.0.
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
<td>Device Management</td>
<td>In case of bad connectivity or network delay it could happen that a gateway device went to the state of being disconnected. This resulted in operation execution being suspended. This issue is now resolved.</td>
<td>DM-2037</td>
<td>10.18.50.0</td>
<td>Messaging Service</td>
</tr>

<tr>
<td>Device Management</td>
<td>The Device Management home page now also provides a customizable dashboard so that users can add customized widgets.</td>
<td>DM-1644</td>
<td>10.18.39.0</td>
<td>UI</td>
</tr>

<tr>
<td>Device Management</td>
<td>The "Connect Smartphone" wizard illustrations have been updated.</td>
<td>DM-2221</td>
<td>10.18.23.0</td>
<td>UI</td>
</tr>

<tr>
<td>Device Management</td>
<td>In the SmartREST template editor, issues with the presentation of the <b>External ID type</b> field for Inventory POST messages have been fixed. Under <b>CSV preview</b> the generated "Template creation CSV" has been adjusted to include the ID, externalId, externalIdType values.</td>
<td>DM-2093</td>
<td>10.18.22.0</td>
<td>UI</td>
</tr>

<tr>
<td>Device Management</td>
<td>SmartREST Inventory GET templates created in the UI did not generate responses when there was no external ID type declared in the template. This issue has been addressed for both existing and newly created templates.</td>
<td>DM-2126</td>
<td>10.18.7.0</td>
<td>Core</td>
</tr>

<tr>
<td>LWM2M</td>
<td>The performance of the <code>migrateLwm2mDevices</code> operation has been improved. New command line arguments have been introduced with the operation. A list of legacy LWM2M devices can be specified directly from the shell command. Moreover, the migration of the LWM2M client registration objects can be skipped b< using an argument. For details, refer to <a href="https://cumulocity.com/guides/protocol-integration/lwm2m/#migration-of-the-lwm2m-devices" class="no-ajaxy">LWM2M > LWM2M connector device > Migration of the LWM2M devices</a> in the <i>Protocol integration guide</i>.</td>
<td>DM-1866</td>
<td>10.18.10.0</td>
<td>Core</td>
</tr>

<tr>
<td>LWM2M</td>
<td>Two new LWM2M shell commands have been added.
<br>- The new <code>executelegacy</code> command allows LWM2M execute requests with non-standard LWM2M parameters. The behavior of this operation resembles the semantics of the existing <code>execute</code> operation until version 10.15.
<br>- The new <code>coap</code> shell command enables making raw CoAP requests to devices to facilitate non-standard communication in exceptional cases.
<br>For details, refer to <a href="https://cumulocity.com/guides/guides/protocol-integration/lwm2m/#shell-commands" class="no-ajaxy">LWM2M > Handling LWM2M shell commands<a/> in the <i>Protocol integration guide</i>.</td>
<td>DM-2153</td>
<td>10.18.6.0</td>
<td>Core</td>
</tr>

<tr>
<td>Smart Rest 2.0</td>
<td>Added a SmartREST static template (201) for creating measurements with multiple fragments and series.</td>
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

tr>
<td>LWM2M</td>
<td>Bulk device registrations and other operations being executed on the LWM2M connector device now show the status FAILED if a problem occurs. Prior to this change, partial failures were reported as SUCCESSFUL.</td>
<td>DM-1951</td>
<td>10.18.71.0</td>
<td>Core</td>
</tr>

<tr>
<td>LWM2M</td>
<td>In certain cases, the registration couldn't be associated to a LWM2M 1.1 SEND request, leading to a 4.04 CoAP response. This is now fixed.</td>
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

</tbody></table>
