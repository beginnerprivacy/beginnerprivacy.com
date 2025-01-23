---
title: Beginner Privacy
layout: hextra-home
---

{{< hextra/hero-badge link="https://github.com/BeginnerPrivacy" >}}
  <div class="hx-w-2 hx-h-2 hx-rounded-full hx-bg-primary-400"></div>
  <span>Free, open source</span>
  {{< icon name="arrow-circle-right" attributes="height=14" >}}
{{< /hextra/hero-badge >}}

{{< hextra/hero-container
  image="surveillance.webp"
  imageClass="hero-surveillance-image hx-block"
  imageTitle="Surveillance Camera" >}}
{{< /hextra/hero-container >}}

<div class="hx-mt-6 hx-mb-6">

{{< hextra/hero-headline >}}
  Start Your Privacy Journey&nbsp;<br class="sm:hx-block hx-hidden" />with Beginner Privacy
{{< /hextra/hero-headline >}}

</div>

<div class=" hero-take-quiz hx-mb-6">
{{< hextra/hero-subtitle >}}
  Find out where you belong on the roadmap&nbsp;<br class="sm:hx-block hx-hidden" />by taking the quiz 👇
{{< /hextra/hero-subtitle >}}
</div>

{{< hextra/hero-button text="Take Quiz" onClick="takeQuiz();" >}}

<div id="quizModal">  
  <div id="question1" class="question">
      <p>Do you use Linux?</p>
  </div>
  <div id="question2" class="question">
      <p>Do you have technical experience?</p>
  </div>
  <div id="question3" class="question">
      <p>How much effort do you plan to put into your privacy?</p>
      <p>
        <button class="hx-bg-primary-600" onclick="answerQuestion(2)">Very much</button>
        <button class="hx-bg-primary-600" onclick="answerQuestion(1)">Decent amount</button>
        <button class="hx-bg-primary-600" onclick="answerQuestion(0)">Little bit</button>
      </p>
  </div>
  <div id="question4" class="question">
      <p>Who are you trying to protect your data from?</p>
      <p>
        <button class="hx-bg-primary-600" onclick="answerQuestion(0)">Big Corporations</button>
        <button class="hx-bg-primary-600" onclick="answerQuestion(1)">Hackers</button>
        <button class="hx-bg-primary-600" onclick="answerQuestion(2)">Government</button>
      </p>
  </div>

  <div style="text-align: center;">
    <button class="yes-no-button hx-bg-primary-600" onclick="answerQuestion('yes')">Yes</button>
    <button class="yes-no-button hx-bg-primary-600" onclick="answerQuestion('no')">No</button>
  </div>
  <div id="quizResult">
    <span id="basic" style="display: none;">You should start on the Basic roadmap.</span>
    <span id="medium" style="display: none;">You should start on the Medium roadmap.</span>
    <span id="advanced" style="display: none;">You should start on the Advanced roadmap.</span>
  </div>
</div>

<div class="hx-mt-6">
    <h1 class="hx-font-bold md:hx-text-5xl">Roadmap</h1>
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

