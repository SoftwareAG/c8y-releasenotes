---
weight: 40
title: Platform services
layout: bundle
---

{{< c8y-admon-info >}}
These release notes contain all changes until build version 10.17.0.161.
{{< /c8y-admon-info >}}


### Improvements


<table ><colgroup>
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
<td>Administration</td>
<td>Context help has been added in the <b>Extensions</b> page.</td>
<td>MTM-50209</td>
<td>10.17.0.141</td>
<td>UI</td>
</tr>

<tr>
<td>Authentication</td>
<td>In the <b>Trusted certificates</b> page, an issue with the border of the <b>Certificate</b> field has been fixed.</td>
<td>MTM-48649</td>
<td>10.16.45.0</td>
<td>n/a</td>
</tr>

<tr>
<td>Core platform</td>
<td>The switch <code>acl.measurement.only-accessible-fragments</code> has been added to allow administrators to define inventory roles which let users retrieve a subset of the available fragments from all measurements. The property can be set globally or per tenant. If it is set, the measurement series is filtered according to the ACL (access control list) role owned by the user and assigned to the device group. Returned measurements only contain the available fragments listed in assigned ACL roles.</td>
</td>
<td>MTM-49607</td>
<td>10.16.260.0</td>
<td>n/a</td>
</tr>

<tr>
<td>Core platform</td>
<td>On creating a measurement, it is now validated for all processing modes if the measurement exists, that is for PERSISTENT, QUIESCENT, TRANSIENT and CEP.
Prior to this change, the existence of the measurement was only validated for persistence processing modes (PERSISTENT and QUIESCENT).</td>
<td>MTM-50498</td>
<td>10.16.248.0</td>
<td>n/a</td>
</tr>

<tr>
<td>Core platform</td>
<td>To save network bandwidth and improve the time to download when the network connection is lost, Cumulocity IoT now supports chunked binary file downloads. To take advantage of this it is necessary to set the Range header. If set the binaries are split into chunks and if the network connection is lost the download is resumed rather than started from the beginning. See also the <a href="https://cumulocity.com/api/core/10.17.0/#operation/getBinariesResource" class="no-ajaxy">Cumulocity IoT OpenAPI Specification<a/>.</td>
<td>MTM-49998</td>
<td>10.16.248.0</td>
<td>n/a</td>
</tr>

<tr>
<td>Core platform</td>
<td>Deleting measurements by the <code>dateFrom</code> and <code>dateTo</code> query parameters is now supported on tenants with enabled enhanced time series support. Parameters must be truncated to full hours (for example, 2022-08-19T14:00:00.000Z), otherwise an error will be returned.
</td>
<td>MTM-49441</td>
<td>10.16.74.0</td>
<td>n/a</td>
</tr>

<tr>
<td>Enterprise tenant</td>
<td>The placeholders in the configuration templates for Enterprise tenants were updated with new values.</td>
<td>MTM-49860</td>
<td>10.16.163.0</td>
<td>n/a</td>
</tr>

<tr>
<td>Product experience</td>
<td>Users can now disable (or enable) all in-product information & communication options. Prior to this change, users could only opt-out from the  Knowledge Hub (product experience tracking).</td>
<td>MTM-48214</td>
<td>10.16.79.0</td>
<td>n/a</td>
</tr>

<tr>
<td>REST API</td>
<td>The performance of GET requests on the <code>/user/users</code> endpoint has been improved by better utilization of database indexes.</td>
<td>MTM-52566</td>
<td>10.17.0.124</td>
<td>Core</td>
</tr>

<tr>
<td>REST API</td>
<td>The performance of the Inventory API has been improved by removing two additional database queries for GET <code>/managedObjects</code>.</td>
<td>MTM-51973</td>
<td>10.17.0.123</td>
<td>Core</td>
</tr>

<tr>
<td>REST API</td>
<td>The REST API endpoint <code>/application/applications/{id}/logs</code> so far required the role ROLE_APPLICATION_MANAGEMENT_ADMIN. This has been changed. The endpoint now requires either the ROLE_APPLICATION_MANAGEMENT_ADMIN or ROLE_APPLICATION_MANAGEMENT_READ.</td>
<td>MTM-52028</td>
<td>10.17.0.107</td>
<td>Core</td>
</tr>

