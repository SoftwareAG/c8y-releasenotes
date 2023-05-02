---
weight: 10
title: What´s new
layout: bundle
---

Release 10.18.0 includes the following new features or major feature enhancements.

### Application enablement
#### Global time selector for dashboards

It is now possible to specify a global time context, which allows users to align all data on a dashboard to the same time range, for example, the last hour or last month. Widget developers can set the global time for the entire dashboard or particular widgets. Users can also share dashboards with a specific time context by including the time context parameters in a URL.

The global time context is currently available for the following widgets: Event list, Data points graph, and Data points table.

![Global time context](/images/release-10-18/global-time-context.png)

For more info, see the [global time context](https://www.cumulocity.com/guides/10.18.0/users-guide/cockpit/#global-time-context) entry in the users guide.

#### Map feature migration and enhancements

The map feature has been migrated from AngularJS to Angular, bringing along several improvements and modifications:

Breaking change:
* Real-time tracking has been limited to a single device at a time.
  
New functionalities:

* A device can now be followed in real-time.
* Device icons can be customized.
* Zoom level adjustments have been introduced.
* Center point settings have been added to the map, allowing users to designate a specific point for the map to consistently center on. Users can also utilize their current location as the central point. The map will remain centered on this point when refreshing the page or navigating back from another tab.
* Clustering support has been implemented to handle a high number of devices.
* Devices are now loaded exclusively within the visible map area.
* Refresh polling capabilities have been incorporated for multiple devices, allowing users to adjust the polling interval as needed.

![Map widget improvements](/images/release-10-18/map-widget-improvements.png)

#### Improvements in the Packages tab

* The **Extensions** page has been improved with additional information about package types, offering better transparency about their origin and trustworthiness:
  * OFFICIAL: Packages coming from the official Software AG GitHub Enterprise.
  * COMMUNITY: Packages provided by connected partner repositories.
  * UNKNOWN: Packages with unknown origins, for example, uploaded to the management system with an unknown label.
  * CUSTOM: Custom packages uploaded to the tenant by a user.

![Package labels](/images/release-10-18/package-labels.png)

For more information, see the [extensions entry](https://www.cumulocity.com/guides/10.18.0/users-guide/administration/#extensions) in the administration users guide.

Several improvements have been made to the **Packages** tab:
* To improve the user experience, the **Packages** tab has been renamed to "Extensions" and added to the navigator as a new separate entry.
* When deploying a blueprint or installing a plugin, users are now informed about the license that must be approved before proceeding further.

![Accept license](/images/release-10-18/accept-license.png)

### Authentication

#### Authentication with OAuth2 access tokens from authorization servers

On top of standard SSO, Cumulocity IoT now also allows you to access the platform resources using access tokens from third-party authorization server directly as a Bearer token. The SSO configuration has been extended accordingly. For details refer to [Configuring single sign-on > Configuring authentication with OAuth2 access tokens from authorization servers](https://cumulocity.com/guides/10.18.0/users-guide/administration/#configuring-authentication-with-oauth2-access-tokens-from-authorization-servers) in the *User guide*.