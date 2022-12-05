---
weight: 60
title: Application enablement
layout: bundle
---

<!--10.16.1.0 - 10.16.69.0-->

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
<td>Cockpit</td>
<td>The "Help and Service" widget icons are no longer missing after a hard refresh.</td>
<td>MTM-47547</td>
td>10.16.46.0</td>
</tr>

<tr>
<td>Cockpit</td>
<td>The alert message which shows up if a widget still references a deleted device has been improved to provide more clarity for the user. This change has been implemented in the following widgets: "Data points list", "Radial gauge", "Linear gauge", "Silo" and "Pie chart".</td>
<td>MTM-45516</td>
<td>10.16.39.0</td>
</tr>

<tr>
<td>Java SDK</td>
<td>Fixed an issue with the <code>AlarmRepresentation</code> comparison in the <code>equals</code> and <code>hashcode</code> methods. Now, instead of comparing the full <code>ManagedObjectRepresentation</code> as the source of alarms, we only compare the managed objects ID. There is no change in <code>ManagedObjectRepresentation</code>.</td>
<td>MTM-49181</td>
<td>10.16.31.0</td>
</tr>

<tr>
<td>Web SDK</td>
<td>The <code>c8y_Global</code> fragment is no longer missing on newly created datapoint library entries.
In addition the <code>DatapointLibraryModule<c/ode> can now be configured to not add the <code>c8y_Global</code> fragment or let the user decide if it should be added.</td>
<td>MTM-49213</td>
<td>10.16.12.0</td>
</tr>

</tbody></table></div>
