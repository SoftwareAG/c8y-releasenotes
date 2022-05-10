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


### New device selector

Widgets now support the new device and asset selector. The new selector allows navigating quickly through all groups and devices applicable for the currently selected widget.

![Device selector](/images/release-notes/cockpit-device-selector.png)

Additionally, devices and assets can be searched globally (for reports or home dashboards). If a group contains many items, the current level can be filtered.

*For details, see (wait for documentation to add the link)*


### Advanced Software Management

##### Software

There is a new way to manage software called Advanced Software Management. This feature provides better scaling and extends the software model with the `softwareType` property.

For example, the following static SmartREST template sets 3 software templates:

```csv
140,nvm,0.39.1,apt,https://github.com/nvm-sh/nvm,containerd.io,1.6.0,apt,https://containerd.io/,nginx,1.21.6,container-image,https://hub.docker.com/_/nginx
```

This would result in the creation of the software artefacts below:

![Advanced Software](/images/release-notes/advanced-software.png)

In order to migrate to the new Software model devices should remove their `c8y_SoftwareList` fragment and set their software artefacts anew using the SmartREST template above.

##### Services

Devices can now announce their services. Services are modeled as child addition managed objects of type `c8y_Service`. To create/update services the following static SmartREST template can be used:

```
102,dockerd-systemd-service,systemd,dockerd,up
```

This will result in the following service being created:

![ASM Service](/images/release-notes/ASM_services.png)

### Digital Twin Manager Preview

*Need to wait for feature documentation.*
