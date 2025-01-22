---
title: 初学者的隐私
layout: hextra-home
---

{{< hextra/hero-badge link="https://github.com/BeginnerPrivacy" >}}
  <div class="hx-w-2 hx-h-2 hx-rounded-full hx-bg-primary-400"></div>
  <span>免费，开源</span>
  {{< icon name="arrow-circle-right" attributes="height=14" >}}
{{< /hextra/hero-badge >}}

{{< hextra/hero-container
  image="../surveillance.webp"
  imageClass="hero-surveillance-image hx-block hx-overflow-hidden hx-rounded-3xl"
  imageTitle="Surveillance Camera" 
  imageWidth="250" imageHeight="250" >}}
{{< /hextra/hero-container >}}

<div class="hx-mt-6 hx-mb-6">
{{< hextra/hero-headline >}}
  开始您的隐私之旅&nbsp;<br class="sm:hx-block hx-hidden" />初学者隐私
{{< /hextra/hero-headline >}}
</div>

<div class=" hero-take-quiz hx-mb-12" style="display: inline-flex; width: 100%;">
{{< hextra/hero-subtitle >}}
  找出你在路线图上的位置&nbsp;<br class="sm:hx-block hx-hidden" />通过参加测验 👇
{{< /hextra/hero-subtitle >}}
</div>

{{< hextra/hero-button text="参加测验" onClick="takeQuiz();" >}}

<div id="quizModal">  
  <div id="question1" class="question">
      <p>你用Linux吗？</p>
  </div>
  <div id="question2" class="question">
      <p>你有技术经验吗？</p>
  </div>
  <div id="question3" class="question">
      <p>你打算在隐私上投入多少精力？</p>
      <p>
        <button class="hx-bg-primary-600" onclick="answerQuestion(2)">非常</button>
        <button class="hx-bg-primary-600" onclick="answerQuestion(1)">相当数量</button>
        <button class="hx-bg-primary-600" onclick="answerQuestion(0)">一点点</button>
      </p>
  </div>
  <div id="question4" class="question">
      <p>你想保护你的数据不被谁获取？</p>
      <p>
        <button class="hx-bg-primary-600" onclick="answerQuestion(0)">大公司</button>
        <button class="hx-bg-primary-600" onclick="answerQuestion(1)">黑客</button>
        <button class="hx-bg-primary-600" onclick="answerQuestion(2)">政府</button>
      </p>
  </div>

  <div style="text-align: center;">
    <button class="yes-no-button hx-bg-primary-600" onclick="answerQuestion('yes')">是的</button>
    <button class="yes-no-button hx-bg-primary-600" onclick="answerQuestion('no')">不</button>
  </div>
  <div id="quizResult"></div>
</div>

<div class="hx-mt-6">
    <h1 class="hx-font-bold md:hx-text-5xl">路线图</h1>
    <div class="tabs">
      <input type="radio" id="radio-start" name="tabs" value="start" checked onclick="updateRoadmap()" />
      <label class="tab" for="radio-start">开始</label>
      <input type="radio" id="radio-basic" name="tabs" value="basic" onclick="updateRoadmap()" />
      <label class="tab" for="radio-basic">基本</label>
      <input type="radio" id="radio-medium" name="tabs" value="medium" onclick="updateRoadmap()" />
      <label class="tab" for="radio-medium">中等</label>
      <input type="radio" id="radio-advanced" name="tabs" value="advanced" onclick="updateRoadmap()" />
      <label class="tab" for="radio-advanced">高级</label>
      <span class="glider"></span>
    </div>
  </div>
</div>

