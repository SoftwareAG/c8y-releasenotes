---
weight: 60
title: Application enablement
layout: bundle
---

{{< c8y-admon-info >}}
These release notes refer to the build versions
- Core 10.18.432.0
- UI 10.18.487.0
{{< /c8y-admon-info >}}

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
<td>The grid used in dashboards for placing widgets now supports 24 instead of 12 columns. This allows finer-grained positioning of widgets on dashboards. In case you share the same dashboards between different application versions, we strongly recommend you to upgrade to a version that includes the fix <b>MTM-55923</b>.</td>

<td>MTM-52888</td>
<td>10.18.487.0</td>
<td>UI</td>
</tr>

<tr>
<td>Web SDK</td>
<td>When installing a plugin and the tenant has no custom applications, it is now possible to duplicate any existing applications.</td>
<td>MTM-51757</td>
<td>10.18.457.0</td>
<td>UI</td>
</tr>

<tr>
<td>Web SDK</td>
<td>If a complex location property is set in the Digital twin manager application, the map is now visible in the asset view and users can select a location on the map.</td>

<td>MTM-54045</td>
<td>10.18.443.0</td>
<td>UI</td>
</tr>

<tr>
<td>Web SDK</td>
<td>The Impact connectivity feature has been removed from @c8y/ngx-components and @c8y/ng1-modules packages.</td>
<td>DM-2548</td>
<td>10.18.431.0</td>
<td>UI</td>
</tr>

<tr>
<td>Web SDK</td>
<td>If a DTM asset custom property is declared as required and complex, all of its subproperties are required too.</td>
<td>MTM-50101</td>
<td>10.18.408.0</td>
<td>UI</td>
</tr>

<tr>
<td>Web SDK</td>
<td>Scaffolding an application that uses the <code>remotes</code> application option via the c8ycli now also updates the context path used in the <code>remotes</code> application option.</td>

<td>MTM-54357</td>
<td>10.18.404.0</td>
<td>UI</td>
</tr>

<tr>
<td>Web SDK</td>
<td>References to the deprecated classes <code>ComponentFactory</code> and <code>ComponentFactoryResolver</code> have been removed from the @c8y/ngx-components library.</td>
<td>DM-1829</td>
<td>10.18.387.0</td>
<td>UI</td>
</tr>

<tr>
<td>Web SDK</td>
<td>Data grid components no longer persist their current page. After reloading they always return to the first page in the list.</td>
<td>DM-1830</td>
<td>10.18.353.0</td>
<td>UI</td>
</tr>

<tr>
<td>Web SDK</td>
<td>Shell applications now wait with their initial navigation until all plugins have been loaded. This allows,
for example, to directly navigate via a link to a route which is provided by a plugin.</td>
<td>MTM-53695</td>
<td>10.18.290.0</td>
<td>UI</td>
</tr>

<tr>
<td>Web SDK</td>
<td>In the data grid component, a new filter overview dropdown has been added. It displays all active filters in one place and allows users to remove filters.
For custom column implementations, the WebSDK allows developers to provide their own logic to display active filters as items in the filter overview.</td>
<td>DM-1616</td>
<td>10.18.246.0</td>
<td>UI</td>
</tr>

<tr>
<td>Web SDK</td>
<td>A new <code>activeClassName</code> input has been added to the data-grid and device-grid components. It can be used to define a class name to be appended to the last clicked row in the grid. Its default value is "active". This option can be deactivated by setting the input value to an empty string.</td>
<td>DM-2324</td>
<td>10.18.245.0</td>
<td>UI</td>
</tr>

<tr>
<td>Web SDK</td>
<td>In release 10.16.0.0, core re-usable data-grid-related components and services have been moved to the <code>@c8y/ngx-components</code>. The initial implementations were deprecated and have now been removed.</td>
<td>DM-1294</td>
<td>10.18.206.0</td>
<td>UI</td>
</tr>


