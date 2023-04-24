---
weight: 10
title: What´s new
layout: bundle
---

Release 10.18.0 includes the following new features or major feature enhancements.

### Application enablement
#### Global Time Selector for dashboards

A new global time context feature has been introduced, allowing users to apply a consistent time context (e.g., display data from the last hour, last month, etc.) across an entire dashboard. Widget developers can now set the global time context for the whole dashboard or a particular widget. Widgets bound to the global time context are marked accordingly. Users can also share dashboards with a specific time context by including the time context parameters in a URL.

The global time context is available for the following existing widgets: Event list, Data points graph, and Data points table.

#### Map feature migration and enhancements

The map feature has been migrated from AngularJS to Angular, bringing along several improvements and modifications:

Breaking changes:
* Real-time tracking has been limited to a single device at a time.
  
New features:

* A device can now be followed in real-time.
* Device icons can be customized.
* Zoom level adjustments have been introduced.
* Center point settings have been added.
* Clustering support has been implemented to handle a high number of devices.
* Devices are now loaded exclusively within the visible map area.
* Refresh polling capabilities have been incorporated for multiple devices, allowing users to adjust the polling interval as needed.

#### Improvements in the packages view

Several improvements have been made to the packages view:
* When deploying a blueprint or installing a plugin, users are now informed about the license that needs to be approved before proceeding further.
* The extensions view has been improved with additional information about package types, offering better transparency about their origin and trustworthiness:
  * OFFICIAL: Packages coming from the official Software AG GitHub Enterprise.
  * COMMUNITY: Packages provided by connected partner repositories.
  * UNKNOWN: Packages with unknown origins (e.g., uploaded to the management system with an unknown label).
  * CUSTOM: Custom packages uploaded to the tenant by a user.
* To improve the user experience, the packages tab has been renamed to "extensions" and moved to the navigator as a new separate entry.


### Authentication

#### Authentication with OAuth2 access tokens from authorization servers

On top of standard SSO, Cumulocity IoT now also allows you to access the platform resources using access tokens from third-party authorization server directly as a Bearer token. The SSO configuration has been extended accordingly. For details refer to [Configuring single sign-on > Configuring authentication with OAuth2 access tokens from authorization servers](https://cumulocity.com/guides/10.18.0/users-guide/administration/#configuring-authentication-with-oauth2-access-tokens-from-authorization-servers) in the *User guide*.