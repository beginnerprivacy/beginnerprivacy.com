---
title: 双重身份验证（2FA）及其必要性
date: 2025-02-03
authors:
  - name: PrintN
    link: https://github.com/PrintN
    image: https://github.com/PrintN.png
excludeSearch: false
---
**想象一下：** 你已经用了多年的同一个密码。  然后，一封电子邮件说有人从另一个国家登录了你的银行账户。

仅靠密码是不够的。黑客通过网络钓鱼、泄露或暴力破解攻击窃取它们。双重身份验证（2FA）增加了第二层防护来阻止他们。

### 双重身份验证是如何工作的？
1. 输入您的密码。
2. 使用第二个因素进行验证
    - 一次性代码（应用程序 / 短信 / 电子邮件）。
    - 生物识别（指纹/面部扫描）。
    - 一把物理安全钥匙。

即使有了你的密码，黑客也无法在没有第二因素的情况下访问你的账户。

### 2FA的类型：你应该使用哪种？
并非所有的双重身份验证方法都是同样安全的。

**安全密钥：** 最佳的物理设备（如 YubiKey），可以插入你的手机或电脑。

**身份验证器应用程序：** 太好了，这些应用程序允许你扫描二维码，然后完全离线生成时间敏感的代码。

**短信/电子邮件验证码：** 方便，但黑客可以通过SIM交换或网络钓鱼来拦截这些信息。

**生物识别技术：** 好吧，指纹或面部扫描是安全的，但只适用于你拥有的设备。

### 如何在您的账户上启用双重身份验证
大多数平台都很简单。 以下是在一些平台上操作的方法：
- **谷歌：** 安全 → 两步验证 → 开始使用。
- **Apple ID：** 设置 → [你的名字] → 密码与安全。
- **Facebook：** 设置 → 安全与登录 → 双重身份验证。
- **其他：** 通常与上述平台相同的步骤。

### 推荐的身份验证器应用程序
以下是我们推荐的用于存储您的双重身份验证代码的身份验证器应用程序。许多[密码管理器](https://beginnerprivacy.com/articles/how-to-create-strong-passwords-and-store-them-securely/#storing-passwords-securely)也可以存储2FA代码。

<div class="recommendations">
  <div class="grid">
    {{< hextra/recommendation-card title="Ente Auth" link="https://ente.io/auth" logo="../../../images/articles/two-factor-authentication-and-why-you-need-it/ente-auth.webp" text="本地（代码可以选择性地存储在云端），开源" platformIcon="linux android ios macos windows globe-alt" buttonText="访问网站" >}}
    {{< hextra/recommendation-card title="Aegis" link="https://getaegis.app/" logo="../../../images/articles/two-factor-authentication-and-why-you-need-it/aegis.webp" text="本地，开源" platformIcon="android" buttonText="访问网站" >}}
  </div>  
</div>

*把这篇文章分享给那些还在单靠密码的人吧！*