<tr>
<td>Web SDK</td>
<td>The context help and other help links point to a documentation website defined by the application option <code>docsBaseUrl</code>. This option now supports the <code>{{ version }}</code> placeholder, which allows the administrator to choose whether to use versioned or unversioned documentation links. By default, versioned links will be used.</td>
<td>MTM-41135</td>
<td>10.18.134.0</td>
<td>UI</td>
</tr>

<tr>
<td>Web SDK</td>
<td>The Web SDK has been upgraded to Angular 15.</td>
<td>MTM-52940</td>
<td>10.18.158.0</td>
<td>UI</td>
</tr>

<tr>
<td>Web SDK</td>
<td>Users can now add a bookmark from any view within the application.</td>
<td>MTM-49807</td>
<td>10.18.78.0</td>
<td>UI</td>
</tr>

<tr>
<td>Web SDK</td>
<td>A versioning matrix can now be added to the <i>cumulocity.json</i> of a blueprint/plugin. When a blueprint/plugin is installed, its version is validated against the platform version. If the versions are incompatible a warning is shown.</td>
<td>MTM-52340</td>
<td>10.18.63.0</td>
<td>UI</td>
</tr>


<tr>
<td>Web SDK</td>
<td>It is now possible to remove a file when updating its file property within a complex property of an asset.</td>
<td>MTM-51514</td>
<td>10.18.32.0</td>
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
<td>It is now possible to type numbers in scientific notation (for example "1.234e2") in the subassets custom properties form.</td>
<td>MTM-54503</td>
<td>10.18.452.0</td>
<td>UI</td>
</tr>

<tr>
<td>Cockpit</td>
<td>The KPI widget shows the correct previous value when hovering over the trend indicator, if no real-time updates have been received yet.</td>
<td>MTM-55095</td>
<td>10.18.444.0</td>
<td>UI</td>
</tr>

<tr>
<td>Cockpit</td>
<td>Fixed an issue with group and device names being translated when displayed in the navigator menu, while not being translated in other places such as the subassets grid or device group selector.</td>
<td>MTM-53130</td>
<td>10.18.376.0</td>
<td>UI</td>
</tr>

<tr>
<td>Cockpit</td>
<td>Fixed an issue where measurements created at the same time were not displayed in dashboards in the same row, and when using the option to create multiple measurements at once, only the first one from the list was displayed.</td>
<td>MTM-54107</td>
<td>10.18.370.0</td>
<td>UI</td>
</tr>

<tr>
<td>Cockpit</td>
<td>The time format (12/24 hours) used for device availability and measurements is now consistent.</td>
<td>MTM-48837</td>
<td>10.18.366.0</td>
<td>UI</td>
</tr>

<tr>
<td>Cockpit</td>
<td>The range in the "Linear gauge" widget and in the "Silo" widget is now set to 0-100 if no custom range has been assigned by the user.</td>
<td>MTM-53980</td>
<td>10.18.364.0</td>
<td>UI</td>
</tr>

<tr>
<td>Cockpit</td>
<td>The asset selection in the datapoint selector is now filterable.</td>
<td>MTM-54463</td>
<td>10.18.346.0</td>
<td>UI</td>
</tr>

<tr>
<td>Cockpit</td>
<td>The right drawer now always shows the language selected in the user preferences.</td>
<td>MTM-53189</td>
<td>10.18.319.0</td>
<td>UI</td>
</tr>

<tr>
<td>Cockpit</td>
<td>Activating or deactivating child assets is now executed with a single request.</td>
<td>MTM-49732</td>
<td>10.18.292.0</td>
<td>UI</td>
</tr>

<tr>
<td>Cockpit</td>
<td>In case the <code>doNotAddGlobalFragmentByDefault</code> option has been set in the configuration of the <code>DatapointLibraryModule</code>, the <code>c8y_Global</code> fragment is no longer unintentionally set to <code>null</code> during the creation of a new data point library entry.</td>
<td>MTM-54213</td>
<td>10.18.288.0</td>
<td>UI</td>
</tr>

