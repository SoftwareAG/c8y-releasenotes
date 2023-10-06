---
weight: 40
title: Platform services
layout: bundle
---

{{< c8y-admon-info >}}
These release notes refer to the build versions
- Core 10.18.432.0
- UI 10.18.487.0
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
<td>Administration</td>
<td>It is now possible to select the availability (shared or private) during package upload.</td>
<td>MTM-51454</td>
<td>10.18.470.0</td>
<td>UI</td>
</tr>


<tr>
<td>Administration</td>
<td>It is now possible to filter items on Applications, Features, Microservices and Extensions lists.</td>
<td>MTM-51331</td>
<td>10.18.400.0</td>
<td>UI</td>
</tr>

<tr>
<td>Administration</td>
<td>Removed Esper CEP related features from the UI such as:
<br>- the <b>Event processing</b> page from the Administration application
<br>- the inspect feature from the smart rules menu (rule debug was originally available for Esper only)
<br>Removed Esper CEP related services and modules from the AngularJS Web SDK:
<br>- <code>eventProcessingSvc</code> (<i>@c8y/ng1-modules/administration-eventProcessing/cumulocity.json</i>)
<br>- <code>c8yCepModule</code>, <code>c8yCepModuleExamples</code> (<i>@c8y/ng1-modules/notifications/cumulocity.json</i>)</td>
<td>MTM-49963</td>
<td>10.18.209.0</td>
<td>UI</td>
</tr>

<tr>
<td>Administration</td>
<td>The button name for confirming the revocation of all tokens has been changed to <b>Log out all users and invalidate tokens</b>.</td>
<td>MTM-53366</td>
<td>10.18.207.0</td>
<td>UI</td>
</tr>

<tr>
<td>Administration</td>
<td>The repository-connect microservice now offers the ability for users to sync packages which include a versioning matrix which allows to filter exactly which versions will be synced. Versions which are not included in the matrix but uploaded to the platform will be removed by the microservice.</td>
<td>MTM-52341</td>
<td>10.18.143.0</td>
<td>UI</td>
</tr>

<tr>
<td>Administration</td>
<td>In the files repository, it is now possible to select a file, discard it and then select it again for upload.</td>
<td>MTM-52549</td>
<td>10.18.102.0</td>
<td>UI</td>
</tr>

<tr>
<td>Administration</td>
<td>Context help has been added in the <b>Extensions</b> page.</td>
<td>MTM-50209</td>
<td>10.18.65.0</td>
<td>UI</td>
</tr>

<tr>
<td>Administration</td>
<td>Applications are now automatically deployed right after being copied without any additional request. Moreover, the first manifest update request, right after the application copying, now works correctly.</td>
<td>MTM-51585</td>
<td>10.18.58.0</td>
<td>Core</td>
</tr>

<tr>
<td>Administration</td>
<td>It is now possible to copy web applications with versions (packages) and web applications with SHARED availability.
For applications with versions, by default the application with the "latest" tag is copied. The new application has a single version and no tags. If you want to copy different versions of an application, you can specify the query parameters "tag" or "version" (only a single version). For details, refer to the <a href="https://cumulocity.com/api/" class="no-ajaxy">Cumulocity IoT OpenAPI Specification<a/>.</td>
<td>MTM-47717</td>
<td>10.18.31.0</td>
<td>Core</td>
</tr>

<tr>
<td>Authentication</td>
<td>The OpenSSL command for generating a "signed verification code" for Proof of Possession has been enhanced to include additional encoding functionality.</td>
<td>MTM-52775</td>
<td>10.18.108.0</td>
<td>UI</td>
</tr>

<tr>
<td>Authentication</td>
<td>In the single sign-on configuration page, users can now enable and configure the external token validation process.</td>
<td>MTM-49801</td>
<td>10.18.3.0</td>
<td>UI</td>
</tr>

<tr>
<td>Core platform</td>
<td>The ExplainQuery result info has been extended by the algorithm used when performing queries for a user with inventory roles:
<br><code>GET {{url}}/inventory/hierarchy/info/management</code>  
<br>Example: <code>{"algorithm": "Legacy" }</code>
<br>Possible results: <code>Legacy, LimitedSourcesAcl, PostFilteringBySourceAcl, SingleSourceAcl, HierarchyAcl, SingleAgentAcl, SingleDeviceAcl, SingleAgentAndDeviceAcl</code></td>
<td>MTM-52350</td>
<td>10.18.48.0</td>
<td>Core</td>
</tr>

<tr>
<td>Core platform</td>
<td>In order to address security vulnerabilities (CVE-2022-3509, CVE-2022-3510, CVE-2022-3171), the third-party software "protobuf-java" has been updated from version 3.19.2 to version 3.19.6.</td>
<td>MTM-53001</td>
<td>10.18.45.0</td>
<td>Core</td>
</tr>

