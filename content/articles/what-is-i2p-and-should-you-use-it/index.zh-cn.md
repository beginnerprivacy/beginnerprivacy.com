---
title: 什么是 I2P？您应该使用它吗？
date: 2025-10-07
authors:
  - name: PrintN
    link: https://github.com/PrintN
    image: https://github.com/PrintN.png
excludeSearch: false
---
### 什么是 I2P？
2003 年由隐私倡导者推出，Invisible Internet Project (I2P) 是一个开源网络，用于匿名、抗审查的通信。它不像 Tor 那样用于公共网页浏览；相反，它为 P2P 服务构建了一个隐藏的叠加层，如 eepsites、文件共享、聊天和电子邮件——全部加密且内部。

<br>

I2P 使用大蒜路由：消息被捆绑成“大蒜”，包含多个“蒜瓣”（您的数���与其他数据混合），使流量分析变得困难。这通过添加误导超越了 Tor 的洋葱层。数据通过单向隧道传输，具有端到端加密，每个跳跃的密钥都会更改。完全去中心化，它运行在志愿路由器上，没有中央控制，抵抗关闭和监视。

### 您应该使用 I2P 吗？
I2P 在私人 P2P 方面表现出色，但对初学者不友好。请考虑以下：

| **优点** | **缺点** |
|------|------|
| 优秀的内部活动匿名性，如通过 I2PSnark 进行 torrenting，无需出口节点。 | 由于沉重的加密和路由，速度较慢。 |
| 通过数据混合和无单一故障点抵抗监视。 | 较小的用户群（30k-60k 路由器）意味着较少的内容和可靠性。 |
| 活跃社区，在网络内集成 IRC 和电子邮件。 | 更陡峭的设置：学习如目的地等概念；没有简单的浏览器捆绑包。 |

如果您需要匿名的内部网络并能处理设置，请选择 I2P。对于 clearnet 访问，使用 Tor 或 VPN。

### 安装 I2P
从[官方网站](https://geti2p.net/en/download)下载 I2P，记得验证签名。

**先决条件：** [Java JRE](https://www.oracle.com/java/technologies/downloads/)（除 Windows Easy Bundle 外）。

**Windows：** 从 geti2p.net/nsis 获取 Easy Bundle（无 Java），或在安装 Java 后使用标准安装程序。

**macOS：** 通过双击或终端运行 .jar 安装程序：`java -jar i2pinstall_2.10.0.jar`。

**Linux：** 通过终端运行 .jar 安装程序：`java -jar i2pinstall_2.10.0.jar`。

**Android：** 从网站或 F-Droid 获取 APK（Android 4.0+，512MB RAM）；卸载旧版本。

**安装后：** 访问控制台 `http://127.0.0.1:7657/` 进行配置。从低带宽开始。集成如 I2PSnark 等应用。