<tr>
<td>Cockpit</td>
<td>Fixed an issue where the default group icon was displayed instead of the corresponding asset icon.</td>
<td>MTM-53403</td>
<td>10.18.185.0</td>
<td>UI</td>
</tr>

<tr>
<td>Cockpit</td>
<td>Fixed an issue where users were not able to see all top-level node groups, even if they had the required permissions.</td>
<td>MTM-53394</td>
<td>10.18.184.0</td>
<td>UI</td>
</tr>

<tr>
<td>Cockpit</td>
<td>The latest events are now correctly displayed in the data point graph, even if a custom interval has been selected.</td>
<td>MTM-52175</td>
<td>10.18.67.0</td>
<td>UI</td>
</tr>

<tr>
<td>Cockpit</td>
<td>In the datapoint library, it is now possible to pick fragment and series from an existing datapoint.</td>
<td>MTM-52704</td>
<td>10.18.63.0</td>
<td>UI</td>
</tr>

<tr>
<td>Cockpit</td>
<td>The styling of the <b>Paste dashboard</b> button is now properly applied and consistent with the styling of other buttons.</td>
<td>DM-2267</td>
<td>10.18.39.0</td>
<td>UI</td>
</tr>

<tr>
<td>Cockpit</td>
<td>The table used for the SCADA widget configuration has been replaced by a list group, allowing better visualization of data and actions.</td>
<td>MTM-51932</td>
<td>10.18.38.0</td>
<td>UI</td>
</tr>

<tr>
<td>Cockpit</td>
<td>The asset property of type Boolean now shows "false" instead of "Undefined" when its value is "false".</td>
<td>MTM-51513</td>
<td>10.18.32.0</td>
<td>UI</td>
</tr>

<tr>
<td>Cockpit</td>
<td>Improved the localization of the dialog window titles for adding and editing dashboards and reports.</td>
<td>MTM-51106</td>
<td>10.18.32.0</td>
<td>UI</td>
</tr>

<tr>
<td>Java SDK</td>
<td>Resolved an issue where multiple realtime API subscriptions in quick succession could cause an invalid subscription state, leading to subscriptions receiving duplicate notifications.</td>
<td>MTM-55422</td>
<td>10.18.0.395</td>
<td>Core</td>
</tr>


<tr>
<td>Java SDK</td>
<td>The dependency on <code>com.jayway.jsonpath:json-path</code> has been removed from Java SDK.</td>
<td>MTM-53341</td>
<td>10.18.84.0</td>
<td>Core</td>
</tr>

<tr>
<td>Java SDK</td>
<td>The dependency on <code>org.json:json</code> has been removed from the Java SDK.</td>
<td>MTM-53340</td>
<td>10.18.83.0</td>
<td>Core</td>
</tr>

<tr>
<td>Microservice SDK</td>
<td>Dependencies on <code>org.eclipse.jetty:jetty-*</code> were updated to version 9.4.51.v20230217.</td>
<td>MTM-53359</td>
<td>10.18.79.0</td>
<td>Core</td>
</tr>

<tr>
<td>Microservice SDK</td>
<td>The Spring Boot dependency has been updated to version 2.7.11.</td>
<td>MTM-53342</td>
<td>10.18.79.0</td>
<td>Core</td>
</tr>

<tr>
<td>UI</td>
<td>The action buttons in the windows <b>Usage statistics filters</b>, <b>Add bulk operation</b> and <b>Add device protocol</b> are now properly aligned when using mobile screens.</td>
<td>DM-2274</td>
<td>10.18.72.0</td>
<td>UI</td>
</tr>

<tr>
<td>Web SDK</td>
<td>Custom Web SDK implementations using the <b>ContextDashboardComponent</b> are now shown with the correct title instead of an empty one.</td>
<td>MTM-55251</td>
<td>10.18.469.0</td>
<td>UI</td>
</tr>

