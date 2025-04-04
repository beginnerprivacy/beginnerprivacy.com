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

  <div class="hx-mt-6 hx-mb-6">{{< hextra/hero-headline >}}今天就开始你的隐私之旅&nbsp;<br class="sm:hx-block hx-hidden" />与 Beginner Privacy{{< /hextra/hero-headline >}}
  </div>

  <div class=" hero-take-quiz hx-mb-6" style="display: inline-flex; width: 100%;">{{< hextra/hero-subtitle >}}你的隐私很重要！但大组织正在夺走它。&nbsp;<br class="sm:hx-block hx-hidden" />初学者隐私是你重获私人生活的路线图。
  {{< /hextra/hero-subtitle >}}
  </div>

  {{< hextra/hero-button text="现在开始" onclick="scrollDown();" style="margin: 2px;" >}}
  {{< hextra/hero-button text="不确定？这就是原因" onclick="scrollMisconceptions();" style="margin: 2px;" >}}
</div>

<div id="roadmap" style="margin-bottom: 10rem; width: 100%; padding-top: 10rem;">
  <div class="roadmap hx-mt-6">
    <div>
      <h2 class="hx-text-4xl hx-font-bold md:hx-text-5xl">路线图</h2>
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
      <ol>
        <li>{{< hextra/feature-card title="关于 Beginner Privacy" link="about" style="background: radial-gradient(ellipse at 50% 80%,rgba(38, 125, 255, 0.15),hsla(0,0%,100%,0));" >}}</li>
        <li>{{< hextra/feature-card title="为什么要关心你的隐私？" link="articles/why-you-should-care-about-your-privacy" style="background: radial-gradient(ellipse at 50% 80%,rgba(38, 125, 255, 0.15),hsla(0,0%,100%,0));" >}}</li>
        <li>{{< hextra/feature-card title="找到威胁模型" link="articles/how-to-find-a-threat-model-that-suits-you" style="background: radial-gradient(ellipse at 50% 80%,rgba(38, 125, 255, 0.15),hsla(0,0%,100%,0));" >}}</li>
      </ol>
    </div>
    <div id="basicContent" class="roadmap-section" style="display:none;">
      <ol>
        <li>{{< hextra/feature-card title="基本介绍" link="about/roadmap-introductions/basic" style="background: radial-gradient(ellipse at 50% 80%,rgba(97, 254, 176, 0.15),hsla(0,0%,100%,0));" >}}</li>
        <li>{{< hextra/feature-card title="强密码" link="articles/how-to-create-strong-passwords-and-store-them-securely" style="background: radial-gradient(ellipse at 50% 80%,rgba(97, 254, 176, 0.15),hsla(0,0%,100%,0));" >}}</li>
        <li>{{< hextra/feature-card title="双重身份验证 (2FA)" link="articles/two-factor-authentication-and-why-you-need-it" style="background: radial-gradient(ellipse at 50% 80%,rgba(97, 254, 176, 0.15),hsla(0,0%,100%,0));" >}}</li>
        <li>{{< hextra/feature-card title="限制共享的信息" link="articles/limit-the-personal-information-you-share-online" style="background: radial-gradient(ellipse at 50% 80%,rgba(97, 254, 176, 0.15),hsla(0,0%,100%,0));" >}}</li>
        <li>{{< hextra/feature-card title="私人浏览器" link="articles/why-you-need-a-private-browser-to-protect-yourself" style="background: radial-gradient(ellipse at 50% 80%,rgba(97, 254, 176, 0.15),hsla(0,0%,100%,0));" >}}</li>
        <li>{{< hextra/feature-card title="私人搜索引擎" link="articles/searching-safely-with-a-privacy-focused-search-engine" style="background: radial-gradient(ellipse at 50% 80%,rgba(97, 254, 176, 0.15),hsla(0,0%,100%,0));" >}}</li>
        <li>{{< hextra/feature-card title="虚拟专用网络（VPN）" link="articles/what-is-a-vpn-and-should-you-use-one" style="background: radial-gradient(ellipse at 50% 80%,rgba(97, 254, 176, 0.15),hsla(0,0%,100%,0));" >}}</li>
        <li>{{< hextra/feature-card title="桌面隐私设置" link="articles/change-these-mobile-settings-for-better-privacy" style="background: radial-gradient(ellipse at 50% 80%,rgba(97, 254, 176, 0.15),hsla(0,0%,100%,0));" >}}</li>
        <li>{{< hextra/feature-card title="移动隐私设置" link="articles/desktop-settings-to-change-for-better-privacy" style="background: radial-gradient(ellipse at 50% 80%,rgba(97, 254, 176, 0.15),hsla(0,0%,100%,0));" >}}</li>
        <li>{{< hextra/feature-card title="私人电子邮件" link="articles/protect-your-communication-with-a-private-email" style="background: radial-gradient(ellipse at 50% 80%,rgba(97, 254, 176, 0.15),hsla(0,0%,100%,0));" >}}</li>
        <li>{{< hextra/feature-card title="安全消息传递" link="articles/ditch-sms-and-use-secure-communication-methods" style="background: radial-gradient(ellipse at 50% 80%,rgba(97, 254, 176, 0.15),hsla(0,0%,100%,0));" >}}</li>
        <li>{{< hextra/feature-card title="有什么遗漏吗？贡献吧！" link="about/about-contributing" contributeCard="true" style="background: radial-gradient(ellipse at 50% 80%,rgba(97, 254, 176, 0.15),hsla(0,0%,100%,0));" >}}</li>
      </ol>
    </div>
    <div id="mediumContent" class="roadmap-section" style="display:none;">
      <ol>
        <li>{{< hextra/feature-card title="中级介绍" link="about/roadmap-introductions/medium" style="background: radial-gradient(ellipse at 50% 80%,rgba(254, 225, 97, 0.15),hsla(0,0%,100%,0));" >}}</li>
        <li>{{< hextra/feature-card title="自由和开源软件" link="articles/break-free-from-proprietary-software-with-foss" style="background: radial-gradient(ellipse at 50% 80%,rgba(254, 225, 97, 0.15),hsla(0,0%,100%,0));" >}}</li>
        <li>{{< hextra/feature-card title="切换到Linux" link="articles/how-to-easily-switch-to-linux" style="background: radial-gradient(ellipse at 50% 80%,rgba(254, 225, 97, 0.15),hsla(0,0%,100%,0));" >}}</li>
        <li>{{< hextra/feature-card title="社交媒体前端" style="background: radial-gradient(ellipse at 50% 80%,rgba(254, 225, 97, 0.15),hsla(0,0%,100%,0));" >}}</li>
        <li>{{< hextra/feature-card title="从数据经纪人处删除" style="background: radial-gradient(ellipse at 50% 80%,rgba(254, 225, 97, 0.15),hsla(0,0%,100%,0));" >}}</li>
        <li>{{< hextra/feature-card title="基本操作安全" style="background: radial-gradient(ellipse at 50% 80%,rgba(254, 225, 97, 0.15),hsla(0,0%,100%,0));" >}}</li>
        <li>{{< hextra/feature-card title="什么是Tor？" style="background: radial-gradient(ellipse at 50% 80%,rgba(254, 225, 97, 0.15),hsla(0,0%,100%,0));" >}}</li>
        <li>{{< hextra/feature-card title="加密DNS" style="background: radial-gradient(ellipse at 50% 80%,rgba(254, 225, 97, 0.15),hsla(0,0%,100%,0));" >}}</li>
        <li>{{< hextra/feature-card title="有什么遗漏吗？贡献吧！" link="about/about-contributing" contributeCard="true" style="background: radial-gradient(ellipse at 50% 80%,rgba(254, 225, 97, 0.15),hsla(0,0%,100%,0));" >}}</li>
      </ol>
    </div>
    <div id="advancedContent" class="roadmap-section" style="display:none;">
      <ol>
        <li>{{< hextra/feature-card title="高级介绍" link="about/roadmap-introductions/advanced" style="background: radial-gradient(ellipse at 50% 80%,rgba(254, 128, 97, 0.15),hsla(0,0%,100%,0));" >}}</li>
        <li>{{< hextra/feature-card title="桌面操作系统" style="background: radial-gradient(ellipse at 50% 80%,rgba(254, 128, 97, 0.15),hsla(0,0%,100%,0));" >}}</li>
        <li>{{< hextra/feature-card title="移动操作系统" style="background: radial-gradient(ellipse at 50% 80%,rgba(254, 128, 97, 0.15),hsla(0,0%,100%,0));" >}}</li>
        <li>{{< hextra/feature-card title="自托管" style="background: radial-gradient(ellipse at 50% 80%,rgba(254, 128, 97, 0.15),hsla(0,0%,100%,0));" >}}</li>
        <li>{{< hextra/feature-card title="加密货币" style="background: radial-gradient(ellipse at 50% 80%,rgba(254, 128, 97, 0.15),hsla(0,0%,100%,0));" >}}</li>
        <li>{{< hextra/feature-card title="获取加密货币" style="background: radial-gradient(ellipse at 50% 80%,rgba(254, 128, 97, 0.15),hsla(0,0%,100%,0));" >}}</li>
        <li>{{< hextra/feature-card title="加密一切" style="background: radial-gradient(ellipse at 50% 80%,rgba(254, 128, 97, 0.15),hsla(0,0%,100%,0));" >}}</li>
        <li>{{< hextra/feature-card title="避免蜜罐" style="background: radial-gradient(ellipse at 50% 80%,rgba(254, 128, 97, 0.15),hsla(0,0%,100%,0));" >}}</li>
        <li>{{< hextra/feature-card title="什么是I2P？" style="background: radial-gradient(ellipse at 50% 80%,rgba(254, 128, 97, 0.15),hsla(0,0%,100%,0));" >}}</li>
        <li>{{< hextra/feature-card title="高级操作安全" style="background: radial-gradient(ellipse at 50% 80%,rgba(254, 128, 97, 0.15),hsla(0,0%,100%,0));" >}}</li>
        <li>{{< hextra/feature-card title="有什么遗漏吗？贡献吧！" link="about/about-contributing" contributeCard="true" style="background: radial-gradient(ellipse at 50% 80%,rgba(254, 128, 97, 0.15),hsla(0,0%,100%,0));" >}}</li>
      </ol>
    </div>
  </div>
  </div>
