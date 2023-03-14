---
weight: 40
title: Platform services
layout: bundle
---

<!--10.16.1.0 - 10.16.260.0; 10.17.0.25-->

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
<td>Authentication</td>
<td>In the <b>Trusted certificates</b> page, an issue with the border of the <b>Certificate</b> field has been fixed.</td>
<td>MTM-48649</td>
<td>10.16.45.0</td>
</tr>

<tr>
<td>Core platform</td>
<td>The switch <code>acl.measurement.only-accessible-fragments</code> has been added to allow administrators to define inventory roles which let users retrieve a subset of the available fragments from all measurements. The property can be set globally or per tenant. If it is set, the measurement series is filtered according to the ACL (access control list) role owned by the user and assigned to the device group. Returned measurements only contain the available fragments listed in assigned ACL roles.</td>
</td>
<td>MTM-49607</td>
<td>10.16.260.0</td>
</tr>


<tr>
<td>Core platform</td>
<td>On creating a measurement, it is now validated for all processing modes if the measurement exists, that is for PERSISTENT, QUIESCENT, TRANSIENT and CEP.
Prior to this change, the existence of the measurement was only validated for persistence processing modes (PERSISTENT and QUIESCENT).</td>
<td>MTM-50498</td>
<td>10.16.248.0</td>
</tr>

<tr>
<td>Core platform</td>
<td>Inventory binaries now support chunk download (by setting specific Range headers) and resuming a file download. See also the <a href="https://cumulocity.com/api/core/10.17.0/#operation/getBinariesResource" class="no-ajaxy">Cumulocity IoT OpenAPI Specification<a/>.</td>
<td>MTM-49998</td>
<td>10.16.248.0</td>
</tr>

<tr>
<td>Core platform</td>
<td>Delete by <code>dateFrom</code> and <code>dateTo</code> query parameters is now supported for time series measurements.
Parameters must be truncated to full hours (for example, 2022-08-19T14:00:00.000Z), otherwise an error will be returned.</td>
<td>MTM-49441</td>
<td>10.16.74.0</td>
</tr>

<tr>
<td>Enterprise tenant</td>
<td>The placeholders in the configuration templates for Enterprise tenants were updated with new values.</td>
<td>MTM-49860</td>
<td>10.16.163.0</td>
</tr>

<tr>
<td>Product experience</td>
<td>Users can now disable (or enable) all in-product information & communication options. Prior to this change, users could only opt-out from the  Knowledge Hub (product experience tracking).</td>
<td>MTM-48214</td>
<td>10.16.79.0</td>
</tr>

<tr>
<td>Security</td>
<td>An attribute has been added to all external application links, that prevents tab nabbing (a security vulnerability that could be used to gain the user's browser session).</td>
<td>MTM-48156</td>
<td>10.16.249.0</td>
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
<th>
Fix Version</th>
</tr>
</thead><tbody>

<tr>
<td>Administration</td>
<td>The performance of the <b>Users</b> page has been improved. Loading root users with a large number of sub-users (100+) now takes less than 1s, while previously, with a larger number of sub-users (around 500), it took around 30-60s. Moreover, the request to fetch all children of a root user is now up to 10 times faster, depending on the number of sub-users and the number of their global roles.</td>
<td>MTM-45523</td>
<td>10.16.156.0</td>
</tr>

<tr>
<td>Administration</td>
<td>The phone number input validation has been improved. The validation status is shown after the input loses focus for the first time, the red border and the error message appear in sync, and the message now mentions all allowed characters, together with an example of a valid phone number value.</td>
<td>MTM-47002</td>
<td>10.16.79.0</td>
</tr>

<tr>
<td>Administration</td>
<td>Providing a non-existing tenant ID when resetting the password will no longer cause a server error.</td>
<td>MTM-45633</td>
<td>10.16.13.0</td>
</tr>

<tr>
<td>Authentication</td>
<td>On the <b>Basic settings</b> tab in the <b>Authentication</b> page, TFA (two-factor authentication) is now correctly shown as enabled if enforced by the platform.</td>
<td>MTM-49942</td>
<td>10.16.259.0</td>
</tr>

<tr>
<td>Authentication</td>
<td>Issues with removing trusted or forbidden user agents in the <b>Authentication</b> page have been fixed. The delete icon now only deletes the agent it applies to.</td>
<td>MTM-48062</td>
<td>10.16.190.0</td>
</tr>

<tr>
<td>Authentication</td>
<td>During the reset password process the tenant ID setup dialog was presented instead of the reset password dialog. Now the reset password dialog appears correctly if the reset link is used.</td>
<td>MTM-50205</td>
<td>10.16.181.0</td>
</tr>

<tr>
<td>Authentication</td>
<td>The two-factor authentication verification dialog does no longer show two <b>Cancel</b> buttons.</td>
<td>MTM-49935</td>
<td>10.16.148.0</td>
</tr>

<tr>
<td>Authentication</td>
<td>The default email templates sent when resetting passwords or confirming password changes have been extended with a username.</td>
<td>
MTM-49760</td>
<td>10.16.129.0</td>
</tr>

<tr>
<td>Authentication</td>
<td>An issue with the QR code in the two-factor authentication setup window has been fixed.</td>
<td>MTM-49536</td>
<td>10.16.129.0</td>
</tr>

<tr>
<td>Authentication</td>
<td>In the <b>Trusted certificates</b> page, an issue with the border of the <b>Certificate</b> field has been fixed.</td>
<td>MTM-48649</td>
<td>10.16.45.0</td>
</tr>

<tr>
<td>Core platform</td>
<td>Fixed an issue in which some queries containing single apostrophes resulted in an incorrect query being sent.</td>
<td>MTM-49123</td>
<td>10.16.60.0</td>
</tr>

<tr>
<td>Data broker</td>
<td>The data broker no longer passes on the <code>c8y_ActiveAlarmsStatus</code> fragment from devices in the source tenant to the destination tenant. This is an internal setting which cannot be updated by the user and which is not required on the destination tenant. The propagation of alarms to the destination tenant is not affected by this change.</td>
<td>MTM-49670</td>
<td>10.16.103.0</td>
</tr>

<tr>
<td>Enterprise tenant</td>
<td>Due to a change introduced in release 10.14, when a certificate for an Enterprise tenant was uploaded with this version, it was persisted in a faulty way. Although it was possible to activate the certificate when using the new domain this certificate failed to be parsed and the platform certificate was returned as backup. This issue has been resolved. After activating the certificate, the new domain will now be served with the respective certificate.</td>
<td>DM-1658</td>
<td>10.16.101.0</td>
</tr>

<tr>
<td>Inventory roles</td>
<td>Fixed an issue with inventory roles when a user had assigned different inventory roles for different groups in the same inventory hierarchy. Now, if a user has inventory access to a parent group for one API and inventory access to a child group for a different API, queries made by this user return properly filtered documents for both APIs.</td>
<td>MTM-45018</td>
<td>10.16.8.0</td>
</tr>

<tr>
<td>REST API</td>
<td>The performance of the Alarm API has been improved for requests which use the <code>resolved</code> query parameter.</td>
<td>MTM-49450</td>
<td>10.16.198.0</td>
</tr>

<tr>
<td>REST API</td>
<td>Fixed an issue in the Application API with duplicating hosted applications. The application has now PUBLIC availability on the parent tenant and PRIVATE availability on the other tenants instead of preserving the availability from the source application.</td>
<td>MTM-48474</td>
<td>10.16.60.0</td>
</tr>




</tbody></table></div>
