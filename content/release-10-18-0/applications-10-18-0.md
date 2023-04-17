---
weight: 60
title: Application enablement
layout: bundle
---

<!--10.17.1.0 - 10.17.187.0; 10.18.0.0-10.18.0.16-->

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
<td>The "Rotation" widget has been migrated to Angular.</td>
<td>MTM-50847</td>
<td>10.17.68.0</td>
</tr>

<tr>
<td>Cockpit</td>
<td>Widgets that use the global date context are now marked with an icon and a corresponding tooltip.</td>
<td>MTM-51225</td>
<td>10.17.68.0</td>
</tr>

<tr>
<td>Cockpit</td>
<td>It is now possible to use a global time range in "Data point table" widgets so that you can align all data point graphs on a dashboard to the same time range without setting each time range individually.</td>
<td>MTM-50924</td>
<td>10.17.68.0</td>
</tr>

<tr>
<td>Cockpit</td>
<td>It is now possible to a the global time range in "Event list" widgets so that you can align all data point graphs on a dashboard to the same time range without setting each time range individually.</td>
<td>MTM-50925</td>
<td>10.17.67.0</td>
</tr>

<tr>
<td>Cockpit</td>
<td>It is now possible to use a global time range in "Data point graph" widgets so that you can align all data point graphs on a dashboard to the same time range without setting each time range individually.</td>
<td>MTM-48198</td>
<td>10.17.11.0</td>
</tr>

<tr>
<td>Microservices</td>
<td>The Smartrule agent now uses the Microservice API 2.</td>
<td>MTM-48740</td>
<td>10.17.178.0</td>
</tr>

<tr>
<td>Microservices</td>
<td>The Report agent now uses the Microservice API 2.</td>
<td>MTM-48736</td>
<td>10.17.178.0</td>
</tr>

<tr>
<td>Microservices</td>
<td>The Echo agent now uses the Microservice API 2.</td>
<td>MTM-48729</td>
<td>10.17.178.0</td>
</tr>

<tr>
<td>Microservices</td>
<td>The Java SDK and the Microservice SDK are now compatible with Java 17.</td>
<td>MTM-44319</td>
<td>10.17.114.0</td>
</tr>

<tr>
<td>UI</td>
<td>Context help has been added to various tabs such as <b>Dashboard</b> and <b>Subassets</b>.</td>
<td>MTM-51868</td>
<td>10.17.171.0</td>
</tr>

<tr>
<td>Web SDK</td>
<td>The Web SDK is now versioned independently from the backend.</td>
<td>MTM-50809</td>
<td>10.17.106.0</td>
</tr>

<tr>
<td>Web SDK</td>
<td>It is now possible to open a blueprint directly after the installation has finished.</td>
<td>MTM-50637</td>
<td>10.17.47.0</td>
</tr>

<tr>
<td>Web SDK</td>
<td>The <code>HOOK_COMPONENTS</code> now allows to lazily load the components used, for example, within widgets by utilizing the <code>loadComponent</code> and <code>loadConfigComponent</code> attributes of the <code>DynamicComponentDefinition</code> type (see <a href="https://resources.cumulocity.com/documentation/websdk/1016.0.110/ngx-components/interfaces/LazyDynamicComponents.html" class="no-ajaxy">https://resources.cumulocity.com/documentation/websdk/1016.0.110/ngx-components/interfaces/LazyDynamicComponents.html</a>).</td>
<td>MTM-51161</td>
<td>10.17.27.0</td>
</tr>

</tbody></table></div>


### Fixes

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
<td>The datapoint library now correctly parses older datapoint library entries, which stored numeric values as strings instead of numbers in the JSON object.</td>
<td>MTM-51785</td>
<td>10.17.121.0</td>
</tr>

<tr>
<td>Cockpit</td>
<td>An issue has been fixed that caused AngularJS widgets to not show up in the "Add widget" dialog.</td>
<td>MTM-51482</td>
<td>10.17.67.0</td>
</tr>

<tr>
<td>Web SDK</td>
<td>Opening the widget configuration for a micro frontend plugin multiple times does no longer cause performance issues in the UI.</td>

<td>MTM-50306</td>
<td>10.17.53.0</td>
</tr>

<tr>
<td>DTM</td>
<td>If the DTM asset custom property is declared as required and complex, all of its subproperties are required too.</td>
<td>MTM-50101</td>
<td>10.17.12.0</td>
</tr>

<tr>
<td>Web SDK</td>
<td>The HOOK_WIZARD can now be used in a module federation plugin.</td>
<td>MTM-51776</td>
<td>10.17.154.0</td>
</tr>

<tr>
<td>Web SDK</td>
<td>A toggle has been added to the plugin installation dialog, which allows to filter the plugin versions for only the latest versions or all versions.</td>
<td>MTM-50901</td>
<td>10.17.3.0</td>
</tr>

<tr>
<td>UI</td>
<td>Fixed a branding issue where the background color and the primary label were not using the brand color.</td>
<td>MTM-50807</td>
<td>10.17.86.0</td>
</tr>

</tbody></table></div>
