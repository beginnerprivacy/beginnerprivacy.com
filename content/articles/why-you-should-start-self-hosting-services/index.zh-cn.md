---
title: 为什么你应该开始自我托管服务
date: 2025-05-20
authors:
  - name: PrintN
    link: https://github.com/PrintN
    image: https://github.com/PrintN.png
excludeSearch: false
---
在数据泄露和隐私问题占据头条的时代，自我托管已成为个人和组织寻求更大控制权的有力解决方案。

### 什么是自我托管？
自我托管是指在自己的硬件上运行应用程序、服务或网站，而不是依赖第三方提供商。这可以涉及从在 Raspberry Pi 上托管个人博客到在专用服务器上管理完整的云存储解决方案。核心思想是拥有自己的数字环境，让你决定数据的存储、访问和管理方式。

### 为什么你应该开始自我托管？
有许多令人信服的理由来进行自我托管：
- **独立性：** 你不依赖于可能更改条款、提高价格或甚至停止服务的第三方服务。
- **控制权：** 自我托管让你完全控制所使用的服务和数据，包括谁可以访问你的信息。
- **节省成本：** 尽管可能会有初始设置成本，但自我托管从长远来看可能更具成本效益，特别是如果你目前订阅了多个云服务。
- **隐私：** 你的数据保留在自己的硬件上，显著降低了第三方未经授权访问的风险。
- **定制化：** 你可以灵活地调整系统以满足特定需求，允许你按照自己的意愿安装和配置软件。

### 自我托管的类型
#### 1. 家庭服务器设置
家庭服务器设置是自我托管最容易接触的形式之一。通过使用相对低成本的硬件，如 Raspberry Pi 或旧笔记本电脑，你可以创建一个个人服务器来托管文件存储、媒体流或甚至个人网站等应用程序。家庭服务器非常适合希望在不进行重大投资的情况下探索自我托管的个人。

#### 2. 虚拟专用服务器 (VPS)
对于那些寻求更大能力和灵活性的人，虚拟专用服务器 (VPS) 提供了一个强大的替代方案。VPS 是在物理硬件上运行的虚拟化服务器，提供专用资源和更大的环境控制。这种选择在需要可靠性能和可扩展性的开发人员和小型企业中尤其受欢迎。

### 你可以自我托管哪些服务？
{{< callout type="info" >}}
  这只是一个简要概述；要获取更全面的自我托管服务列表，请务必查看 [awesome-selfhosted](https://awesome-selfhosted.net/)。
{{< /callout >}}

| **服务**                     | **好处**                                           | **解决方案**                          |
|---------------------------------|-------------------------------------------------------|-----------------------------------------------|
| **文件存储和同步** | 完全控制文件，除了硬件外没有存储限制 | [NextCloud](https://nextcloud.com/), [OwnCloud](https://owncloud.com/), [Seafile](https://www.seafile.com/), [Syncthing](https://syncthing.net/) |
| **电子邮件服务器**                | 隐私，定制域名电子邮件，无广告                 | [Poste.io](https://poste.io/), [iRedMail](https://www.iredmail.org/), [MailCow](https://mailcow.email/)          |
| **个人照片管理**   | 完全控制，无存储限制                        | [Immich](https://immich.app/), [PhotoPrism](https://photoprism.app/), [Ente](https://github.com/SwissDataScienceCenter/ente)             |
| **媒体服务器**                | 随时随地访问媒体，无需流媒体服务订阅 | [Jellyfin](https://jellyfin.org/), [Emby](https://emby.media/), [Plex](https://www.plex.tv/)                 |
| **密码管理器**            | 增强安全性，无需依赖第三方服务 | [Bitwarden](https://bitwarden.com/), [Passbolt](https://www.passbolt.com/)                  |
| **虚拟私人网络 (VPN)** | 增强隐私，无需每月支付 VPN 费用                  | [OpenVPN](https://openvpn.net/), [Wireguard](https://www.wireguard.com/)                   |
| **家庭自动化系统**     | 本地控制，增强隐私，无需依赖云服务 | [Home Assistant](https://www.home-assistant.io/), [OpenHAB](https://www.openhab.org/)              |
| **RSS 阅读器**             | 没有算法决定内容，完整的 feed 存档 | [Tiny Tiny RSS](https://tt-rss.org/), [FreshRSS](https://freshrss.org/)              |
| **笔记应用**    | 隐私，完全控制数据                        | [Joplin](https://joplinapp.org/), [LogSeq](https://logseq.com/)                      |
| **个人财务管理** | 财务数据隐私，可定制的类别和报告 | [Firefly III](https://firefly-iii.org/), [GnuCash](https://www.gnucash.org/)                 |
| **个人网站托管**    | 完全控制你的在线存在，可定制 | [Ghost](https://ghost.org/)                    |