<div id="roadmapContent" class="hx-mt-4">
  <div id="startContent" class="roadmap-section">
    {{< hextra/feature-grid >}}
      {{< hextra/feature-card title="How Beginner Privacy works" style="background: radial-gradient(ellipse at 50% 80%,rgba(194,97,254,0.15),hsla(0,0%,100%,0));" >}}
      {{< hextra/feature-card title="Why you should care about your privacy" style="background: radial-gradient(ellipse at 50% 80%,rgba(194,97,254,0.15),hsla(0,0%,100%,0));" >}}
      {{< hextra/feature-card title="Understanding your threat model" style="background: radial-gradient(ellipse at 50% 80%,rgba(194,97,254,0.15),hsla(0,0%,100%,0));"  displayVertical="false" >}}
    {{< /hextra/feature-grid >}}
  </div>

  <div id="basicContent" class="roadmap-section" style="display:none;">
    {{< hextra/feature-grid >}}
        {{< hextra/feature-card title="Coming Soon!" style="background: radial-gradient(ellipse at 50% 80%,rgba(97, 254, 176, 0.15),hsla(0,0%,100%,0));" >}}
        {{< hextra/feature-card title="Coming Soon!" style="background: radial-gradient(ellipse at 50% 80%,rgba(97, 254, 176, 0.15),hsla(0,0%,100%,0));" >}}
        {{< hextra/feature-card title="Coming Soon!" style="background: radial-gradient(ellipse at 50% 80%,rgba(97, 254, 176, 0.15),hsla(0,0%,100%,0));" >}}
        {{< hextra/feature-card title="Coming Soon!" style="background: radial-gradient(ellipse at 50% 80%,rgba(97, 254, 176, 0.15),hsla(0,0%,100%,0));" >}}
        {{< hextra/feature-card title="Coming Soon!" style="background: radial-gradient(ellipse at 50% 80%,rgba(97, 254, 176, 0.15),hsla(0,0%,100%,0));" displayVertical="true" >}}
    {{< /hextra/feature-grid >}}
    <br>
    {{< hextra/feature-grid >}}
        {{< hextra/feature-card title="Coming Soon!" style="background: radial-gradient(ellipse at 50% 80%,rgba(97, 254, 176, 0.15),hsla(0,0%,100%,0));" displayVertical="both" >}}
        {{< hextra/feature-card title="Coming Soon!" style="background: radial-gradient(ellipse at 50% 80%,rgba(97, 254, 176, 0.15),hsla(0,0%,100%,0));" >}}
        {{< hextra/feature-card title="Coming Soon!" style="background: radial-gradient(ellipse at 50% 80%,rgba(97, 254, 176, 0.15),hsla(0,0%,100%,0));" >}}
        {{< hextra/feature-card title="Coming Soon!" style="background: radial-gradient(ellipse at 50% 80%,rgba(97, 254, 176, 0.15),hsla(0,0%,100%,0));" >}}
        {{< hextra/feature-card title="Coming Soon!" style="background: radial-gradient(ellipse at 50% 80%,rgba(97, 254, 176, 0.15),hsla(0,0%,100%,0));" displayVertical="false" >}}
    {{< /hextra/feature-grid >}}
    <br>
    {{< hextra/feature-grid >}}
      {{< hextra/feature-card title="Coming Soon!" style="background: radial-gradient(ellipse at 50% 80%,rgba(97, 254, 176, 0.15),hsla(0,0%,100%,0));" >}}
      {{< hextra/feature-card title="Coming Soon!" style="background: radial-gradient(ellipse at 50% 80%,rgba(97, 254, 176, 0.15),hsla(0,0%,100%,0));" >}}
      {{< hextra/feature-card title="Coming Soon!" style="background: radial-gradient(ellipse at 50% 80%,rgba(97, 254, 176, 0.15),hsla(0,0%,100%,0));" >}}
      {{< hextra/feature-card title="Coming Soon!" style="background: radial-gradient(ellipse at 50% 80%,rgba(97, 254, 176, 0.15),hsla(0,0%,100%,0));" >}}
      {{< hextra/feature-card title="Coming Soon!" style="background: radial-gradient(ellipse at 50% 80%,rgba(97, 254, 176, 0.15),hsla(0,0%,100%,0));" displayVertical="false" >}}
    {{< /hextra/feature-grid >}}
  </div>

  <div id="mediumContent" class="roadmap-section" style="display:none;">
    {{< hextra/feature-grid >}}
      {{< hextra/feature-card title="Coming Soon!" style="background: radial-gradient(ellipse at 50% 80%,rgba(254, 225, 97, 0.15),hsla(0,0%,100%,0));" >}}
      {{< hextra/feature-card title="Coming Soon!" style="background: radial-gradient(ellipse at 50% 80%,rgba(254, 225, 97, 0.15),hsla(0,0%,100%,0));" >}}
      {{< hextra/feature-card title="Coming Soon!" style="background: radial-gradient(ellipse at 50% 80%,rgba(254, 225, 97, 0.15),hsla(0,0%,100%,0));" >}}
      {{< hextra/feature-card title="Coming Soon!" style="background: radial-gradient(ellipse at 50% 80%,rgba(254, 225, 97, 0.15),hsla(0,0%,100%,0));" >}}
      {{< hextra/feature-card title="Coming Soon!" style="background: radial-gradient(ellipse at 50% 80%,rgba(254, 225, 97, 0.15),hsla(0,0%,100%,0));" displayVertical="true" >}}
    {{< /hextra/feature-grid >}}
    <br>
    {{< hextra/feature-grid >}}
      {{< hextra/feature-card title="Coming Soon!" style="background: radial-gradient(ellipse at 50% 80%,rgba(254, 225, 97, 0.15),hsla(0,0%,100%,0));" displayVertical="both" >}}
      {{< hextra/feature-card title="Coming Soon!" style="background: radial-gradient(ellipse at 50% 80%,rgba(254, 225, 97, 0.15),hsla(0,0%,100%,0));" >}}
      {{< hextra/feature-card title="Coming Soon!" style="background: radial-gradient(ellipse at 50% 80%,rgba(254, 225, 97, 0.15),hsla(0,0%,100%,0));" >}}
      {{< hextra/feature-card title="Coming Soon!" style="background: radial-gradient(ellipse at 50% 80%,rgba(254, 225, 97, 0.15),hsla(0,0%,100%,0));" >}}
      {{< hextra/feature-card title="Coming Soon!" style="background: radial-gradient(ellipse at 50% 80%,rgba(254, 225, 97, 0.15),hsla(0,0%,100%,0));" displayVertical="false" >}}
    {{< /hextra/feature-grid >}}
    <br>
    {{< hextra/feature-grid >}}
      {{< hextra/feature-card title="Coming Soon!" style="background: radial-gradient(ellipse at 50% 80%,rgba(254, 225, 97, 0.15),hsla(0,0%,100%,0));" >}}
      {{< hextra/feature-card title="Coming Soon!" style="background: radial-gradient(ellipse at 50% 80%,rgba(254, 225, 97, 0.15),hsla(0,0%,100%,0));" >}}
      {{< hextra/feature-card title="Coming Soon!" style="background: radial-gradient(ellipse at 50% 80%,rgba(254, 225, 97, 0.15),hsla(0,0%,100%,0));" >}}
      {{< hextra/feature-card title="Coming Soon!" style="background: radial-gradient(ellipse at 50% 80%,rgba(254, 225, 97, 0.15),hsla(0,0%,100%,0));" >}}
      {{< hextra/feature-card title="Coming Soon!" style="background: radial-gradient(ellipse at 50% 80%,rgba(254, 225, 97, 0.15),hsla(0,0%,100%,0));" displayVertical="false" >}}
    {{< /hextra/feature-grid >}}
  </div>

  <div id="advancedContent" class="roadmap-section" style="display:none;">
    {{< hextra/feature-grid >}}
      {{< hextra/feature-card title="Coming Soon!" style="background: radial-gradient(ellipse at 50% 80%,rgba(254, 128, 97, 0.15),hsla(0,0%,100%,0));" >}}
      {{< hextra/feature-card title="Coming Soon!" style="background: radial-gradient(ellipse at 50% 80%,rgba(254, 128, 97, 0.15),hsla(0,0%,100%,0));" >}}
      {{< hextra/feature-card title="Coming Soon!" style="background: radial-gradient(ellipse at 50% 80%,rgba(254, 128, 97, 0.15),hsla(0,0%,100%,0));" >}}
      {{< hextra/feature-card title="Coming Soon!" style="background: radial-gradient(ellipse at 50% 80%,rgba(254, 128, 97, 0.15),hsla(0,0%,100%,0));" >}}
      {{< hextra/feature-card title="Coming Soon!" style="background: radial-gradient(ellipse at 50% 80%,rgba(254, 128, 97, 0.15),hsla(0,0%,100%,0));" displayVertical="true" >}}
    {{< /hextra/feature-grid >}}
    <br>
    {{< hextra/feature-grid >}}
      {{< hextra/feature-card title="Coming Soon!" style="background: radial-gradient(ellipse at 50% 80%,rgba(254, 128, 97, 0.15),hsla(0,0%,100%,0));" displayVertical="both" >}}
      {{< hextra/feature-card title="Coming Soon!" style="background: radial-gradient(ellipse at 50% 80%,rgba(254, 128, 97, 0.15),hsla(0,0%,100%,0));" >}}
      {{< hextra/feature-card title="Coming Soon!" style="background: radial-gradient(ellipse at 50% 80%,rgba(254, 128, 97, 0.15),hsla(0,0%,100%,0));" >}}
      {{< hextra/feature-card title="Coming Soon!" style="background: radial-gradient(ellipse at 50% 80%,rgba(254, 128, 97, 0.15),hsla(0,0%,100%,0));" >}}
      {{< hextra/feature-card title="Coming Soon!" style="background: radial-gradient(ellipse at 50% 80%,rgba(254, 128, 97, 0.15),hsla(0,0%,100%,0));" displayVertical="false" >}}
    {{< /hextra/feature-grid >}}
    <br>
    {{< hextra/feature-grid >}}
      {{< hextra/feature-card title="Coming Soon!" style="background: radial-gradient(ellipse at 50% 80%,rgba(254, 128, 97, 0.15),hsla(0,0%,100%,0));" >}}
      {{< hextra/feature-card title="Coming Soon!" style="background: radial-gradient(ellipse at 50% 80%,rgba(254, 128, 97, 0.15),hsla(0,0%,100%,0));" >}}
      {{< hextra/feature-card title="Coming Soon!" style="background: radial-gradient(ellipse at 50% 80%,rgba(254, 128, 97, 0.15),hsla(0,0%,100%,0));" >}}
      {{< hextra/feature-card title="Coming Soon!" style="background: radial-gradient(ellipse at 50% 80%,rgba(254, 128, 97, 0.15),hsla(0,0%,100%,0));" >}}
      {{< hextra/feature-card title="Coming Soon!" style="background: radial-gradient(ellipse at 50% 80%,rgba(254, 128, 97, 0.15),hsla(0,0%,100%,0));" displayVertical="false" >}}
    {{< /hextra/feature-grid >}}
  </div>
</div>