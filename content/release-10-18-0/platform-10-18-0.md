---
weight: 40
title: Platform services
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
<td>Authentication</td>
<td>In the single sign-on configuration page, the input fields for the body and the URL of request tokens have been enlarged to show more data.</td>
<td>MTM-50381</td>
<td>10.17.66.0</td>
</tr>

<tr>
<td>Administration</td>
<td>The files repository view now uses the new data grid component. Filtering and sorting of files is now available. Additionally it is possible to select multiple files for bulk removal operations.</td>
<td>MTM-49740</td>
<td>10.17.73.0</td>
</tr>

<tr>
<td>Core platform</td>
<td>The switch <code>acl.measurement.only-accessible-fragments</code> has been added to allow administrators to define inventory roles which let users retrieve a subset of the available fragments from all measurements. The property can be set globally or per tenant. If switched on, the measurement series is filtered according to the ACL (access control list) role owned by the user and assigned to the device group. Returned measurements only contain the available fragments listed in assigned ACL roles.</td>
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
<td>Fixed an issue with incorrect titles on several application detail tabs. The page title now consistently shows the application name.</td>
<td>MTM-51150</td>
<td>10.17.70.0</td>
</tr>

<tr>
<td>Core platform</td>
<td>To fix a security issue, the vulnerable library jackson-databind was upgraded to version 2.14.1.</td>
<td>MTM-51431</td>
<td>10.17.67.0</td>
</tr>

<tr>
<td>Security</td>
<td>In the Cockpit application, several security issues in the HTML widget have been fixed.</td>
<td>MTM-50921</td>
<td>10.17.52.0</td>
</tr>


</tbody></table></div>
