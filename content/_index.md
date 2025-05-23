---
title: Beginner Privacy
layout: hextra-home
---
<div class="hero">
  {{< hextra/hero-badge link="https://github.com/BeginnerPrivacy" >}}<div class="hx-w-2 hx-h-2 hx-rounded-full hx-bg-primary-400"></div>
    <span>Free, open source</span>
    {{< icon name="arrow-circle-right" attributes="height=14" >}}{{< /hextra/hero-badge >}}

  {{< hextra/hero-container
    image="images/surveillance.webp"
    imageClass="hero-surveillance-image hx-block"
    imageTitle="Surveillance Camera" >}}
  {{< /hextra/hero-container >}}

  <div class="hx-mt-6 hx-mb-4">
  {{< hextra/hero-headline >}}Start Your Privacy Journey Today&nbsp;<br class="sm:hx-block hx-hidden" />with Beginner Privacy{{< /hextra/hero-headline >}}
  </div>

  <div class="hero-take-quiz hx-mb-6">
  {{< hextra/hero-subtitle >}}
  Your privacy is important! But big organizations are taking it away.&nbsp;<br class="sm:hx-block hx-hidden" />Beginner Privacy is your roadmap for reclaiming a private life.
  {{< /hextra/hero-subtitle >}}
  </div>

  {{< hextra/hero-button text="Start Now" onclick="scrollDown();" style="margin: 2px;" >}}
  {{< hextra/hero-button text="Not sure? Here's why" onclick="scrollMisconceptions();" style="margin: 2px;" >}}
</div>

<div id="roadmap">
  <div class="roadmap">
    <div>
      <h2 class="hx-text-4xl hx-font-bold md:hx-text-5xl">Roadmap</h2>
      <div style="display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap;">
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
        <ol>
          <li>{{< hextra/feature-card title="About Beginner Privacy" id="about-beginner-privacy" link="about" class="start-hf-card-color" >}}</li>
          <li>{{< hextra/feature-card title="Why care about your privacy?" id="why-care-about-your-privacy" link="articles/why-you-should-care-about-your-privacy" class="start-hf-card-color" >}}</li>
          <li>{{< hextra/feature-card title="Finding a threat model" id="finding-a-threat-model" link="articles/how-to-find-a-threat-model-that-suits-you" class="start-hf-card-color" >}}</li>
        </ol>
      </div>
      <div id="basicContent" class="roadmap-section" style="display:none;">
        <ol>
            <li>{{< hextra/feature-card title="Basic Introduction" id="basic-introduction" link="about/roadmap-introductions/basic" class="basic-hf-card-color" >}}</li>
            <li>{{< hextra/feature-card title="Strong Passwords" id="strong-passwords" link="articles/how-to-create-strong-passwords-and-store-them-securely" class="basic-hf-card-color" >}}</li>
            <li>{{< hextra/feature-card title="Two-Factor Authentication (2FA)" id="two-factor-authentication" link="articles/two-factor-authentication-and-why-you-need-it" class="basic-hf-card-color" >}}</li>
            <li>{{< hextra/feature-card title="Limit information shared" id="limit-information-shared" link="articles/limit-the-personal-information-you-share-online" class="basic-hf-card-color" >}}</li>
            <li>{{< hextra/feature-card title="Private Browser" id="private-browser" link="articles/why-you-need-a-private-browser-to-protect-yourself" class="basic-hf-card-color" >}}</li>
            <li>{{< hextra/feature-card title="Private Search Engine" id="private-search-engine" link="articles/searching-safely-with-a-privacy-focused-search-engine" class="basic-hf-card-color" >}}</li>
            <li>{{< hextra/feature-card title="Virtual Private Network (VPN)" id="virtual-private-network" link="articles/what-is-a-vpn-and-should-you-use-one" class="basic-hf-card-color" >}}</li>
            <li>{{< hextra/feature-card title="Mobile Privacy Settings" id="mobile-privacy-settings" link="articles/change-these-mobile-settings-for-better-privacy" class="basic-hf-card-color" >}}</li>
            <li>{{< hextra/feature-card title="Desktop Privacy Settings" id="desktop-privacy-settings" link="articles/desktop-settings-to-change-for-better-privacy" class="basic-hf-card-color" >}}</li>
            <li>{{< hextra/feature-card title="Private Email" id="private-email" link="articles/protect-your-communication-with-a-private-email" class="basic-hf-card-color" >}}</li>
            <li>{{< hextra/feature-card title="Secure Messaging" id="secure-messaging" link="articles/ditch-sms-and-use-secure-communication-methods" class="basic-hf-card-color" >}}</li>
            <li>{{< hextra/feature-card title="Something missing? Contribute!" link="about/about-contributing" contributeCard="true" class="basic-hf-card-color" >}}</li>
        </ol>
      </div>
      <div id="mediumContent" class="roadmap-section" style="display:none;">
        <ol>
          <li>{{< hextra/feature-card title="Medium Introduction" id="medium-introduction" link="about/roadmap-introductions/medium" class="medium-hf-card-color" >}}</li>
          <li>{{< hextra/feature-card title="Free and Open Source Software" id="free-and-open-source-software" link="articles/break-free-from-proprietary-software-with-foss" class="medium-hf-card-color" >}}</li>
          <li>{{< hextra/feature-card title="Switch to Linux" id="switch-to-linux" link="articles/how-to-effortlessly-switch-to-linux-step-by-step-guide" class="medium-hf-card-color" >}}</li>
          <li>{{< hextra/feature-card title="Encrypted DNS" id="encrypted-dns" link="articles/why-you-need-to-use-an-encrypted-dns" class="medium-hf-card-color" >}}</li>
          <li>{{< hextra/feature-card title="Social Media Frontends" id="social-media-frontends" link="articles/why-you-should-ditch-social-media-and-use-a-frontend" class="medium-hf-card-color" >}}</li>
          <li>{{< hextra/feature-card title="Removal from Data Brokers" id="removal-from-data-brokers" link="articles/how-to-remove-yourself-from-data-brokers" class="medium-hf-card-color" >}}</li>
          <li>{{< hextra/feature-card title="What is Tor?" id="what-is-tor" link="articles/navigating-the-web-anonymously-a-guide-to-tor-basics" class="medium-hf-card-color" >}}</li>
          <li>{{< hextra/feature-card title="Something missing? Contribute!" link="about/about-contributing" contributeCard="true" class="medium-hf-card-color" >}}</li>
        </ol>
      </div>
      <div id="advancedContent" class="roadmap-section" style="display:none;">
        <ol>
          <li>{{< hextra/feature-card title="Advanced Introduction" id="advanced-introduction" link="about/roadmap-introductions/advanced" class="advanced-hf-card-color" >}}</li>
          <li>{{< hextra/feature-card title="Desktop Operating System" id="desktop-operating-system" link="articles/the-best-desktop-operating-systems-for-high-risk-individuals" class="advanced-hf-card-color" >}}</li>
          <li>{{< hextra/feature-card title="Mobile Operating System" id="mobile-operating-system" link="articles/the-best-private-mobile-operating-systems" class="advanced-hf-card-color" >}}</li>
          <li>{{< hextra/feature-card title="Self-Hosting" id="self-hosting" link="articles/why-you-should-start-self-hosting-services" class="advanced-hf-card-color" >}}</li>
          <li>{{< hextra/feature-card title="Cryptocurrency" id="cryptocurrency" link="articles/cryptocurrency-and-anonymity-a-guide-to-buying-things-without-a-trace" class="advanced-hf-card-color" >}}</li>
          <li>{{< hextra/feature-card title="Avoiding Honeypots" id="avoiding-honeypots" class="advanced-hf-card-color" >}}</li>
          <li>{{< hextra/feature-card title="What is I2P?" id="what-is-i2p" class="advanced-hf-card-color" >}}</li>
          <li>{{< hextra/feature-card title="Advanced Operational Security" id="advanced-opsec" class="advanced-hf-card-color" >}}</li>
          <li>{{< hextra/feature-card title="Threat Intelligence" id="threat-intelligence" class="advanced-hf-card-color" >}}</li>
          <li>{{< hextra/feature-card title="Something missing? Contribute!" link="about/about-contributing" contributeCard="true" class="advanced-hf-card-color" >}}</li>
        </ol>
      </div>
    </div>
  </div>
