---
weight: 10
title: What´s new
layout: bundle
---

Release 10.15.0 includes the following new features or major feature enhancements.

### Digital Twin Manager

Cumulocity IoT Digital Twin Manager (DTM) is a layered product hosted on the Cumulocity IoT platform. DTM enables you to create and manage assets mirroring your physical connected devices in Cumulocity IoT. These assets are then used to structure and describe devices in logical hierarchies as encountered in the real world environment.

![DTM Landing screen](/images/dtm/landing-screen-dtm.png)

DTM consists of several components, which allow you to create your assets and asset hierarchies:

The **Property Library** can be used to create your own custom properties in order to define how data should be stored on an asset. These custom properties can be either complex (nested object) or simple (key-value pair). Furthermore, you can select a specific data type for each property you define. As of now, the **Property Library** supports the following data types: Text, Number, Date Picker, Enumeration, Boolean.

**Asset Types** serve as a blueprint for your assets and define how they are structured. An asset type defines what custom properties an asset should have. Additionally, you can specify relationships between multiple asset types, which will be respected when you create your actual asset hierarchies. Once the asset type is created, it can be used to create various assets.

The **Assets Navigator** is the starting point to create your asset hierarchies based on the asset types and custom properties, you have defined previously. Once you have created your asset hierarchies you can use the **Assets Navigator** to view and manage them.

You can use the **Localization** component to define translations for your asset types and custom properties. These translations can be provided for all languages supported in Cumulocity IoT. This component requires you to have the feature-branding feature subscribed for your Cumulocity IoT tenant.

For detailed information, see the [Cumulocity IoT DTM guide](/guides/dtm/#overview).

#### Installation

For information on installation and operations, see the *Digital Twin Manager -  Installation & operations guide*.

### Device Management

#### Improved All devices page

In an effort to provide you a more consistent experience across the platform the **All devices** page has been re-shaped. It is now implemented in the data grid fashion you already are familiar with from **Subassets** and **Search** pages. This offers improved appearence in various viewport sizes for many devices, easier filtering and sorting, pagination option (only for users with global inventory access), and sets solid ground for further improvements.

![All devices](/images/release-notes/devmgmt-devices-alldevices.png)

#### Extensible device registration

Extensible device registration is a new feature that allows microservice developers to implement their own device registration process without explicitly extending a single line of UI source code.

A custom device registration form can be created using JSON schema and some specific endpoints that the microservice needs to provide. This form is then displayed when the user clicks on the corresponding button in a dropdown on the **device registration** page as soon as the microservice is subscribed to the tenant.

Our revised device registration for LWM2M also uses this feature.

For detailed information, see the [Cumulocity IoT EDR guide](/guides/dtm/#overview).

#### Revised LWM2M device registration

The LWM2M agent now provides registration wizards for both single and bulk LWM2M device registration. These dialogs allows the user to conveniently perform single and bulk registrations of LWM2M devices. They also perform input validation and detect common errors before the device is created. See also [LWM2M > Registering LWM2M devices](https://cumulocity.com/guides/10.15.0/protocol-integration/lwm2m/#register-device) in the *Protocol integration guide*.

The video snippets below demonstrate these new wizards.

##### Single LWM2M Device Registration

<video width="99%" controls>
  <source src="/images/release-notes/lwm2m-reg.mp4" type="video/mp4" />
</video>


##### Bulk LWM2M Device Registration

<video width="99%" controls>
  <source src="/images/release-notes/lwm2m-bulk-reg.mp4" type="video/mp4" />
  <track label="Bulk LWM2M device registration" />
</video>

#### LWM2M 1.1 support

We now support the following LWM2M 1.1 features:

- LWM2M Send
- Composite Operations (read, write, observe, cancel observation)
- New LWM2M serialization formats: CBOR, SenML JSON, SenML CBOR
- New LWM2M data formats: Core Link, Unsigned Integers

For more information on our 1.1 support, refer to [LWM2M](https://cumulocity.com/guides/10.15.0/protocol-integration/lwm2m/) in the *Protocol integration guide*.

#### Multiple LNS connections for Sigfox and Actility

The Sigfox and Actility agents now support the configuration of multiple connections per tenant. One connection can be associated with multiple devices. Each connection can be updated and deleted.

![All devices](/images/release-notes/multiple_lns_connection.png)

For details, refer to [Sigfox](https://cumulocity.com/guides/protocol-integration/sigfox) or [Actility LoRa](https://cumulocity.com/guides/protocol-integration/lora-actility) in the *Protocol integration guide*.
