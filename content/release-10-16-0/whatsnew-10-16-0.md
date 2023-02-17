---
weight: 10
title: What´s new
layout: bundle
---

Release 10.16.0 includes the following new features or major feature enhancements.

### Application enablement

#### Extending web applications with plugins

A new option is now available to extend the UI of the Cumulocity IoT platform at runtime. In addition to the two prior options, that is, either develop your own application and host it or use a existing one and align it to your needs, solution builders can now compose new applications based on plugins without web development knowledge.

For details on the new plugin feature refer to [Administration > managing applications](https://cumulocity.com/guides/10.16.0/users-guide/administration/#managing-applications) in the *User guide*.

To extend an application with plugins, navigate to **Administration** > **Ecosystem** > **Applications**, duplicate the application you want to extend, and open the detail view of the application. From the new **Plugins** tab you can select any extension available to your tenant.

![Plugin installation](/images/release-notes/plugin-install.png)

##### Introducing packages for better shareability and reusability

With the new plugins feature, a new type of application called **package** has been introduced which allows to bundle plugins into a single package which can then be deployed to the platform. Packages offer better shareability and reusability of UI features across different applications.

![Packages](/images/release-notes/packages-detail-view.png)

Moreover, packages can be versioned, that is, you can specify exactly the version you want to use, which helps to avoid version conflicts.

![Versioning of Packages](/images/release-notes/versions.png)

Additionally, the versioning API allows you to update a plugin without breaking any existing integration. All versioned packages act like hosted applications and can therefore be accessed via the `/apps/{{context-path}}@{{version}}` URL.

##### Introducing shared availability

Application packages can be shared with subtenants by setting their availability to SHARED. This way the packages are available to all subtenants of the owner tenant and don't have to be subscribed individually per tenant. Instead, subtenants can select from a variety of packages if available and shared by the parent tenant. This supports a "self-service" approach for web applications (subtenants can decide if they want to install a shared application) as opposed to the current approach (only a parent tenant can decide if a web application gets subscribed to a subtenant).

Technical details:

Static files from web applications with SHARED availability are now resolved and served similarly to those with MARKET subscribed. The feature covers both paths: `<url>/apps/<app-name>/<file-path>` and `<url>/apps/public/<app-name>/<file-path>`. MARKET applications have a higher priority than SHARED applications if the context path is duplicated in tenant and parent tenant(s), but SHARED applications are served regardless of the subscription.


##### Introducing blueprints - Full applications distributed as packages

Ready-built solutions, like for example water management or smart city management solutions, are not necessarily needed by all tenants, that is, you may not want to upload them as applications to be shared with all tenants. In this case, you can now define full applications as blueprints and distribute them as packages. The package does not only provide plugins, but can also be installed:

![Blueprint](/images/release-notes/blueprint.png)

In addition to the ability to deploy and share these packages, versioning is active. As soon as the versioning for packages and deployed applications gets out of sync, the user is informed that an update is available and can simply update the application by a click.

##### Installation

Additional plugins and blueprints can use an installation wizard which is shown on each plugin or blueprint installation. You can see an example of the Cockpit installation wizard by using the query parameter `?forceSetup=true`.


##### @c8y/cli additions

To support the development, two new scaffolding applications have been added to the `c8ycli new` command, one to scaffold a plugin example and one to scaffold a blueprint. Moreover, a new `--shell` command has been added, which let´s you test your implementation directly in a shell application (for example, Cockpit).


### Device management

#### Loriot agent enhancements

##### Multiple LNS connections for Loriot

The Loriot agent now supports the configuration of multiple connections per tenant. One connection can be associated with multiple devices. Each connection can be updated and deleted.

![All devices](/images/release-notes/multiple_lns_connection_loriot.png)

For details, refer to [Loriot LoRa > Device registration via Cumulocity IoT](https://cumulocity.com/guides/protocol-integration/lora-loriot/#configure-loriot-credentials-cumulocity) in the *Protocol integration guide*.

##### Support for Loriot device registration

Using the Loriot LNS connections created in the **Connectivity** page in **Settings** under **Administration**, devices can now also be registered using the **Device Registration** page.

![Device Registration](/images/release-notes/loriot-registration.png)

For details refer to [Loriot LoRa > Device registration via Cumulocity IoT](https://cumulocity.com/guides/protocol-integration/lora-loriot/#configure-loriot-credentials-cumulocity) in the *Protocol integration guide*.

For the devices registered with the Loriot agent, downlink operations can be sent from the **Shell** tab.

For details refer to [Loriot LoRa > Sending operations](https://cumulocity.com/guides/protocol-integration/lora-loriot/#operations-loriot) in the *Protocol integration guide*.

#### Actility agent support for Thingpark Enterprise Edition

Users can now register devices on Thingpark Enterprise and Wireless using the Cumulocity IoT Actility agent. Also, the Cumulocity IoT Actility agent now supports JSON as an input payload type in addition to XML for the uplink messages from Thingpark Actility.

For details, refer to [Actility LoRa](https://cumulocity.com/guides/protocol-integration/lora-actility/) in the *Protocol integration guide*.

### Platform services

#### Measurement series improvements

A new and improved data model for holding measurements in a timeseries provides a significant improvement to the use of the underlying infrastructure. The changes provide a smoother throughput on the database, both from disk read/write and memory usage, which in turn ensures the load on the system is reduced. Users will see improved performance on the data retention policy implementation.

The new data model is only available for new tenants, the old and the new data model will co-exist.
 
#### Security

Single sign-on experience has been improved so that a Cumulocity IoT administrator can edit the role of a SSO user. This allows users of Cumulocity IoT to participate in the [Role Based Access Control](https://cumulocity.com/guides/concepts/tenant-hierarchy/#comparison) in the same way a local user can, and greatly enhances the security capability for users managed by an external Identity Access Manager.
