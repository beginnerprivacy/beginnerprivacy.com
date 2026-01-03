---
title: W为什么你应该开始自托管你自己的服务
description: 开始自行托管服务，享受更高的隐私性、成本节省和独立性。
time: 30分钟
date: 2025-03-07
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

### 如何立即开始
准备好投入了吗？自托管有两种主要方式：家庭服务器（使用您自己的物理硬件——从 Raspberry Pi 到高端定制设备，用于文件存储、媒体流传输或网站；它们灵活且适合亲手控制）或 VPS 租赁（虚拟化服务器，具有专用资源，便于扩展，受企业青睐，需要托管的 24/7 在线时间）。我们推荐从旧笔记本上的家庭服务器开始：它是免费的，利用其电池作为 UPS（不间断电源）来应对断电，非常适合快速实验——然后根据需要升级到更好的硬件。如果您不想费心在自己的硬件上设置东西，那么在 [kycnot.me](https://kycnot.me/) 上找一个无 KYC 的 VPS。

#### 步骤 1: 安装 Debian（无桌面环境）
- 从 [debian.org/distrib](https://www.debian.org/distrib/) 下载 ISO。
- 使用 [Rufus](https://rufus.ie) 或 `dd` 刻录到 USB（如果需要快速复习，请参阅我们的 [Linux 安装指南](/zh-cn/articles/how-to-effortlessly-switch-to-linux-step-by-step-guide/)）。
- 从 USB 启动（通过 F2/Del 进入 BIOS，在启动顺序中优先 USB），继续默认安装，但在软件选择中，取消选中 **Debian 桌面环境** 和 **GNOME** 以获得无头服务器。

#### 步骤 2: 安装 Docker
在终端中运行以下命令：
```
sudo apt update && sudo apt upgrade -y
sudo apt install apt-transport-https ca-certificates curl gnupg lsb-release -y
curl -fsSL https://download.docker.com/linux/debian/gpg | sudo gpg --dearmor -o /usr/share/keyrings/docker-archive-keyring.gpg
echo "deb [arch=$(dpkg --print-architecture) signed-by=/usr/share/keyrings/docker-archive-keyring.gpg] https://download.docker.com/linux/debian $(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
sudo apt update
sudo apt install docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin -y
sudo usermod -aG docker $USER
```
测试：`docker run hello-world`。

#### 步骤 3: 运行一个服务
浏览 [awesome-selfhosted](https://awesome-selfhosted.net/) 以查找 Docker 就绪应用（例如 Jellyfin）。使用它们的 `docker run` 或 `docker-compose.yml`。
- Jellyfin 示例：
```
docker run -d \
  --name=jellyfin \
  -p 8096:8096 \
  -v /srv/jellyfin/config:/config \
  -v /srv/jellyfin/cache:/cache \
  -v /media:/media \
  jellyfin/jellyfin:latest
```
- 现在您可以在网络上通过 `http://your-server-ip:8096` 访问 Jellyfin。