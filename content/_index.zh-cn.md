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
    image="../images/surveillance.webp"
    imageClass="hero-surveillance-image hx-block"
    imageTitle="Surveillance Camera" >}}
  {{< /hextra/hero-container >}}

  <div class="hx-mt-6 hx-mb-6">{{< hextra/hero-headline >}}立即开始您的隐私之旅&nbsp;<br class="sm:hx-block hx-hidden" />与 Beginner Privacy{{< /hextra/hero-headline >}}
  </div>

  <div class=" hero-take-quiz hx-mb-6" style="display: inline-flex; width: 100%;">{{< hextra/hero-subtitle >}}你的隐私很重要！但大组织正在夺走它。&nbsp;<br class="sm:hx-block hx-hidden" />初学者隐私是你重获私人生活的路线图。
  {{< /hextra/hero-subtitle >}}
  </div>

  {{< hextra/hero-button text="现在开始" onclick="scrollDown();" >}}
  {{< hextra/hero-button text="不确定？这就是原因" link="articles/why-you-should-care-about-your-privacy" >}}
</div>

<div id="roadmap" class="roadmap" style="margin-bottom: 10rem;">
  <div class="hx-mt-6" style="width: 100%; margin-top: 10rem;">
    <h1 class="hx-font-bold md:hx-text-5xl">路线图</h1>
    <div style="display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap;">
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
      <div id="import-export" style="display: flex; align-items: center;">
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
      {{< hextra/feature-card title="关于 Beginner Privacy" link="about" style="background: radial-gradient(ellipse at 50% 80%,rgba(194,97,254,0.15),hsla(0,0%,100%,0));" >}}
      {{< hextra/feature-card title="为什么要关心你的隐私？" link="articles/why-you-should-care-about-your-privacy" style="background: radial-gradient(ellipse at 50% 80%,rgba(194,97,254,0.15),hsla(0,0%,100%,0));" >}}
      {{< hextra/feature-card title="找到威胁模型" link="articles/how-to-find-a-threat-model-that-suits-you" style="background: radial-gradient(ellipse at 50% 80%,rgba(194,97,254,0.15),hsla(0,0%,100%,0));"  >}}
    {{< /hextra/feature-grid >}}
  </div>
  <div id="basicContent" class="roadmap-section" style="display:none;">
    {{< hextra/feature-grid >}}
        <!-- Row 1 -->
        {{< hextra/feature-card title="基本介绍" link="about/roadmap-introductions/basic" style="background: radial-gradient(ellipse at 50% 80%,rgba(97, 254, 176, 0.15),hsla(0,0%,100%,0));" >}}
        {{< hextra/feature-card title="强密码" link="articles/how-to-create-strong-passwords-and-store-them-securily" style="background: radial-gradient(ellipse at 50% 80%,rgba(97, 254, 176, 0.15),hsla(0,0%,100%,0));" >}}
        {{< hextra/feature-card title="双重身份验证 (2FA)" style="background: radial-gradient(ellipse at 50% 80%,rgba(97, 254, 176, 0.15),hsla(0,0%,100%,0));" >}}
        {{< hextra/feature-card title="限制共享的信息" style="background: radial-gradient(ellipse at 50% 80%,rgba(97, 254, 176, 0.15),hsla(0,0%,100%,0));" >}}
        {{< hextra/feature-card title="私人浏览器" style="background: radial-gradient(ellipse at 50% 80%,rgba(97, 254, 176, 0.15),hsla(0,0%,100%,0));" >}}
        <!-- Row 2 -->
        {{< hextra/feature-card title="私人电子邮件" style="background: radial-gradient(ellipse at 50% 80%,rgba(97, 254, 176, 0.15),hsla(0,0%,100%,0));" >}}
        {{< hextra/feature-card title="移动隐私设置" style="background: radial-gradient(ellipse at 50% 80%,rgba(97, 254, 176, 0.15),hsla(0,0%,100%,0));" >}}
        {{< hextra/feature-card title="桌面隐私设置" style="background: radial-gradient(ellipse at 50% 80%,rgba(97, 254, 176, 0.15),hsla(0,0%,100%,0));" >}}
        {{< hextra/feature-card title="虚拟专用网络（VPN）" style="background: radial-gradient(ellipse at 50% 80%,rgba(97, 254, 176, 0.15),hsla(0,0%,100%,0));" >}}
        {{< hextra/feature-card title="私人搜索引擎" style="background: radial-gradient(ellipse at 50% 80%,rgba(97, 254, 176, 0.15),hsla(0,0%,100%,0));" >}}
        <!-- Row 3 -->
        {{< hextra/feature-card title="安全消息传递" style="background: radial-gradient(ellipse at 50% 80%,rgba(97, 254, 176, 0.15),hsla(0,0%,100%,0));" >}}
        {{< hextra/feature-card title="有什么遗漏吗？贡献吧！" link="about/contribute/write-content/" style="background: radial-gradient(ellipse at 50% 80%,rgba(97, 254, 176, 0.15),hsla(0,0%,100%,0));" >}}
    {{< /hextra/feature-grid >}}
  </div>
  <div id="mediumContent" class="roadmap-section" style="display:none;">
    {{< hextra/feature-grid >}}
      <!-- Row 1 -->
      {{< hextra/feature-card title="中级介绍" link="about/roadmap-introductions/medium" style="background: radial-gradient(ellipse at 50% 80%,rgba(254, 225, 97, 0.15),hsla(0,0%,100%,0));" >}}
      {{< hextra/feature-card title="切换到Linux" style="background: radial-gradient(ellipse at 50% 80%,rgba(254, 225, 97, 0.15),hsla(0,0%,100%,0));" >}}
      {{< hextra/feature-card title="自由和开源软件" style="background: radial-gradient(ellipse at 50% 80%,rgba(254, 225, 97, 0.15),hsla(0,0%,100%,0));" >}}
      {{< hextra/feature-card title="社交媒体前端" style="background: radial-gradient(ellipse at 50% 80%,rgba(254, 225, 97, 0.15),hsla(0,0%,100%,0));" >}}
      {{< hextra/feature-card title="从数据经纪人处删除" style="background: radial-gradient(ellipse at 50% 80%,rgba(254, 225, 97, 0.15),hsla(0,0%,100%,0));" >}}
      <!-- Row 2 -->
      {{< hextra/feature-card invisibleFiller="true" >}}
      {{< hextra/feature-card title="有什么遗漏吗？贡献吧！" link="about/contribute/write-content/" style="background: radial-gradient(ellipse at 50% 80%,rgba(254, 225, 97, 0.15),hsla(0,0%,100%,0));" >}}
      {{< hextra/feature-card title="基本操作安全" style="background: radial-gradient(ellipse at 50% 80%,rgba(254, 225, 97, 0.15),hsla(0,0%,100%,0));" >}}
      {{< hextra/feature-card title="什么是Tor？" style="background: radial-gradient(ellipse at 50% 80%,rgba(254, 225, 97, 0.15),hsla(0,0%,100%,0));" >}}
      {{< hextra/feature-card title="加密DNS" style="background: radial-gradient(ellipse at 50% 80%,rgba(254, 225, 97, 0.15),hsla(0,0%,100%,0));" >}}
    {{< /hextra/feature-grid >}}
  </div>
  <div id="advancedContent" class="roadmap-section" style="display:none;">
    {{< hextra/feature-grid >}}
      <!-- Row 1 -->
      {{< hextra/feature-card title="高级介绍" link="about/roadmap-introductions/advanced" style="background: radial-gradient(ellipse at 50% 80%,rgba(254, 128, 97, 0.15),hsla(0,0%,100%,0));" >}}
      {{< hextra/feature-card title="桌面操作系统" style="background: radial-gradient(ellipse at 50% 80%,rgba(254, 128, 97, 0.15),hsla(0,0%,100%,0));" >}}
      {{< hextra/feature-card title="移动操作系统" style="background: radial-gradient(ellipse at 50% 80%,rgba(254, 128, 97, 0.15),hsla(0,0%,100%,0));" >}}
      {{< hextra/feature-card title="自托管" style="background: radial-gradient(ellipse at 50% 80%,rgba(254, 128, 97, 0.15),hsla(0,0%,100%,0));" >}}
      {{< hextra/feature-card title="加密货币" style="background: radial-gradient(ellipse at 50% 80%,rgba(254, 128, 97, 0.15),hsla(0,0%,100%,0));" >}}
      <!-- Row 2 -->
      {{< hextra/feature-card title="高级操作安全" style="background: radial-gradient(ellipse at 50% 80%,rgba(254, 128, 97, 0.15),hsla(0,0%,100%,0));" >}}
      {{< hextra/feature-card title="什么是I2P？" style="background: radial-gradient(ellipse at 50% 80%,rgba(254, 128, 97, 0.15),hsla(0,0%,100%,0));" >}}
      {{< hextra/feature-card title="避免蜜罐" style="background: radial-gradient(ellipse at 50% 80%,rgba(254, 128, 97, 0.15),hsla(0,0%,100%,0));" >}}
      {{< hextra/feature-card title="加密一切" style="background: radial-gradient(ellipse at 50% 80%,rgba(254, 128, 97, 0.15),hsla(0,0%,100%,0));" >}}
      {{< hextra/feature-card title="获取加密货币" style="background: radial-gradient(ellipse at 50% 80%,rgba(254, 128, 97, 0.15),hsla(0,0%,100%,0));" >}}
      <!-- Row 3 -->        
      {{< hextra/feature-card title="有什么遗漏吗？贡献吧！" link="about/contribute/write-content/" style="background: radial-gradient(ellipse at 50% 80%,rgba(254, 128, 97, 0.15),hsla(0,0%,100%,0));" >}}
    {{< /hextra/feature-grid >}}
  </div>
