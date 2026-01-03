---
title: 双重身份验证（2FA）及其必要性
description: 启用2FA，为你的账户增加额外的安全层。
time: 20分钟
date: 2025-02-02
---
**想象一下：** 你多年来一直使用同一个密码。然后，一封电子邮件告诉你，有人从另一个国家登录了你的银行账户。

仅靠密码是不够的。黑客通过钓鱼攻击、数据泄露或暴力破解攻击窃取密码。双因素认证（2FA）增加了一层保护来阻止他们。

### 2FA是如何工作的？
双因素认证（2FA）通过要求两种验证方式增强账户安全性：你知道的东西（密码）和你拥有或属于你的东西（第二因素）。工作原理如下：

1. **输入密码**：你输入密码，系统会验证其与加密记录的匹配。
2. **提供第二因素**：如果密码正确，系统会要求第二种身份证明，例如：
   - **一次性代码**：来自认证应用、短信或电子邮件的临时代码，每30秒更新。
   - **生物识别**：指纹或面部扫描，与设备存储的安全模板进行比对。
   - **安全密钥**：物理设备（如YubiKey），通过独特数字签名确认身份。
3. **获得访问权限**：如果两种因素都匹配，你将登录。若任一失败，访问将被拒绝。

2FA之所以有效，是因为黑客需要同时获取你的密码和第二因素，这要困难得多。

### 2FA的类型：应该使用哪一种？
并非所有2FA方法的安全性都相同。

- **安全密钥**：最佳，物理设备（如YubiKey）可插入手机或电脑。
- **认证应用**：很好，这些应用允许你扫描二维码，然后完全离线生成时间敏感的代码。
- **短信/电子邮件代码**：方便，但黑客可能通过SIM卡交换或钓鱼攻击拦截这些代码。
- **生物识别**：不错，指纹或面部扫描很安全，但仅限于你拥有的设备。

### 如何在你的账户上启用2FA
大多数平台都让这变得很简单。以下是一些平台的操作方法：
- **Google：** 安全 → 双步验证 → 开始。
- **Apple ID：** 设置 → [你的名字] → 密码与安全。
- **Facebook：** 设置 → 安全与登录 → 双因素认证。
- **其他：** 通常与上述平台步骤相同。

### 推荐的认证应用
以下是我们推荐用于存储2FA代码的认证应用。许多[密码管理器](/zh-cn/articles/how-to-create-strong-passwords-and-store-them-securely/#安全存储密码)也可以存储2FA代码。
<div class="recommendations">
  <div class="grid">
    {{< articles/recommendation title="Ente Auth" link="https://ente.io/auth" logo="/images/articles/two-factor-authentication-and-why-you-need-it/ente-auth.webp" text="本地存储（代码可选择存储在云端），开源" platformIcon="linux android ios macos windows globe-alt" buttonText="访问网站" >}}
    {{< articles/recommendation title="Aegis" link="https://getaegis.app/" logo="/images/articles/two-factor-authentication-and-why-you-need-it/aegis.webp" text="本地存储，开源" platformIcon="android" buttonText="访问网站" >}}
  </div>
</div>