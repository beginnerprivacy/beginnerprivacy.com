---
title: Beginner Privacy
layout: hextra-home
---
<div class="hero">
  {{< hextra/hero-badge link="https://github.com/BeginnerPrivacy" >}}<div class="hx-w-2 hx-h-2 hx-rounded-full hx-bg-primary-400"></div>
    <span>Gratuito, de código abierto</span>
    {{< icon name="arrow-circle-right" attributes="height=14" >}}
  {{< /hextra/hero-badge >}}

  {{< hextra/hero-container
    image="../images/surveillance.webp"
    imageClass="hero-surveillance-image hx-block"
    imageTitle="Surveillance Camera" >}}
  {{< /hextra/hero-container >}}

  <div class="hx-mt-6 hx-mb-6">
  {{< hextra/hero-headline >}}Comienza tu viaje de privacidad ahora&nbsp;<br class="sm:hx-block hx-hidden" />con Beginner Privacy{{< /hextra/hero-headline >}}
  </div>

  <div class=" hero-take-quiz hx-mb-6" style="display: inline-flex; width: 100%;">
  {{< hextra/hero-subtitle >}}¡Tu privacidad es importante! Pero las grandes organizaciones lo están quitando.&nbsp;<br class="sm:hx-block hx-hidden" />Beginner Privacy es tu hoja de ruta para recuperar una vida privada.
  {{< /hextra/hero-subtitle >}}
  </div>

  {{< hextra/hero-button text="Empieza ahora" onclick="scrollDown();" >}}
  {{< hextra/hero-button text="¿No estás seguro? Aquí está la razón" link="articles/why-you-should-care-about-your-privacy" >}}
</div>

<div class="roadmap" style="margin-bottom: 10rem;">
  <div class="hx-mt-6" style="width: 100%; margin-top: 10rem;">
    <h1 class="hx-font-bold md:hx-text-5xl">Hoja de ruta</h1>
    <div style="display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap;">
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
      <div id="import-export" style="display: flex; align-items: center;">
          <label for="importFile" class="not-prose hx-font-medium hx-cursor-pointer hx-px-6 hx-py-2 hx-rounded-full hx-text-center hx-text-white hx-inline-block hx-bg-primary-600 hover:hx-bg-primary-700">
              Importar
              <input type="file" id="importFile" accept=".json" style="display: none;" onchange="importCheckbox();" />
          </label>
          <button id="exportButton" style="margin-left: 5px;" class="not-prose hx-font-medium hx-cursor-pointer hx-px-6 hx-py-2 hx-rounded-full hx-text-center hx-text-white hx-inline-block hx-bg-primary-600 hover:hx-bg-primary-700" onclick="exportCheckbox();">Exportar</button>
      </div>
    </div>
</div>

