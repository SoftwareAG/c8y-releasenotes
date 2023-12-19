---
weight: 46
title: 10.18.0.281
layout: redirect
---

{{< c8y-admon-info >}}
These release notes refer to build versions:
- Core: 10.18.0.281
- UI: 10.18.0.186
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
<td>In the "Data point graph" widget configuration, you could only select a chart type if the data point was not linked to a template from the data point library. Now you can always select a chart type.</td>

<td>MTM-54007</td>
<td>10.18.0.178</td>
<td>UI</td>
</tr>

<tr>
<td>Cockpit</td>
<td>If a user drags the X-axis in a "Data point graph" widget with realtime enabled, realtime is turned off. It can be enabled again by clicking the real-time indicator.</td>
<td>MTM-56149</td>
<td>10.18.0.171</td>
<td>UI</td>
</tr>

<tr>
<td>Web SDK</td>
<td>Fixed an issue with <code>c8ycli locale-compile</code> on Windows where the compiled JSON file was not created if the path to the PO file included folders.</td>
<td>MTM-56601</td>
<td>10.18.0.185</td>
<td>UI</td>
</tr>

<tr>
<td>Web SDK</td>
<td>The dashboard time range values are now translated into other UI languages than English.</td>
<td>MTM-56583</td>
<td>10.18.0.185</td>
<td>UI</td>
</tr>

</tbody></table>