<tr>
<td>Core platform</td>
<td>The platform performance has been improved by introducing a new cache for managed objects.</td>
<td>MTM-50113</td>
<td>10.18.9.0</td>
<td>Core</td>
</tr>

<tr>
<td>MongoDB</td>
<td>A new text index has been introduced for the GET <code>/inventory/managedObjects</code> endpoint. By default it only includes the following fields: <code>_id</code>, <code>type</code>, <code>name</code>, <code>owner</code>, <code>externalIds</code></td>
<td>
MTM-54562</td>
<td>10.18.344.0</td>
<td>Core</td>
</tr>

<tr>
<td>MongoDB</td>
<td>Inventory API queries that use the <code>text</code> parameter are now sorted by relevance.</td>
<td>MTM-54563</td>
<td>10.18.291.0</td>
<td>Core</td>
</tr>

<tr>
<td>MongoDB</td>
<td>A MongoDB Java driver has been upgraded to the latest version 4.10.2.</td>
<td>MTM-53824</td>
<td>10.18.286.0</td>
<td>Core</td>
</tr>

<tr>
<td>MongoDB</td>
<td>The MongoDB version has been upgraded to 5.0.18-1 in offline installation dependencies.</td>
<td>MTM-53200</td>
<td>10.18.180.0</td>
<td>Core</td>
</tr>

<tr>
<td>REST API</td>
<td>The alarm status and severity are now case-insensitive. When searching by alarm status <code>active</code> the API also returns alarms with status <code>ACTIVE</code>. The same applies for the alarm severity, that is, searching for <code>critical</code> alarms also returns <code>CRITICAL</code> alarms. Alarms with status <code>active</code> and <code>acknowledged</code> are now subject of alarm deduplication.</td>
<td>MTM-52515</td>
<td>10.18.166.0</td>
<td>Core</td>
</tr>

<tr>
<td>REST API</td>
<td>The REST APIs no longer return the <code>totalPages</code> value if no query criteria are provided.</td>
<td>MTM-52969</td>
<td>10.18.54.0</td>
<td>Core</td>
</tr>

<tr>
<td>REST API</td>
<td>The query language used by the managed objects API has been improved. You can now search for fields with null values.</td>
<td>MTM-52677</td>
<td>10.18.29.0</td>
<td>Core</td>
</tr>

<tr>
<td>REST API</td>
<td>The performance of GET requests on the <code>/user/users</code> endpoint has been improved by better utilization of database indexes.</td>
<td>MTM-52566</td>
<td>10.18.16.0</td>
<td>Core</td>
</tr>

<tr>
<td>REST API</td>
<td>The performance of the Inventory API has been improved by removing an additional request to the database.</td>
<td>MTM-50840</td>
<td>10.18.15.0</td>
<td>Core</td>
</tr>

<tr>
<td>REST API</td>
<td>The performance of the Inventory API has been improved by removing two additional database queries for GET <code>/managedObjects</code>.</td>
<td>MTM-51973</td>
<td>10.18.12.0</td>
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
<td>Administration</td>
<td>In the <b>Usage statistics</b> page, in the tooltip for the CPU column "milliseconds" has been changed to "millicores".</td>
<td>MTM-53818</td>
<td>10.18.475.0</td>
<td>UI</td>
</tr>

<tr>
<td>Administration</td>
<td>Improved the performance of the user hierarchy management by reducing the number of server requests executed when expanding the sub-user list.</td>
<td>MTM-49969</td>
<td>10.18.398.0</td>
<td>UI</td>
</tr>

<tr>
<td>Administration</td>
<td>The pagination check of the user list has been modified to prevent duplicate requests.</td>
<td>MTM-52287</td>
<td>10.18.380.0</td>
<td>UI</td>
</tr>

<tr>
<td>Administration</td>
<td>In some cases log files of devices stored in the platform could not be downloaded from the <b>Logs</b> tab. This has been addressed by requesting with the correct user credentials.</td>
<td>DM-2471</td>
<td>10.18.355.0</td>
<td>UI</td>
</tr>

<tr>
<td>Administration</td>
<td>Fixed an issue whith cloning some of the default global roles (for example, "devices").</td>
<td>MTM-45858</td>
<td>10.18.323.0</td>
<td>UI</td>
</tr>

<tr>
<td>Administration</td>
<td>When uploading files to the files repository, a separate progress bar is now displayed for each file.</td>
<td>MTM-52682</td>
<td>10.18.229.0</td>
<td>UI</td>
</tr>

