---
weight: 10
title: What´s new
layout: bundle
---

Release 10.18.0 includes the following new features or major feature enhancements.

### Application enablement


### Authentication

#### Authentication with OAuth2 access tokens from authorization servers

It is now possible to use OAuth2 access tokens from third-party authorization servers to access Cumulocity REST API. The SSO configuration has been extended accordingly. Configuring this authentication type,
disables the deprecated JWT authentication and allows users to use OAuth2 access tokens obtained via the client credentials grant type or password grant type as bearer token in requests to Cumulocity IoT.