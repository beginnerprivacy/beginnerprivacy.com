---
title: 密码生成器
description: 立即生成强大、独特的密码、易记的密码短语和安全的PIN码。自定义长度、字符类型和强度设置，以适应各种安全需求。
---
<div id="tool-container">
  <div class="tabs">
    <button onclick="switchTab(0)" id="tab-0" class="tab-button hx-p-4 active">密码</button>
    <button onclick="switchTab(1)" id="tab-1" class="tab-button hx-p-4">密码短语</button>
    <button onclick="switchTab(2)" id="tab-2" class="tab-button hx-p-4">PIN码</button>
  </div>
  <div class="options-column">
    <div id="options-0" class="options-group">
      <div class="slider-group">
        <div class="slider-header">
          <label>字符数：</label>
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
          <label>单词数：</label>
          <span id="words-val" class="slider-value">5</span>
        </div>
        <input type="range" id="length-1" min="3" max="20" value="5" step="1" oninput="updateWords()">
      </div>
      <div class="hx-flex hx-flex-wrap hx-justify-center hx-p-4">
        <label class="option-card">
          <input type="checkbox" id="cap" checked>
          <div>首字母大写</div>
        </label>
        <label class="option-card">
          <input type="checkbox" id="add-num">
          <div>添加数字</div>
        </label>
        <label class="option-card">
          <input type="text" id="separator" value="-" oninput="setSep(this, this.value)">
          <div>单词分隔符</div>
        </label>
      </div>
    </div>
    <div id="options-2" class="options-group hidden">
      <div class="slider-group">
        <div class="slider-header">
          <label>数字数：</label>
          <span id="length-val-2" class="slider-value">6</span>
        </div>
        <input class="hx-mb-4" type="range" id="length-2" min="4" max="40" value="6" step="1" oninput="updateSlider(2)">
      </div>
    </div>
  </div>
  <div class="result-card">
    <button onclick="copyPassword()" id="password-box" class="password-display" title="点击复制"></button>
    <hr style="width: 95%; margin: auto;">
    <div id="crack-display" class="hx-p-2">破解估计时间：<span id="crack-time"></span></div>
  </div>
  <div class="hx-flex hx-flex-wrap hx-justify-center hx-py-4 hx-gap-1">
    <button onclick="copyPassword()" class="not-prose hx-font-medium hx-cursor-pointer hx-select-none hx-px-8 hx-py-2 hx-rounded-full hx-text-center hx-text-white hx-inline-flex hx-items-center hx-bg-primary-600 hover:hx-bg-primary-700 dark:hx-bg-primary-600 dark:hover:hx-bg-primary-700 hx-transition-all hx-ease-in hx-duration-200 hx-gap-1">
      {{< hextra/icon name="copy" attributes="height=20" >}}
      <span>复制</span>
    </button>
    <button onclick="generatePassword()" class="not-prose hx-font-medium hx-cursor-pointer hx-select-none hx-px-8 hx-py-2 hx-rounded-full hx-text-center hx-text-white hx-inline-flex hx-items-center hx-bg-primary-600 hover:hx-bg-primary-700 dark:hx-bg-primary-600 dark:hover:hx-bg-primary-700 hx-transition-all hx-ease-in hx-duration-200 hx-gap-1">
      {{< hextra/icon name="arrow-path" attributes="height=20" >}}
      <span>重新生成</span>
    </button>
  </div>
</div>

<div class="faq-container">
  <h3 class="hx-text-center">常见问题</h3>
  {{< tools/faq-item question="什么是强密码？" answer="强密码使用大写字母、小写字母、数字和符号的混合。密码长度至少应为16个字符，并且是独一无二的。" >}}
  {{< tools/faq-item question="密码短语更安全吗？" answer="不一定。密码短语不比密码本质上更安全，但它们通常更容易记住。因此，它们通常被推荐作为密码管理器的主密码。" >}}
  {{< tools/faq-item question="这个密码生成器安全吗？" answer="是的。所有密码都在本地生成，并未存储或传输。" >}}
</div>

<div id="toast" class="hidden">
  {{< hextra/icon name="check" attributes="height=20" >}}
  <span id="toast-msg">密码已复制到剪贴板</span>
</div>