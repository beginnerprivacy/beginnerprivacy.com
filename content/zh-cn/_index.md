---
title: 初学者的隐私
layout: hextra-home
---
<section class="hero hx-py-40 hx-text-center" id="hero">
  {{< hextra/hero-badge link="https://github.com/BeginnerPrivacy" >}}<div class="hx-w-2 hx-h-2 hx-rounded-full hx-bg-primary-400"></div>
    <span>免费，开源</span>
    {{< icon name="arrow-circle-right" attributes="height=14" >}}
  {{< /hextra/hero-badge >}}

  <div class="hx-mt-6 hx-mb-4">
    <h1 class="not-prose hx-text-4xl md:hx-text-9xl hx-font-bold hx-leading-none hx-tracking-tighter hx-py-2 hx-bg-clip-text">&nbsp;&nbsp;&nbsp;隐私变得简单。</h1>
  </div>

  <div class="hx-mb-6">
    <p class="hx-text-lg">您的隐私很重要！但大型组织正在剥夺它。<br> Beginner Privacy 帮助您在在线隐私和安全的广阔海洋中航行。</p>
  </div>

  <a href="roadmap" class="not-prose hx-font-medium hx-cursor-pointer hx-select-none hx-px-10 hx-py-3 hx-rounded-lg hx-text-center hx-text-white hx-inline-block hx-bg-primary-600 hover:hx-bg-primary-700 dark:hx-bg-primary-600 dark:hover:hx-bg-primary-700 hx-transition-all hx-ease-in hx-duration-200 start-now-button" style="margin: 2px;">
    开始您的旅程
    <span class="arrow">&rarr;</span>
  </a>
  <div class="not-prose hx-font-medium hx-cursor-pointer hx-select-none hx-px-10 hx-py-3 hx-rounded-lg hx-text-center hx-text-black dark:hx-text-white hx-inline-block not-sure-button hx-transition-all hx-ease-in hx-duration-200" style="margin: 2px;" onclick="scrollMisconceptions();">不确定？这就是原因</div>

  <div class="hero-waves">
    <svg class="waves" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 24 150 28" preserveAspectRatio="none" shape-rendering="auto">
      <defs>
        <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
      </defs>
      <g class="parallax">
        <use class="wave" xlink:href="#gentle-wave" x="48" y="0" fill="rgba(243,244,246, 0.7)" />
        <use class="wave" xlink:href="#gentle-wave" x="48" y="3" fill="rgba(243,244,246, 0.5)" />
        <use class="wave" xlink:href="#gentle-wave" x="48" y="5" fill="rgba(243,244,246, 0.3)" />
        <use class="wave" xlink:href="#gentle-wave" x="48" y="7" fill="#e8e9eb" />
      </g>
    </svg>
  </div>
</section>

<section id="common-misconceptions" class="hx-text-center">
    <h2 class="hx-text-4xl hx-font-bold md:hx-text-6xl hx-inline">常见误解</h2>
    <div class="misconception-container">
        <div class="misconception-card">
            <h2 class="hx-text-2xl hx-font-bold">"我为什么要关心？"</h2>
            <p class="hx-text-base">你的隐私对你的安全和尊严至关重要。就像你在上厕所时关上门以保护个人空间一样，保护你的个人信息也是至关重要的。“我没有什么好隐藏的”这个想法忽视了隐私是每个人的基本权利，而不仅仅是那些有秘密的人。保护你的数据有助于防止身份盗窃和不必要的监视。</p>
        </div>
        <div class="misconception-card">
            <h2 class="hx-text-2xl hx-font-bold">"现在还来得及吗？"</h2>
            <p class="hx-text-base">保护你隐私的最佳时机就是今天！现在采取行动至关重要，因为公司可能已经可以访问你的数据。通过主动管理你的隐私设置和数据共享，你可以显著减少你的数字足迹，并保护你的个人信息安全。</p>
        </div>
        <div class="misconception-card">
            <h2 class="hx-text-2xl hx-font-bold">"我该怎么办？"</h2>
            <p class="hx-text-base">尝试改善你的隐私可能会让人感到不知所措；这就是我们创建 Beginner Privacy 的原因，旨在尽可能简化这一过程。</p>
            {{< hextra/hero-button text="开始改善你的隐私" link="roadmap" style="margin-top: 15px;" noLink="true" >}}
        </div>
    </div>
</section>

<section class="community-section">
    <div class="community-content">
        <img src="../images/earth.webp" alt="社区图片" class="community-image">
    </div>
    <div class="community-cta">
        <h2 class="hx-text-4xl hx-font-bold md:hx-text-6xl hx-leading-none">加入我们的社区</h2>
        <p class="hx-text-base">与热衷于隐私的志同道合者联系。加入我们的论坛，关注我们的社交媒体，参与讨论。</p>
        <div class="social-chat-container">
          <div class="chat-section">
            <h2 class="hx-text-2rem hx-font-bold hx-leading-none">社交媒体</h2>
            <a href="https://mastodon.social/@BeginnerPrivacy" target="_blank" title="Mastodon" rel="noopener noreferrer">
              <div class="chat-section-button">
                <p>在Mastodon上关注我们&nbsp;&nbsp;</p>{{< hextra/icon name="mastodon" attributes="height=25" >}}
              </div>
            </a>
          </div>
          <div class="chat-section">
            <h2 class="hx-text-2rem hx-font-bold hx-leading-none">聊天</h2>
            <a href="about/join-simplex-group" target="_blank" title="SimpleX Chat">
              <div class="chat-section-button">
                <p>在SimpleX上与我们聊天&nbsp;&nbsp;</p>{{< hextra/icon name="simplex" attributes="height=25" >}}
              </div>
            </a>
          </div>
        </div>
    </div>