<tr>
<td>Administration</td>
<td>In the Administration application, missing translations have been added in the <b>SIM provider settings</b> tab in the <b>Connectivity</b> page.</td>
<td>DM-1987</td>
<td>10.18.197.0</td>
<td>UI</td>
</tr>

<tr>
<td>Administration</td>
<td>Implemented pagination on the <b>Inventory roles</b> tab in the user details to fix an issue with larger numbers of groups and subgroups.</td>
<td>MTM-47720</td>
<td>10.18.166.0</td>
<td>UI</td>
</tr>

<tr>
<td>Administration</td>
<td>The undelegate action button in the user details was not working. This has been fixed by re-enabling its functionality.</td>
<td>DM-2356</td>
<td>10.18.108.0</td>
<td>UI</td>
</tr>

<tr>
<td>Administration</td>
<td>Issues with the Ericsson DCP SMS provider when attempting to send an SMS have been resolved and outgoing requests are sent as expected to the Ericsson DCP API.</td>
<td>DM-2215</td>
<td>10.18.101.0</td>
<td>Core</td>
</tr>

<tr>
<td>Administration</td>
<td>Fixed an issue where users which only have inventory roles could not add new groups.</td>
<td>MTM-52413</td>
<td>10.18.90.0</td>
<td>UI</td>
</tr>

<tr>
<td>Administration</td>
<td>Fixed an issue with the names of the files downloaded from the platform (for example, from the file repository or from event attachments). UTF-8 characters, for example, in the Japanese localization are no longer missing if the file name includes special characters like "+".</td>
<td>MTM-53056</td>
<td>10.18.90.0</td>
<td>UI</td>
</tr>

<tr>
<td>Administration</td>
<td>Updating a custom alarm property no longer creates a redundant audit log entry with misleading information about alarm clearance.</td>
<td>MTM-51919</td>
<td>10.18.88.0</td>
<td>Core</td>
</tr>

<tr>
<td>Administration</td>
<td>Redundant activity log entries in the application details are now filtered out.</td>
<td>MTM-52309</td>
<td>10.18.18.0</td>
<td>UI</td>
</tr>

<tr>
<td>Administration</td>
<td>In the files repository, an issue has been fixed where the counter of the total files number displayed an incorrect value or was not displayed at all.</td>
<td>MTM-52710</td>
<td>10.18.17.0</td>
<td>UI</td>
</tr>

<tr>
<td>Authentication</td>
<td>When a user logs in using OAI-Secure and a password change is required, a <code>PasswordResetToken</code> is returned in the response header, enabling the password reset.</td>
<td>MTM-55200</td>
<td>10.18.0.376</td>
<td>Core</td>
</tr>

<tr>
<td>Authentication</td>
<td>Clicking on the popup for the signed verification code no longer closes the tooltip, so that users can now copy the SSL command. The tooltip can be closed by clicking outside of it.</td>
<td>MTM-53811</td>
<td>10.18.369.0</td>
<td>UI</td>
</tr>

<tr>
<td>Authentication</td>
<td>The default value of the <code>response_type</code> request parameter for the authorization request in the single sign-on configuration has been set to <code>code</code>.</td>
<td>MTM-53918</td>
<td>10.18.221.0</td>
<td>UI</td>
</tr>

<tr>
<td>Authentication</td>
<td>Issues with the redirection from the login page to the SSO server have been fixed.</td>
<td>MTM-53723</td>
<td>10.18.211.0</td>
<td>UI</td>
</tr>

<tr>
<td>Authentication</td>
<td>The default value for the MQTT SSL handshake timeout has been increased from 10 seconds to 50 seconds to increase the time for the handshake to be successful. The value of this property can be configured by a platform administrator.</td>
<td>MTM-54184</td>
<td>10.17.219.0</td>
<td>Core</td>
</tr>

<tr>
<td>Authentication</td>
<td>The issue of an inaccessible endpoint for obtaining an OAI-Secure access token through cross-origin requests has been resolved.</td>
<td>MTM-52217</td>
<td>10.18.193.0</td>
<td>Core</td>
</tr>

<tr>
<td>Authentication</td>
<td>In the <b>Trusted certificates</b> page, refreshing and downloading the verification code for the Proof of Possession process now works properly if a new certificate was uploaded or the verification code was refreshed by the user.</td>
<td>MTM-52956</td>
<td>10.18.140.0</td>
<td>UI</td>
</tr>

<tr>
<td>Authentication</td>
<td>Issues on refreshing the session tokens when the OAI-Secure login mode is configured with two-factor authentication have been fixed.</td>
<td>MTM-53559</td>
<td>10.18.101.0</td>
<td>Core</td>
</tr>

