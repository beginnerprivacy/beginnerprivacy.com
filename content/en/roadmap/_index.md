---
title: Roadmap
excludeSearch: false
Params:
  sidebar:
    exclude: true
---
<section class="roadmap hx-pt-12" id="roadmap">
  <div class="hx-flex hx-justify-center">
    <div class="tabs hx-select-none">
      <div class="tab-wrapper">
        <input type="radio" id="radio-start" name="tabs" value="start" checked onclick="updateRoadmap()" />
        <label class="tab" for="radio-start">Start</label>
      </div>
      <span class="tab-separator">›</span>
      <div class="tab-wrapper">
        <input type="radio" id="radio-basic" name="tabs" value="basic" onclick="updateRoadmap()" />
        <label class="tab" for="radio-basic">Basic</label>
      </div>
      <span class="tab-separator">›</span>
      <div class="tab-wrapper">
        <input type="radio" id="radio-medium" name="tabs" value="medium" onclick="updateRoadmap()" />
        <label class="tab" for="radio-medium">Medium</label>
      </div>
      <span class="tab-separator">›</span>
      <div class="tab-wrapper">
        <input type="radio" id="radio-advanced" name="tabs" value="advanced" onclick="updateRoadmap()" />
        <label class="tab" for="radio-advanced">Advanced</label>
      </div>
    </div>
  </div>
  <script>
    (function() {
      try {
        var last = localStorage.getItem('roadmap-last-tab');
        if (last) {
          var radio = document.getElementById('radio-' + last);
          if (radio) radio.checked = true;
        }
      } catch (e) {}
      if (typeof updateRoadmap === 'function') {
        updateRoadmap();
      }
    })();
  </script>
  <div id="roadmapContent">
    <div id="startContent" class="roadmap-section">
      <ol class="centerRoadmapOL">
        <li>{{< roadmap/card title="About Beginner Privacy" id="about-beginner-privacy" class="start-hf-card-color" >}}</li>
        <li>{{< roadmap/card title="Why Care About Your Privacy?" id="why-care-about-your-privacy" class="start-hf-card-color" >}}</li>
        <li>{{< roadmap/card title="Finding a Threat Model" id="finding-a-threat-model" class="start-hf-card-color" >}}</li>
      </ol>
    </div>
    <div id="basicContent" class="roadmap-section" style="display:none;">
      <ol>
          <li>{{< roadmap/card title="Strong Passwords" id="strong-passwords" class="basic-hf-card-color" >}}</li>
          <li>{{< roadmap/card title="Two-Factor Authentication (2FA)" id="two-factor-authentication" class="basic-hf-card-color" >}}</li>
          <li>{{< roadmap/card title="Limit Information Shared" id="limit-information-shared" class="basic-hf-card-color" >}}</li>
          <li>{{< roadmap/card title="Private Browser" id="private-browser" class="basic-hf-card-color" >}}</li>
          <li>{{< roadmap/card title="Private Search Engine" id="private-search-engine" class="basic-hf-card-color" >}}</li>
          <li>{{< roadmap/card title="Virtual Private Network (VPN)" id="virtual-private-network" class="basic-hf-card-color" >}}</li>
          <li>{{< roadmap/card title="Mobile Privacy Settings" id="mobile-privacy-settings" class="basic-hf-card-color" >}}</li>
          <li>{{< roadmap/card title="Desktop Privacy Settings" id="desktop-privacy-settings" class="basic-hf-card-color" >}}</li>
          <li>{{< roadmap/card title="Private Email" id="private-email" class="basic-hf-card-color" >}}</li>
          <li>{{< roadmap/card title="Secure Communication" id="secure-communication" class="basic-hf-card-color" >}}</li>
          <li>{{< roadmap/card title="Removal from Data Brokers" id="removal-from-data-brokers" class="basic-hf-card-color" >}}</li>
      </ol>
    </div>
    <div id="mediumContent" class="roadmap-section" style="display:none;">
      <ol>
        <li>{{< roadmap/card title="Switch to Linux" id="switch-to-linux" class="medium-hf-card-color" >}}</li>
        <li>{{< roadmap/card title="Free and Open Source Software" id="free-and-open-source-software" class="medium-hf-card-color" >}}</li>
        <li>{{< roadmap/card title="Encrypted DNS" id="encrypted-dns" class="medium-hf-card-color" >}}</li>
        <li>{{< roadmap/card title="Social Media Frontends" id="social-media-frontends" class="medium-hf-card-color" >}}</li>
        <li>{{< roadmap/card title="What is Tor?" id="what-is-tor" class="medium-hf-card-color" >}}</li>
        <li>{{< roadmap/card title="Cryptocurrency" id="cryptocurrency" class="medium-hf-card-color" >}}</li>
        <li>{{< roadmap/card title="Self-Hosting" id="self-hosting" class="medium-hf-card-color" >}}</li>
        <li>{{< roadmap/card title="Physical Security" id="physical-security" class="medium-hf-card-color" >}}</li>
      </ol>
    </div>
    <div id="advancedContent" class="roadmap-section" style="display:none;">
      <ol class="centerRoadmapOL">
        <li>{{< roadmap/card title="Moving Beyond Beginner Privacy" id="moving-beyond-beginner-privacy" class="advanced-hf-card-color" >}}</li>
      </ol>
    </div>
  </div>
</section>