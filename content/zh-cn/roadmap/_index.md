---
title: 路线图
excludeSearch: false
---
<section class="roadmap hx-pt-20" id="roadmap">
  <div>
    <div style="display: flex; align-items: center; justify-content: center; flex-wrap: wrap;">
      <div class="tabs hx-select-none">
        <input type="radio" id="radio-start" name="tabs" value="start" checked onclick="updateRoadmap()" />
        <label class="tab" for="radio-start">入门</label>
        <input type="radio" id="radio-basic" name="tabs" value="basic" onclick="updateRoadmap()" />
        <label class="tab" for="radio-basic">基础</label>
        <input type="radio" id="radio-medium" name="tabs" value="medium" onclick="updateRoadmap()" />
        <label class="tab" for="radio-medium">中级</label>
        <input type="radio" id="radio-advanced" name="tabs" value="advanced" onclick="updateRoadmap()" />
        <label class="tab" for="radio-advanced">高级</label>
        <span class="glider"></span>
      </div>
    </div>
  </div>
  <div id="roadmapContent" class="hx-mt-4">
    <div id="startContent" class="roadmap-section">
      <ol class="centerRoadmapOL">
        <li>{{< roadmap/card title="关于 Beginner Privacy" id="about-beginner-privacy" class="start-hf-card-color" >}}</li>
        <li>{{< roadmap/card title="为什么要在意你的隐私？" id="why-care-about-your-privacy" class="start-hf-card-color" >}}</li>
        <li>{{< roadmap/card title="找到你的威胁模型" id="finding-a-threat-model" class="start-hf-card-color" >}}</li>
      </ol>
    </div>
    <div id="basicContent" class="roadmap-section" style="display:none;">
      <ol>
        <li>{{< roadmap/card title="强密码" id="strong-passwords" class="basic-hf-card-color" >}}</li>
        <li>{{< roadmap/card title="双因素认证 (2FA)" id="two-factor-authentication" class="basic-hf-card-color" >}}</li>
        <li>{{< roadmap/card title="限制共享信息" id="limit-information-shared" class="basic-hf-card-color" >}}</li>
        <li>{{< roadmap/card title="隐私浏览器" id="private-browser" class="basic-hf-card-color" >}}</li>
        <li>{{< roadmap/card title="隐私搜索引擎" id="private-search-engine" class="basic-hf-card-color" >}}</li>
        <li>{{< roadmap/card title="虚拟私人网络 (VPN)" id="virtual-private-network" class="basic-hf-card-color" >}}</li>
        <li>{{< roadmap/card title="移动设备隐私设置" id="mobile-privacy-settings" class="basic-hf-card-color" >}}</li>
        <li>{{< roadmap/card title="桌面隐私设置" id="desktop-privacy-settings" class="basic-hf-card-color" >}}</li>
        <li>{{< roadmap/card title="隐私电子邮件" id="private-email" class="basic-hf-card-color" >}}</li>
        <li>{{< roadmap/card title="安全通信" id="secure-communication" class="basic-hf-card-color" >}}</li>
        <li>{{< roadmap/card title="从数据经纪商中移除" id="removal-from-data-brokers" class="basic-hf-card-color" >}}</li>
      </ol>
    </div>
    <div id="mediumContent" class="roadmap-section" style="display:none;">
      <ol>
        <li>{{< roadmap/card title="切换到 Linux" id="switch-to-linux" class="medium-hf-card-color" >}}</li>
        <li>{{< roadmap/card title="自由开源软件" id="free-and-open-source-software" class="medium-hf-card-color" >}}</li>
        <li>{{< roadmap/card title="加密 DNS" id="encrypted-dns" class="medium-hf-card-color" >}}</li>
        <li>{{< roadmap/card title="社交媒体前端" id="social-media-frontends" class="medium-hf-card-color" >}}</li>
        <li>{{< roadmap/card title="什么是 Tor？" id="what-is-tor" class="medium-hf-card-color" >}}</li>
        <li>{{< roadmap/card title="加密货币" id="cryptocurrency" class="medium-hf-card-color" >}}</li>
        <li>{{< roadmap/card title="自托管" id="self-hosting" class="medium-hf-card-color" >}}</li>
        <li>{{< roadmap/card title="物理安全" id="physical-security" class="medium-hf-card-color" >}}</li>
      </ol>
    </div>
    <div id="advancedContent" class="roadmap-section" style="display:none;">
      <ol class="centerRoadmapOL">
        <li>{{< roadmap/card title="超越 Beginner Privacy" id="moving-beyond-beginner-privacy" class="advanced-hf-card-color" >}}</li>
      </ol>
    </div>
  </div>
</section>