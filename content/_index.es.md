---
title: Beginner Privacy
layout: hextra-home
---

{{< hextra/hero-badge link="https://github.com/BeginnerPrivacy" >}}
  <div class="hx-w-2 hx-h-2 hx-rounded-full hx-bg-primary-400"></div>
  <span>Gratuito, de código abierto</span>
  {{< icon name="arrow-circle-right" attributes="height=14" >}}
{{< /hextra/hero-badge >}}

{{< hextra/hero-container
  image="surveillance.webp"
  imageClass="hero-surveillance-image hx-block hx-overflow-hidden hx-rounded-3xl"
  imageTitle="Surveillance Camera" 
  imageWidth="250" imageHeight="250" >}}
{{< /hextra/hero-container >}}

<div class="hx-mt-6 hx-mb-6">
{{< hextra/hero-headline >}}
  Comienza tu viaje de privacidad&nbsp;<br class="sm:hx-block hx-hidden" />con Beginner Privacy
{{< /hextra/hero-headline >}}
</div>

<div class=" hero-take-quiz hx-mb-12" style="display: inline-flex; width: 100%;">
{{< hextra/hero-subtitle >}}
  Descubre dónde perteneces en la hoja de ruta&nbsp;<br class="sm:hx-block hx-hidden" />haciendo el cuestionario 👇
{{< /hextra/hero-subtitle >}}
</div>

{{< hextra/hero-button text="Hacer el cuestionario" onClick="takeQuiz();" >}}

<div id="quizModal">  
  <div id="question1" class="question">
      <p>¿Usas Linux?</p>
  </div>
  <div id="question2" class="question">
      <p>¿Tienes experiencia técnica?</p>
  </div>
  <div id="question3" class="question">
      <p>¿Cuánto esfuerzo planeas dedicar a tu privacidad?</p>
      <p>
        <button class="hx-bg-primary-600" onclick="answerQuestion(2)">Mucho</button>
        <button class="hx-bg-primary-600" onclick="answerQuestion(1)">Cantidad decente</button>
        <button class="hx-bg-primary-600" onclick="answerQuestion(0)">Un poco</button>
      </p>
  </div>
  <div id="question4" class="question">
      <p>¿De quién estás tratando de proteger tus datos?</p>
      <p>
        <button class="hx-bg-primary-600" onclick="answerQuestion(0)">Grandes Corporaciones</button>
        <button class="hx-bg-primary-600" onclick="answerQuestion(1)">Hackers</button>
        <button class="hx-bg-primary-600" onclick="answerQuestion(2)">Gobierno</button>
      </p>
  </div>

  <div style="text-align: center;">
    <button class="yes-no-button hx-bg-primary-600" onclick="answerQuestion('yes')">Sí</button>
    <button class="yes-no-button hx-bg-primary-600" onclick="answerQuestion('no')">No</button>
  </div>
  <div id="quizResult"></div>
</div>

<div class="hx-mt-6">
    <h1 class="hx-font-bold md:hx-text-5xl">Hoja de ruta</h1>
    <div class="tabs">
        <input type="radio" id="radio-start" name="tabs" value="start" checked onclick="updateRoadmap()" />
        <label class="tab" for="radio-start">Inicio</label>
        <input type="radio" id="radio-basic" name="tabs" value="basic" onclick="updateRoadmap()" />
        <label class="tab" for="radio-basic">Básico</label>
        <input type="radio" id="radio-medium" name="tabs" value="medium" onclick="updateRoadmap()" />
        <label class="tab" for="radio-medium">Medio</label>
        <input type="radio" id="radio-advanced" name="tabs" value="advanced" onclick="updateRoadmap()" />
        <label class="tab" for="radio-advanced">Avanzado</label>
        <span class="glider"></span>
    </div>
</div>

