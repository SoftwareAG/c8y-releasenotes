---
weight: 47
title: 10.17.0.333
layout: bundle
---

<!--10.17.0.290 - 10.17.0.333-->


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
<td>10.17.0.317</td>
<td>UI</td>
</tr>

<tr>
<td>Cockpit</td>
<td>Fixed an issue where the group icon did not change its state from closed to open.</td>
<td>MTM-54973</td>
<td>10.17.0.290</td>
<td>UI</td>
</tr>

<tr>
<td>Java SDK</td>
<td>Resolved an issue where multiple realtime API subscriptions made in quick succession could cause an invalid subscription state, leading to subscriptions receiving duplicate notifications.</td>
<td>MTM-55422</td>
<td>10.17.0.331</td>
<td>Core</td>
</tr>

<tr>
<td>Web SDK</td>
<td>Blueprints are no longer shown in the application switcher in case they have not been deployed.</td>
<td>MTM-55619</td>
<td>10.17.0.329</td>
<td>UI</td>
</tr>

<tr>
<td>Web SDK</td>
<td>An issue has been fixed where the asset widget was not rendering if deeply nested custom properties were selected.</td>
<td>MTM-55306</td>
<td>10.17.0.308</td>
<td>UI</td>
</tr>

<tr>
<td>Web SDK</td>
<td>Custom Web SDK implementations using the <code>ContextDashboardComponent</code> are now shown with the correct title instead of an empty one.</td>
<td>MTM-55251</td>
<td>10.17.0.294</td>
<td>UI</td>
</tr>

</tbody></table>