<tr>
<td>REST API</td>
<td>The performance of the Identity API <code>GET /externalIds/{type}/{externalId}</code> method has been improved.</td>
<td>MTM-50837</td>
<td>10.17.0.52</td>
<td>Core</td>
</tr>

<tr>
<td>Security</td>
<td>An attribute has been added to all external application links, that prevents tab nabbing (a security vulnerability that could be used to gain the user's browser session).</td>
<td>MTM-48156</td>
<td>10.16.249.0</td>
<td>n/a</td>
</tr>

</tbody></table>



### Fixes

<table >
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
<td>Administration</td>
<td>Fixed an issue where users with inventory roles only could not add new groups.</td>
<td>MTM-52413</td>
<td>10.17.0.147</td>
<td>UI</td>
</tr>

<tr>
<td>Administration</td>
<td>Fixed an issue with the names of the files downloaded from the platform (for example, from the file repository or from event attachments). UTF-8 characters, for example, in the Japanese localization are no longer missing if the file name includes special characters like "+".</td>

<td>MTM-53056</td>
<td>10.17.0.145</td>
<td>UI</td>
</tr>

<tr>
<td>Administration</td>
<td>Redundant activity log entries in the application details are now filtered out.</td>
<td>MTM-52309</td>
<td>10.17.0.1734</td>
<td>UI</td>
</tr>

<tr>
<td>Administration</td>
<td>UTF-8 characters are now supported in names of files downloaded from the files repository with the export functionality.</td>
<td>MTM-46346</td>
<td>10.17.0.51</td>
<td>Core</td>
</tr>

<tr>
<td>Administration</td>
<td>The performance of the <b>Users</b> page has been improved. Loading root users with a large number of sub-users (100+) now takes less than 1s, while previously, with a larger number of sub-users (around 500), it took around 30-60s. Moreover, the request to fetch all children of a root user is now up to 10 times faster, depending on the number of sub-users and the number of their global roles.</td>
<td>MTM-45523</td>
<td>10.16.156.0</td>
<td>n/a</td>
</tr>

<tr>
<td>Administration</td>
<td>The phone number input validation has been improved. The validation status is shown after the input loses focus for the first time, the red border and the error message appear in sync, and the message now mentions all allowed characters, together with an example of a valid phone number value.</td>
<td>MTM-47002</td>
<td>10.16.79.0</td>
<td>n/a</td>
</tr>

<tr>
<td>Administration</td>
<td>Providing a non-existing tenant ID when resetting the password will no longer cause a server error.</td>
<td>MTM-45633</td>
<td>10.16.13.0</td>
<td>n/a</td>
</tr>

<tr>
<td>Authentication</td>
<td>Fixed an issue with the device request counter being increased while switching between the standard applications (Administration, Cockpit, Device management).</td>
<td>MTM-49427</td>
<td>10.17.0.120</td>
<td>UI</td>
</tr>

<tr>
<td>Authentication</td>
<td>The performance of the first user requests sent after node restart has been improved. Prior to this change, there was an issue in rare cases where the number of all global roles in a tenant was close to but not exceeding 100, and many thousands of devices were concurrently trying to authorize MQTT connections on the restarted node.</td>
<td>MTM-52049</td>
<td>10.17.0.72</td>
<td>Core</td>
</tr>

<tr>
<td>Authentication</td>
<td>On the <b>Basic settings</b> tab in the <b>Authentication</b> page, TFA (two-factor authentication) is now correctly shown as enabled if enforced by the platform.</td>
<td>MTM-49942</td>
<td>10.16.259.0</td>
<td>n/a</td>
</tr>

<tr>
<td>Authentication</td>
<td>Issues with removing trusted or forbidden user agents in the <b>Authentication</b> page have been fixed. The delete icon now only deletes the agent it applies to.</td>
<td>MTM-48062</td>
<td>10.16.190.0</td>
<td>n/a</td>
</tr>

<tr>
<td>Authentication</td>
<td>During the reset password process the tenant ID setup dialog was presented instead of the reset password dialog. Now the reset password dialog appears correctly if the reset link is used.</td>
<td>MTM-50205</td>
<td>10.16.181.0</td>
<td>n/a</td>
</tr>

<tr>
<td>Authentication</td>
<td>The two-factor authentication verification dialog does no longer show two <b>Cancel</b> buttons.</td>
<td>MTM-49935</td>
<td>10.16.148.0</td>
<td>n/a</td>
</tr>

<tr>
<td>Authentication</td>
<td>The default email templates sent when resetting passwords or confirming password changes have been extended with a username.</td>
<td>
MTM-49760</td>
<td>10.16.129.0</td>
<td>n/a</td>
</tr>

<tr>
<td>Authentication</td>
<td>An issue with the QR code in the two-factor authentication setup window has been fixed.</td>
<td>MTM-49536</td>
<td>10.16.129.0</td>
<td>n/a</td>
</tr>

<tr>
<td>Authentication</td>
<td>In the <b>Trusted certificates</b> page, an issue with the border of the <b>Certificate</b> field has been fixed.</td>
<td>MTM-48649</td>
<td>10.16.45.0</td>
<td>n/a</td>
</tr>

<tr>
<td>Core platform</td>
<td>Fixed an issue where deleting enhanced time series measurements did not work with the <code>fragmentType</code> query parameter.</td>
<td>MTM-51379</td>
<td>10.17.0.92</td>
<td>Core</td>
</tr>

<tr>
<td>Core platform</td>
<td>Fixed an issue in which some queries containing single apostrophes resulted in an incorrect query being sent.</td>
<td>MTM-49123</td>
<td>10.16.60.0</td>
<td>n/a</td>
</tr>

<tr>
<td>Data broker</td>
<td>The data broker no longer passes on the <code>c8y_ActiveAlarmsStatus</code> fragment from devices in the source tenant to the destination tenant. This is an internal setting which cannot be updated by the user and which is not required on the destination tenant. The propagation of alarms to the destination tenant is not affected by this change.</td>
<td>MTM-49670</td>
<td>10.16.103.0</td>
<td>n/a</td>
</tr>

<tr>
<td>Enterprise tenant</td>
<td>Fixed a branding issue where the background color and the primary label were not using the brand color.</td>
<td>MTM-50807</td>
<td>10.17.0.38</td>
<td>UI</td>
</tr>

<tr>
<td>Enterprise tenant</td>
<td>Due to a change introduced in release 10.14, when a certificate for an Enterprise tenant was uploaded with this version, it was persisted in a faulty way. Although it was possible to activate the certificate when using the new domain this certificate failed to be parsed and the platform certificate was returned as backup. This issue has been resolved. After activating the certificate, the new domain will now be served with the respective certificate.</td>
<td>DM-1658</td>
<td>10.16.101.0</td>
<td>n/a</td>
</tr>

<tr>
<td>Inventory roles</td>
<td>Fixed an issue with inventory roles when a user had assigned different inventory roles for different groups in the same inventory hierarchy. Now, if a user has inventory access to a parent group for one API and inventory access to a child group for a different API, queries made by this user return properly filtered documents for both APIs.</td>
<td>MTM-45018</td>
<td>10.16.8.0</td>
<td>n/a</td>
</tr>

<tr>
<td>Performance</td>
<td>The performance of widgets like the "Data point list", "Data point graph" and "Data point table" has been improved for users with inventory roles access. Moreover, the performance of the <b>Measurements</b> tab in the Device Management application and the <b>Data explorer</b> in the Cockpit application have been improved.</td>
<td>MTM-50693</td>
<td>10.17.0.48</td>
<td>UI</td>
</tr>

<tr>
<td>REST API</td>
<td>Fixed an issue where POST and PUT requests without Content-Type header were rejected with a 415 HTTP error. The fix has been applied to the Identity, Inventory, Measurements, Alarms and Events APIs.</td>
<td>MTM-51886</td>
<td>10.17.0.74</td>
<td>Core</td>
</tr>

<tr>
<td>REST API</td>
<td>The performance of the Alarm API has been improved for requests which use the <code>resolved</code> query parameter.</td>
<td>MTM-49450</td>
<td>10.16.198.0</td>
<td>n/a</td>
</tr>

<tr>
<td>REST API</td>
<td>Fixed an issue in the Application API with duplicating hosted applications. The application has now PUBLIC availability on the parent tenant and PRIVATE availability on the other tenants instead of preserving the availability from the source application.</td>
<td>MTM-48474</td>
<td>10.16.60.0</td>
<td>n/a</td>
</tr>

</tbody></table>
