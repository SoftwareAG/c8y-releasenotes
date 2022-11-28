---
weight: 10
title: What´s new
layout: bundle
---

Release 10.16.0 includes the following new features or major feature enhancements.

### Loriot agent enhancements

#### Multiple LNS connections for Loriot

The Loriot agent now supports the configuration of multiple connections per tenant. One connection can be associated with multiple devices. Each connection can be updated and deleted.

![All devices](/images/release-notes/multiple_lns_connection_loriot.png)

For details, refer to [Loriot LoRa > Device registration via Cumulocity IoT](https://cumulocity.com/guides/protocol-integration/lora-loriot/#configure-loriot-credentials-cumulocity) in the *Protocol integration guide*.

#### Support for Loriot device registration

Using the Loriot LNS connections created in the **Connectivity** page in **Settings** under **Administration**, devices can now also be registered using the **Device Registration** page.

![Device Registration](/images/release-notes/loriot-registration.png)

For details refer to [Loriot LoRa > Device registration via Cumulocity IoT](https://cumulocity.com/guides/protocol-integration/lora-loriot/#configure-loriot-credentials-cumulocity) in the *Protocol integration guide*.

For the devices registered with the Loriot agent, downlink operations can be sent from the **Shell** tab.

For details refer to [Loriot LoRa > Sending operations](https://cumulocity.com/guides/protocol-integration/lora-loriot/#operations-loriot) in the *Protocol integration guide*.

### Actility agent support for Thingpark Enterprise Edition 

Users can now register devices on Thingpark Enterprise and Wireless using the Cumulocity IoT Actility agent. Also, the Cumulocity IoT Actility agent now supports JSON as an input payload type in addition to XML for the uplink messages from Thingpark Actility.

For details, refer to [Actility LoRa](https://cumulocity.com/guides/protocol-integration/lora-actility/) in the *Protocol integration guide*.

### Extending web applications at runtime with plugins

We have introduced a new option to extend the UI of the Cumulocity IoT platform at runtime, based on the micro frontend architecture. In addition to the two prior options, that is, either develop your own application and host it or use a existing one and align it to your needs, solution builders can now compose applications based on plugins without web development experience. 

To do so, you can now add plugins to applications owned by the tenant. Navigate to **Administration** > **Ecosystem** > **Applications**, duplicate the application you want to extend, and open the detail view of the application. From the new **Plugins** tab you can select any extension available to your tenant.

![Plugin installation](/images/release-notes/plugin-install.png)

#### Introducing packages - Manage versions and hosting of web applications

A new type of application called **package** has been introduced providing the following advantages:
 - You can deliver multiple separate functionalities with one micro frontend. For example, you can use one plugin that allows you to configure a "Map" widget and another plugin actually containing the "Map" widget. These plugins could even be added to different applications, but logically they belong together.
 - Updating plugins isn't easy and you could easily get into version conflicts. Packages can be versioned and therefore allow you to specify exactly the version you want to use.

![Packages](/images/release-notes/packages-detail-view.png)

Additionally, the versioning API allows you to update a plugin without breaking any existing integration.

![Versioning of Packages](/images/release-notes/versions.png)

All packages act like hosted applications and can therefore be accessed via the `/apps/{{context-path}}` URL. With versioning you can have different versions running at the same time. For example, you can uploaded 3 different versions of a package called *plugin-example*, 1.0, 1.1 and 1.2. These different applications can be resolved via the context path:

```
/apps/plugin-example@1.0/cumulocity.json  --> shows the manifest file of version 1.0
/apps/plugin-example@1.1/cumulocity.json  --> shows the manifest file of version 1.1
/apps/plugin-example@1.2/cumulocity.json  --> shows the manifest file of version 1.2
```

Additionally, you can use tags for versions. That allows you to define tags like `beta` or `stable` which always resolve to the version that was tagged with it. With the special tag `latest` you can resolve the URL without any version. For example, if we tag version 1.1 with "latest" and version 1.2 with "beta" we will get the following:

```
/apps/plugin-example@1.0/cumulocity.json  --> shows the manifest file of version 1.0
/apps/plugin-example@1.1/cumulocity.json  --> shows the manifest file of version 1.1
/apps/plugin-example/cumulocity.json  --> shows the manifest file of version 1.1
/apps/plugin-example@beta/cumulocity.json  --> shows the manifest file of version 1.2
```
#### Introducing shared availability

A new availability option can now be configured for packages to make applications visible to all subtenants without subscription. You can consider it as a marketplace approach. Any subtenant can browse the shared packages and decide to install it. The following tree shows how applications are shared between tenants. In this tree, each tenant uploads one shared package with the mentioned name:

``` 
                           Management Tenant: ManagementPackage
---                           /                               \
2nd Level:    Tenant1: PackageTenant1               Tenant2: PackageTenant2
---                           |                               |
3rd Level:   SubTenant1: PackageSubTenant1      SubTenant2: PackageSubTenant2

-------------------------------------------------------------------------------------

Tenant                                 | Available packages
Management Tenant                      | ManagementPackage
Tenant1                                | ManagementPackage, PackageTenant1
SubTenant1                             | ManagementPackage, PackageTenant1, PackageSubTenant1
---
Management Tenant                      | ManagementPackage
Tenant2                                | ManagementPackage, PackageTenant2
SubTenant2                             | ManagementPackage, PackageTenant2, PackageSubTenant2
```


#### Introducing blueprints - Full applications distributed as packages

Ready-built solutions, for example, for water management or smart city management, are not just plugins to the Cockpit or any other application, but complete solutions. Often, these complete solutions are not needed by all tenants, that is, you do not want to upload them as application and share them with all tenants. If you define your package as blueprint you can archive it. Moreover, the package does not only provide plugins, but can also be installed:

![Blueprint](/images/release-notes/blueprint.png)

In addition to the ability to deploy and share these packages, versioning is active. As soon as the versioning for packages and deployed applications gets out of sync, the user is informed that an update is available and can simply update the application by a click.

#### Installation 

Additional plugins and blueprints can use an installation wizard which is shown on each plugin or blueprint installation. You can see an example of the Cockpit installation wizard by using the query parameter `?forceSetup=true`.

![Installation wizard](/images/release-notes/installation-wizard.png)


#### @c8y/cli additions

To support the development, two new scaffolding applications have been added to the `c8ycli new` command, one to scaffold a plugin example and one to scaffold a blueprint. Moreover, a new `--shell` command has been added, which let´s you test your implementation directly in a shell application (for example, Cockpit).
