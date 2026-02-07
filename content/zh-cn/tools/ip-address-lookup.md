---
title: IP地址查询
description: 使用我们易于使用的IP地址查询工具，发现有关您的IP地址的信息。即时获取您的IPv4和IPv6地址、地理位置和ISP详情。
---
<div id="tool-container">
  <div id="ip-info">
    <p><strong>IPv4 地址：</strong> <span id="ipv4-address">加载中...</span></p>
    <p><strong>IPv6 地址：</strong> <span id="ipv6-address">加载中...</span></p>
    <p><strong>城市：</strong> <span id="city">加载中...</span></p>
    <p><strong>地区：</strong> <span id="region">加载中...</span></p>
    <p><strong>国家：</strong> <span id="country">加载中...</span></p>
    <p><strong>ASN：</strong> <span id="asn">加载中...</span></p>
    <p><strong>ISP（互联网服务提供商）：</strong> <span id="org">加载中...</span></p>
  </div>
  <div id="map-container" style="width: 100%; height: 400px;">
    <!-- OpenStreetMap -->
  </div>
</div>

<div class="faq-container">
  <h3 class="hx-text-center">常见问题</h3>
  {{< tools/faq-item question="什么是IP地址？" answer="IP地址是分配给每个连接到网络的设备的唯一标识符，用于设备之间的互联网通信。" >}}
  {{< tools/faq-item question="我如何隐藏我的IP地址？" answer="要隐藏您的IP地址，建议阅读我们关于[使用VPN](/zh-cn/roadmap/basic/virtual-private-network)的文章。" >}}
  {{< tools/faq-item question="这个IP地址查询是如何工作的？" answer="我们使用[ipify](https://ipify.org)来查询您的IP地址，并使用[ipapi](https://ipapi.co)获取位置详情，例如纬度和经度。" >}}
</div>