<div id="roadmapContent" class="hx-mt-4">
  <div id="startContent" class="roadmap-section">
    {{< hextra/feature-grid >}}
      {{< hextra/feature-card title="初学者隐私如何运作" style="background: radial-gradient(ellipse at 50% 80%,rgba(194,97,254,0.15),hsla(0,0%,100%,0));" >}}
      {{< hextra/feature-card title="为什么你应该关心你的隐私" style="background: radial-gradient(ellipse at 50% 80%,rgba(194,97,254,0.15),hsla(0,0%,100%,0));" >}}
      {{< hextra/feature-card title="了解你的威胁模型" style="background: radial-gradient(ellipse at 50% 80%,rgba(194,97,254,0.15),hsla(0,0%,100%,0));" displayVertical="false" >}}
    {{< /hextra/feature-grid >}}
  </div>

  <div id="basicContent" class="roadmap-section" style="display:none;">
      {{< hextra/feature-grid >}}
        {{< hextra/feature-card title="敬请期待！" style="background: radial-gradient(ellipse at 50% 80%,rgba(97, 254, 176, 0.15),hsla(0,0%,100%,0));" >}}
        {{< hextra/feature-card title="敬请期待！" style="background: radial-gradient(ellipse at 50% 80%,rgba(97, 254, 176, 0.15),hsla(0,0%,100%,0));" >}}
        {{< hextra/feature-card title="敬请期待！" style="background: radial-gradient(ellipse at 50% 80%,rgba(97, 254, 176, 0.15),hsla(0,0%,100%,0));" >}}
        {{< hextra/feature-card title="敬请期待！" style="background: radial-gradient(ellipse at 50% 80%,rgba(97, 254, 176, 0.15),hsla(0,0%,100%,0));" >}}
        {{< hextra/feature-card title="敬请期待！" style="background: radial-gradient(ellipse at 50% 80%,rgba(97, 254, 176, 0.15),hsla(0,0%,100%,0));" displayVertical="true" >}}
      {{< /hextra/feature-grid >}}
      <br>
      {{< hextra/feature-grid >}}
        {{< hextra/feature-card title="敬请期待！" style="background: radial-gradient(ellipse at 50% 80%,rgba(97, 254, 176, 0.15),hsla(0,0%,100%,0));" >}}
        {{< hextra/feature-card title="敬请期待！" style="background: radial-gradient(ellipse at 50% 80%,rgba(97, 254, 176, 0.15),hsla(0,0%,100%,0));" >}}
        {{< hextra/feature-card title="敬请期待！" style="background: radial-gradient(ellipse at 50% 80%,rgba(97, 254, 176, 0.15),hsla(0,0%,100%,0));" >}}
        {{< hextra/feature-card title="敬请期待！" style="background: radial-gradient(ellipse at 50% 80%,rgba(97, 254, 176, 0.15),hsla(0,0%,100%,0));" >}}
        {{< hextra/feature-card title="敬请期待！" style="background: radial-gradient(ellipse at 50% 80%,rgba(97, 254, 176, 0.15),hsla(0,0%,100%,0));" displayVertical="false" >}}
      {{< /hextra/feature-grid >}}
  </div>

  <div id="mediumContent" class="roadmap-section" style="display:none;">
    {{< hextra/feature-grid >}}
      {{< hextra/feature-card title="敬请期待！" style="background: radial-gradient(ellipse at 50% 80%,rgba(254, 225, 97, 0.15),hsla(0,0%,100%,0));" >}}
      {{< hextra/feature-card title="敬请期待！" style="background: radial-gradient(ellipse at 50% 80%,rgba(254, 225, 97, 0.15),hsla(0,0%,100%,0));" >}}
      {{< hextra/feature-card title="敬请期待！" style="background: radial-gradient(ellipse at 50% 80%,rgba(254, 225, 97, 0.15),hsla(0,0%,100%,0));" >}}
      {{< hextra/feature-card title="敬请期待！" style="background: radial-gradient(ellipse at 50% 80%,rgba(254, 225, 97, 0.15),hsla(0,0%,100%,0));" >}}
      {{< hextra/feature-card title="敬请期待！" style="background: radial-gradient(ellipse at 50% 80%,rgba(254, 225, 97, 0.15),hsla(0,0%,100%,0));" displayVertical="false" >}}
    {{< /hextra/feature-grid >}}
  </div>

  <div id="advancedContent" class="roadmap-section" style="display:none;">
    {{< hextra/feature-grid >}}
      {{< hextra/feature-card title="敬请期待！" style="background: radial-gradient(ellipse at 50% 80%,rgba(254, 128, 97, 0.15),hsla(0,0%,100%,0));" >}}
      {{< hextra/feature-card title="敬请期待！" style="background: radial-gradient(ellipse at 50% 80%,rgba(254, 128, 97, 0.15),hsla(0,0%,100%,0));" >}}
      {{< hextra/feature-card title="敬请期待！" style="background: radial-gradient(ellipse at 50% 80%,rgba(254, 128, 97, 0.15),hsla(0,0%,100%,0));" >}}
      {{< hextra/feature-card title="敬请期待！" style="background: radial-gradient(ellipse at 50% 80%,rgba(254, 128, 97, 0.15),hsla(0,0%,100%,0));" >}}
      {{< hextra/feature-card title="敬请期待！" style="background: radial-gradient(ellipse at 50% 80%,rgba(254, 128, 97, 0.15),hsla(0,0%,100%,0));" displayVertical="false" >}}
    {{< /hextra/feature-grid >}}
  </div>
</div>