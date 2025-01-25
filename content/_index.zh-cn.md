---
title: 初学者的隐私
layout: hextra-home
---
<div class="hero">
  {{< hextra/hero-badge link="https://github.com/BeginnerPrivacy" >}}<div class="hx-w-2 hx-h-2 hx-rounded-full hx-bg-primary-400"></div>
    <span>免费，开源</span>
    {{< icon name="arrow-circle-right" attributes="height=14" >}}
  {{< /hextra/hero-badge >}}

  {{< hextra/hero-container
    image="surveillance.webp"
    imageClass="hero-surveillance-image hx-block"
    imageTitle="Surveillance Camera" >}}
  {{< /hextra/hero-container >}}

  <div class="hx-mt-6 hx-mb-6">{{< hextra/hero-headline >}}立即开始您的隐私之旅&nbsp;<br class="sm:hx-block hx-hidden" />初学者隐私{{< /hextra/hero-headline >}}
  </div>

  <div class=" hero-take-quiz hx-mb-6" style="display: inline-flex; width: 100%;">{{< hextra/hero-subtitle >}}你的隐私很重要！但大组织正在夺走它。&nbsp;<br class="sm:hx-block hx-hidden" />初学者隐私是你重获私人生活的路线图。
  {{< /hextra/hero-subtitle >}}
  </div>

  {{< hextra/hero-button text="现在开始" onClick="takeQuiz();" >}}
  {{< hextra/hero-button text="不确定？ 这就是原因。" link="articles/why-you-should-care-about-your-privacy" >}}

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
    <div id="quizResult">
      <span id="basic" style="display: none;">你应该从基础路线图开始。</span>
      <span id="medium" style="display: none;">你应该从Medium的路线图开始。</span>
      <span id="advanced" style="display: none;">你应该从高级路线图开始。</span>
    </div>
  </div>
</div>

<div class="roadmap" style="margin-bottom: 10rem;">
  <div class="hx-mt-6" style="width: 100%; margin-top: 10rem;">
    <h1 class="hx-font-bold md:hx-text-5xl">路线图</h1>
    <div style="display: flex; align-items: center; justify-content: space-between;">
      <div class="tabs">
          <input type="radio" id="radio-start" name="tabs" value="start" checked onclick="updateRoadmap()" />
          <label class="tab" for="radio-start">开始</label>
          <input type="radio" id="radio-basic" name="tabs" value="basic" onclick="updateRoadmap()" />
          <label class="tab" for="radio-basic">基本</label>
          <input type="radio" id="radio-medium" name="tabs" value="medium" onclick="updateRoadmap()" />
          <label class="tab" for="radio-medium">基本</label>
          <input type="radio" id="radio-advanced" name="tabs" value="advanced" onclick="updateRoadmap()" />
          <label class="tab" for="radio-advanced">高级</label>
          <span class="glider"></span>
      </div>
      <div style="display: flex; align-items: center;">
          <label for="importFile" class="not-prose hx-font-medium hx-cursor-pointer hx-px-6 hx-py-2 hx-rounded-full hx-text-center hx-text-white hx-inline-block hx-bg-primary-600 hover:hx-bg-primary-700">
              导入
              <input type="file" id="importFile" accept=".json" style="display: none;" onchange="importCheckbox();" />
          </label>
          <button id="exportButton" style="margin-left: 5px;" class="not-prose hx-font-medium hx-cursor-pointer hx-px-6 hx-py-2 hx-rounded-full hx-text-center hx-text-white hx-inline-block hx-bg-primary-600 hover:hx-bg-primary-700" onclick="exportCheckbox();">出口</button>
      </div>
    </div>
</div>