</div>

<div id="common-misconceptions" class="hx-text-center">
    <h2 class="hx-text-4xl hx-font-bold md:hx-text-5xl hx-inline">Common Misconceptions</h2>
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
{{< hextra/hero-button text="Start Improving Your Privacy" onclick="scrollDown();" style="margin-top: 15px;" >}}
      </div>
    </div>
</div>

<div class="community-section">
    <div class="community-content">
        <img src="images/earth.webp" alt="Community Image" class="community-image">
    </div>
    <div class="community-cta">
        <h2 class="hx-text-4xl hx-font-bold md:hx-text-5xl">Join Our Community</h2>
        <p class="hx-text-base">Connect with like-minded individuals who are passionate about privacy. Join our forums, follow us on social media, and participate in discussions.</p>
        <div class="social-chat-container">
          <div class="chat-section">
            <h2 class="hx-text-2rem hx-font-bold">Social Media</h2>
            <div class="platform-icons">
                <a href="https://x.com/BeginnerPrivacy" title="𝕏" target="_blank" rel="noopener noreferrer">
                    {{< hextra/icon name="x-twitter" attributes="height=25" >}}
                </a>
                <a href="https://youtube.com/@BeginnerPrivacy" title="YouTube" target="_blank" rel="noopener noreferrer">
                    {{< hextra/icon name="youtube" attributes="height=25" >}}
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
            <h2 class="hx-text-2rem hx-font-bold">Chat</h2>
            <div class="platform-icons">
              <a href="about/join-simplex-group" target="_blank" title="SimpleX Chat" rel="noopener noreferrer">
                  {{< hextra/icon name="simplex" attributes="height=25" >}}
              </a>
            </div>
          </div>
        </div>
    </div>