</div>
</div>

<div class="hx-mt-16" style="width: 100%; text-align: center; font-size: 2rem;">
    <h1 class="hx-font-bold">我们需要你的帮助！</h1>
    {{< hextra/hero-subtitle >}}初学者隐私是100%免费的，并且将永远保持免费！ 然而，它依赖于贡献者和社区的支持才能茁壮成长。<br>以下是您可以帮助的几种方式：{{< /hextra/hero-subtitle >}}
    <div style="display: inline-flex; flex-wrap: wrap; justify-content: center; margin-top: 2rem;">
    {{< hextra/hero-button text="写内容" link="about/contribute/write-content" icon="pencil" style="height: 50px; font-size: 18px; display: flex; center; align-items: center;justify-content: center; width: 200px; margin-inline: 2px;" >}}
    {{< hextra/hero-button text="翻译" link="about/contribute/translate" icon="translate" style="height: 50px; font-size: 18px; display: flex; center; align-items: center;justify-content: center; width: 200px; margin-inline: 2px;" >}}
    {{< hextra/hero-button text="捐赠" link="about/donate" icon="heart" style="height: 50px; font-size: 18px; display: flex; center; align-items: center;justify-content: center; width: 200px; margin-inline: 2px;" >}}
    {{< hextra/hero-button text="传播消息" onClick="" icon="share" style="height: 50px; font-size: 18px; display: flex; center; align-items: center;justify-content: center; width: 200px; margin-inline: 2px;" >}}
    </div>
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
                <td data-label="名字">PrintN</td>
                <td data-label="角色">创始人，开发者</td>
                <td data-label="贡献">代码，文档</td>
                <td data-label="链接"><a href="https://github.com/PrintN" target="_blank">GitHub</a></td>
            </tr>
            <tr>
                <td data-label="名字">你本可以在这里的！</td>
                <td data-label="角色">你的角色</td>
                <td data-label="贡献">你的贡献</td>
                <td data-label="链接"><a href="https://github.com/" target="_blank">你的GitHub</a></td>
            </tr>
        </tbody>
    </table>
</div>