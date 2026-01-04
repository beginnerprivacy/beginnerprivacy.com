---
title: Hoja de Ruta
excludeSearch: false
Params:
  sidebar:
    exclude: true
---
<section class="roadmap hx-pt-20" id="roadmap">
  <div>
    <div style="display: flex; align-items: center; justify-content: center; flex-wrap: wrap;">
      <div class="tabs hx-select-none">
        <input type="radio" id="radio-start" name="tabs" value="start" checked onclick="updateRoadmap()" />
        <label class="tab" for="radio-start">Inicio</label>
        <input type="radio" id="radio-basic" name="tabs" value="basic" onclick="updateRoadmap()" />
        <label class="tab" for="radio-basic">Básico</label>
        <input type="radio" id="radio-medium" name="tabs" value="medium" onclick="updateRoadmap()" />
        <label class="tab" for="radio-medium">Intermedio</label>
        <input type="radio" id="radio-advanced" name="tabs" value="advanced" onclick="updateRoadmap()" />
        <label class="tab" for="radio-advanced">Avanzado</label>
        <span class="glider"></span>
      </div>
    </div>
  </div>
  <div id="roadmapContent" class="hx-mt-4">
    <div id="startContent" class="roadmap-section">
      <ol class="centerRoadmapOL">
        <li>{{< roadmap/card title="Acerca de Beginner Privacy" id="about-beginner-privacy" class="start-hf-card-color" >}}</li>
        <li>{{< roadmap/card title="¿Por Qué Preocuparse Por tu Privacidad?" id="why-care-about-your-privacy" class="start-hf-card-color" >}}</li>
        <li>{{< roadmap/card title="Encontrar un Modelo de Amenazas" id="finding-a-threat-model" class="start-hf-card-color" >}}</li>
      </ol>
    </div>
    <div id="basicContent" class="roadmap-section" style="display:none;">
      <ol>
        <li>{{< roadmap/card title="Contraseñas Fuertes" id="strong-passwords" class="basic-hf-card-color" >}}</li>
        <li>{{< roadmap/card title="Autenticación de Dos Factores (2FA)" id="two-factor-authentication" class="basic-hf-card-color" >}}</li>
        <li>{{< roadmap/card title="Limitar la Información Compartida" id="limit-information-shared" class="basic-hf-card-color" >}}</li>
        <li>{{< roadmap/card title="Navegador Privado" id="private-browser" class="basic-hf-card-color" >}}</li>
        <li>{{< roadmap/card title="Motor de Búsqueda Privado" id="private-search-engine" class="basic-hf-card-color" >}}</li>
        <li>{{< roadmap/card title="Red Privada Virtual (VPN)" id="virtual-private-network" class="basic-hf-card-color" >}}</li>
        <li>{{< roadmap/card title="Configuraciones de Privacidad en Móvil" id="mobile-privacy-settings" class="basic-hf-card-color" >}}</li>
        <li>{{< roadmap/card title="Configuraciones de Privacidad en Escritorio" id="desktop-privacy-settings" class="basic-hf-card-color" >}}</li>
        <li>{{< roadmap/card title="Correo Electrónico Privado" id="private-email" class="basic-hf-card-color" >}}</li>
        <li>{{< roadmap/card title="Comunicación Segura" id="secure-communication" class="basic-hf-card-color" >}}</li>
        <li>{{< roadmap/card title="Eliminación de Brókers de Datos" id="removal-from-data-brokers" class="basic-hf-card-color" >}}</li>
      </ol>
    </div>
    <div id="mediumContent" class="roadmap-section" style="display:none;">
      <ol>
        <li>{{< roadmap/card title="Cambiar a Linux" id="switch-to-linux" class="medium-hf-card-color" >}}</li>
        <li>{{< roadmap/card title="Software Libre y de Código Abierto" id="free-and-open-source-software" class="medium-hf-card-color" >}}</li>
        <li>{{< roadmap/card title="DNS Cifrado" id="encrypted-dns" class="medium-hf-card-color" >}}</li>
        <li>{{< roadmap/card title="Frontends de Redes Sociales" id="social-media-frontends" class="medium-hf-card-color" >}}</li>
        <li>{{< roadmap/card title="¿Qué es Tor?" id="what-is-tor" class="medium-hf-card-color" >}}</li>
        <li>{{< roadmap/card title="Criptomonedas" id="cryptocurrency" class="medium-hf-card-color" >}}</li>
        <li>{{< roadmap/card title="Autoalojamiento" id="self-hosting" class="medium-hf-card-color" >}}</li>
        <li>{{< roadmap/card title="Seguridad Física" id="physical-security" class="medium-hf-card-color" >}}</li>
      </ol>
    </div>
    <div id="advancedContent" class="roadmap-section" style="display:none;">
      <ol class="centerRoadmapOL">
        <li>{{< roadmap/card title="Ir Más Allá de Beginner Privacy" id="moving-beyond-beginner-privacy" class="advanced-hf-card-color" >}}</li>
      </ol>
    </div>
  </div>
</section>