</div>

<div class="checklists-section">
    <h2 class="hx-text-4xl hx-font-bold md:hx-text-5xl hx-inline">Checklists</h2>
    <div class="carousel-button prev" onclick="moveCarousel(-1)">&#10094;</div>
    <div class="carousel-button next" onclick="moveCarousel(1)">&#10095;</div>
    <p class="hx-text-base hx-mb-10px">Use our checklists to stay safe and anonymous during activities like protests. <br>Click on the profile that matches you for essential tips and resources.</p>
    <div class="carousel">
        <div class="carousel-track">
            <a href="checklists/?m=whistleblower" draggable="false">
              <div class="carousel-item">
                  <h3>Whistleblower</h3>
              </div>
            </a>
            <a href="checklists/?m=protestor" draggable="false">
              <div class="carousel-item">
                  <h3>Protestor</h3>
              </div>
            </a>
            <a href="checklists/?m=casual-internet-user" draggable="false">
              <div class="carousel-item">
                  <h3>Casual Internet User</h3>
              </div>
            </a>
            <a href="checklists/?m=darknet-user" draggable="false">
              <div class="carousel-item">
                  <h3>Darknet User</h3>
              </div>
            </a>
            <a href="checklists/?m=social-media-influencer" draggable="false">
              <div class="carousel-item">
                  <h3>Social Media Influencers</h3>
              </div>
            </a>
            <a href="checklists/?m=hacker" draggable="false">
              <div class="carousel-item">
                  <h3>Hacker</h3>
              </div>
            </a>
            <a href="checklists/?m=digital-nomad" draggable="false">
              <div class="carousel-item">
                  <h3>Digital Nomad</h3>
              </div>
            </a>
            <a href="checklists/?m=mass-surveillance" draggable="false">
              <div class="carousel-item">
                  <h3>Mass Surveillance</h3>
              </div>
            </a>
        </div>
    </div>
</div>

<div id="contributors" class="hx-mt-16">
    <h2 class="hx-text-4xl hx-font-bold md:hx-text-5xl">We Need Your Help!</h2>
    <p class="hx-text-base">Beginner Privacy is 100% free and will always remain so! However, it relies on contributors and the community to thrive.<br>Here are some ways you can help:</p>
    <div style="display: inline-flex; flex-wrap: wrap; justify-content: center; margin-top: 2rem;">
        {{< hextra/hero-button text="Write content" link="about/write-content" icon="pencil" class="contributors-button" >}}
        {{< hextra/hero-button text="Translate" link="about/translate" icon="translate" class="contributors-button" >}}
        {{< hextra/hero-button text="Donate" link="about/donate" icon="heart" class="contributors-button" >}}
        {{< hextra/hero-button text="Spread the word" onclick="toggleShareDropdown();" icon="share" class="contributors-button shareDropdownButton" >}}
        <div id="shareDropdown" class="dropdown-content">
          <a href="https://www.reddit.com/login/?dest=https%3A%2F%2Fwww.reddit.com%2Fsubmit%3Furl%3Dhttps%253A%252F%252Fbeginnerprivacy.com%26title%3DStart%2BYour%2BPrivacy%2BJourney%2BToday%2521" target="_blank" style="padding-inline: 5px;">Reddit</a>
          <a href="https://www.facebook.com/sharer/sharer.php?u=https://beginnerprivacy.com" target="_blank" style="padding-inline: 5px;">Facebook</a>
          <a href="https://x.com/intent/post?text=Start%20Your%20Privacy%20Journey%20Today!&url=https%3A%2F%2Fbeginnerprivacy.com&mx=2" target="_blank" style="padding-inline: 5px;">𝕏 (Twitter)</a>
          <a href="https://www.linkedin.com/uas/login?session_redirect=https%3A%2F%2Fwww.linkedin.com%2FshareArticle%3Fmini%3Dtrue%26url%3Dhttps%3A%2F%2Fbeginnerprivacy.com%26title%3DStart%2BYour%2BPrivacy%2BJourney%2BToday%21" target="_blank" style="padding-inline: 5px;">LinkedIn</a>
        </div>
    </div>
    <table>
        <thead>
            <tr>
                <th>Name</th>
                <th>Role</th>
                <th>Contributions</th>
                <th>Links</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td data-label="Name">PrintN</td>
                <td data-label="Role">Founder, Developer</td>
                <td data-label="Contributions">Code, Documentation</td>
                <td data-label="Links"><a href="https://github.com/PrintN" target="_blank">GitHub</a></td>
            </tr>
            <tr>
                <td data-label="Name">You could be here!</td>
                <td data-label="Role">Your role</td>
                <td data-label="Contributions">Your contribution</td>
                <td data-label="Links"><a href="https://github.com/" target="_blank">Your GitHub</a></td>
            </tr>
        </tbody>
    </table>
</div>
