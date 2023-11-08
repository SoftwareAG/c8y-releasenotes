---
weight: 48
title: 10.18.0.245
layout: redirect
---

{{< c8y-admon-info >}}
These release notes refer to build versions
- Core: 10.18.0.245
- UI: 10.18.0.164
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
<td>If the Cockpit application was configured to remove all common tabs on group or device level, the button to add dashboards was also unintentionally removed. This has been addressed.</td>
<td>MTM-56025</td>
<td>10.18.0.163</td>
<td>UI</td>
</tr>

<tr>
<td>Cockpit</td>
<td>The data export feature in the data explorer has been improved. Now only active data points are included. Moreover, the name of the exported file includes the name of the series. This file contains all measurements in which this series is found.</td>
<td>MTM-50586</td>
<td>10.18.0.162</td>
<td>UI</td>
</tr>

<tr>
<td>Cockpit</td>
<td>An issue with module federation has been fixed. If the shell application was built on a Windows machine the modules have not been shared properly between shell and plugin.</td>

<td>MTM-56213</td>
<td>10.18.0.161</td>
<td>UI</td>
</tr>

<tr>
<td>Cockpit</td>
<td>Fixed an issue with SVG files in the SCADA widget, where <code>animate</code> or <code>animateTransform</code> tags worked fine in the configuration preview, but did not work in the dashboard view.</td>
<td>MTM-55990</td>
<td>10.18.0.160</td>
<td>UI</td>
</tr>

<tr>
<td>Cockpit</td>
<td>In rare cases, when a real-time connection was interrupted, certain widgets did not update again once the connection was re-established. This behavior has been fixed.</td>

<td>MTM-55843</td>
<td>10.18.0.153</td>
<td>UI</td>
</tr>

<tr>
<td>Cockpit</td>
<td>The tooltip in the "Linear gauge" widget no longer overflows the widget card. Moreover, the tooltip color changes according to the type of the declared range (default, red or yellow).</td>
<td>MTM-55005</td>
<td>10.18.0.152</td>
<td>UI</td>
</tr>

<tr>
<td>Cockpit</td>
<td>The width for the timestamp in the "Event list" widget has been slightly increased.</td>
<td>MTM-55803</td>
<td>10.18.0.146</td>
<td>UI</td>
</tr>

<tr>
<td>Web SDK</td>
<td>Fixed an issue with <code>c8ycli locale-extract</code> on Windows where the extracted <i>locales.pot</i> file didn't contain any entries.</td>

<td>MTM-56234</td>
<td>10.18.0.164</td>
<td>UI</td>
</tr>

</tbody></table>
