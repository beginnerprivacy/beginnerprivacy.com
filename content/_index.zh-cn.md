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
  找出你在路线图上的位置&nbsp;<br class="sm:hx-block hx-hidden" />通过参加测验 👉
{{< /hextra/hero-subtitle >}}
{{< hextra/hero-button text="Take Quiz" link="/" style="height: 10%; margin: 5px 0px 0px 5%;" >}}
</div>

<div class="hx-mt-6">
    <h1 class="hx-font-bold md:hx-text-5xl">路线图</h1>
    <div class="tabs">
      <input type="radio" id="radio-start" name="tabs" value="start" checked onclick="updateRoadmap()" />
      <label class="tab" for="radio-start">开始</label>
      <input type="radio" id="radio-normie" name="tabs" value="normie" onclick="updateRoadmap()" />
      <label class="tab" for="radio-normie">菜鸟</label>
      <input type="radio" id="radio-anonymous" name="tabs" value="anonymous" onclick="updateRoadmap()" />
      <label class="tab" for="radio-anonymous">菜鸟</label>
      <input type="radio" id="radio-whistleblower" name="tabs" value="whistleblower" onclick="updateRoadmap()" />
      <label class="tab" for="radio-whistleblower">举报人</label>
      <span class="glider"></span>
    </div>
  </div>
</div>

<div id="roadmapContent" class="hx-mt-4">
  <div id="startContent" class="roadmap-section">
    {{< hextra/feature-grid >}}
      {{< hextra/feature-card title="初学者隐私如何运作" style="background: radial-gradient(ellipse at 50% 80%,rgba(194,97,254,0.15),hsla(0,0%,100%,0));" >}}
      {{< hextra/feature-card title="为什么你应该关心你的隐私" style="background: radial-gradient(ellipse at 50% 80%,rgba(194,97,254,0.15),hsla(0,0%,100%,0));" >}}
      {{< hextra/feature-card title="了解你的威胁模型" style="background: radial-gradient(ellipse at 50% 80%,rgba(194,97,254,0.15),hsla(0,0%,100%,0));" >}}
    {{< /hextra/feature-grid >}}
  </div>

  <div id="normieContent" class="roadmap-section" style="display:none;">
    {{< hextra/feature-grid >}}
      {{< hextra/feature-card title="敬请期待！" style="background: radial-gradient(ellipse at 50% 80%,rgba(97, 254, 176, 0.15),hsla(0,0%,100%,0));" >}}
      {{< hextra/feature-card title="敬请期待！" style="background: radial-gradient(ellipse at 50% 80%,rgba(97, 254, 176, 0.15),hsla(0,0%,100%,0));" >}}
      {{< hextra/feature-card title="敬请期待！" style="background: radial-gradient(ellipse at 50% 80%,rgba(97, 254, 176, 0.15),hsla(0,0%,100%,0));" >}}
      {{< hextra/feature-card title="敬请期待！" style="background: radial-gradient(ellipse at 50% 80%,rgba(97, 254, 176, 0.15),hsla(0,0%,100%,0));" >}}
      {{< hextra/feature-card title="敬请期待！" style="background: radial-gradient(ellipse at 50% 80%,rgba(97, 254, 176, 0.15),hsla(0,0%,100%,0));" >}}
    {{< /hextra/feature-grid >}}
  </div>

  <div id="anonymousContent" class="roadmap-section" style="display:none;">
    {{< hextra/feature-grid >}}
      {{< hextra/feature-card title="敬请期待！" style="background: radial-gradient(ellipse at 50% 80%,rgba(254, 225, 97, 0.15),hsla(0,0%,100%,0));" >}}
      {{< hextra/feature-card title="敬请期待！" style="background: radial-gradient(ellipse at 50% 80%,rgba(254, 225, 97, 0.15),hsla(0,0%,100%,0));" >}}
      {{< hextra/feature-card title="敬请期待！" style="background: radial-gradient(ellipse at 50% 80%,rgba(254, 225, 97, 0.15),hsla(0,0%,100%,0));" >}}
      {{< hextra/feature-card title="敬请期待！" style="background: radial-gradient(ellipse at 50% 80%,rgba(254, 225, 97, 0.15),hsla(0,0%,100%,0));" >}}
      {{< hextra/feature-card title="敬请期待！" style="background: radial-gradient(ellipse at 50% 80%,rgba(254, 225, 97, 0.15),hsla(0,0%,100%,0));" >}}
    {{< /hextra/feature-grid >}}
  </div>

  <div id="whistleblowerContent" class="roadmap-section" style="display:none;">
    {{< hextra/feature-grid >}}
      {{< hextra/feature-card title="敬请期待！" style="background: radial-gradient(ellipse at 50% 80%,rgba(254, 128, 97, 0.15),hsla(0,0%,100%,0));" >}}
      {{< hextra/feature-card title="敬请期待！" style="background: radial-gradient(ellipse at 50% 80%,rgba(254, 128, 97, 0.15),hsla(0,0%,100%,0));" >}}
      {{< hextra/feature-card title="敬请期待！" style="background: radial-gradient(ellipse at 50% 80%,rgba(254, 128, 97, 0.15),hsla(0,0%,100%,0));" >}}
      {{< hextra/feature-card title="敬请期待！" style="background: radial-gradient(ellipse at 50% 80%,rgba(254, 128, 97, 0.15),hsla(0,0%,100%,0));" >}}
      {{< hextra/feature-card title="敬请期待！" style="background: radial-gradient(ellipse at 50% 80%,rgba(254, 128, 97, 0.15),hsla(0,0%,100%,0));" >}}
    {{< /hextra/feature-grid >}}
  </div>
</div>

<script>
  function updateRoadmap() {
    const sections = document.querySelectorAll('.roadmap-section');
    sections.forEach(section => section.style.display = 'none');
    
    const selectedTab = document.querySelector('input[name="tabs"]:checked').value;
    document.getElementById(selectedTab + 'Content').style.display = 'block';
  }
</script>