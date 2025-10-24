---
title: Beginner Privacy
layout: hextra-home
---
<section class="hero hx-py-40 hx-text-center" id="hero">
  {{< hextra/hero-badge link="https://github.com/BeginnerPrivacy" >}}<div class="hx-w-2 hx-h-2 hx-rounded-full hx-bg-primary-400"></div>
    <span>Free, open source</span>
    {{< icon name="arrow-circle-right" attributes="height=14" >}}{{< /hextra/hero-badge >}}

  <div class="hx-mt-6 hx-mb-4">
    <h1 class="not-prose hx-text-4xl md:hx-text-9xl hx-font-bold hx-leading-none hx-tracking-tighter hx-py-2 hx-bg-clip-text">Privacy Made Simple.</h1>
  </div>

  <div class="hx-mb-6">
    <p class="hx-text-lg">Your privacy is important! But big organizations are taking it away.<br> Beginner Privacy helps you navigate the vast ocean to reclaim a private life.</p>
  </div>

  <div class="not-prose hx-font-medium hx-cursor-pointer hx-px-10 hx-py-3 hx-rounded-lg hx-text-center hx-text-white hx-inline-block hx-bg-primary-600 hover:hx-bg-primary-700 dark:hx-bg-primary-600 dark:hover:hx-bg-primary-700 hx-transition-all hx-ease-in hx-duration-200 start-now-button" style="margin: 2px;" onclick="scrollDown();">
    Start Your Journey
    <span class="arrow">&rarr;</span>
  </div>
  <div class="not-prose hx-font-medium hx-cursor-pointer hx-px-10 hx-py-3 hx-rounded-lg hx-text-center hx-text-black dark:hx-text-white hx-inline-block not-sure-button hx-transition-all hx-ease-in hx-duration-200" style="margin: 2px;" onclick="scrollMisconceptions();">Not sure? Here's why</div>

  <div class="hero-waves">
    <svg class="waves" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 24 150 28" preserveAspectRatio="none" shape-rendering="auto">
      <defs>
        <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
      </defs>
      <g class="parallax">
        <use class="wave" xlink:href="#gentle-wave" x="48" y="0" fill="rgba(50,50,50,0.7)" />
        <use class="wave" xlink:href="#gentle-wave" x="48" y="3" fill="rgba(50,50,50,0.5)" />
        <use class="wave" xlink:href="#gentle-wave" x="48" y="5" fill="rgba(50,50,50,0.3)" />
        <use class="wave" xlink:href="#gentle-wave" x="48" y="7" fill="#171717" />
      </g>
    </svg>
  </div>
</section>

