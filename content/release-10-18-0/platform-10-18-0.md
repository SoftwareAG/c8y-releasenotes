---
weight: 40
title: Platform services
layout: bundle
---

<!--10.17.1.0 - 10.17.180.0-->

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
<td>Authentication</td>
<td>The performance of the first user requests sent after node restart has been improved. Prior to this change, there was a rare issue where the number of all global roles in a tenant was close to but not exceeding 100, and many thousands of devices were concurrently trying to authorize MQTT connections on the restarted node.</td>

<td>MTM-52049</td>
<td>10.17.164.0</td>
</tr>

<tr>
<td>Authentication</td>
<td>In the single sign-on configuration page, the input fields for the body and the URL of request tokens have been enlarged to show more data.</td>
<td>MTM-50381</td>
<td>10.17.66.0</td>
</tr>

<tr>
<td>Administration</td>
<td>The usability of the platform email communication dialogs has been improved.</td>
<td>MTM-51735</td>
<td>10.17.130.0</td>
</tr>

<tr>
<td>Administration</td>
<td>In the files repository, a preview button for image and video files has been added.</td>
<td>MTM-51562</td>
<td>10.17.116.0</td>
</tr>

<tr>
<td>Administration</td>
<td>The files repository view now uses the new data grid component. Filtering and sorting of files is now available. Additionally it is possible to select multiple files for bulk removal operations.</td>
<td>MTM-49740</td>
<td>10.17.73.0</td>
</tr>

<tr>
<td>Core platform</td>
<td>The X-XSS-Protection header is no longer included in platform HTTP responses.</td>
<td>MTM-51504</td>
<td>10.17.161.0</td>
</tr>


<tr>
<td>Core platform</td>
<td>In order to address the CVE-2022-33681 vulnerability, the pulsar-client version has been updated to version 2.8.4.</td>
<td>MTM-50283</td>
<td>10.17.100.0</td>
</tr>

<tr>
<td>Core platform</td>
<td>The switch <code>acl.measurement.only-accessible-fragments</code> has been added to allow administrators to define inventory roles which let users retrieve a subset of the available fragments from all measurements. The property can be set globally or per tenant. If it is set, the measurement series is filtered according to the ACL (access control list) role owned by the user and assigned to the device group. Returned measurements only contain the available fragments listed in assigned ACL roles.</td>
</td>
<td>MTM-49607</td>
<td>10.17.25.0</td>
</tr>

<tr>
<td>Performance</td>
<td>The performance of widgets like the "Data point list", "Data point graph" and "Data point table", has been improved for users with inventory roles access. Moreover, the performance of the "Measurements" tab in the Device Management application and the data explorer in the Cockpit application have been improved.</td>
<td>MTM-50693</td>
<td>10.17.67.0</td>
</tr>

<tr>
<td>REST API</td>
<td>The performance of the Identity API <code>GET /externalIds/{type}/{externalId}</code> method has been improved.</td>
<td>MTM-50837</td>
<td>10.17.122.0</td>
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
<td>Administration</td>
<td>UTF-8 characters are now supported in names of files downloaded from the files repository with the export functionality.</td>
<td>MTM-46346</td>
<td>10.17.125.0</td>
</tr>

<tr>
<td>Administration</td>
<td>Fixed an issue with incorrect titles on several application detail tabs. The page title now consistently shows the application name.</td>
<td>MTM-51150</td>
<td>10.17.70.0</td>
</tr>

<tr>
<td>Core platform</td>
<td>In order to address the CVE-2022-41881 vulnerability, the Netty version has been updated to version "4.1.89.Final".</td>
<td>MTM-51428</td>
<td>10.17.100.0</td>
</tr>

<tr>
<td>Core platform</td>
<td>To fix a security issue, the vulnerable library jackson-databind was upgraded to version 2.14.1.</td>
<td>MTM-51431</td>
<td>10.17.67.0</td>
</tr>

<tr>
<td>Enterprise tenant</td>
<td>Fixed a branding issue where the background color and the primary label were not using the brand color.</td>
<td>MTM-50807</td>
<td>10.17.86.0</td>
</tr>

<tr>
<td>REST API</td>
<td>Fixed an issue where POST and PUT requests without Content-Type header were rejected with a 415 HTTP error. The fix has been applied to the Identity, Inventory, Measurements, Alarms and Events APIs.</td>
<td>MTM-51886</td>
<td>10.17.170.0</td>
</tr>

<tr>
<td>Security</td>
<td>In the Cockpit application, several security issues in the HTML widget have been fixed.</td>
<td>MTM-50921</td>
<td>10.17.52.0</td>
</tr>


</tbody></table></div>
