---
weight: 40
title: Platform services
layout: bundle
---

<!--10.17.1.0 - 10.17.230.0; 10.18.0.0-10.18.0.33-->

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
Component</th>
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
<td>On the <b>Data subscriptions</b> page, real-time subscription to the <code>managedObjects/*</code> channel has been replaced by data polling with an interval of 15s to avoid putting extensive load on the platform.</td>
<td>MTM-45892</td>
<td>10.17.283.0</td>
<td>UI</td>
</tr>

<tr>
<td>Administration</td>
<td>The files repository now provides improved layout and user experience:
<br>- each selected or dropped file is displayed in a separate row
<br>- a type icon and size info is displayed for each file
<br>- users can cancel the selection of any file
<br>- for easier usage, the drop area enlarges when files are being dragged over</td>
<td>MTM-32081</td>
<td>10.17.283.0</td>
<td>UI</td>
</tr>

<tr>
<td>Administration</td>
<td>Users can now configure inventory role mapping in the <b>Access mapping</b> section of the SSO configuration page. </td>
<td>MTM-51423</td>
<td>10.17.280.0</td>
<td>UI</td>
</tr>

<tr>
<td>Administration</td>
<td>The <b>Revoke Tokens</b> button has been renamed to <b>Logout all users</b>. The button is only available from the <b>User</b> page. A warning message informs about revoking device tokens too.</td>
<td>MTM-51772</td>
<td>10.17.275.0</td>
<td>UI</td>
</tr>

<tr>
<td>Administration</td>
<td>In the updated package installation process, users will be notified when installing community-created packages, indicating that a third-party plugin is being installed.</td>
<td>MTM-50206</td>
<td>10.17.225.0</td>
<td>UI</td>
</tr>

<tr>
<td>Authentication</td>
<td>In the SSO configuration page, users can now enable and configure the external token validation.</td>
<td>MTM-49801</td>
<td>10.18.0.8</td>
<td>UI</td>
</tr>

<tr>
<td>Authentication</td>
<td>The performance of the first user requests sent after node restart has been improved. Prior to this change, there was a rare issue where the number of all global roles in a tenant was close to but not exceeding 100, and many thousands of devices were concurrently trying to authorize MQTT connections on the restarted node.</td>
<td>MTM-52049</td>
<td>10.17.164.0</td>
<td>Core</td>
</tr>

<tr>
<td>Authentication</td>
<td>In the single sign-on configuration page, the input fields for the body and the URL of request tokens have been enlarged to show more data.</td>
<td>MTM-50381</td>
<td>10.17.66.0</td>
<td>UI</td>
</tr>

<tr>
<td>Administration</td>
<td>The performance of GET requests on the <code>/user/users</code> endpoint has been improved by better utilization of database indexes.</td>
<td>MTM-52566</td>
<td>10.18.0.9</td>
<td>Core</td>
</tr>

<tr>
<td>Administration</td>
<td>The usability of the platform email communication dialogs has been improved.</td>
<td>MTM-51735</td>
<td>10.17.130.0</td>
<td>UI</td>
</tr>

<tr>
<td>Administration</td>
<td>In the files repository, a preview button for image and video files has been added.</td>
<td>MTM-51562</td>
<td>10.17.116.0</td>
<td>UI</td>
</tr>

<tr>
<td>Administration</td>
<td>The files repository view now uses the new data grid component. Filtering and sorting of files is now available. Additionally it is possible to select multiple files for bulk removal operations.</td>
<td>MTM-49740</td>
<td>10.17.73.0</td>
<td>UI</td>
</tr>

<tr>
<td>Core platform</td>
<td>The X-XSS-Protection header is no longer included in platform HTTP responses.</td>
<td>MTM-51504</td>
<td>10.17.161.0</td>
<td>Core</td>
</tr>


<tr>
<td>Core platform</td>
<td>In order to address the CVE-2022-33681 vulnerability, the pulsar-client version has been updated to version 2.8.4.</td>
<td>MTM-50283</td>
<td>10.17.100.0</td>
<td>Core</td>
</tr>

<tr>
<td>Core platform</td>
<td>The switch <code>acl.measurement.only-accessible-fragments</code> has been added to allow administrators to define inventory roles which let users retrieve a subset of the available fragments from all measurements. The property can be set globally or per tenant. If it is set, the measurement series is filtered according to the ACL (access control list) role owned by the user and assigned to the device group. Returned measurements only contain the available fragments listed in assigned ACL roles.</td>
</td>
<td>MTM-49607</td>
<td>10.17.25.0</td>
<td>Core</td>
</tr>

<tr>
<td>Enterprise tenant</td>
<td>For more security, the Enterprise tenant configuration email texts have been updated.</td>
<td>DM-2165</td>
<td>10.17.189.0</td>
<td>Core</td>

<tr>
<td>Performance</td>
<td>The performance of widgets like the "Data point list", "Data point graph" and "Data point table", has been improved for users with inventory roles access. Moreover, the performance of the "Measurements" tab in the Device Management application and the data explorer in the Cockpit application have been improved.</td>
<td>MTM-50693</td>
<td>10.17.67.0</td>
<td>UI</td>
</tr>

<tr>
<td>REST API</td>
<td>The performance of the Inventory API has been improved by removing two additional database queries for GET <code>/managedObjects</code>.</td>
<td>MTM-51973</td>
<td>10.18.0.7</td>
<td>Core</td>
</tr>

<tr>
<td>REST API</td>
<td>The performance of the Identity API <code>GET /externalIds/{type}/{externalId}</code> method has been improved.</td>
<td>MTM-50837</td>
<td>10.17.122.0</td>
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
Component</th>
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
<td>Fixed an issue with the names of the files downloaded from the platform (for example, from the file repository or from event attachments). UTF-8 characters, for example, in the Japanese localization, are no longer missing, if the file name includes special characters like "+".</td>
<td>MTM-53056</td>
<td>10.18.0.42</td>
<td>UI</td>
</tr>

<tr>
<td>Administration</td>
<td>Context help has been added in the <b>Extensions</b> page.</td>
<td>MTM-50209</td>
<td>10.18.0.34</td>
<td>UI</td>
</tr>

<tr>
<td>Administration</td>
<td>Redundant activity log entries in the application details are now filtered out.</td>
<td>MTM-52309</td>
<td>10.18.0.26</td>
<td>UI</td>
</tr>

<tr>
<td>Administration</td>
<td>In the files repository, an issue has been fixed where the counter of the total files number displayed an incorrect value or was not displayed at all.</td>
<td>MTM-52710</td>
<td>10.18.0.4</td>
<td>UI</td>
</tr>

<tr>
<td>Administration</td>
<td>Duplicate plugin installations are now prevented by graying out and disabling already installed plugins in the selection.</td>
<td>MTM-50012</td>
<td>10.17.192.0</td>
<td>UI</td>
</tr>

<tr>
<td>Administration</td>
<td>UTF-8 characters are now supported in names of files downloaded from the files repository with the export functionality.</td>
<td>MTM-46346</td>
<td>10.17.125.0</td>
<td>UI</td
</tr>

<tr>
<td>Administration</td>
<td>Fixed an issue with incorrect titles on several application detail tabs. The page title now consistently shows the application name.</td>
<td>MTM-51150</td>
<td>10.17.70.0</td>
<td>UI</td
</tr>

<tr>
<td>Authentication</td>
<td>Fixed an issue with the device request counter being increased while switching between the standard applications (Administration, Cockpit, Device management).</td>
<td>MTM-49427</td>
<td>10.17.265.0</td>
<td>UI</td>
</tr>

<tr>
<td>Core platform</td>
<td>Fixed an issue where deleting enhanced time series measurements did not work with the <code>fragmentType</code> query parameter.</td>
<td>MTM-51379</td>
<td>10.17.204.0</td>
<td>Core</td>
</tr>

<tr>
<td>Core platform</td>
<td>In order to address the CVE-2022-41881 vulnerability, the Netty version has been updated to version "4.1.89.Final".</td>
<td>MTM-51428</td>
<td>10.17.100.0</td>
<td>Core</td>
</tr>

<tr>
<td>Core platform</td>
<td>To fix a security issue, the vulnerable library jackson-databind was upgraded to version 2.14.1.</td>
<td>MTM-51431</td>
<td>10.17.67.0</td>
<td>Core</td>
</tr>

<tr>
<td>Enterprise tenant</td>
<td>Fixed a branding issue where the background color and the primary label were not using the brand color.</td>
<td>MTM-50807</td>
<td>10.17.86.0</td>
<td>UI</td>
</tr>

<tr>
<td>Authentication</td>
<td>The REST API endpoint <code>/application/applications/{id}/logs</code> so far required the role ROLE_APPLICATION_MANAGEMENT_ADMIN. This has been changed. The endpoint now requires either the ROLE_APPLICATION_MANAGEMENT_ADMIN or ROLE_APPLICATION_MANAGEMENT_READ.</td>
<td>MTM-52028</td>
<td>10.17.220.0</td>
<td>Core</td>
</tr>

<tr>
<td>REST API</td>
<td>At least one query parameter limiting the affected data will be required to prevent accidental deletion of too many objects during a bulk delete operation.
This change affects the following APIs:
<br>DELETE /alarm/alarms
<br>DELETE /event/events
<br>DELETE /measurements/measurement</td>
<td>MTM-46642</td>
<td>10.17.231.0</td>
<td>Core</td>
</tr>

<tr>
<td>REST API</td>
<td>Fixed an issue where POST and PUT requests without Content-Type header were rejected with a 415 HTTP error. The fix has been applied to the Identity, Inventory, Measurements, Alarms and Events APIs.</td>
<td>MTM-51886</td>
<td>10.17.170.0</td>
<td>Core</td>
</tr>

<tr>
<td>Security</td>
<td>To improve the security, the "Notes" widget  on the <b>Info</b> tab in the device details now sanitizes links in user input by replacing any "target" and "rel" attributes of "a" tags by <code>target="_blank" rel="noreferrer noopener nofollow"</code>.</td>
<td>DM-2084</td>
<td>10.17.281.0</td>
<td>UI</td>
</tr>

<tr>
<td>Security</td>
<td>In the Cockpit application, several security issues in the HTML widget have been fixed.</td>
<td>MTM-50921</td>
<td>10.17.52.0</td>
<td>UI</td>
</tr>


</tbody></table>
