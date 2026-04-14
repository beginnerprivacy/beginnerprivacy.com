---
title: Password Strength Tester
description: Check how strong your password is and estimate how long it would take to crack using different levels of computing power.
---
<div id="tool-container" class="tool-container">
  <div class="field">
    <label class="label label-text">Attacker computing power:</label>
    <select id="hash-rate" class="select-dropdown">
      <option value="184000">Standard hardware (184K guesses/sec)</option>
      <option value="3000000">High-end hardware (3M guesses/sec)</option>
      <option value="2000000000000">Nation-state (2T guesses/sec)</option>
    </select>
  </div>

  <div class="password-input field">
    <input id="password-input" type="password" placeholder="Enter password..." class="input">
    <button onclick="togglePassword()" id="toggle-btn">{{< hextra/icon name="eye" attributes="height=28" >}}</button>
  </div>

  <div class="field">
    <div class="strength-label">
      Password strength: <span id="strength-text">-</span>
    </div>
    <progress id="strength-bar" max="100" value="0"></progress>
  </div>

  <hr class="divider">

  <div id="crack-display" class="field">
    Estimated time to crack: <span id="crack-time">-</span>
  </div>
</div>

<div class="faq-container">
  <h3 class="hx-text-center">Frequently Asked Questions</h3>
  {{< tools/faq-item question="Is it safe to type my real password here?" answer="Yes, everything runs locally in your browser and nothing is sent anywhere. That said, it's still best practice to avoid entering real passwords and instead use a similar dummy password." >}}

  {{< tools/faq-item question="What makes a password strong?" answer="A strong password is at least 16 characters long and uses a mix of letters, numbers, and symbols. It's recommended to use a [password generator](/tools/password-generator) to create strong and unique passwords." >}}

  {{< tools/faq-item question="How is crack time calculated?" answer="We estimate entropy based on character variety and length, then simulate brute-force attacks using the selected hardware speed." >}}
</div>