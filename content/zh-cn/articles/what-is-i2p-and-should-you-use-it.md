---
title: 什么是 I2P？您应该使用它吗？
date: 2025-10-07
authors:
  - name: PrintN
    link: https://github.com/PrintN
    image: https://github.com/PrintN.png
excludeSearch: false
---
I2P（Invisible Internet Project，隐形互联网计划）是现存最古老、最具韧性的匿名叠加网络之一，至今仍在积极开发中。自2003年推出以来，它一直是隐私爱好者、在高压政权下的举报人以及拒绝信任 Tor 出口节点模式的人的最爱。与 Tor 不同，I2P 从来不是为浏览明网（clearnet）设计的——它是一个完全独立、自成一体的“暗网”，一切都留在网络内部。

### I2P 是如何工作的？
I2P 的架构与 Tor 完全不同，用最通俗的话解释核心原理：

1. **没人能看到你的真实 IP**  
   你的流量始终通过由志愿者节点（对等点）组成的隧道传输，每个 I2P 用户同时也是中继节点。
2. **单向隧道（与 Tor 的最大区别）**  
   - 出站隧道：数据通过 3–7 个随机节点离开。  
   - 入站隧道：回复通过另一组完全不同的 3–7 个节点返回。  
   没有任何节点同时知道流量的起点和终点，连第一跳和最后一跳也不知道。
3. **大蒜路由（Garlic Routing，不是洋葱路由）**  
   你的消息被拆分、多重加密，再和其他人的消息打包成“一头蒜”。里面既有真实数据，也有诱饵，还有发往其他目的地的指令。这让时间分析和流量分析变得极其困难——远比 Tor 的单消息洋葱层层加密更难破解。
4. **隧道每10分钟更换一次**  
   旧路径丢弃，重新建立全新随机路径。即使有人持续监视你好几天，画面也会不断重置。
5. **端到端加密**  
   只有你和最终接收者持有解密密钥，中间的志愿者节点只负责转发加密包，永远看不到内容。
6. **完全封闭在自己的网络内**  
   没有接触普通互联网的“出口节点”（除非你主动使用极少见的出站代理）。网站（.i2p）、BT 下载、聊天、邮件等一切都留在 I2P 内部。

I2P 通过不断变换的单向志愿者隧道，把加密、混杂的数据碎片四处反弹，既隐藏“你是谁”，也隐藏“你在说什么”，而且绝不让任何流量离开自己的隐藏网络。

### 你应该使用 I2P 吗？
I2P 在私有 P2P 场景下表现极佳，但对新手不太友好。简单对比：

| **优点** | **缺点** |
|------|------|
| 内部活动（如通过 I2PSnark 下载 BT）匿名性极强，无出口节点风险 | 多重加密+复杂路由导致速度较慢 |
| 通过数据混淆、无单一故障点，极难被监控 | 用户基数小（3-6万路由器），内容和稳定性不如 Tor |
| 社区活跃，支持网络内部 IRC、邮件等 | 设置门槛高，需要理解“目的地”等概念，没有一键浏览器包 |

如果你需要高度匿名的内部网络并且能接受折腾，那就选 I2P；如果要访问明网，建议用 [Tor](/zh-cn/articles/navigating-the-web-anonymously-a-guide-to-tor-basics) 或 [VPNs](/zh-cn/articles/what-is-a-vpn-and-should-you-use-one)。

### I2P 安装步骤
1. **下载 I2P**  
   官网地址：[geti2p.net/zh/download](https://geti2p.net/zh/download)
2. **桌面版前置要求**  
   - [Java Runtime Environment (JRE)](https://www.oracle.com/java/technologies/downloads/)
   - 例外：Windows "Easy Install Bundle" 已内置全部依赖，无需单独装 Java。
3. **安装方式**

| 操作系统 | 安装方法 |
|----------|----------|
| **Windows** | 下载并运行 "Easy Install Bundle"（.exe）：[geti2p.net/zh/nsis](https://geti2p.net/zh/nsis) |
| **macOS** | 下载 macOS 版 `.jar`，双击 `i2pinstall_X.X.X.jar`，或终端运行：<br>`java -jar i2pinstall_X.X.X.jar` |
| **Linux** | 下载 Linux 版 `.jar`，终端运行：<br>`java -jar i2pinstall_X.X.X.jar` |
| **Android** | 直接从 I2P 官网下载 APK，或通过 [F-Droid](https://f-droid.org/packages/net.i2p.android.router/) 安装 |

4. **安装完成后**  
   - 启动 I2P 路由器（通常自动启动）。  
   - 打开浏览器访问路由器控制台：`http://127.0.0.1:7657/` 
   - 首次启动建议选择“低带宽”（以后可调高）。  
   - 在控制台里设置带宽、开启内置应用（如 I2PSnark BT 客户端），即可开始浏览 .i2p 网站或添加其他 I2P 应用。