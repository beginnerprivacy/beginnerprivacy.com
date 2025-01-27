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

  <div class="hx-mt-6 hx-mb-6">
  {{< hextra/hero-headline >}}Start Your Privacy Journey Now&nbsp;<br class="sm:hx-block hx-hidden" />with Beginner Privacy{{< /hextra/hero-headline >}}
  </div>

  <div class="hero-take-quiz hx-mb-6">
  {{< hextra/hero-subtitle >}}
  Your privacy is important! But big organizations are taking it away.&nbsp;<br class="sm:hx-block hx-hidden" />Beginner Privacy is your roadmap for reclaiming a private life.
  {{< /hextra/hero-subtitle >}}
  </div>

  {{< hextra/hero-button text="Start Now" onclick="scrollDown();" >}}
  {{< hextra/hero-button text="Not sure? Here's why" link="articles/why-you-should-care-about-your-privacy" >}}
</div>

<div class="roadmap" style="margin-bottom: 10rem;">
  <div class="hx-mt-6" style="width: 100%; margin-top: 10rem;">
      <h1 class="hx-font-bold" style="font-size: 3rem;">Roadmap</h1>
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
        <div id="import-export" style="display: flex; align-items: center;">
            <label for="importFile" class="not-prose hx-font-medium hx-cursor-pointer hx-px-6 hx-py-2 hx-rounded-full hx-text-center hx-text-white hx-inline-block hx-bg-primary-600 hover:hx-bg-primary-700">
                Import
                <input type="file" id="importFile" accept=".json" style="display: none;" onchange="importCheckbox();" />
            </label>
            <button id="exportButton" style="margin-left: 5px;" class="not-prose hx-font-medium hx-cursor-pointer hx-px-6 hx-py-2 hx-rounded-full hx-text-center hx-text-white hx-inline-block hx-bg-primary-600 hover:hx-bg-primary-700" onclick="exportCheckbox();">Export</button>
        </div>
      </div>
  </div>

  <div id="roadmapContent" class="hx-mt-4">
    <div id="startContent" class="roadmap-section">
      {{< hextra/feature-grid >}}
        {{< hextra/feature-card title="How Beginner Privacy works" style="background: radial-gradient(ellipse at 50% 80%,rgba(194,97,254,0.15),hsla(0,0%,100%,0));" >}}
        {{< hextra/feature-card title="Why care about privacy?" link="articles/why-you-should-care-about-your-privacy" style="background: radial-gradient(ellipse at 50% 80%,rgba(194,97,254,0.15),hsla(0,0%,100%,0));" >}}
        {{< hextra/feature-card title="Finding a threat model" style="background: radial-gradient(ellipse at 50% 80%,rgba(194,97,254,0.15),hsla(0,0%,100%,0));"  >}}
        {{< hextra/feature-card title="Gradual implementation" style="background: radial-gradient(ellipse at 50% 80%,rgba(194,97,254,0.15),hsla(0,0%,100%,0));" displayVertical="false" >}}
      {{< /hextra/feature-grid >}}
    </div>
    <div id="basicContent" class="roadmap-section" style="display:none;">
      {{< hextra/feature-grid >}}
          {{< hextra/feature-card title="Basic Introduction" style="background: radial-gradient(ellipse at 50% 80%,rgba(97, 254, 176, 0.15),hsla(0,0%,100%,0));" >}}
          {{< hextra/feature-card title="Privacy Focused Browser" style="background: radial-gradient(ellipse at 50% 80%,rgba(97, 254, 176, 0.15),hsla(0,0%,100%,0));" >}}
          {{< hextra/feature-card title="Search Engine" style="background: radial-gradient(ellipse at 50% 80%,rgba(97, 254, 176, 0.15),hsla(0,0%,100%,0));" >}}
          {{< hextra/feature-card title="Password Manager" style="background: radial-gradient(ellipse at 50% 80%,rgba(97, 254, 176, 0.15),hsla(0,0%,100%,0));" >}}
          {{< hextra/feature-card title="Privacy Focused Email" style="background: radial-gradient(ellipse at 50% 80%,rgba(97, 254, 176, 0.15),hsla(0,0%,100%,0));" >}}
          {{< hextra/feature-card invisibleFiller="true" >}}
          {{< hextra/feature-card invisibleFiller="true" >}}
          {{< hextra/feature-card title="Something missing? Contribute!" style="background: radial-gradient(ellipse at 50% 80%,rgba(97, 254, 176, 0.15),hsla(0,0%,100%,0));" >}}
          {{< hextra/feature-card title="Limit information shared" style="background: radial-gradient(ellipse at 50% 80%,rgba(97, 254, 176, 0.15),hsla(0,0%,100%,0));" >}}
          {{< hextra/feature-card title="Virtual Private Network" style="background: radial-gradient(ellipse at 50% 80%,rgba(97, 254, 176, 0.15),hsla(0,0%,100%,0));" >}}
      {{< /hextra/feature-grid >}}
    </div>
    <div id="mediumContent" class="roadmap-section" style="display:none;">
      {{< hextra/feature-grid >}}
        {{< hextra/feature-card title="Medium Introduction" style="background: radial-gradient(ellipse at 50% 80%,rgba(254, 225, 97, 0.15),hsla(0,0%,100%,0));" >}}
        {{< hextra/feature-card title="Switch to Linux" style="background: radial-gradient(ellipse at 50% 80%,rgba(254, 225, 97, 0.15),hsla(0,0%,100%,0));" >}}
        {{< hextra/feature-card title="Social Media Frontends" style="background: radial-gradient(ellipse at 50% 80%,rgba(254, 225, 97, 0.15),hsla(0,0%,100%,0));" >}}
        {{< hextra/feature-card title="Coming Soon!" style="background: radial-gradient(ellipse at 50% 80%,rgba(254, 225, 97, 0.15),hsla(0,0%,100%,0));" >}}
        {{< hextra/feature-card title="Coming Soon!" style="background: radial-gradient(ellipse at 50% 80%,rgba(254, 225, 97, 0.15),hsla(0,0%,100%,0));" >}}
        {{< hextra/feature-card invisibleFiller="true" >}}
        {{< hextra/feature-card invisibleFiller="true" >}}
        {{< hextra/feature-card invisibleFiller="true" >}}
        {{< hextra/feature-card title="Something missing? Contribute!" style="background: radial-gradient(ellipse at 50% 80%,rgba(254, 225, 97, 0.15),hsla(0,0%,100%,0));" >}}
        {{< hextra/feature-card title="Intro to OpSec" style="background: radial-gradient(ellipse at 50% 80%,rgba(254, 225, 97, 0.15),hsla(0,0%,100%,0));" >}}
      {{< /hextra/feature-grid >}}
    </div>
    <div id="advancedContent" class="roadmap-section" style="display:none;">
      {{< hextra/feature-grid >}}
        {{< hextra/feature-card title="Advanced Introduction" style="background: radial-gradient(ellipse at 50% 80%,rgba(254, 128, 97, 0.15),hsla(0,0%,100%,0));" >}}
        {{< hextra/feature-card title="QubesOS" style="background: radial-gradient(ellipse at 50% 80%,rgba(254, 128, 97, 0.15),hsla(0,0%,100%,0));" >}}
        {{< hextra/feature-card title="Cryptocurrency" style="background: radial-gradient(ellipse at 50% 80%,rgba(254, 128, 97, 0.15),hsla(0,0%,100%,0));" >}}
        {{< hextra/feature-card title="Acquiring crypto" style="background: radial-gradient(ellipse at 50% 80%,rgba(254, 128, 97, 0.15),hsla(0,0%,100%,0));" >}}
        {{< hextra/feature-card title="Coming Soon!" style="background: radial-gradient(ellipse at 50% 80%,rgba(254, 128, 97, 0.15),hsla(0,0%,100%,0));" >}}
        {{< hextra/feature-card invisibleFiller="true" >}}
        {{< hextra/feature-card invisibleFiller="true" >}}
        {{< hextra/feature-card invisibleFiller="true" >}}
        {{< hextra/feature-card invisibleFiller="true" >}}
        {{< hextra/feature-card title="Something missing? Contribute!" style="background: radial-gradient(ellipse at 50% 80%,rgba(254, 128, 97, 0.15),hsla(0,0%,100%,0));" >}}
      {{< /hextra/feature-grid >}}
    </div>
  </div>
