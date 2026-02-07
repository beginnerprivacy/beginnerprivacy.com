---
title: IP Address Lookup
description: Discover information about your IP address with our user-friendly IP Address Lookup tool. Instantly retrieve your IPv4 and IPv6 addresses, geographical location, and ISP details.
---
<div id="tool-container">
  <div id="ip-info">
    <p><strong>IPv4 Address:</strong> <span id="ipv4-address">Loading...</span></p>
    <p><strong>IPv6 Address:</strong> <span id="ipv6-address">Loading...</span></p>
    <p><strong>City:</strong> <span id="city">Loading...</span></p>
    <p><strong>Region:</strong> <span id="region">Loading...</span></p>
    <p><strong>Country:</strong> <span id="country">Loading...</span></p>
    <p><strong>ASN:</strong> <span id="asn">Loading...</span></p>
    <p><strong>ISP:</strong> <span id="org">Loading...</span></p>
  </div>
  <div id="map-container" style="width: 100%; height: 400px;">
    <!-- OpenStreetMap -->
  </div>
</div>

<div class="faq-container">
  <h3 class="hx-text-center">Frequently Asked Questions</h3>
  {{< tools/faq-item question="What is an IP address?" answer="An IP address is a unique identifier assigned to each device connected to a network. It is used for communication with other devices over the internet." >}}
  {{< tools/faq-item question="How can I hide my IP address?" answer="To hide your IP address, we recommend reading our article on [using a VPN](/roadmap/basic/virtual-private-network)." >}}
  {{< tools/faq-item question="How does this IP address lookup work?" answer="We use [ipapi](https://ipapi.co/json/) to look up your IP address and fetch location details such as latitude and longitude." >}}
</div>