</div>

<div id="common-misconceptions" class="hx-text-center" style="margin-bottom: 10rem;width: 100%; padding-top: 10rem;">
    <h2 class="hx-text-4xl hx-font-bold md:hx-text-5xl" style="display: inline;">常见误解</h2>
    <div class="misconception-container">
        <div class="misconception-card">
            <h2 style="font-size: 1.5rem; font-weight: bold;">"我为什么要关心？"</h2>
            <p style="font-size: 1rem;">你的隐私对你的安全和尊严至关重要。就像你在上厕所时关上门以保护个人空间一样，保护你的个人信息也是至关重要的。“我没有什么好隐藏的”这个想法忽视了隐私是每个人的基本权利，而不仅仅是那些有秘密的人。保护你的数据有助于防止身份盗窃和不必要的监视。</p>
        </div>
        <div class="misconception-card">
            <h2 style="font-size: 1.5rem; font-weight: bold;">"现在还来得及吗？"</h2>
            <p style="font-size: 1rem;">保护你隐私的最佳时机就是今天！现在采取行动至关重要，因为公司可能已经可以访问你的数据。通过主动管理你的隐私设置和数据共享，你可以显著减少你的数字足迹，并保护你的个人信息安全。</p>
        </div>
        <div class="misconception-card">
            <h2 style="font-size: 1.5rem; font-weight: bold;">"我该怎么办？"</h2>
            <p style="font-size: 1rem;">尝试改善你的隐私可能会让人感到不知所措；这就是我们创建 Beginner Privacy 的原因，旨在尽可能简化这一过程。</p>
            {{< hextra/hero-button text="开始改善你的隐私" onclick="scrollUpMisconceptions();" style="margin-top: 15px;" >}}
        </div>
    </div>