</div>

<div id="contributors" class="hx-mt-16" style="width: 100%; text-align: center; font-size: 2rem;">
    <h1 class="hx-font-bold">We Need Your Help!</h1>
    {{< hextra/hero-subtitle >}}Beginner Privacy is 100% free and will always remain so! However, it relies on contributors and the community to thrive.<br>Here are some ways you can help:{{< /hextra/hero-subtitle >}}
    <div style="display: inline-flex; flex-wrap: wrap; justify-content: center; margin-top: 2rem;">
        {{< hextra/hero-button text="Write content" link="about/contribute/write-content" icon="pencil" style="height: 50px; font-size: 18px; display: flex; center; align-items: center;justify-content: center; width: 200px; margin-inline: 2px;" >}}
        {{< hextra/hero-button text="Translate" link="about/contribute/translate" icon="translate" style="height: 50px; font-size: 18px; display: flex; center; align-items: center;justify-content: center; width: 200px; margin-inline: 2px;" >}}
        {{< hextra/hero-button text="Donate" link="about/donate" icon="heart" style="height: 50px; font-size: 18px; display: flex; center; align-items: center;justify-content: center; width: 200px; margin-inline: 2px;" >}}
        {{< hextra/hero-button text="Spread the word" onClick="" icon="share" style="height: 50px; font-size: 18px; display: flex; center; align-items: center;justify-content: center; width: 200px; margin-inline: 2px;" >}}
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
