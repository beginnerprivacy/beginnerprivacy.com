---
title: 为什么您需要使用加密DNS
date: 2025-04-27
authors:
  - name: PrintN
    link: https://github.com/PrintN
    image: https://github.com/PrintN.png
excludeSearch: false
---
使用加密DNS的重要性不容小觑。虽然许多人意识到安全浏览器和VPN的必要性，但DNS加密的作用往往被忽视。

### 什么是DNS？
从本质上讲，域名系统（DNS）是互联网的电话簿。它将用户友好的域名——如[www.example.com](https://www.example.com)——转换为计算机用于相互通信的数字IP地址。这个过程对于浏览网页至关重要，因为它允许您的浏览器定位并连接到您想要访问的网站。

#### DNS的类型  
1. **标准DNS**：这是大多数用户依赖的传统DNS。当您输入一个网站地址时，您的请求会发送到DNS服务器，该服务器将域名解析为IP地址。然而，这个过程通常是未加密的，这意味着任何监控您网络流量的人都可以看到您正在访问哪些网站。

2. **加密DNS**：这种类型的DNS通过加密您的DNS查询增加了一层安全性。加密DNS主要有两种协议：
   - **HTTPS上的DNS（DoH）**：该协议通过HTTPS发送DNS查询，这意味着您的请求是加密的，安全不被窃听。它还帮助防止DNS欺骗，攻击者将您重定向到 恶意网站。
   - **TLS上的DNS（DoT）**：与DoH类似，DoT加密DNS查询，但使用不同的方法（TLS）来保护连接。两个协议都旨在增强隐私和安全性。

### 为什么使用加密DNS？
- **DNS查询隐私：** 加密DNS专门保护您的DNS查询不被监控。这意味着您的ISP或任何其他第三方无法看到您尝试访问哪些网站。

- **防止DNS欺骗：** 加密DNS有助于防止恶意行为者将您的DNS查询重定向到欺诈性网站。这对于确保您能够顺利访问目标网站至关重要。

- **减少跟踪：** 通过使用加密DNS，您限制了广告商和数据经纪人可以收集的关于您浏览习惯的数据量，因为他们依赖DNS查询来建立用户档案。

### 推荐的加密DNS提供商
{{< callout type="info" >}}
  这些提供商都提供指南，帮助您在设备上设置他们的DNS。
{{< /callout >}}
<div class="recommendations">  
  <div class="grid">  
    {{< articles/recommendation title="Mullvad" link="https://mullvad.net/en/help/dns-over-https-and-dns-over-tls" buttonText="访问网站" >}}
    {{< articles/recommendation title="Control D" link="https://controld.com/free-dns" buttonText="访问网站" >}}
    {{< articles/recommendation title="Cloudflare" link="https://developers.cloudflare.com/1.1.1.1/setup" buttonText="访问网站" >}}
  </div>
</div>