<section class="roadmap" id="roadmap">
  <div>
    <h2 class="hx-text-4xl hx-text-center hx-font-bold md:hx-text-6xl">Roadmap</h2>
    <div style="display: flex; align-items: center; justify-content: center; flex-wrap: wrap;">
      <div class="tabs">
          <input type="radio" id="radio-start" name="tabs" value="start" checked onclick="updateRoadmap()" />
          <label class="tab" for="radio-start">Start</label>
          <input type="radio" id="radio-basic" name="tabs" value="basic" onclick="updateRoadmap()" />
          <label class="tab" for="radio-basic">Basic</label>
          <input type="radio" id="radio-medium" name="tabs" value="medium" onclick="updateRoadmap()" />
          <label class="tab" for="radio-medium">Medium</label>
          <input type="radio" id="radio-advanced" name="tabs" value="advanced" onclick="updateRoadmap()" />
          <label class="tab" for="radio-advanced">Advanced</label>
          <span class="glider"></span>
      </div>
    </div>
  </div>
  <div id="roadmapContent" class="hx-mt-4">
    <div id="startContent" class="roadmap-section">
      <ol class="startContentOL">
        <li>{{< roadmap/card title="About Beginner Privacy" id="about-beginner-privacy" link="about" class="start-hf-card-color" >}}</li>
        <li>{{< roadmap/card title="Why Care About Your Privacy?" id="why-care-about-your-privacy" link="articles/why-you-should-care-about-your-privacy" class="start-hf-card-color" >}}</li>
        <li>{{< roadmap/card title="Finding a Threat Model" id="finding-a-threat-model" link="articles/how-to-find-a-threat-model-that-suits-you" class="start-hf-card-color" >}}</li>
      </ol>
    </div>
    <div id="basicContent" class="roadmap-section" style="display:none;">
      <ol>
          <li>{{< roadmap/card title="Basic Introduction" id="basic-introduction" link="about/roadmap-introductions/basic" class="basic-hf-card-color" >}}</li>
          <li>{{< roadmap/card title="Strong Passwords" id="strong-passwords" link="articles/how-to-create-strong-passwords-and-store-them-securely" class="basic-hf-card-color" >}}</li>
          <li>{{< roadmap/card title="Two-Factor Authentication (2FA)" id="two-factor-authentication" link="articles/two-factor-authentication-and-why-you-need-it" class="basic-hf-card-color" >}}</li>
          <li>{{< roadmap/card title="Limit Information Shared" id="limit-information-shared" link="articles/limit-the-personal-information-you-share-online" class="basic-hf-card-color" >}}</li>
          <li>{{< roadmap/card title="Private Browser" id="private-browser" link="articles/why-you-need-a-private-browser-to-protect-yourself" class="basic-hf-card-color" >}}</li>
          <li>{{< roadmap/card title="Private Search Engine" id="private-search-engine" link="articles/searching-safely-with-a-privacy-focused-search-engine" class="basic-hf-card-color" >}}</li>
          <li>{{< roadmap/card title="Virtual Private Network (VPN)" id="virtual-private-network" link="articles/what-is-a-vpn-and-should-you-use-one" class="basic-hf-card-color" >}}</li>
          <li>{{< roadmap/card title="Mobile Privacy Settings" id="mobile-privacy-settings" link="articles/change-these-mobile-settings-for-better-privacy" class="basic-hf-card-color" >}}</li>
          <li>{{< roadmap/card title="Desktop Privacy Settings" id="desktop-privacy-settings" link="articles/desktop-settings-to-change-for-better-privacy" class="basic-hf-card-color" >}}</li>
          <li>{{< roadmap/card title="Private Email" id="private-email" link="articles/protect-your-communication-with-a-private-email" class="basic-hf-card-color" >}}</li>
          <li>{{< roadmap/card title="Secure Messaging" id="secure-messaging" link="articles/ditch-sms-and-use-secure-communication-methods" class="basic-hf-card-color" >}}</li>
      </ol>
    </div>
    <div id="mediumContent" class="roadmap-section" style="display:none;">
      <ol>
        <li>{{< roadmap/card title="Medium Introduction" id="medium-introduction" link="about/roadmap-introductions/medium" class="medium-hf-card-color" >}}</li>
        <li>{{< roadmap/card title="Switch to Linux" id="switch-to-linux" link="articles/how-to-effortlessly-switch-to-linux-step-by-step-guide" class="medium-hf-card-color" >}}</li>
        <li>{{< roadmap/card title="Free and Open Source Software" id="free-and-open-source-software" link="articles/break-free-from-proprietary-software-with-foss" class="medium-hf-card-color" >}}</li>
        <li>{{< roadmap/card title="Encrypted DNS" id="encrypted-dns" link="articles/why-you-need-to-use-an-encrypted-dns" class="medium-hf-card-color" >}}</li>
        <li>{{< roadmap/card title="Social Media Frontends" id="social-media-frontends" link="articles/why-you-should-ditch-social-media-and-use-a-frontend" class="medium-hf-card-color" >}}</li>
        <li>{{< roadmap/card title="Removal from Data Brokers" id="removal-from-data-brokers" link="articles/how-to-remove-yourself-from-data-brokers" class="medium-hf-card-color" >}}</li>
        <li>{{< roadmap/card title="What is Tor?" id="what-is-tor" link="articles/navigating-the-web-anonymously-a-guide-to-tor-basics" class="medium-hf-card-color" >}}</li>
      </ol>
    </div>
    <div id="advancedContent" class="roadmap-section" style="display:none;">
      <ol>
        <li>{{< roadmap/card title="Advanced Introduction" id="advanced-introduction" link="about/roadmap-introductions/advanced" class="advanced-hf-card-color" >}}</li>
        <li>{{< roadmap/card title="Desktop Operating System" id="desktop-operating-system" link="articles/the-best-desktop-operating-systems-for-high-risk-individuals" class="advanced-hf-card-color" >}}</li>
        <li>{{< roadmap/card title="Mobile Operating System" id="mobile-operating-system" link="articles/the-best-private-mobile-operating-systems" class="advanced-hf-card-color" >}}</li>
        <li>{{< roadmap/card title="Self-Hosting" id="self-hosting" link="articles/why-you-should-start-self-hosting-your-own-services" class="advanced-hf-card-color" >}}</li>
        <li>{{< roadmap/card title="Cryptocurrency" id="cryptocurrency" link="articles/cryptocurrency-and-anonymity-a-guide-to-buying-things-without-a-trace" class="advanced-hf-card-color" >}}</li>
        <li>{{< roadmap/card title="Physical Security" id="physical-security" link="articles/why-you-should-enhance-your-physical-security" class="advanced-hf-card-color" >}}</li>
        <li>{{< roadmap/card title="Threat Intelligence" id="threat-intelligence" link="articles/threat-intelligence-explained-how-to-leverage-it-for-enhanced-security" class="advanced-hf-card-color" >}}</li>
      </ol>
    </div>
  </div>
