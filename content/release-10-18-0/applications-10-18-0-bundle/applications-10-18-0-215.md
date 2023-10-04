---
weight: 49
title: 10.18.0.215
layout: redirect
---

{{< c8y-admon-info >}}
These release notes contain all changes until build versions
- Core: 10.18.0.215
- UI: 10.18.0.135
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
<td>Resolved an issue where multiple realtime API subscriptions made in quick succession could cause an invalid subscription state, leading to subscriptions receiving duplicate notifications.</td>
<td>MTM-55422</td>
<td>10.18.0.215</td>
<td>Core</td>
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
