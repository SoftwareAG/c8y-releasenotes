---
weight: 39
title: 10.18.0.356
layout: redirect
---

{{< c8y-admon-info >}}
These release notes refer to build versions:
- cumulocity: 1018.0.356
- ui-c8y: 1018.0.233
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
<td>Web SDK</td>
<td>The <b>Forum support</b> menu entry was removed from the user menu, as it was duplicating the <b>Request support</b> menu entry.</td>
<td>MTM-57674</td>
<td>10.18.0.226</td>
<td>ui-c8y</td>
</tr>

<tr>
<td>Web SDK</td>
<td>When using the simple <code>FilteringFormRendererComponent</code> in data grid columns to display filter inputs, the input values were not cleared when the filter was reset. This issue has been fixed - now when the filter is reset, the input values are properly cleared.</td>
<td>DM-3154</td>
<td>10.18.0.227</td>
<td>ui-c8y</td>
</tr>

<tr>
<td>Web SDK</td>
<td>Previously, when a dashboard was created along with registering a mobile phone with the Cloud Sensor app, the device was not assigned to the "Map" widget in the dashboard but instead it was showing all devices available for the tenant. Now the "Map" widget has the device properly assigned.</td>
<td>MTM-57689</td>
<td>10.18.0.231</td>
<td>ui-c8y</td>
</tr>

<tr>
<td>Web SDK</td>
<td>Fixed an issue where the text for a link on the Login screen was cut off.</td>
<td>MTM-53597</td>
<td>10.18.0.232</td>
<td>ui-c8y</td>
</tr>


</tbody></table>
