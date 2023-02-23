---
weight: 12
title: Important announcements
layout: bundle
---

### REST API changes

#### Planned

#### Implemented


### Security changes

#### Planned

#### Implemented


### SDK changes

#### Planned

#### Implemented


### Streaming Analytics

#### Implemented

##### Removal of required roles from the manifest

For security reasons, ROLE_APPLICATION_MANAGEMENT_ADMIN and ROLE_OPTION_MANAGEMENT_ADMIN have been
removed from the required roles which are defined in the manifest file of the Apama-ctrl microservice.
Any applications deployed with the Streaming Analytics application (for example, EPL apps) can no longer
perform security-sensitive operations such as application creation or modification of tenant options.
