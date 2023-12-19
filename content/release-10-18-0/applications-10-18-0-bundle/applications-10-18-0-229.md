---
weight: 49
title: 10.18.0.229
layout: redirect
---

{{< c8y-admon-info >}}
These release notes refer to build versions:
- Core: 10.18.0.229
- UI: 10.18.0.151
{{< /c8y-admon-info >}}

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
<td>The <code>mapWidgetPageSize</code> parameter is now also considered if a group is selected for the "Map" widget.</td>
<td>MTM-55558</td>
<td>10.18.0.148</td>
<td>UI</td>
</tr>

<tr>
<td>Cockpit</td>
<td>The <b>Copy dashboard</b> button is now disabled when the user does not have the respective permissions.</td>
<td>MTM-53334</td>
<td>10.18.0.140</td>
<td>UI</td>
</tr>

<tr>
<td>Cockpit</td>
<td>In the "Data points graph" widget, when realtime is enabled and users double-click on a chart, the time range expands now and the data for the current range is shown.</td>
<td>MTM-55199</td>
<td>10.18.0.135</td>
<td>UI</td>
</tr>

<tr>
<td>Cockpit</td>
<td>The <b>Add report</b> button is now disabled when the user does not have sufficient permissions.</td>
<td>MTM-55195</td>
<td>10.18.0.130</td>
<td>UI</td>
</tr>

<tr>
<td>Java SDK</td>
<td>Resolved an issue where multiple realtime API subscriptions in quick succession could cause an invalid subscription state, leading to subscriptions receiving duplicate notifications.</td>

<td>MTM-55422</td>
<td>10.18.0.215</td>
<td>Core</td>
</tr>

<tr>
<td>Web SDK</td>
<td>On branded applications, the main branding colors are now also used to brand SVG images and dashboards by automatically generating shades of the primary brand color.</td>
<td>MTM-55585</td>
<td>10.18.0.139</td>
<td>UI</td>
</tr>

<tr>
<td>Web SDK</td>
<td>Blueprints are no longer shown in the application switcher in case they have not been deployed.</td>
<td>MTM-55619</td>
<td>10.18.0.137</td>
<td>UI</td>
</tr>

<tr>
<td>Web SDK</td>
<td>An issue has been fixed where the asset widget was not rendering if deeply nested custom properties were selected.</td>
<td>MTM-55306</td>
<td>10.18.0.129</td>
<td>UI</td>
</tr>

<tr>
<td>Web SDK</td>
<td>Custom Web SDK implementations using the <code>ContextDashboardComponent</code> are now shown with the correct title instead of an empty one.</td>
<td>MTM-55251</td>
<td>10.18.0.125</td>
<td>UI</td>
</tr>

</tbody></table>
