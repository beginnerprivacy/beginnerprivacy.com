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
  <h2 class="hx-text-4xl hx-font-bold md:hx-text-6xl hx-inline">隐私为何重要</h2>
  <div class="misconception-grid">
    <div class="misconception-card">
      <h2 class="hx-text-2xl hx-font-bold">你的个人生活很重要</h2>
      <p class="hx-text-base">你锁上前门，拉上窗帘，保持私人谈话不被他人知晓。数字隐私也是一样——它关乎你对个人空间和信息的控制。</p>
    </div>
    <div class="misconception-card">
      <h2 class="hx-text-2xl hx-font-bold">你的数据很有价值</h2>
      <p class="hx-text-base">公司投资数十亿美元收集数据是有原因的。你的在线活动、位置和兴趣都是宝贵的资产，经常在广告商和数据经纪人之间交易。</p>
    </div>
    <div class="misconception-card">
      <h2 class="hx-text-2xl hx-font-bold">监控在增长</h2>
      <p class="hx-text-base">在全球范围内，监控系统持续增长。今天可以接受的行为，明天可能发生变化，你的数字足迹可能被以意想不到的方式使用。</p>
    </div>
    <div class="misconception-card">
      <h2 class="hx-text-2xl hx-font-bold">保护你的未来</h2>
      <p class="hx-text-base">隐私保护你免受身份盗用、歧视以及信息被滥用。这是对家人安全和自身安心的投资。</p>
    </div>
    <div class="misconception-card cta-card">
      <h2 class="hx-text-2xl hx-font-bold">准备好重新掌控了吗？</h2>
      <p class="hx-text-base">加入成千上万已经通过 Beginner Privacy Roadmap 重新掌控自己隐私的人，它会一步步引导你完成隐私之旅。</p>
      {{< hextra/hero-button text="开始改善你的隐私" link="roadmap" style="margin-top: 15px; border-radius: 30px;" >}}
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

<section class="explore-section">
  <h2 class="hx-text-4xl hx-font-bold md:hx-text-6xl hx-text-center">
    探索网站
  </h2>
  <p class="hx-text-base hx-text-center hx-mb-10px">
    Beginner Privacy 不仅仅提供路线图，还有更多内容可供探索。随意浏览一下，这里有一些我们推荐你先查看的内容。
  </p>
  <div class="explore-grid">
    <a href="articles" class="explore-card">
      <h2 class="hx-text-2xl hx-inline-flex hx-font-bold">{{< hextra/icon name="newspaper" attributes="height=30" >}}<span>文章</span></h2>
      <p>
        所有不在路线图中的指南都可以在我们的文章页面找到。
      </p>
      <span class="explore-link">阅读文章 →</span>
    </a>
    <a href="checklists" class="explore-card">
      <h2 class="hx-text-2xl hx-inline-flex hx-font-bold">{{< hextra/icon name="user" attributes="height=30" >}}<span>清单</span></h2>
      <p>
        针对不同情况和风险等级的实用清单——让你知道该做什么。
      </p>
      <span class="explore-link">查看清单 →</span>
    </a>
    <a href="news" class="explore-card">
      <h2 class="hx-text-2xl hx-inline-flex hx-font-bold">{{< hextra/icon name="speakerphone" attributes="height=30" >}}<span>新闻</span></h2>
      <p>
        了解最新的隐私和安全新闻，包括任何数据泄露事件。
      </p>
      <span class="explore-link">阅读新闻 →</span>
    </a>
    <a href="https://shop.beginnerprivacy.com" class="explore-card">
      <h2 class="hx-text-2xl hx-inline-flex hx-font-bold">{{< hextra/icon name="shopping-cart" attributes="height=30" >}}<span>商店</span></h2>
      <p>
        支持我们，同时购买一些超酷的周边商品。
      </p>
      <span class="explore-link">立即购买 →</span>
    </a>
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