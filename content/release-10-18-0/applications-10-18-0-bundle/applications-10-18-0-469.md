---
weight: 25
title: 10.18.0.469
layout: redirect
---

{{< c8y-admon-info >}}
These release notes refer to build versions:
- cumulocity: 1018.0.469
- ui-c8y: 1018.0.276
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
<td>A permission check for the copy dashboard action has been added. The platform now verifies that the user has the required permissions before allowing them to copy a dashboard. If the user lacks the required permissions the <b>Copy</b> button will be disabled.</td>
<td>MTM-59456</td>
<td>10.18.0.268</td>
<td>ui-c8y</td>
</tr>

<tr>
<td>Cockpit</td>
<td>Alarms no longer disappear in the datapoint graph when severity changes via smart rules.</td>
<td>MTM-59695</td>
<td>10.18.0.272</td>
<td>ui-c8y</td>
</tr>

<tr>
<td>Cockpit</td>
<td>The assets and devices search input is now linked to the current smart rules context (position in the navigator hierarchy) when a smart rule is being created or updated.</td>
<td>MTM-55913</td>
<td>10.18.0.275</td>
<td>c8y-ui</td>
</tr>

</tbody></table>
