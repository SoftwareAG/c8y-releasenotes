---
weight: 10
title: What´s new
layout: bundle
---

Release 10.15.0 includes the following new features or major feature enhancements.

### Improved All devices page

In an effort to provide you a more consistent experience across the platform the **All devices** page has been re-shaped. It is now implemented in the data grid fashion you already are familiar with from **Subassets** and **Search** pages. This offers improved appearence in various viewport sizes, easier filtering and sorting, pagination option (only for users with global inventory access) and sets solid ground for further improvements.

![All devices](/images/release-notes/devmgmt-devices-alldevices.png)

### Digital Twin Manager

Cumulocity IoT Digital Twin Manager (DTM) is a layered product hosted on the Cumulocity IoT platform. The DTM enables you to create and manage assets mirroring your physical connected devices in Cumulocity IoT. These assets are then used to structure and describe devices in logical hierarchies as encountered in the real world environment.

The Digital Twin Manager consists of several components, which support you to create your assets and asset hierarchies:

    •	Property library - Create your own custom properties (simple or complex) to define how data should be stored on an asset
    •	Asset types - Define asset types to describe the blueprint of your assets
    •	Localization - Dynamically translate asset type and custom property descriptions to multiple languages
    •	Assets navigator - Manage your asset hierarchies

You can access Digital Twin Manager from the Cumulocity IoT app switcher:

![App switcher](/images/dtm/app-switcher-dtm.png)

See [DTM User Guide](<<TBD>>) for the complete documentation.

**Property Library**

The Property Library can be used to create your own custom properties to define how data should be stored on an asset. These custom properties can be either complex (nested object) or simple (key-value pair). Furthermore, you can choose a specific data type for each property you define. As of now, the Property Library supports following data types: Text, Number, Date Picker, Enumeration, Boolean.

**Asset Types**

Asset Types serve as a blueprint for your assets and define how they are structured. An Asset Type defines what custom properties an asset should have. Additionally, you can specify relationships between multiple Asset Types, which will be respected when you create your actual asset hierarchies. Once the Asset Type is created, it can be used to create various assets.

**Assets Navigator**

The Assets Navigator is the starting point to create your asset hierarchies based on the asset types and custom properties, you have defined previously. Once you have created your asset hierarchies you can use the Assets Navigator to view and manage them.

**Localization**

You can use the Localization component to define translations for your asset types and custom properties. These translations can be provided for all supported languages in Cumulocity IoT. This component requires to have the feature-branding feature subscribed for your Cumulocity tenant.

### Installation

See [DTM Ops Guide](<<TBD>>) for the complete documentation.
