---
weight: 42
title: 10.17.0.385
layout: bundle
---

<!--10.17.0.372 - 10.17.0.385-->



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
<td>If a user drags the X-axis in a "Data point graph" widget with realtime enabled, realtime is turned off. It can be enabled again by clicking the real-time indicator.</td>

<td>MTM-56149</td>
<td>10.17.0.380</td>
<td>UI</td>
</tr>

<tr>
<td>Microservice SDK</td>
<td>The Spring Boot dependency has been updated to version 2.7.11.</td>
<td>MTM-53342</td>
<td>10.17.0.384</td>
<td>Core</td>
</tr>

<tr>
<td>Web SDK</td>
<td>The export of the <code>@c8y/client</code> package was missing the required types which caused issues in certain setups. This has been adjusted.</td>
<td>MTM-56385</td>
<td>10.17.0.372</td>
<td>UI</td>
</tr>

</tbody></table>
