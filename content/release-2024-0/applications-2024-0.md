---
weight: 60
title: Application enablement
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
<td>Web SDK</td>
<td>Users can now add a bookmark from any view within the application.</td>
<td>MTM-49807</td>
<td>10.18.78.0</td>
<td>UI</td>
</tr>

<tr>
<td>Web SDK</td>
<td>A versioning matrix can now be added to the <i>cumulocity.json</i> of a blueprint/plugin. It adds version validation compared to the platform when a blueprint/plugin is installed. If the versions are incompatible a warning is shown.</td>
<td>MTM-52340</td>
<td>10.18.63.0</td>
<td>UI</td>
</tr>


<tr>
<td>Web SDK</td>
<td>It is now possible to remove a file when updating its file property within a complex property of an asset.</td>
<td>MTM-51514</td>
<td>10.18.32.0</td>
<td>UI</td>
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
<td>Cockpit</td>
<td>The latest events are now correctly displayed in the data point graph, even if a custom interval has been selected.</td>
<td>MTM-52175</td>
<td>10.18.67.0</td>
<td>UI</td>
</tr>

<tr>
<td>Cockpit</td>
<td>In the datapoint library, it is now possible to pick fragment and series from an existing datapoint.</td>
<td>MTM-52704</td>
<td>10.18.63.0</td>
<td>UI</td>
</tr>

<tr>
<td>Cockpit</td>
<td>The styling of the <b>Paste dashboard</b> button is now properly applied and consistent with the styling of other buttons.</td>
<td>DM-2267</td>
<td>10.18.39.0</td>
<td>UI</td>
</tr>

<tr>
<td>Cockpit</td>
<td>The table used for the SCADA widget configuration has been replaced by a list group, allowing better visualization of data and actions.</td>
<td>MTM-51932</td>
<td>10.18.38.0</td>
<td>UI</td>
</tr>

<tr>
<td>Cockpit</td>
<td>The asset property of type Boolean now shows "false" instead of "Undefined" when it's value is "false".</td>
<td>MTM-51513</td>
<td>10.18.32.0</td>
<td>UI</td>
</tr>

<tr>
<td>Cockpit</td>
<td>Improved the localization of the dialog window titles for adding and editing dashboards and reports.</td>
<td>MTM-51106</td>
<td>10.18.32.0</td>
<td>UI</td>
</tr>

<tr>
<td>Java SDK</td>
<td>The dependency to "com.jayway.jsonpath:json-path" has been removed from Java SDK.</td>
<td>MTM-53341</td>
<td>10.18.84.0</td>
<td>Core</td>
</tr>

<tr>
<td>Java SDK</td>
<td>The dependency to "org.json:json" has been removed from the Java SDK.</td>
<td>MTM-53340</td>
<td>10.18.83.0</td>
<td>Core</td>
</tr>

<tr>
<td>Microservice SDK</td>
<td>Dependencies to "org.eclipse.jetty:jetty-*"" were updated to version 9.4.51.v20230217.</td>
<td>MTM-53359</td>
<td>10.18.79.0</td>
<td>Core</td>
</tr>

<tr>
<td>Microservice SDK</td>
<td>The Spring Boot dependency has been updated to version 2.7.11.</td>
<td>MTM-53342</td>
<td>10.18.79.0</td>
<td>Core</td>
</tr>

<tr>
<td>UI</td>
<td>The action buttons in the windows <b>Usage statistics filters</b>, <b>Add bulk operation</b> and <b>Add device protocol</b> are now properly aligned when using mobile screens.</td>
<td>DM-2274</td>
<td>10.18.72.0</td>
<td>UI</td>
</tr>

<tr>
<td>Web SDK</td>
<td>The optional links of a package shown in the package details now point to the right location.</td>
<td>MTM-52691</td>
<td>10.18.11.0</td>
<td>UI</td>
</tr>

</tbody></table>
