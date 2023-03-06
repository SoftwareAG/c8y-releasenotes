---
weight: 10
title: What´s new
layout: bundle
---

Release 10.17.0 includes the following new features or major feature enhancements.

### Application enablement

#### User interface redesign

The UI of the Cumulocity IoT platform has a new default branding. Delite 2.0 is Software AG's in-house design system aimed at establishing a common design language for the company's products, enhancing usability and accessibility. It features updated color palettes for UI, data visualization, and product illustrations to align with the Software AG brand. The design system also includes accessibility improvements for screen readers, keyboards, and components.

![Application redesign](/images/release-notes/ux-redesign.png)

#### Enhanced right drawer functionalities

The right drawer has been redesigned to enhance its functionality and usability and thus to improve the user experience. The changes made to the right drawer include:

relocation of all user-related settings from the user menu to the right drawer,
improved platform versions section for quicker access to more detailed information about the application versions being used,
information about the global roles assigned to the user,
updated layout for improved usability.

![Right drawer](/images/release-notes/right-drawer.png)

For details, see [Getting started > User options and settings](https://cumulocity.com/guides/10.17.0/users-guide/getting-started/#user-settings) in the *User guide*.


#### Cockpit - New Markdown widget

The "Markdown" widget has been added, a new widget designed for displaying files written in markup language. By incorporating the "Markdown" widget you can enhance your display capabilities to inform users, for example, on new features.

![Markdown widget](/images/release-notes/markdown-widget.png)

For details, see [Cockpit > Widgets collection](https://cumulocity.com/guides/10.17.0/users-guide/cockpit/#widgets-collection) in the *User guide*.

#### Cockpit - Improved Image widget

The "Image" widget has been improved with the addition of configuration options for image position and size. Now you have even more control over the display of your images.

![Image widget](/images/release-notes/image-widget.png)

For details, see [Cockpit > Widgets collection](https://cumulocity.com/guides/10.17.0/users-guide/cockpit/#widgets-collection) in the *User guide*.


#### Cockpit - Dashboard availability

A new option for dashboard configuration has been added that allows users to restrict the visibility of dashboards for other users based on their global roles. This new feature provides greater control over the sharing and accessibility of your dashboards.

![Dashboard availability](/images/release-notes/dashboard-availability.png)

For details, see [Cockpit > Working with dashboards](https://cumulocity.com/guides/10.17.0/users-guide/cockpit/#dashboards) in the *User guide*.

### Device Management

#### Improved Home page in the Device Management application

The Home page has been improved by replacing the "Map" widget with quick links and recent alarms. Moreover, a button is now displayed instead of a menu if the context menu only consists of one item.

![Home Page Revision](/images/release-notes/home-page-revision.png)

### Platform services

#### Support for new OAuth2 access token type in single sign-on authentication

Cumulocity IoT supports new standard OAuth2 access tokens with the "at+jwt" type header parameter. For more information on this parameter, see [OAuth2 Access Tokens](https://datatracker.ietf.org/doc/html/rfc9068#name-header).
Single-sign-on users managed by new authorization servers (that is, generating OAuth2 access tokens with type "at+jwt") can thus login successfully into Cumulocity IoT.