<div id="roadmapContent" class="hx-mt-4">
  <div id="startContent" class="roadmap-section">
    {{< hextra/feature-grid >}}
      {{< hextra/feature-card title="初学者隐私如何运作" style="background: radial-gradient(ellipse at 50% 80%,rgba(194,97,254,0.15),hsla(0,0%,100%,0));" >}}
      {{< hextra/feature-card title="为什么要关心隐私？" link="articles/why-you-should-care-about-your-privacy" style="background: radial-gradient(ellipse at 50% 80%,rgba(194,97,254,0.15),hsla(0,0%,100%,0));" >}}
      {{< hextra/feature-card title="找到威胁模型" style="background: radial-gradient(ellipse at 50% 80%,rgba(194,97,254,0.15),hsla(0,0%,100%,0));" >}}
      {{< hextra/feature-card title="逐步实施" style="background: radial-gradient(ellipse at 50% 80%,rgba(194,97,254,0.15),hsla(0,0%,100%,0));" displayVertical="false" >}}
    {{< /hextra/feature-grid >}}
  </div>

  <div id="basicContent" class="roadmap-section" style="display:none;">
      {{< hextra/feature-grid >}}
        {{< hextra/feature-card title="基本介绍" style="background: radial-gradient(ellipse at 50% 80%,rgba(97, 254, 176, 0.15),hsla(0,0%,100%,0));" >}}
        {{< hextra/feature-card title="虚拟专用网络" style="background: radial-gradient(ellipse at 50% 80%,rgba(97, 254, 176, 0.15),hsla(0,0%,100%,0));" >}}
        {{< hextra/feature-card title="隐私专注的浏览器" style="background: radial-gradient(ellipse at 50% 80%,rgba(97, 254, 176, 0.15),hsla(0,0%,100%,0));" >}}
        {{< hextra/feature-card title="强大且独特的密码" style="background: radial-gradient(ellipse at 50% 80%,rgba(97, 254, 176, 0.15),hsla(0,0%,100%,0));" >}}
        {{< hextra/feature-card title="隐私保护电子邮件" style="background: radial-gradient(ellipse at 50% 80%,rgba(97, 254, 176, 0.15),hsla(0,0%,100%,0));" displayVertical="true" >}}
      {{< /hextra/feature-grid >}}
      <br>
      {{< hextra/feature-grid >}}
        {{< hextra/feature-card title="限制共享的信息" style="background: radial-gradient(ellipse at 50% 80%,rgba(97, 254, 176, 0.15),hsla(0,0%,100%,0));" displayVertical="both" >}}
        {{< hextra/feature-card title="敬请期待！" style="background: radial-gradient(ellipse at 50% 80%,rgba(97, 254, 176, 0.15),hsla(0,0%,100%,0));" >}}
        {{< hextra/feature-card title="敬请期待！" style="background: radial-gradient(ellipse at 50% 80%,rgba(97, 254, 176, 0.15),hsla(0,0%,100%,0));" >}}
        {{< hextra/feature-card title="敬请期待！" style="background: radial-gradient(ellipse at 50% 80%,rgba(97, 254, 176, 0.15),hsla(0,0%,100%,0));" >}}
        {{< hextra/feature-card title="敬请期待！" style="background: radial-gradient(ellipse at 50% 80%,rgba(97, 254, 176, 0.15),hsla(0,0%,100%,0));" displayVertical="false" >}}
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
      {{< hextra/feature-card title="中级介绍" style="background: radial-gradient(ellipse at 50% 80%,rgba(254, 225, 97, 0.15),hsla(0,0%,100%,0));" >}}
      {{< hextra/feature-card title="切换到Linux" style="background: radial-gradient(ellipse at 50% 80%,rgba(254, 225, 97, 0.15),hsla(0,0%,100%,0));" >}}
      {{< hextra/feature-card title="敬请期待！" style="background: radial-gradient(ellipse at 50% 80%,rgba(254, 225, 97, 0.15),hsla(0,0%,100%,0));" >}}
      {{< hextra/feature-card title="敬请期待！" style="background: radial-gradient(ellipse at 50% 80%,rgba(254, 225, 97, 0.15),hsla(0,0%,100%,0));" >}}
      {{< hextra/feature-card title="敬请期待！" style="background: radial-gradient(ellipse at 50% 80%,rgba(254, 225, 97, 0.15),hsla(0,0%,100%,0));" displayVertical="true" >}}
    {{< /hextra/feature-grid >}}
    <br>
    {{< hextra/feature-grid >}}
      {{< hextra/feature-card title="敬请期待！" style="background: radial-gradient(ellipse at 50% 80%,rgba(254, 225, 97, 0.15),hsla(0,0%,100%,0));" displayVertical="both" >}}
      {{< hextra/feature-card title="敬请期待！" style="background: radial-gradient(ellipse at 50% 80%,rgba(254, 225, 97, 0.15),hsla(0,0%,100%,0));" >}}
      {{< hextra/feature-card title="敬请期待！" style="background: radial-gradient(ellipse at 50% 80%,rgba(254, 225, 97, 0.15),hsla(0,0%,100%,0));" >}}
      {{< hextra/feature-card title="敬请期待！" style="background: radial-gradient(ellipse at 50% 80%,rgba(254, 225, 97, 0.15),hsla(0,0%,100%,0));" >}}
      {{< hextra/feature-card title="敬请期待！" style="background: radial-gradient(ellipse at 50% 80%,rgba(254, 225, 97, 0.15),hsla(0,0%,100%,0));" displayVertical="false" >}}
    {{< /hextra/feature-grid >}}
    <br>
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
      {{< hextra/feature-card title="高级介绍" style="background: radial-gradient(ellipse at 50% 80%,rgba(254, 128, 97, 0.15),hsla(0,0%,100%,0));" >}}
      {{< hextra/feature-card title="加密货币" style="background: radial-gradient(ellipse at 50% 80%,rgba(254, 128, 97, 0.15),hsla(0,0%,100%,0));" >}}
      {{< hextra/feature-card title="获取加密货币" style="background: radial-gradient(ellipse at 50% 80%,rgba(254, 128, 97, 0.15),hsla(0,0%,100%,0));" >}}
      {{< hextra/feature-card title="敬请期待！" style="background: radial-gradient(ellipse at 50% 80%,rgba(254, 128, 97, 0.15),hsla(0,0%,100%,0));" >}}
      {{< hextra/feature-card title="敬请期待！" style="background: radial-gradient(ellipse at 50% 80%,rgba(254, 128, 97, 0.15),hsla(0,0%,100%,0));" displayVertical="true" >}}
    {{< /hextra/feature-grid >}}
    <br>
    {{< hextra/feature-grid >}}
      {{< hextra/feature-card title="敬请期待！" style="background: radial-gradient(ellipse at 50% 80%,rgba(254, 128, 97, 0.15),hsla(0,0%,100%,0));" displayVertical="both" >}}
      {{< hextra/feature-card title="敬请期待！" style="background: radial-gradient(ellipse at 50% 80%,rgba(254, 128, 97, 0.15),hsla(0,0%,100%,0));" >}}
      {{< hextra/feature-card title="敬请期待！" style="background: radial-gradient(ellipse at 50% 80%,rgba(254, 128, 97, 0.15),hsla(0,0%,100%,0));" >}}
      {{< hextra/feature-card title="敬请期待！" style="background: radial-gradient(ellipse at 50% 80%,rgba(254, 128, 97, 0.15),hsla(0,0%,100%,0));" >}}
      {{< hextra/feature-card title="敬请期待！" style="background: radial-gradient(ellipse at 50% 80%,rgba(254, 128, 97, 0.15),hsla(0,0%,100%,0));" displayVertical="false" >}}
    {{< /hextra/feature-grid >}}
    <br>
    {{< hextra/feature-grid >}}
      {{< hextra/feature-card title="敬请期待！" style="background: radial-gradient(ellipse at 50% 80%,rgba(254, 128, 97, 0.15),hsla(0,0%,100%,0));" >}}
      {{< hextra/feature-card title="敬请期待！" style="background: radial-gradient(ellipse at 50% 80%,rgba(254, 128, 97, 0.15),hsla(0,0%,100%,0));" >}}
      {{< hextra/feature-card title="敬请期待！" style="background: radial-gradient(ellipse at 50% 80%,rgba(254, 128, 97, 0.15),hsla(0,0%,100%,0));" >}}
      {{< hextra/feature-card title="敬请期待！" style="background: radial-gradient(ellipse at 50% 80%,rgba(254, 128, 97, 0.15),hsla(0,0%,100%,0));" >}}
      {{< hextra/feature-card title="敬请期待！" style="background: radial-gradient(ellipse at 50% 80%,rgba(254, 128, 97, 0.15),hsla(0,0%,100%,0));" displayVertical="false" >}}
    {{< /hextra/feature-grid >}}
  </div>