<div id="roadmapContent" class="hx-mt-4">
  <div id="startContent" class="roadmap-section">
    {{< hextra/feature-grid >}}
      {{< hextra/feature-card title="Cómo funciona Beginner Privacy" style="background: radial-gradient(ellipse at 50% 80%,rgba(194,97,254,0.15),hsla(0,0%,100%,0));" >}}
      {{< hextra/feature-card title="Por qué deberías preocuparte por tu privacidad" style="background: radial-gradient(ellipse at 50% 80%,rgba(194,97,254,0.15),hsla(0,0%,100%,0));" >}}
      {{< hextra/feature-card title="Comprender tu modelo de amenaza" style="background: radial-gradient(ellipse at 50% 80%,rgba(194,97,254,0.15),hsla(0,0%,100%,0));"  displayVertical="false" >}}
    {{< /hextra/feature-grid >}}
  </div>

  <div id="basicContent" class="roadmap-section" style="display:none;">
    {{< hextra/feature-grid >}}
        {{< hextra/feature-card title="¡Próximamente!" style="background: radial-gradient(ellipse at 50% 80%,rgba(97, 254, 176, 0.15),hsla(0,0%,100%,0));" >}}
        {{< hextra/feature-card title="¡Próximamente!" style="background: radial-gradient(ellipse at 50% 80%,rgba(97, 254, 176, 0.15),hsla(0,0%,100%,0));" >}}
        {{< hextra/feature-card title="¡Próximamente!" style="background: radial-gradient(ellipse at 50% 80%,rgba(97, 254, 176, 0.15),hsla(0,0%,100%,0));" >}}
        {{< hextra/feature-card title="¡Próximamente!" style="background: radial-gradient(ellipse at 50% 80%,rgba(97, 254, 176, 0.15),hsla(0,0%,100%,0));" >}}
        {{< hextra/feature-card title="¡Próximamente!" style="background: radial-gradient(ellipse at 50% 80%,rgba(97, 254, 176, 0.15),hsla(0,0%,100%,0));" displayVertical="true" >}}
    {{< /hextra/feature-grid >}}
    <br>
    {{< hextra/feature-grid >}}
        {{< hextra/feature-card title="¡Próximamente!" style="background: radial-gradient(ellipse at 50% 80%,rgba(97, 254, 176, 0.15),hsla(0,0%,100%,0));" displayVertical="both" >}}
        {{< hextra/feature-card title="¡Próximamente!" style="background: radial-gradient(ellipse at 50% 80%,rgba(97, 254, 176, 0.15),hsla(0,0%,100%,0));" >}}
        {{< hextra/feature-card title="¡Próximamente!" style="background: radial-gradient(ellipse at 50% 80%,rgba(97, 254, 176, 0.15),hsla(0,0%,100%,0));" >}}
        {{< hextra/feature-card title="¡Próximamente!" style="background: radial-gradient(ellipse at 50% 80%,rgba(97, 254, 176, 0.15),hsla(0,0%,100%,0));" >}}
        {{< hextra/feature-card title="¡Próximamente!" style="background: radial-gradient(ellipse at 50% 80%,rgba(97, 254, 176, 0.15),hsla(0,0%,100%,0));" displayVertical="false" >}}
    {{< /hextra/feature-grid >}}
    <br>
    {{< hextra/feature-grid >}}
      {{< hextra/feature-card title="¡Próximamente!" style="background: radial-gradient(ellipse at 50% 80%,rgba(97, 254, 176, 0.15),hsla(0,0%,100%,0));" >}}
      {{< hextra/feature-card title="¡Próximamente!" style="background: radial-gradient(ellipse at 50% 80%,rgba(97, 254, 176, 0.15),hsla(0,0%,100%,0));" >}}
      {{< hextra/feature-card title="¡Próximamente!" style="background: radial-gradient(ellipse at 50% 80%,rgba(97, 254, 176, 0.15),hsla(0,0%,100%,0));" >}}
      {{< hextra/feature-card title="¡Próximamente!" style="background: radial-gradient(ellipse at 50% 80%,rgba(97, 254, 176, 0.15),hsla(0,0%,100%,0));" >}}
      {{< hextra/feature-card title="¡Próximamente!" style="background: radial-gradient(ellipse at 50% 80%,rgba(97, 254, 176, 0.15),hsla(0,0%,100%,0));" displayVertical="false" >}}
    {{< /hextra/feature-grid >}}
  </div>

  <div id="mediumContent" class="roadmap-section" style="display:none;">
    {{< hextra/feature-grid >}}
      {{< hextra/feature-card title="¡Próximamente!" style="background: radial-gradient(ellipse at 50% 80%,rgba(254, 225, 97, 0.15),hsla(0,0%,100%,0));" >}}
      {{< hextra/feature-card title="¡Próximamente!" style="background: radial-gradient(ellipse at 50% 80%,rgba(254, 225, 97, 0.15),hsla(0,0%,100%,0));" >}}
      {{< hextra/feature-card title="¡Próximamente!" style="background: radial-gradient(ellipse at 50% 80%,rgba(254, 225, 97, 0.15),hsla(0,0%,100%,0));" >}}
      {{< hextra/feature-card title="¡Próximamente!" style="background: radial-gradient(ellipse at 50% 80%,rgba(254, 225, 97, 0.15),hsla(0,0%,100%,0));" >}}
      {{< hextra/feature-card title="¡Próximamente!" style="background: radial-gradient(ellipse at 50% 80%,rgba(254, 225, 97, 0.15),hsla(0,0%,100%,0));" displayVertical="true" >}}
    {{< /hextra/feature-grid >}}
    <br>
    {{< hextra/feature-grid >}}
      {{< hextra/feature-card title="¡Próximamente!" style="background: radial-gradient(ellipse at 50% 80%,rgba(254, 225, 97, 0.15),hsla(0,0%,100%,0));" displayVertical="both" >}}
      {{< hextra/feature-card title="¡Próximamente!" style="background: radial-gradient(ellipse at 50% 80%,rgba(254, 225, 97, 0.15),hsla(0,0%,100%,0));" >}}
      {{< hextra/feature-card title="¡Próximamente!" style="background: radial-gradient(ellipse at 50% 80%,rgba(254, 225, 97, 0.15),hsla(0,0%,100%,0));" >}}
      {{< hextra/feature-card title="¡Próximamente!" style="background: radial-gradient(ellipse at 50% 80%,rgba(254, 225, 97, 0.15),hsla(0,0%,100%,0));" >}}
      {{< hextra/feature-card title="¡Próximamente!" style="background: radial-gradient(ellipse at 50% 80%,rgba(254, 225, 97, 0.15),hsla(0,0%,100%,0));" displayVertical="false" >}}
    {{< /hextra/feature-grid >}}
    <br>
    {{< hextra/feature-grid >}}
      {{< hextra/feature-card title="¡Próximamente!" style="background: radial-gradient(ellipse at 50% 80%,rgba(254, 225, 97, 0.15),hsla(0,0%,100%,0));" >}}
      {{< hextra/feature-card title="¡Próximamente!" style="background: radial-gradient(ellipse at 50% 80%,rgba(254, 225, 97, 0.15),hsla(0,0%,100%,0));" >}}
      {{< hextra/feature-card title="¡Próximamente!" style="background: radial-gradient(ellipse at 50% 80%,rgba(254, 225, 97, 0.15),hsla(0,0%,100%,0));" >}}
      {{< hextra/feature-card title="¡Próximamente!" style="background: radial-gradient(ellipse at 50% 80%,rgba(254, 225, 97, 0.15),hsla(0,0%,100%,0));" >}}
      {{< hextra/feature-card title="¡Próximamente!" style="background: radial-gradient(ellipse at 50% 80%,rgba(254, 225, 97, 0.15),hsla(0,0%,100%,0));" displayVertical="false" >}}
    {{< /hextra/feature-grid >}}
  </div>

  <div id="advancedContent" class="roadmap-section" style="display:none;">
    {{< hextra/feature-grid >}}
      {{< hextra/feature-card title="¡Próximamente!" style="background: radial-gradient(ellipse at 50% 80%,rgba(254, 128, 97, 0.15),hsla(0,0%,100%,0));" >}}
      {{< hextra/feature-card title="¡Próximamente!" style="background: radial-gradient(ellipse at 50% 80%,rgba(254, 128, 97, 0.15),hsla(0,0%,100%,0));" >}}
      {{< hextra/feature-card title="¡Próximamente!" style="background: radial-gradient(ellipse at 50% 80%,rgba(254, 128, 97, 0.15),hsla(0,0%,100%,0));" >}}
      {{< hextra/feature-card title="¡Próximamente!" style="background: radial-gradient(ellipse at 50% 80%,rgba(254, 128, 97, 0.15),hsla(0,0%,100%,0));" >}}
      {{< hextra/feature-card title="¡Próximamente!" style="background: radial-gradient(ellipse at 50% 80%,rgba(254, 128, 97, 0.15),hsla(0,0%,100%,0));" displayVertical="true" >}}
    {{< /hextra/feature-grid >}}
    <br>
    {{< hextra/feature-grid >}}
      {{< hextra/feature-card title="¡Próximamente!" style="background: radial-gradient(ellipse at 50% 80%,rgba(254, 128, 97, 0.15),hsla(0,0%,100%,0));" displayVertical="both" >}}
      {{< hextra/feature-card title="¡Próximamente!" style="background: radial-gradient(ellipse at 50% 80%,rgba(254, 128, 97, 0.15),hsla(0,0%,100%,0));" >}}
      {{< hextra/feature-card title="¡Próximamente!" style="background: radial-gradient(ellipse at 50% 80%,rgba(254, 128, 97, 0.15),hsla(0,0%,100%,0));" >}}
      {{< hextra/feature-card title="¡Próximamente!" style="background: radial-gradient(ellipse at 50% 80%,rgba(254, 128, 97, 0.15),hsla(0,0%,100%,0));" >}}
      {{< hextra/feature-card title="¡Próximamente!" style="background: radial-gradient(ellipse at 50% 80%,rgba(254, 128, 97, 0.15),hsla(0,0%,100%,0));" displayVertical="false" >}}
    {{< /hextra/feature-grid >}}
    <br>
    {{< hextra/feature-grid >}}
      {{< hextra/feature-card title="¡Próximamente!" style="background: radial-gradient(ellipse at 50% 80%,rgba(254, 128, 97, 0.15),hsla(0,0%,100%,0));" >}}
      {{< hextra/feature-card title="¡Próximamente!" style="background: radial-gradient(ellipse at 50% 80%,rgba(254, 128, 97, 0.15),hsla(0,0%,100%,0));" >}}
      {{< hextra/feature-card title="¡Próximamente!" style="background: radial-gradient(ellipse at 50% 80%,rgba(254, 128, 97, 0.15),hsla(0,0%,100%,0));" >}}
      {{< hextra/feature-card title="¡Próximamente!" style="background: radial-gradient(ellipse at 50% 80%,rgba(254, 128, 97, 0.15),hsla(0,0%,100%,0));" >}}
      {{< hextra/feature-card title="¡Próximamente!" style="background: radial-gradient(ellipse at 50% 80%,rgba(254, 128, 97, 0.15),hsla(0,0%,100%,0));" displayVertical="false" >}}
    {{< /hextra/feature-grid >}}
  </div>
</div>