<tr>
<td>Web SDK</td>
<td>It is now possible to install multiple plugins from one package to an application. Users can uninstall plugins only from an application that has this specific plugin installed.</td>
<td>MTM-55073</td>
<td>10.18.460.0</td>
<td>UI</td>
</tr>

<tr>
<td>Web SDK</td>
<td>In the application plugin view, if multiple packages (subscribed and custom) were available for the same widget, the platform displayed multiple entries for the same installed plugin. Now only one plugin is shown.</td>
<td>MTM-54208</td>
<td>10.18.394.0</td>
<td>UI</td>
</tr>

<tr>
<td>Web SDK</td>
<td>The asset property can now be cleared if not required.</td>
<td>MTM-54362</td>
<td>10.18.391.0</td>
<td>UI</td>
</tr>

<tr>
<td>Web SDK</td>
<td>The return types of several static functions of Angular modules have been adjusted. In certain cases this previously caused an error message like "Unable to evaluate this expression statically". This is now resolved.</td>
<td>MTM-54674</td>
<td>10.18.390.0</td>
<td>UI</td>
</tr>

<tr>
<td>Web SDK</td>
<td>The data points graph now displays alarms using either its <code>firstOccurrenceTime</code>, <code>time</code> or <code>creationTime</code> attribute instead of only using <code>creationTime</code>.
<br>Alarms are now displayed with a minimum width of one pixel, to assure that alarms with a very short duration, for example, alarms created with a CLEARED status, are displayed.
<br>The alarm tooltip in the data points graph now displays the <code>lastUpdated</code> timestamp in the user's timezone and format.</td>
<td>MTM-54596</td>
<td>10.18.389.0</td>
<td>UI</td>
</tr>

<tr>
<td>Web SDK</td>
<td>The version in the plugins list is now displayed with a "v" prefix.</td>
<td>MTM-54210</td>
<td>10.18.364.0</td>
<td>UI</td>
</tr>

<tr>
<td>Web SDK</td>
<td>The SCADA widget mapping now holds child device data properly and is not overridden by the parent device.</td>
<td>MTM-53912</td>
<td>10.18.338.0</td>
<td>UI</td>
</tr>

<tr>
<td>Web SDK</td>
<td>On developing a widget plugin with the Web SDK, a dependency issue could occur due to a missing dependency in the <i>package.json</i>. This missing dependency has now been added.</td>
<td>MTM-54393</td>
<td>10.18.323.0</td>
<td>UI</td>
</tr>

<tr>
<td>Web SDK</td>
<td>The locale of the web app can be set via the URL parameter <code>lang</code>, for example, <code>/apps/administration/index.html?lang=zh-cn</code>. The locale code is case-insensitive and must have 2 letters or 4 letters, separated by a hyphen "-" or an underscore "_". If the provided locale code is not supported, the web app is displayed in English.</td>

<td>MTM-48676</td>
<td>10.18.317.0</td>
<td>UI</td>
</tr>

<tr>
<td>Web SDK</td>
<td>In non-hybrid applications, the <code>lang</code> attribute of the <code>html</code> tag is now correctly set to the language preference of the current user.</td>
<td>MTM-53576</td>
<td>10.18.285.0</td>
<td>UI</td>
</tr>

<tr>
<td>Web SDK</td>
<td>In the data explorer, when deleting the min/max value of a data point, the Y-axis displayed "-1" and "1" instead of determining the maximum and minimum value based on the data. This has been fixed and the Y-axis shows the min/max value of the data again.</td>
<td>MTM-54008</td>
<td>10.18.244.0</td>
<td>UI</td>
</tr>


<tr>
<td>Web SDK</td>
<td>Fixed an issue where the text for a link on the login screen was cut off.</td>
<td>MTM-53597</td>
<td>10.18.172.0</td>
<td>UI</td>
</tr>

<tr>
<td>Web SDK</td>
<td>The optional links of a package shown in the package details now point to the right location.</td>
<td>MTM-52691</td>
<td>10.18.11.0</td>
<td>UI</td>
</tr>

</tbody></table>