</div>

<div class="community-section">
    <div class="community-content">
        <img src="../images/earth.webp" alt="社区图片" class="community-image">
    </div>
    <div class="community-cta">
        <h2 class="hx-text-4xl hx-font-bold md:hx-text-5xl">加入我们的社区</h2>
        <p style="font-size: 1.1rem;">与热衷于隐私的志同道合者联系。加入我们的论坛，关注我们的社交媒体，参与讨论。</p>
        <div class="social-chat-container">
          <div class="chat-section">
            <h2 style="font-size: 2rem; font-weight: bold;">社交媒体</h2>
            <div class="platform-icons">
                <a href="https://x.com/BeginnerPrivacy" title="𝕏" target="_blank" rel="noopener noreferrer">
                    {{< hextra/icon name="x-twitter" attributes="height=25" >}}
                </a>
                <a href="https://youtube.com/@BeginnerPrivacy" title="YouTube" target="_blank" rel="noopener noreferrer">
                    {{< hextra/icon name="youtube" attributes="height=25" >}}
                </a>
                <a href="https://odysee.com/@BeginnerPrivacy" title="Odysee" target="_blank" rel="noopener noreferrer">
                    {{< hextra/icon name="odysee" attributes="height=25" >}}
                </a>
                <a href="https://tiktok.com/@BeginnerPrivacy" target="_blank" title="TikTok" rel="noopener noreferrer">
                    {{< hextra/icon name="tiktok" attributes="height=25" >}}
                </a>
                <a href="https://mastodon.social/@BeginnerPrivacy" target="_blank" title="Mastodon" rel="noopener noreferrer">
                    {{< hextra/icon name="mastodon" attributes="height=25" >}}
                </a>
            </div>
          </div>
          <div class="chat-section">
            <h2 style="font-size: 2rem; font-weight: bold;">聊天</h2>
            <div class="platform-icons">
              <a href="https://simplex.chat/contact#/?v=2-7&smp=smp%3A%2F%2FSkIkI6EPd2D63F4xFKfHk7I1UGZVNn6k1QWZ5rcyr6w%3D%40smp9.simplex.im%2FcfczJf7T628buhqA3Wx-R5Z8Qeb8Rm6O%23%2F%3Fv%3D1-3%26dh%3DMCowBQYDK2VuAyEAsuFeRqk-qIj6V3DaF651t7NnZZgaQdjIrVaanCtIjgs%253D%26srv%3Djssqzccmrcws6bhmn77vgmhfjmhwlyr3u7puw4erkyoosywgl67slqqd.onion&data=%7B%22groupLinkId%22%3A%220DamkEDZ2yoh6F7pbxsmRw%3D%3D%22%7D" target="_blank" title="SimpleX 聊天" rel="noopener noreferrer">
                  {{< hextra/icon name="simplex" attributes="height=25" >}}
              </a>
            </div>
          </div>
        </div>
    </div>
