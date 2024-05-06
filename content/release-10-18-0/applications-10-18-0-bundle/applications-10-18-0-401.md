---
weight: 34
title: 10.18.0.401
layout: redirect
---

{{< c8y-admon-info >}}
These release notes refer to build versions:
- cumulocity: 1018.0.401
- ui-c8y: 1018.0.255
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
<td>Previously, the dashboard availability selection was always visible for users, even if they did not have the permission to see it. With this change, the dashboard availability selection is hidden for users who do not have the required permission. Users must have User Management READ permission to see and modify the availability property of a dashboard.</td>
<td>MTM-57128</td>
<td>10.18.0.253</td>
<td>ui-c8y</td>
</tr>

</tbody></table>
