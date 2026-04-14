---
title: Password Generator
description: Generate strong, unique passwords, memorable passphrases, and secure PINs instantly. Customize length, character types, and strength settings to fit every security need.
---
<div id="tool-container">
  <div class="tabs">
    <button onclick="switchTab(0)" id="tab-0" class="tab-button hx-p-4 active">Password</button>
    <button onclick="switchTab(1)" id="tab-1" class="tab-button hx-p-4">Passphrase</button>
    <button onclick="switchTab(2)" id="tab-2" class="tab-button hx-p-4">PIN Code</button>
  </div>
  <div class="options-column">
    <div id="options-0" class="options-group">
      <div class="slider-group">
        <div class="slider-header">
          <label>Characters:</label>
          <span id="length-val-0" class="slider-value">16</span>
        </div>
        <input type="range" id="length-0" min="8" max="128" value="16" step="1" oninput="updateSlider(0)">
      </div>
      <div class="hx-flex hx-flex-wrap hx-justify-center hx-p-4">
        <label class="option-card">
          <input type="checkbox" id="upper" checked>
          <div>A-Z</div>
        </label>
        <label class="option-card">
          <input type="checkbox" id="lower" checked>
          <div>a-z</div>
        </label>
        <label class="option-card">
          <input type="checkbox" id="numbers" checked>
          <div>0-9</div>
        </label>
        <label class="option-card">
          <input type="checkbox" id="symbols" checked>
          <div>!@#$%^</div>
        </label>
      </div>
    </div>
    <div id="options-1" class="options-group hidden">
      <div class="slider-group">
        <div class="slider-header">
          <label>Words:</label>
          <span id="words-val" class="slider-value">5</span>
        </div>
        <input type="range" id="length-1" min="3" max="20" value="5" step="1" oninput="updateWords()">
      </div>
      <div class="hx-flex hx-flex-wrap hx-justify-center hx-p-4">
        <label class="option-card">
          <input type="checkbox" id="cap" checked>
          <div>Capitalize</div>
        </label>
        <label class="option-card">
          <input type="checkbox" id="add-num">
          <div>Add number</div>
        </label>
        <label class="option-card">
          <input type="text" id="separator" value="-" oninput="setSep(this, this.value)">
          <div>Word separator</div>
        </label>
      </div>
    </div>
    <div id="options-2" class="options-group hidden">
      <div class="slider-group">
        <div class="slider-header">
          <label>Digits:</label>
          <span id="length-val-2" class="slider-value">6</span>
        </div>
        <input class="hx-mb-4" type="range" id="length-2" min="4" max="40" value="6" step="1" oninput="updateSlider(2)">
      </div>
    </div>
  </div>
  <div class="result-card">
    <button onclick="copyPassword()" id="password-box" class="password-display" title="Click to copy"></button>
    <hr style="width: 95%; margin: auto;">
    <div id="crack-display" class="hx-p-2">Estimated time to crack: <span id="crack-time">-</span></div>
  </div>
  <div class="hx-flex hx-flex-wrap hx-justify-center hx-py-4 hx-gap-1">
    <button onclick="copyPassword()" class="not-prose hx-font-medium hx-cursor-pointer hx-select-none hx-px-8 hx-py-2 hx-rounded-full hx-text-center hx-text-white hx-inline-flex hx-items-center hx-bg-primary-600 hover:hx-bg-primary-700 dark:hx-bg-primary-600 dark:hover:hx-bg-primary-700 hx-transition-all hx-ease-in hx-duration-200 hx-gap-1">
      {{< hextra/icon name="copy" attributes="height=20" >}}
      <span>Copy</span>
    </button>
    <button onclick="generatePassword()" class="not-prose hx-font-medium hx-cursor-pointer hx-select-none hx-px-8 hx-py-2 hx-rounded-full hx-text-center hx-text-white hx-inline-flex hx-items-center hx-bg-primary-600 hover:hx-bg-primary-700 dark:hx-bg-primary-600 dark:hover:hx-bg-primary-700 hx-transition-all hx-ease-in hx-duration-200 hx-gap-1">
      {{< hextra/icon name="arrow-path" attributes="height=20" >}}
      <span>Regenerate</span>
    </button>
  </div>
</div>

<div class="faq-container">
  <h3 class="hx-text-center">Frequently Asked Questions</h3>
  {{< tools/faq-item question="What is a strong password?" answer="A strong password uses a mix of uppercase letters, lowercase letters, numbers, and symbols. It should be long at least 16 characters and unique." >}}
  {{< tools/faq-item question="Are passphrases more secure?" answer="Not necessarily. Passphrases are not inherently more secure than passwords, but they are usually easier to remember. For that reason, they are often recommended as the master password for [password managers](/roadmap/basic/strong-passwords)." >}}
  {{< tools/faq-item question="Is this password generator safe?" answer="Yes. All passwords are generated locally in your browser. Nothing is stored or transmitted." >}}
</div>

<div id="toast" class="hidden">
  {{< hextra/icon name="check" attributes="height=20" >}}
  <span id="toast-msg">Password copied to clipboard</span>
</div>