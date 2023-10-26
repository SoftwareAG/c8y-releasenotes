---
weight: 44
title: 10.17.0.364
layout: bundle
---

<!--10.17.0.347 - 10.17.0.364-->


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
<td>In rare cases, when the real-time connection was interrupted, the UI did not resubscribe to the previously subscribed channels once the connection was re-established. This behavior has been fixed.</td>
<td>MTM-55843</td>
<td>10.17.0.347</td>
<td>UI</td>
</tr>

<tr>
<td>Cockpit</td>
<td>The tooltip in the "Linear gauge" widget no longer overflows the widget card. Moreover, the tooltip color changes according to the type of the declared range (default, red or yellow).</td>
<td>MTM-55005</td>
<td>10.17.0.347</td>
<td>UI</td>
</tr>

<tr>
<td>Cockpit</td>
<td>An issue with module federation has been fixed. If the shell application was built on a Windows machine the modules have not been shared properly between shell and plugin.</td>

<td>MTM-56213</td>
<td>10.17.0.360</td>
<td>UI</td>
</tr>

</tbody></table>