</div>

<div class="checklists-section" style="margin-bottom: 16rem; width: 100%; margin-top: 16rem;">
    <h2 class="hx-text-4xl hx-font-bold md:hx-text-5xl" style="display: inline;">检查清单</h2>
    <div class="carousel-button prev" onclick="moveCarousel(-1)">&#10094;</div>
    <div class="carousel-button next" onclick="moveCarousel(1)">&#10095;</div>
    <p style="font-size: 1.1rem; margin-bottom: 10px;">使用我们的检查清单在抗议等活动中保持安全和匿名。<br>点击与您匹配的个人资料以获取 重要提示和资源。</p>
    <div class="carousel">
        <div class="carousel-track">
            <a href="checklists/?m=whistleblower" draggable="false">
              <div class="carousel-item">
                  <h3>举报人</h3>
              </div>
            </a>
            <a href="checklists/?m=protestor" draggable="false">
              <div class="carousel-item">
                  <h3>抗议者</h3>
              </div>
            </a>
            <a href="checklists/?m=casual-internet-user" draggable="false">
              <div class="carousel-item">
                  <h3>普通互联网用户</h3>
              </div>
            </a>
            <a href="checklists/?m=darknet-user" draggable="false">
              <div class="carousel-item">
                  <h3>暗网用户</h3>
              </div>
            </a>
            <a href="checklists/?m=social-media-influencer" draggable="false">
              <div class="carousel-item">
                  <h3>社交媒体影响者</h3>
              </div>
            </a>
            <a href="checklists/?m=hacker" draggable="false">
              <div class="carousel-item">
                  <h3>黑客</h3>
              </div>
            </a>
            <a href="checklists/?m=digital-nomad" draggable="false">
              <div class="carousel-item">
                  <h3>数字游牧者</h3>
              </div>
            </a>
            <a href="checklists/?m=mass-surveillance" draggable="false">
              <div class="carousel-item">
                  <h3>大规模监控</h3>
              </div>
            </a>
        </div>
    </div>
</div>

<div class="hx-mt-16" style="width: 100%; text-align: center; font-size: 2rem;">
    <h2 class="hx-text-4xl hx-font-bold md:hx-text-5xl">我们需要你的帮助！</h2>
    <p style="font-size: 1.1rem;">初学者隐私是100%免费的，并且将永远保持免费！ 然而，它依赖于贡献者和社区的支持才能茁壮成长。<br>以下是您可以帮助的几种方式：</p>
    <div style="display: inline-flex; flex-wrap: wrap; justify-content: center; margin-top: 2rem;">
    {{< hextra/hero-button text="写内容" link="about/write-content" icon="pencil" style="height: 50px; font-size: 18px; display: flex; center; align-items: center;justify-content: center; width: 200px; margin: 2px;" >}}
    {{< hextra/hero-button text="翻译" link="about/translate" icon="translate" style="height: 50px; font-size: 18px; display: flex; center; align-items: center;justify-content: center; width: 200px; margin: 2px;" >}}
    {{< hextra/hero-button text="捐赠" link="about/donate" icon="heart" style="height: 50px; font-size: 18px; display: flex; center; align-items: center;justify-content: center; width: 200px; margin: 2px;" >}}
    {{< hextra/hero-button text="传播消息" onClick="" icon="share" style="height: 50px; font-size: 18px; display: flex; center; align-items: center;justify-content: center; width: 200px; margin: 2px;" >}}
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