</div>
</div>

<div class="hx-mt-16" style="width: 100%; text-align: center; font-size: 2rem;">
    <h1 class="hx-font-bold">我们需要你的帮助！</h1>
    {{< hextra/hero-subtitle >}}初学者隐私是100%免费的，并且将永远保持免费！ 然而，它依赖于贡献者和社区的支持才能茁壮成长。<br>以下是您可以帮助的几种方式：{{< /hextra/hero-subtitle >}}
    <div style="display: inline-flex; flex-wrap: wrap; justify-content: center; margin-top: 2rem;">
    {{< hextra/hero-button text="写内容" link="/contribute" icon="pencil" style="height: 50px; font-size: 18px; display: flex; center; align-items: center;justify-content: center; width: 200px; margin-inline: 2px;" >}}
    {{< hextra/hero-button text="翻译" link="/contribute" icon="translate" style="height: 50px; font-size: 18px; display: flex; center; align-items: center;justify-content: center; width: 200px; margin-inline: 2px;" >}}
    {{< hextra/hero-button text="捐赠" link="/donate" icon="heart" style="height: 50px; font-size: 18px; display: flex; center; align-items: center;justify-content: center; width: 200px; margin-inline: 2px;" >}}
    {{< hextra/hero-button text="传播消息" onClick="" icon="share" style="height: 50px; font-size: 18px; display: flex; center; align-items: center;justify-content: center; width: 200px; margin-inline: 2px;" >}}
    </div>
    <style>
        table {
            width: 100%;
            border-collapse: collapse;
            margin-top: 2rem;
        }
        th, td {
            border: 1px solid #ddd;
            padding: 8px;
            text-align: left;
            font-size: 20px;
        }
    </style>
    <table>
        <thead>
            <tr>
                <th>名字</th>
                <th>角色</th>
                <th>贡献</th>
                <th>链接</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>PrintN</td>
                <td>创始人，开发者</td>
                <td>代码，文档</td>
                <td><a href="https://github.com/PrintN" target="_blank">GitHub</a></td>
            </tr>
            <tr>
                <td>你本可以在这里的！</td>
                <td>你的角色</td>
                <td>你的贡献</td>
                <td><a href="https://github.com/" target="_blank">你的GitHub</a></td>
            </tr>
        </tbody>
    </table>
</div>