<tr>
<td>Authentication</td>
<td>The verification code which is signed in the Proof of Possession process now supports end-of-line characters from various operating systems.</td>
<td>MTM-53296</td>
<td>10.18.86.0</td>
<td>Core</td>
</tr>

<tr>
<td>Core platform</td>
<td>Fixed a possible race condition with duplicate identity mappings for devices by introducing a unique database index.</td>
<td>MTM-48399</td>
<td>10.18.135.0</td>
<td>Core</td>
</tr>

<tr>
<td>Messaging Service</td>
<td>Fixed an issue where requests from the core platform into the Messaging Service could take a long time to complete, slowing down the response to HTTP requests and potentially preventing the platform from handling new incoming requests. For example, a request from the core platform to publish a message using Notifications 2.0 could block if the tenant had reached its quota for unconsumed notifications, only timing out after a long delay. This issue has been resolved by ensuring that Messaging Service requests that would have blocked now time out quickly.</td>
<td>MTM-53509</td>
<td>10.18.185.0</td>
<td>Core</td>
</tr>

<tr>
<td>MongoDB</td>
<td>Fixed an issue where deleting enhanced time series measurements did not work with the <code>fragmentType</code> query parameter.</td>
<td>MTM-51379</td>
<td>10.18.86.0</td>
<td>Core</td>
</tr>

<tr>
<td>MQTT</td>
<td>The error handling when publishing operations to MQTT devices has been improved.</td>
<td>MTM-53168</td>
<td>10.18.125.0</td>
<td>Core</td>
</tr>

<tr>
<td>Notifications 2.0</td>
<td>Users of Notifications 2.0 will no longer encounter unequal distribution of notifications from tenant-context subscriptions amongst a set of shared consumers.</td>
<td>MTM-54859</td>
<td>10.18.340.0</td>
<td>Messaging Service</td>
</tr>

<tr>
<td>Notifications 2.0</td>
<td>DELETE notifications for Notifications 2.0 subscriptions to specific managed objects - that is, subscriptions to the <code>managedObjects</code> API in the <code>mo</code> context - are now always sent. Previously, these notifications were not reliably sent in all cases.</td>
<td>MTM-54097</td>
<td>10.18.230.0</td>
<td>Messaging Service</td>
</tr>

<tr>
<td>Notifications 2.0</td>
<td>Fixed a regression where a simple type name was not accepted as a type filter when creating a Notifications 2.0 subscription. For backwards compatibility with older releases, if the type filter value cannot be parsed as an OData expression, it is now assumed to be a simple type name.</td>
<td>MTM-53848</td>
<td>10.18.151.0</td>
<td>Messaging Service</td>
</tr>

<tr>
<td>REST API</td>
<td>The <code>data</code> field has been removed from realtime API handshake responses where it was not required and always had a "null" value.</td>
<td>MTM-55522</td>
<td>10.18.0.371</td>
<td>Core</td>
</tr>

<tr>
<td>REST API</td>
<td>When removing an application that is used in SSO access mappings, the login configuration will be updated accordingly.</td>
<td>MTM-52943</td>
<td>10.18.235.0</td>
<td>Core</td>
</tr>

<tr>
<td>REST API</td>
<td>Fixed the rare occurrence of an HTTP status 500 response from <code>/tenant/statistics/allTenantsSummary</code>, if one of the tenants was deleted during the request.</td>
<td>MTM-53273</td>
<td>10.18.181.0</td>
<td>Core</td>
</tr>

<tr>
<td>REST API</td>
<td>Fixed an issue where the Alarm API was not correctly searching for alarm types with spaces inside the type.</td>
<td>MTM-45517</td>
<td>10.18.36.0</td>
<td>Core</td>
</tr>

<tr>
<td>REST API</td>
<td>Fixed an issue where the Cumulocity IoT Rest API returned a 500 HTTP error code in case of an invalid <code>pageSize</code> or <code>currentPage</code> parameter. The API now returns a 422 HTTP error code in such cases.</td>
<td>MTM-51072</td>
<td>10.18.30.0</td>
<td>Core</td>
</tr>

<tr>
<td>REST API</td>
<td>Fixed an issue where the alarm source name was not returned after alarm de-duplication.</td>
<td>MTM-52700</td>
<td>10.18.29.0</td>
<td>Core</td>
</tr>

<tr>
<td>Rest API</td>
<td>When the DELETE <code>/inventory/managedObject/{id}</code> endpoint did not finish immediately but continued in the background, the platform returned a 202 HTTP code instead of 204. This has been fixed.</td>
<td>MTM-51095</td>
<td>10.18.1.0</td>
<td>Core</td>
</tr>

</tbody></table>
