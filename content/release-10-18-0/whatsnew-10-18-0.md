---
weight: 10
title: What´s new
layout: bundle
---

Release 10.18.0 includes the following new features or major feature enhancements.

### Application enablement


### Authentication

#### Authentication with OAuth2 access tokens from authorization servers

On top of standard SSO, Cumulocity IoT now also allows you to access the platform resources using access tokens from third-party authorization server directly as a Bearer token. The SSO configuration has been extended accordingly. For details refer to [Configuring authentication with OAuth2 access tokens from authorization servers](https://github.com/users-guide/administration/#configuring-authentication-with-oauth2-access-tokens-from-authorization-servers).
disables the deprecated JWT authentication and allows users to use OAuth2 access tokens obtained via the client credentials grant type or password grant type as bearer token in requests to Cumulocity IoT.