<div id="roadmapContent" class="hx-mt-4">
  <div id="startContent" class="roadmap-section">
    {{< hextra/feature-grid >}}
      {{< hextra/feature-card title="Sobre Beginner Privacy" link="about" style="background: radial-gradient(ellipse at 50% 80%,rgba(194,97,254,0.15),hsla(0,0%,100%,0));" >}}
      {{< hextra/feature-card title="¿Por qué preocuparse por tu privacidad?" link="articles/why-you-should-care-about-your-privacy" style="background: radial-gradient(ellipse at 50% 80%,rgba(194,97,254,0.15),hsla(0,0%,100%,0));" >}}
      {{< hextra/feature-card title="Encontrar un modelo de amenaza" link="articles/how-to-find-a-threat-model-that-suits-you" style="background: radial-gradient(ellipse at 50% 80%,rgba(194,97,254,0.15),hsla(0,0%,100%,0));"  >}}
    {{< /hextra/feature-grid >}}
  </div>
  <div id="basicContent" class="roadmap-section" style="display:none;">
    {{< hextra/feature-grid >}}
        <!-- Row 1 -->
        {{< hextra/feature-card title="Introducción Básica" link="about/roadmap-introductions/basic" style="background: radial-gradient(ellipse at 50% 80%,rgba(97, 254, 176, 0.15),hsla(0,0%,100%,0));" >}}
        {{< hextra/feature-card title="Contraseñas Fuertes" link="articles/how-to-create-strong-passwords-and-store-them-securely" style="background: radial-gradient(ellipse at 50% 80%,rgba(97, 254, 176, 0.15),hsla(0,0%,100%,0));" >}}
        {{< hextra/feature-card title="Autenticación de Dos Factores (2FA)" style="background: radial-gradient(ellipse at 50% 80%,rgba(97, 254, 176, 0.15),hsla(0,0%,100%,0));" >}}
        {{< hextra/feature-card title="Limitar la información compartida" style="background: radial-gradient(ellipse at 50% 80%,rgba(97, 254, 176, 0.15),hsla(0,0%,100%,0));" >}}
        {{< hextra/feature-card title="Navegador Privado" style="background: radial-gradient(ellipse at 50% 80%,rgba(97, 254, 176, 0.15),hsla(0,0%,100%,0));" >}}
        <!-- Row 2 -->
        {{< hextra/feature-card title="Correo electrónico privado" style="background: radial-gradient(ellipse at 50% 80%,rgba(97, 254, 176, 0.15),hsla(0,0%,100%,0));" >}}
        {{< hextra/feature-card title="Configuración de Privacidad Móvil" style="background: radial-gradient(ellipse at 50% 80%,rgba(97, 254, 176, 0.15),hsla(0,0%,100%,0));" >}}
        {{< hextra/feature-card title="Configuración de privacidad del escritorio" style="background: radial-gradient(ellipse at 50% 80%,rgba(97, 254, 176, 0.15),hsla(0,0%,100%,0));" >}}
        {{< hextra/feature-card title="Red Privada Virtual (VPN)" style="background: radial-gradient(ellipse at 50% 80%,rgba(97, 254, 176, 0.15),hsla(0,0%,100%,0));" >}}
        {{< hextra/feature-card title="Motor de búsqueda privado" style="background: radial-gradient(ellipse at 50% 80%,rgba(97, 254, 176, 0.15),hsla(0,0%,100%,0));" >}}
        <!-- Row 3 -->
        {{< hextra/feature-card title="Mensajería Segura" style="background: radial-gradient(ellipse at 50% 80%,rgba(97, 254, 176, 0.15),hsla(0,0%,100%,0));" >}}
        {{< hextra/feature-card title="¿Falta algo? ¡Contribuye!" link="about/contribute/write-content/" style="background: radial-gradient(ellipse at 50% 80%,rgba(97, 254, 176, 0.15),hsla(0,0%,100%,0));" >}}
    {{< /hextra/feature-grid >}}
  </div>
  <div id="mediumContent" class="roadmap-section" style="display:none;">
    {{< hextra/feature-grid >}}
      <!-- Row 1 -->
      {{< hextra/feature-card title="Introducción Media" link="about/roadmap-introductions/medium" style="background: radial-gradient(ellipse at 50% 80%,rgba(254, 225, 97, 0.15),hsla(0,0%,100%,0));" >}}
      {{< hextra/feature-card title="Software Libre y de Código Abierto" style="background: radial-gradient(ellipse at 50% 80%,rgba(254, 225, 97, 0.15),hsla(0,0%,100%,0));" >}}
      {{< hextra/feature-card title="Cámbiate a Linux" style="background: radial-gradient(ellipse at 50% 80%,rgba(254, 225, 97, 0.15),hsla(0,0%,100%,0));" >}}
      {{< hextra/feature-card title="Interfaces de Redes Sociales" style="background: radial-gradient(ellipse at 50% 80%,rgba(254, 225, 97, 0.15),hsla(0,0%,100%,0));" >}}
      {{< hextra/feature-card title="Eliminación de corredores de datos" style="background: radial-gradient(ellipse at 50% 80%,rgba(254, 225, 97, 0.15),hsla(0,0%,100%,0));" >}}
      <!-- Row 2 -->
      {{< hextra/feature-card invisibleFiller="true" >}}
      {{< hextra/feature-card title="¿Falta algo? ¡Contribuye!" link="about/contribute/write-content/" style="background: radial-gradient(ellipse at 50% 80%,rgba(254, 225, 97, 0.15),hsla(0,0%,100%,0));" >}}
      {{< hextra/feature-card title="OpSec Básico" style="background: radial-gradient(ellipse at 50% 80%,rgba(254, 225, 97, 0.15),hsla(0,0%,100%,0));" >}}
      {{< hextra/feature-card title="¿Qué es Tor?" style="background: radial-gradient(ellipse at 50% 80%,rgba(254, 225, 97, 0.15),hsla(0,0%,100%,0));" >}}
      {{< hextra/feature-card title="DNS cifrado" style="background: radial-gradient(ellipse at 50% 80%,rgba(254, 225, 97, 0.15),hsla(0,0%,100%,0));" >}}
    {{< /hextra/feature-grid >}}
  </div>
  <div id="advancedContent" class="roadmap-section" style="display:none;">
    {{< hextra/feature-grid >}}
      <!-- Row 1 -->
      {{< hextra/feature-card title="Introducción Avanzada" link="about/roadmap-introductions/advanced" style="background: radial-gradient(ellipse at 50% 80%,rgba(254, 128, 97, 0.15),hsla(0,0%,100%,0));" >}}
      {{< hextra/feature-card title="Sistema Operativo de Escritorio" style="background: radial-gradient(ellipse at 50% 80%,rgba(254, 128, 97, 0.15),hsla(0,0%,100%,0));" >}}
      {{< hextra/feature-card title="Sistema Operativo Móvil" style="background: radial-gradient(ellipse at 50% 80%,rgba(254, 128, 97, 0.15),hsla(0,0%,100%,0));" >}}
      {{< hextra/feature-card title="Autoalojamiento" style="background: radial-gradient(ellipse at 50% 80%,rgba(254, 128, 97, 0.15),hsla(0,0%,100%,0));" >}}
      {{< hextra/feature-card title="Criptomoneda" style="background: radial-gradient(ellipse at 50% 80%,rgba(254, 128, 97, 0.15),hsla(0,0%,100%,0));" >}}
      <!-- Row 2 -->
      {{< hextra/feature-card title="OpSec Avanzado" style="background: radial-gradient(ellipse at 50% 80%,rgba(254, 128, 97, 0.15),hsla(0,0%,100%,0));" >}}
      {{< hextra/feature-card title="¿Qué es I2P?" style="background: radial-gradient(ellipse at 50% 80%,rgba(254, 128, 97, 0.15),hsla(0,0%,100%,0));" >}}
      {{< hextra/feature-card title="Evitando trampas de miel" style="background: radial-gradient(ellipse at 50% 80%,rgba(254, 128, 97, 0.15),hsla(0,0%,100%,0));" >}}
      {{< hextra/feature-card title="Encriptar Todo" style="background: radial-gradient(ellipse at 50% 80%,rgba(254, 128, 97, 0.15),hsla(0,0%,100%,0));" >}}
      {{< hextra/feature-card title="Adquirir cripto" style="background: radial-gradient(ellipse at 50% 80%,rgba(254, 128, 97, 0.15),hsla(0,0%,100%,0));" >}}
      <!-- Row 3 -->        
      {{< hextra/feature-card title="¿Falta algo? ¡Contribuye!" link="about/contribute/write-content/" style="background: radial-gradient(ellipse at 50% 80%,rgba(254, 128, 97, 0.15),hsla(0,0%,100%,0));" >}}
    {{< /hextra/feature-grid >}}
  </div>
