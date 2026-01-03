---
title: Why You Need to Use an Encrypted DNS
description: Use an encrypted DNS to hide the websites you access from prying eyes.
time: 15 minutes
date: 2025-03-03
---
The importance of using an encrypted DNS cannot be overstated. While many people are aware of the need for secure browsers and VPNs, the role of DNS encryption often flies under the radar.

### What is DNS?
At its core, the Domain Name System (DNS) is the internet's phone book. It translates user-friendly domain names—like [www.example.com](https://www.example.com)—into the numerical IP addresses that computers use to communicate with each other. This process is essential for navigating the web, as it allows your browser to locate and connect to the websites you want to visit.

#### Types of DNS  
1. **Standard DNS**: This is the traditional DNS that most users rely on. When you enter a website address, your request is sent to a DNS server, which resolves the domain name into an IP address. However, this process is typically unencrypted, meaning that anyone monitoring your network traffic can see which websites you are visiting.

2. **Encrypted DNS**: This type of DNS adds a layer of security by encrypting your DNS queries. There are two main protocols for encrypted DNS:
   - **DNS over HTTPS (DoH)**: This protocol sends DNS queries over HTTPS, which means your requests are encrypted and secure from eavesdropping. It also helps prevent DNS spoofing, where attackers redirect you to malicious sites.
   - **DNS over TLS (DoT)**: Similar to DoH, DoT encrypts DNS queries but uses a different method (TLS) to secure the connection. Both protocols aim to enhance privacy and security.

### Why Use Encrypted DNS?
- **DNS Query Privacy:** Encrypted DNS specifically protects your DNS queries from being monitored. This means that your ISP or any other third party cannot see which websites you are trying to access.

- **Prevention of DNS Spoofing:** Encrypted DNS helps prevent attacks where malicious actors redirect your DNS queries to fraudulent websites. This is crucial for ensuring that you reach the intended site without interference.

- **Reduced Tracking:** By using encrypted DNS, you limit the amount of data that advertisers and data brokers can collect about your browsing habits, as they rely on DNS queries to build user profiles.

### Recommended Encrypted DNS Providers
{{< callout type="info" >}}
  Each of these providers offers guides to help you set up their DNS on your device.
{{< /callout >}}
<div class="recommendations">  
  <div class="grid">  
    {{< articles/recommendation title="Mullvad" link="https://mullvad.net/en/help/dns-over-https-and-dns-over-tls" buttonText="Visit Website" >}}
    {{< articles/recommendation title="Control D" link="https://controld.com/free-dns" buttonText="Visit Website" >}}
    {{< articles/recommendation title="Cloudflare" link="https://developers.cloudflare.com/1.1.1.1/setup" buttonText="Visit Website" >}}
  </div>
</div>