</section>

<section class="checklists-section">
  <h2 class="hx-text-4xl hx-font-bold md:hx-text-6xl hx-text-center">检查清单</h2>
  <p class="hx-text-base hx-mb-10px hx-text-center">使用我们的检查清单在抗议等活动中保持安全和匿名。<br>点击与您匹配的个人资料以获取 重要提示和资源。</p>
  <div class="carousel-container" aria-label="Checklists carousel">
    <div class="carousel-button prev" aria-label="Previous">&#10094;</div>
      <div class="carousel" tabindex="0" aria-roledescription="carousel" aria-live="polite" aria-atomic="true">
        <div class="carousel-track">
          <a href="checklists/?m=whistleblower" draggable="false" tabindex="-1">
            <div class="carousel-item" tabindex="0">举报人</div>
          </a>
          <a href="checklists/?m=protestor" draggable="false" tabindex="-1">
            <div class="carousel-item" tabindex="0">抗议者</div>
          </a>
          <a href="checklists/?m=casual-internet-user" draggable="false" tabindex="-1">
            <div class="carousel-item" tabindex="0">普通互联网用户</div>
          </a>
          <a href="checklists/?m=internet-pirate" draggable="false" tabindex="-1">
            <div class="carousel-item" tabindex="0">网络盗版</div>
          </a>
          <a href="checklists/?m=darknet-user" draggable="false" tabindex="-1">
            <div class="carousel-item" tabindex="0">暗网用户</div>
          </a>
          <a href="checklists/?m=social-media-influencer" draggable="false" tabindex="-1">
            <div class="carousel-item" tabindex="0">社交媒体影响者</div>
          </a>
          <a href="checklists/?m=hacker" draggable="false" tabindex="-1">
            <div class="carousel-item" tabindex="0">黑客</div>
          </a>
          <a href="checklists/?m=digital-nomad" draggable="false" tabindex="-1">
            <div class="carousel-item" tabindex="0">数字游牧者</div>
          </a>
          <a href="checklists/?m=mass-surveillance" draggable="false" tabindex="-1">
            <div class="carousel-item" tabindex="0">大规模监控</div>
          </a>
          <a href="checklists/?m=journalist" draggable="false" tabindex="-1">
            <div class="carousel-item" tabindex="0">记者</div>
          </a>
        </div>
      </div>
    <div class="carousel-button next" aria-label="Next">&#10095;</div>
    <div class="carousel-fade left"></div>
    <div class="carousel-fade right"></div>
  </div>
</section>

<section id="contributors" class="hx-mb-16">
    <h2 class="hx-text-4xl hx-font-bold md:hx-text-6xl">我们需要你的帮助！</h2>
    <p class="hx-text-base">初学者隐私是100%免费的，并且将永远保持免费！ 然而，它依赖于贡献者和社区的支持才能茁壮成长。<br>以下是您可以帮助的几种方式：</p>
    <div style="display: inline-flex; flex-wrap: wrap; justify-content: center; margin-top: 2rem;">
      {{< hextra/hero-button text="写内容" link="about/write-content" icon="pencil" class="contributors-button" >}}
      {{< hextra/hero-button text="翻译" link="about/translate" icon="translate" class="contributors-button" >}}
      {{< hextra/hero-button text="捐赠" link="about/donate" icon="heart" class="contributors-button" >}}
      {{< hextra/hero-button text="传播消息" onClick="toggleShareDropdown();" icon="share" class="contributors-button shareDropdownButton" noLink="true" >}}
      <div id="shareDropdown" class="dropdown-content">
          <a href="https://www.reddit.com/login/?dest=https%3A%2F%2Fwww.reddit.com%2Fsubmit%3Furl%3Dhttps%253A%252F%252Fbeginnerprivacy.com%26title%3DStart%2BYour%2BPrivacy%2BJourney%2BToday%2521" target="_blank" style="padding-inline: 5px;">Reddit</a>
          <a href="https://www.facebook.com/sharer/sharer.php?u=https://beginnerprivacy.com" target="_blank" style="padding-inline: 5px;">Facebook</a>
          <a href="https://x.com/intent/post?text=Start%20Your%20Privacy%20Journey%20Today!&url=https%3A%2F%2Fbeginnerprivacy.com&mx=2" target="_blank" style="padding-inline: 5px;">𝕏 (Twitter)</a>
          <a href="https://www.linkedin.com/uas/login?session_redirect=https%3A%2F%2Fwww.linkedin.com%2FshareArticle%3Fmini%3Dtrue%26url%3Dhttps%3A%2F%2Fbeginnerprivacy.com%26title%3DStart%2BYour%2BPrivacy%2BJourney%2BToday%21" target="_blank" style="padding-inline: 5px;">LinkedIn</a>
      </div>
    </div>
    <a href="about/contributors"><p class="hx-text-base hx-underline hx-mt-4">查看所有贡献者</p></a>
</section>