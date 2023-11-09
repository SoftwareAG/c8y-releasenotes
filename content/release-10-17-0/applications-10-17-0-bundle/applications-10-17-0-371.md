---
weight: 43
title: 10.17.0.371
layout: bundle
---

<!--10.17.0.365 - 10.17.0.371-->



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
<td>The data export feature in the data explorer has been improved. Now only active data points are included. Moreover, the name of the exported file includes the name of the series. This file contains all measurements in which this series is found.</td>
<td>MTM-50586</td>
<td>10.17.0.366</td>
<td>UI</td>
</tr>


<tr>
<td>Cockpit</td>
<td>If the Cockpit application was configured to remove all common tabs on group or device level, the button to add dashboards was also unintentionally removed. This has been addressed.</td>
<td>MTM-56025</td>
<td>10.17.0.369</td>
<td>UI</td>
</tr>

<tr>
<td>Web SDK</td>
<td>Fixed an issue with <code>c8ycli locale-extract</code> on Windows where the extracted <i>locales.pot</i> file didn't contain any entries.</td>

<td>MTM-56234</td>
<td>10.17.0.364</td>
<td>UI</td>
</tr>

</tbody></table>
