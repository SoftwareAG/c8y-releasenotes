---
weight: 49
title: 10.17.0.268
layout: bundle
---

### Improvements

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
<td>Data grid components no longer persist their current page. After reloading they always return to the first page in the list.</td>
<td>DM-1830</td>
<td>10.17.0.245</td>
<td>UI</td>
</tr>

</tbody></table>


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
<td>Activating or deactivating child assets is now executed with a single request.</td>
<td>MTM-49732</td>
<td>10.17.0.251</td>
<td>UI</td>
</tr>

<tr>
<td>Cockpit</td>
<td>The asset selection in the datapoint selector is now filterable.</td>
<td>MTM-54463</td>
<td>10.17.0.242</td>
<td>UI</td>
</tr>

<tr>
<td>Cockpit</td>
<td>In case the <code>doNotAddGlobalFragmentByDefault</code> option has been set in the configuration of the <code>DatapointLibraryModule</code>, the <code>c8y_Global</code> fragment is no longer unintentionally set to <code>null</code> during the creation of a new data point library entry.</td>
<td>MTM-54213</td>
<td>10.17.0.230</td>
<td>UI</td>
</tr>

<tr>
<td>Web SDK</td>
<td>On developing a widget plugin with the Web SDK, a dependency issue could occur due to a missing dependency in the <i>package.json</i>. This missing dependency has now been added.</td>
<td>MTM-54393</td>
<td>10.17.0.263</td>
<td>UI</td>
</tr>

<tr>
<td>Web SDK</td>
<td>In the application plugin view, if multiple packages (subscribed and custom) were available for the same widget, the platform displayed multiple entries for the same installed plugin. Now only one plugin is shown.</td>
<td>MTM-54208</td>
<td>10.17.0.262</td>
<td>UI</td>
</tr>

<tr>
<td>Web SDK</td>
<td>The return types of several static functions of Angular modules have been adjusted. In certain cases this previously caused an error message like "Unable to evaluate this expression statically". This is now resolved.</td>
<td>MTM-54674</td>
<td>10.17.0.257</td>
<td>UI</td>
</tr>

<tr>
<td>Web SDK</td>
<td>The data points graph now displays alarms using either its <code>firstOccurrenceTime</code>, <code>time</code> or <code>creationTime</code> attribute instead of only using <code>creationTime</code>.
<br>Alarms are now displayed with a minimum width of one pixel, to assure that alarms with a very short duration, for example, alarms created with a CLEARED status, are displayed.
<br>The alarm tooltip in the data points graph now displays the <code>lastUpdated</code> timestamp in the user's timezone and format.</td>
<td>MTM-54596</td>
<td>10.17.0.256</td>
<td>UI</td>
</tr>

</tbody></table>