</section>

<section id="common-misconceptions" class="hx-text-center">
    <h2 class="hx-text-4xl hx-font-bold md:hx-text-6xl hx-inline">Common Misconceptions</h2>
    <div class="misconception-container">
      <div class="misconception-card">
          <h2 class="hx-text-2xl hx-font-bold">"Why should I care?"</h2>
          <p class="hx-text-base">Your privacy is essential for your safety and dignity. Just as you close the bathroom door for personal space, protecting your personal information is vital. The idea of "I have nothing to hide" overlooks the fact that privacy is a fundamental right, not just for those with secrets. Safeguarding your data helps prevent identity theft and unwanted surveillance.</p>
      </div>
      <div class="misconception-card">
          <h2 class="hx-text-2xl hx-font-bold">"It's too late now"</h2>
          <p class="hx-text-base">The best time to start protecting your privacy is today! It's crucial to take action now, as companies may already have access to your data. By being proactive about your privacy settings and data sharing, you can significantly reduce your digital footprint and keep your personal information safe.</p>
      </div>
      <div class="misconception-card">
          <h2 class="hx-text-2xl hx-font-bold">"What should I do?"</h2>
          <p class="hx-text-base">Trying to improve your privacy can feel overwhelming; that's why we created Beginner Privacy, to make it as easy as possible.</p>
          {{< hextra/hero-button text="Start Improving Your Privacy" onclick="scrollDown();" style="margin-top: 15px; border-radius: 30px;" noLink="true" >}}
      </div>
    </div>
</div>

<section class="community-section">
    <div class="community-content">
        <img src="images/earth.webp" alt="Community Image" class="community-image">
    </div>
    <div class="community-cta">
        <h2 class="hx-text-4xl hx-font-bold md:hx-text-6xl hx-leading-none">Join Our Community</h2>
        <p class="hx-text-base">Connect with like-minded individuals who are passionate about privacy. Join our forums, follow us on social media, and participate in discussions.</p>
        <div class="social-chat-container">
          <div class="chat-section">
            <h2 class="hx-text-2rem hx-font-bold hx-leading-none">Social Media</h2>
            <a href="https://mastodon.social/@BeginnerPrivacy" target="_blank" title="Mastodon" rel="noopener noreferrer">
              <div class="chat-section-button">
                <p>Follow us on Mastodon&nbsp;&nbsp;</p>{{< hextra/icon name="mastodon" attributes="height=25" >}}
              </div>
            </a>
          </div>
          <div class="chat-section">
            <h2 class="hx-text-2rem hx-font-bold hx-leading-none">Chat</h2>
            <a href="about/join-simplex-group" target="_blank" title="SimpleX Chat">
              <div class="chat-section-button">
                <p>Chat with us on SimpleX&nbsp;&nbsp;</p>{{< hextra/icon name="simplex" attributes="height=25" >}}
              </div>
            </a>
          </div>
        </div>
    </div>
</section>

