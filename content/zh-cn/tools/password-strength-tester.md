---
title: 密码强度测试器
description: 检查你的密码有多强，并估算使用不同计算能力破解密码需要的时间。
---
<div id="tool-container" class="tool-container">
  <div class="field">
    <label class="label label-text">攻击者计算能力：</label>
    <select id="hash-rate" class="select-dropdown">
      <option value="184000">标准硬件（184K 次尝试/秒）</option>
      <option value="3000000">高端硬件（3M 次尝试/秒）</option>
      <option value="2000000000000">国家级（2T 次尝试/秒）</option>
    </select>
  </div>

  <div class="password-input field">
    <input id="password-input" type="password" placeholder="输入密码..." class="input">
    <button onclick="togglePassword()" id="toggle-btn">{{< hextra/icon name="eye" attributes="height=28" >}}</button>
  </div>

  <div class="field">
    <div class="strength-label">
      密码强度：<span id="strength-text">-</span>
    </div>
    <progress id="strength-bar" max="100" value="0"></progress>
  </div>

  <hr class="divider">

  <div id="crack-display" class="field">
    预计破解时间：<span id="crack-time">-</span>
  </div>
</div>

<div class="faq-container">
  <h3 class="hx-text-center">常见问题</h3>
  {{< tools/faq-item question="在这里输入真实密码安全吗？" answer="是的，所有操作都在你的浏览器本地运行，数据不会发送到任何地方。不过，最佳实践仍是避免使用真实密码，而使用类似的虚拟密码。" >}}

  {{< tools/faq-item question="什么样的密码才算强密码？" answer="强密码至少包含16个字符，并混合使用字母、数字和符号。建议使用[密码生成器](/zh-cn/tools/password-generator)来创建强大且唯一的密码。" >}}

  {{< tools/faq-item question="破解时间是如何计算的？" answer="我们根据字符种类和长度估算熵值，然后使用选定硬件速度模拟暴力破解攻击。" >}}
</div>