</div>
</div>

<div class="hx-mt-16" style="width: 100%; text-align: center; font-size: 2rem;">
    <h1 class="hx-font-bold">¡Necesitamos tu ayuda!</h1>
    {{< hextra/hero-subtitle >}}¡Beginner Privacy es 100% gratuito y siempre lo será! Sin embargo, depende de los colaboradores y la comunidad para prosperar.<br>Aquí hay algunas maneras en las que puedes ayudar:{{< /hextra/hero-subtitle >}}
    <div style="display: inline-flex; flex-wrap: wrap; justify-content: center; margin-top: 2rem;">
    {{< hextra/hero-button text="Escribe contenido" link="about/contribute/write-content" icon="pencil" style="height: 50px; font-size: 18px; display: flex; center; align-items: center;justify-content: center; width: 200px; margin-inline: 2px;" >}}
    {{< hextra/hero-button text="Traducir" link="about/contribute/translate" icon="translate" style="height: 50px; font-size: 18px; display: flex; center; align-items: center;justify-content: center; width: 200px; margin-inline: 2px;" >}}
    {{< hextra/hero-button text="Donar" link="about/donate" icon="heart" style="height: 50px; font-size: 18px; display: flex; center; align-items: center;justify-content: center; width: 200px; margin-inline: 2px;" >}}
    {{< hextra/hero-button text="Corre la voz" onClick="" icon="share" style="height: 50px; font-size: 18px; display: flex; center; align-items: center;justify-content: center; width: 200px; margin-inline: 2px;" >}}
    </div>
    <table>
        <thead>
            <tr>
                <th>Nombre</th>
                <th>Rol</th>
                <th>Contribuciones</th>
                <th>Enlaces</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td data-label="Nombre">PrintN</td>
                <td data-label="Rol">Fundador, Desarrollador</td>
                <td data-label="Contribuciones">Código, Documentación</td>
                <td data-label="Enlaces"><a href="https://github.com/PrintN" target="_blank">GitHub</a></td>
            </tr>
            <tr>
                <td data-label="Nombre">¡Podrías estar aquí!</td>
                <td data-label="Rol">Tu papel</td>
                <td data-label="Contribuciones">Tu contribución</td>
                <td data-label="Enlaces"><a href="https://github.com/" target="_blank">Tu GitHub</a></td>
            </tr>
        </tbody>
    </table>
</div>