<section class="checklists-section">
  <h2 class="hx-text-4xl hx-font-bold md:hx-text-6xl hx-text-center">Checklists</h2>
  <p class="hx-text-base hx-mb-10px hx-text-center">Use our checklists to stay safe and anonymous during activities like protests. <br>Click on the profile that matches you for essential tips and resources.</p>
  <div class="carousel-container" aria-label="Checklists carousel">
    <div class="carousel-button prev" aria-label="Previous">&#10094;</div>
      <div class="carousel" tabindex="0" aria-roledescription="carousel" aria-live="polite" aria-atomic="true">
        <div class="carousel-track">
          <a href="checklists/?m=whistleblower" draggable="false" tabindex="-1">
            <div class="carousel-item" tabindex="0">Whistleblower</div>
          </a>
          <a href="checklists/?m=protestor" draggable="false" tabindex="-1">
            <div class="carousel-item" tabindex="0">Protestor</div>
          </a>
          <a href="checklists/?m=casual-internet-user" draggable="false" tabindex="-1">
            <div class="carousel-item" tabindex="0">Casual Internet User</div>
          </a>
          <a href="checklists/?m=internet-pirate" draggable="false" tabindex="-1">
            <div class="carousel-item" tabindex="0">Internet Pirate</div>
          </a>
          <a href="checklists/?m=darknet-user" draggable="false" tabindex="-1">
            <div class="carousel-item" tabindex="0">Darknet User</div>
          </a>
          <a href="checklists/?m=social-media-influencer" draggable="false" tabindex="-1">
            <div class="carousel-item" tabindex="0">Social Media Influencers</div>
          </a>
          <a href="checklists/?m=hacker" draggable="false" tabindex="-1">
            <div class="carousel-item" tabindex="0">Hacker</div>
          </a>
          <a href="checklists/?m=digital-nomad" draggable="false" tabindex="-1">
            <div class="carousel-item" tabindex="0">Digital Nomad</div>
          </a>
          <a href="checklists/?m=mass-surveillance" draggable="false" tabindex="-1">
            <div class="carousel-item" tabindex="0">Mass Surveillance</div>
          </a>
          <a href="checklists/?m=journalist" draggable="false" tabindex="-1">
            <div class="carousel-item" tabindex="0">Journalist</div>
          </a>
        </div>
      </div>
    <div class="carousel-button next" aria-label="Next">&#10095;</div>
    <div class="carousel-fade left"></div>
    <div class="carousel-fade right"></div>
  </div>
</section>

<section id="contributors" class="hx-mb-16">
    <h2 class="hx-text-4xl hx-font-bold md:hx-text-6xl">We Need Your Help!</h2>
    <p class="hx-text-base">Beginner Privacy is 100% free and will always remain so! However, it relies on contributors and the community to thrive.<br>Here are some ways you can help:</p>
    <div style="display: inline-flex; flex-wrap: wrap; justify-content: center; margin-top: 2rem;">
        {{< hextra/hero-button text="Write content" link="about/write-content" icon="pencil" class="contributors-button" >}}
        {{< hextra/hero-button text="Translate" link="about/translate" icon="translate" class="contributors-button" >}}
        {{< hextra/hero-button text="Donate" link="about/donate" icon="heart" class="contributors-button" >}}
        {{< hextra/hero-button text="Spread the word" onclick="toggleShareDropdown();" icon="share" class="contributors-button shareDropdownButton" noLink="true" >}}
        <div id="shareDropdown" class="dropdown-content">
          <a href="https://www.reddit.com/login/?dest=https%3A%2F%2Fwww.reddit.com%2Fsubmit%3Furl%3Dhttps%253A%252F%252Fbeginnerprivacy.com%26title%3DStart%2BYour%2BPrivacy%2BJourney%2BToday%2521" target="_blank" style="padding-inline: 5px;">Reddit</a>
          <a href="https://www.facebook.com/sharer/sharer.php?u=https://beginnerprivacy.com" target="_blank" style="padding-inline: 5px;">Facebook</a>
          <a href="https://x.com/intent/post?text=Start%20Your%20Privacy%20Journey%20Today!&url=https%3A%2F%2Fbeginnerprivacy.com&mx=2" target="_blank" style="padding-inline: 5px;">𝕏 (Twitter)</a>
          <a href="https://www.linkedin.com/uas/login?session_redirect=https%3A%2F%2Fwww.linkedin.com%2FshareArticle%3Fmini%3Dtrue%26url%3Dhttps%3A%2F%2Fbeginnerprivacy.com%26title%3DStart%2BYour%2BPrivacy%2BJourney%2BToday%21" target="_blank" style="padding-inline: 5px;">LinkedIn</a>
        </div>
    </div>
    <a href="about/contributors"><p class="hx-text-base hx-underline hx-mt-4">View all contributors</p></a>
</section>