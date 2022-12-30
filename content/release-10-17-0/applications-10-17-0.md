---
weight: 60
title: Application enablement
layout: bundle
---

<!--10.16.1.0 - 10.16.179.0-->

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

<tr>
<td>Cockpit</td>
<td>Instead of subscribing to updates of all devices a user has access to, the HTML widget now only subscribes to devices referenced in the widget.</td>
<td>MTM-45890</td>
<td>10.16.159.0</td>
</tr>

<tr>
<td>Web SDK</td>
<td>Instead of the "HOOK_" prefixed <code>InjectionTokens</code> that were used to extend the UI, we now offer a set of functions that can be used. These functions have the benefit of being typed, so a developer knows exactly what options are available for that specific hook. The same <code>InjectionTokens</code> are still used in the background, so they are not deprecated as of now. However, we recommend developers to start using the hook functions instead. The new functions are prefixed with "hook", so instead of the "HOOK_NAVIGATOR_NODES", the "hookNavigator" function can now be used. Details on how to use these functions can be found in the documentation or the Tutorial application.</td>
<td>MTM-49540</td>
<td>10.16.131.0</td>
</tr>

<tr>
<td>Web SDK</td>
<td>The <code>ApiService</code> of the Web SDK now supports intercepting all requests that are performed via the <code>FetchClient</code>. Thus, modifications can now be done on the requests/responses before they are sent/received. An example implementation can be found as part of the Tutorial application.</td>
<td>MTM-49338</td>
<td>10.16.129.0</td>
</tr>

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
<td>On editing a widget configuration, device attributes are now resolved properly.</td>
<td>MTM-50011</td>
<td>10.16.157.0</td>
</tr>

<tr>
<td>Cockpit</td>
<td>In the data explorer, the <b>Create smart rule</b> option has been added back to the context menu for datapoint selection list items.</td>

<td>MTM-49612</td>
<td>10.16.68.0</td>
</tr>

<tr>
<td>Cockpit</td>
<td>The "Help and Service" widget icons are no longer missing after a hard refresh.</td>
<td>MTM-47547</td>
<td>10.16.46.0</td>
</tr>

<tr>
<td>Cockpit</td>
<td>The alert message which shows up if a widget still references a deleted device has been improved to provide more clarity for the user. This change has been implemented in the following widgets: "Data points list", "Radial gauge", "Linear gauge", "Silo" and "Pie chart".</td>
<td>MTM-45516</td>
<td>10.16.39.0</td>
</tr>

<tr>
<td>Cockpit</td>
<td>The "Welcome" widget is now reliably displaying the <b>Register device</b> link as long as the "Devicemanagement" application is subscribed to the tenant.</td>
<td>MTM-49324</td>
<td>10.16.15.0</td>
</tr>

<tr>
<td>Java SDK</td>
<td>Fixed an issue with the <code>AlarmRepresentation</code> comparison in the <code>equals</code> and <code>hashcode</code> methods. Now, instead of comparing the full <code>ManagedObjectRepresentation</code> as the source of alarms, Cumulocity IoT only compares the managed objects ID. There is no change in <code>ManagedObjectRepresentation</code>.</td>

<td>MTM-49181</td>
<td>10.16.31.0</td>
</tr>

<tr>
<td>UI</td>
<td>Resizing widgets on smartphones now depends on the size and orientation of the screen.</td>
<td>MTM-46526</td>
<td>10.16.102.0</td>
</tr>

<tr>
<td>Web SDK</td>
<td>The <code>@types/webpack</code> dependency has been removed from the apps scaffolded from the <code>@c8y/apps</code> package. This fixes some issues building these apps that appeared lately.</td>
<td>MTM-49460</td>
<td>10.16.156.0</td>
</tr>

<tr>
<td>Web SDK</td>
<td>The UI dependency "@claviska/jquery-minicolors" has been updated to version v2.3.6, as it blocked the UI from being embedded in an iframe.</td>
<td>MTM-49643</td>
<td>10.16.79.0</td>
</tr>

<tr>
<td>Web SDK</td>
<td>The <code>typeahead</code> component now works correctly with reactive forms.</td>
<td>MTM-48833</td>
<td>10.16.54.0</td>
</tr>

<tr>
<td>Web SDK</td>
<td>With this fix, the GB date format is again set as the default instead of the US date format. </td>

<td>MTM-49462</td>
<td>10.16.53.0</td>
</tr>

<tr>
<td>Web SDK</td>
<td>The <code>c8y_Global</code> fragment is no longer missing on newly created datapoint library entries.
In addition the <code>DatapointLibraryModule</code> can now be configured to not add the <code>c8y_Global</code> fragment or let the user decide if it should be added.</td>
<td>MTM-49213</td>
<td>10.16.12.0</td>
</tr>

</tbody></table></div>
