---
weight: 10
title: What´s new
layout: bundle
---

Release 10.16.0 includes the following new features or major feature enhancements.

### Multiple LNS connections for Loriot

The Loriot agent now supports the configuration of multiple connections per tenant. One connection can be associated with multiple devices. Each connection can be updated and deleted.

![All devices](/images/release-notes/multiple_lns_connection_loriot.png)

For details, refer to [Loriot LoRa > Device registration via Cumulocity IoT](https://cumulocity.com/guides/protocol-integration/lora-loriot/#configure-loriot-credentials-cumulocity) in the *Protocol integration guide*.

### Support for Loriot device registration

Using the Loriot LNS connections created in the **Connectivity** page in **Settings** under **Administration**, devices can now also be registered using the **Device Registration** page. 

![Device Registration](/images/release-notes/loriot-registration.png)

For details refer to [Loriot LoRa > Device registration via Cumulocity IoT](https://cumulocity.com/guides/protocol-integration/lora-loriot/#configure-loriot-credentials-cumulocity) in the *Protocol integration guide*.

For the devices registered with the Loriot agent, downlink operations can be sent from the **Shell** tab.

For details refer to [Loriot LoRa > Sending operations](https://cumulocity.com/guides/protocol-integration/lora-loriot/#operations-loriot) in the *Protocol integration guide*.

### Support for Thingpark Enterprise Edition 

Users can now register devices on Thingpark Enterprise and Wireless using the Cumulocity IoT Actility agent. Also, the Cumulocity IoT Actility agent now supports JSON as an input payload type in addition to XML for the uplink messages from Thingpark Actility.

For details, refer to [Actility LoRa](https://cumulocity.com/guides/protocol-integration/lora-actility/) in the *Protocol integration guide*.
