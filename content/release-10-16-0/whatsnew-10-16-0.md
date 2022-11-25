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

### Plugins for Web Application: Extending web applications at run-time

In Cumulocity you currently have two options to extend the UI of the Platform: You can either develop your own application and host it or use a existing one and align it to your needs. This however always needs experiences in web development. Therefore we introduced a new run-time extension possibility with the so called micro frontend architecture. This allows solution builders to compose together the application they need.

You can add any Plugin to an application that is owned by the tenant. Go to Administration --> Ecosystem --> Applications, clone the application you want to extend and check the detail view. The new **plugins tab** let you choose whatever extension is available to your tenant.

![Plugin installation](/images/release-notes/plugin-install.png)

#### Introducing packages: Manage versions and hosting of Web Applications
We introduced a new type of application called **package** to solve two major problems:
 - The ability to have multiple separate functionalities delivered with one micro frontend. E.g. you can use one plugin that allows you to configure a map widget and another plugin actually containing the map widget. Maybe those plugins will even be added to different applications, but they belong logically together.
 - Updating plugins isn't easy and you could easily get into version conflicts. Packages can be versioned and therefore allow you to specify exactly the version you want to use.

![Packages](/images/release-notes/packages-detail-view.png)

Additionally, the versioning API allows you to update a Plugin without breaking any existing integration.

![Versioning of Packages](/images/release-notes/versions.png)

All packages act like hosted applications and can therefore be accesses via the `/apps/{{context-path}}` URL. The versioning can be used, which allows you to have different versions running at the same time. Let's imagine you uploaded 3 different versions of a package called *plugin-example*, 1.0, 1.1 and 1.2. These different apps can be resolved via the context path:

```
/apps/plugin-example@1.0/cumulocity.json  --> shows the manifest file of version 1.0
/apps/plugin-example@1.1/cumulocity.json  --> shows the manifest file of version 1.1
/apps/plugin-example@1.2/cumulocity.json  --> shows the manifest file of version 1.2
```
Additionally, you can use tags for versions. That allows you to define tags like `beta` or `stable` which always resolve to the version that was tagged with it. There is one special tag called `latest` that allows to resolve the URL without any version. Again an example: Let's imagine we tagged version 1.1 with "latest" and version 1.2 with "beta":

```
/apps/plugin-example@1.0/cumulocity.json  --> shows the manifest file of version 1.0
/apps/plugin-example@1.1/cumulocity.json  --> shows the manifest file of version 1.1
/apps/plugin-example/cumulocity.json  --> shows the manifest file of version 1.1
/apps/plugin-example@beta/cumulocity.json  --> shows the manifest file of version 1.2
```
#### Introducing shared availability

A new availability option can now be configured for packages. This availability lets apps be visible to any subtenant without subscribing. You can consider it as a marketplace approach. Any subtenannt can browse the shared packages and decide on it's own if it wants to install it. See the following tree to understand better, how apps are shared between tenants. Imagine each tenant uploads one shared package with the mentioned name:

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


#### Introducing blueprints: Full applications distributed as packages
Think of a ready made solution, e.g. for water management or smart city management. This ready build solution are not just plugins to cockpit or any other app. They are complete solutions. But mostly this ready made solutions are not needed by all tenants. So uploading them as application and sharing them with all tenants is mostly not wanted. When you define your package as blueprint you can archive this. The package does not only provide plugins then, it also is able to get installed:

![Blueprint](/images/release-notes/blueprint.png)

Additionally to the ability to deploy and share those packages, also versioning is active. As soon as package and deployed application versioning getting out of sync, the user is informed that an update is available and can simply update the application by clicking a button.

#### Installation 
Additional plugins and blueprints can use an installation wizard which is shown on each plugin or blueprint installation. You can see an example of the Cockpit installation wizard by using the query parameter `?forceSetup=true`

![Installation wizard](/images/release-notes/installation-wizard.png)


#### @c8y/cli additions
To support the developers two new scaffolding applications where added to the `c8ycli new` command. One to scaffold a plugin example and one to scaffold a blueprint. To support the development a new `--shell` command was added, which let developers test their implementation directly in a shell app (e.g. Cockpit).