---
weight: 40
title: Platform services
layout: bundle
---

{{< c8y-admon-info >}}
These release notes contain all changes until build versions
- Core 10.18.109.0
- UI 10.18.164.0
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

<tbody>
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
<td>The ExplainQuery result info has been extended by the algorithm used when performing queries for a user with inventory roles: <code>GET {{url}}/inventory/hierarchy/info/management</code>  
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
<td>REST API</td>
<td>The REST APIs no longer return the <code>totalPages</code> value if no query criteria are provided.</td>
<td>MTM-52969</td>
<td>10.18.54.0</td>
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
<td>The Inventory API performance has been improved by removing an additional request to the database.</td>
<td>MTM-50840</td>
<td>10.18.15.0</td>
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
<td>MTM-</td>
<td>10.18.86.0</td>
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
<td>The performance of the Inventory API has been improved by removing two additional database queries for GET <code>/managedObjects</code>.</td>
<td>MTM-51973</td>
<td>10.18.12.0</td>
<td>Core</td>
</tr>


</tbody></table>
