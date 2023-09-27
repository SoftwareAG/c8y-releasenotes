---
weight: 48
title: 10.17.0.289
layout: bundle
---

<!--10.17.0.269 - 10.17.0.289-->


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
<td>The KPI widget shows the correct previous value when hovering over the trend indicator, if no real-time updates have been received yet.</td>
<td>MTM-55095</td>
<td>10.17.0.280</td>
<td>UI</td>
</tr>

<tr>
<td>Cockpit</td>
<td>In the data explorer, when deleting the min/max value of a data point, the Y-axis displayed "-1" and "1" instead of determining the maximum and minimum value based on the data. This has been fixed and the Y-axis shows the min/max value of the data again.</td>
<td>MTM-54008</td>
<td>10.17.0.235</td>
<td>UI</td>
</tr>

<tr>
<td>Java SDK</td>
<td>Fixed an issue in the Java realtime notification SDK where a client would stop trying to re-establish a subscription after receiving a "402::Unknown client" error from the Cumulocity IoT platform. The impact of this issue was that future notifications would not be delivered to the client. Typically, the problem was observed after the subscription was moved from one Cumulocity IoT core node to another, for example after a core restart or a network outage. This issue has now been resolved, and the notification subscription is transparently restored with no impact to the client.</td>
<td>MTM-54196</td>
<td>10.17.0.288</td>
<td>UI</td>
</tr>

</tbody></table>
