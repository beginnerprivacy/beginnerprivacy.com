---
title: 双重身份验证（2FA）及其必要性
date: 2025-02-03
authors:
  - name: PrintN
    link: https://github.com/PrintN
    image: https://github.com/PrintN.png
excludeSearch: false
---
**想象一下：** 你多年来一直使用同一个密码。然后，一封电子邮件告诉你，有人从另一个国家登录了你的银行账户。

仅靠密码是不够的。黑客通过钓鱼攻击、数据泄露或暴力破解攻击窃取密码。双因素认证（2FA）增加了一层保护来阻止他们。

### 2FA是如何工作的？
双因素认证（2FA）通过要求两种不同的验证方式来保护你的账户：你知道的东西（你的密码）和你拥有或代表的东西（第二因素）。以下是其逐步工作原理：

1. **输入你的密码**：登录时，你输入常用的密码。这是第一因素，证明你知道账户的凭据。系统会检查密码是否与存储的加密密码匹配。

2. **系统要求第二因素**：如果密码正确，服务会提示你提供第二个证明，以确认真的是你。这个第二因素独立于你的密码，并使用不同的方法来验证你的身份。常见类型包括：
   - **一次性代码**：一个临时的、唯一的代码（通常为6-8位数字），由认证应用生成、通过短信发送或通过电子邮件发送。对于应用，代码使用共享密钥（在启用2FA时设置，通常通过扫描二维码）和基于时间的算法（TOTP，即基于时间的一次性密码）生成。代码每30秒更新一次，使其在短时间内对黑客无用。
   - **生物识别**：指纹、面部扫描或其他独特的身体特征。设备扫描你的生物识别数据，将其加密，并与存储的模板进行比较。这仅在你注册的设备上有效，确保数据本地存储且安全。
   - **物理安全密钥**：像YubiKey这样的设备，你可以将其插入电脑或在手机上轻触。收到提示时，密钥使用加密协议（如FIDO2或U2F）通过唯一的数字签名确认你的身份，证明你拥有该物理设备。

3. **验证和访问**：服务会检查第二因素是否与记录匹配。例如，它会确认一次性代码是否与该时刻的预期TOTP匹配，或验证安全密钥的签名。如果密码和第二因素都正确，你将被授予访问权限。如果任一因素失败，登录将被阻止，即使黑客有你的密码也能保证安全。

这种双重检查过程使2FA非常有效，因为仅窃取你的密码是不够的——黑客还需要访问你的第二因素，这要困难得多。

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
    {{< articles/recommendation title="Ente Auth" link="https://ente.io/auth" logo="../../images/articles/two-factor-authentication-and-why-you-need-it/ente-auth.webp" text="本地存储（代码可选择存储在云端），开源" platformIcon="linux android ios macos windows globe-alt" buttonText="访问网站" >}}
    {{< articles/recommendation title="Aegis" link="https://getaegis.app/" logo="../../images/articles/two-factor-authentication-and-why-you-need-it/aegis.webp" text="本地存储，开源" platformIcon="android" buttonText="访问网站" >}}
  </div>
</div>

*与那些仍然只靠密码冒险的人分享这篇文章！*