---
weight: 10
title: What´s new
layout: bundle
---


Release 10.14.0 includes the following new features or major feature enhancements.

### Contextual help

To facilitate the understanding of a page’s content and function for first time users of the Cumulocity IoT platform, introductory texts have been added to almost every UI page that explain the purpose of the page.

This contextual information can be accessed via a help icon/button in the action bar. Clicking it opens a drawer with a short introduction on the page's functionality and a direct link to the specific section in the [User guide](https://cumulocity.com/guides/users-guide).

![Contextual help](/images/release-notes/contextual-help.png)

### Custom Cockpit configuration

Cumulocity IoT now offers you to configure custom Cockpit applications according to your individual needs. If you have the relevant permissions you can clone the default Cockpit application and customize certain settings. Among others, you can determine which of the available features like, for example, alarms, data explorer, and so on, should be displayed in the navigator.

![App configuration](/images/release-notes/cockpit-app-configuration.png)

You can also specify, which groups or subgroups should be displayed as top level nodes in the navigator. This way, you can configure your own Cockpit application which might look completely different than the default one:

![Cockpit navigator](/images/release-notes/cockpit-navigator.png)

For details, see [Cockpit > Configuring Cockpit applications](https://cumulocity.com/guides/10.14.0/users-guide/cockpit/#configuration) in the *User guide*.

### New asset selector

Widgets now support the new device and asset selector. The new selector allows navigating quickly through all groups and devices applicable for the currently selected widget.

![Device selector](/images/release-notes/cockpit-device-selector.png)

Additionally, devices and assets can be searched globally (for reports or home dashboards). If a group contains many items, the current level can be filtered.

For details, see [Cockpit > Using widgets in dashboards and reports](https://cumulocity.com/guides/10.14.0/users-guide/cockpit/#using-widgets) in the *User guide*.


### Advanced Software Management

#### Software

The new Advanced Software Management feature provides better scaling and extends the software model with the `softwareType` property. This functionality requires a subscription to the advanced-software-mgmt microservice.

For example, the following static SmartREST template creates 3 software objects and appends them to the device:

```csv
140,nvm,0.39.1,apt,https://github.com/nvm-sh/nvm,containerd.io,1.6.0,apt,https://containerd.io/,nginx,1.21.6,container-image,https://hub.docker.com/_/nginx
```

This results in the creation of the following software artefacts:

![Advanced Software](/images/release-notes/advanced-software.png)

In order to migrate to the new software model devices must remove their `c8y_SoftwareList` fragment and re-set their software artefacts using the SmartREST template above.

The **Software repository** and the **Software** device tab in the Device Management application have been enhanced to allow for better user interaction with long software lists and typed software. For details, see [Device Management > Managing device data > Managing device software](https://cumulocity.com/guides/10.14.0/users-guide/device-management/#managing-device-software) in the *User guide*.

#### Services

Devices can now announce their services. Services are modeled as child addition managed objects of type `c8y_Service`. To create/update services the following static SmartREST template can be used:

```
102,dockerd-systemd-service,systemd,dockerd,up
```

This results in the following service being created:

![ASM Service](/images/release-notes/ASM_services.png)

A new **Services** device tab displaying an overview of the services announced by the device has been added to the Device Management application. For details, see [Device Management > Device details > Services](https://cumulocity.com/guides/10.14.0/users-guide/device-management/#services) in the *User guide*.
