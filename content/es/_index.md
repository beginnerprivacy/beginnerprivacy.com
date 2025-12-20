---
title: Beginner Privacy
layout: hextra-home
---
<section class="hero hx-py-40 hx-text-center" id="hero">
  {{< hextra/hero-badge link="https://github.com/BeginnerPrivacy" >}}<div class="hx-w-2 hx-h-2 hx-rounded-full hx-bg-primary-400"></div>
    <span>Gratuito, de código abierto</span>
    {{< icon name="arrow-circle-right" attributes="height=14" >}}{{< /hextra/hero-badge >}}

  <div class="hx-mt-6 hx-mb-4">
    <h1 class="not-prose hx-text-4xl md:hx-text-9xl hx-font-bold hx-leading-none hx-tracking-tighter hx-py-2 hx-bg-clip-text">Privacidad Hecha Simple.</h1>
  </div>

  <div class="hx-mb-6">
    <p class="hx-text-lg">¡Tu privacidad es importante! Pero las grandes organizaciones la están eliminando.<br> Beginner Privacy te ayuda a navegar el vasto océano de la privacidad y seguridad en línea.</p>
  </div>

  <div class="not-prose hx-font-medium hx-cursor-pointer hx-select-none hx-px-10 hx-py-3 hx-rounded-lg hx-text-center hx-text-white hx-inline-block hx-bg-primary-600 hover:hx-bg-primary-700 dark:hx-bg-primary-600 dark:hover:hx-bg-primary-700 hx-transition-all hx-ease-in hx-duration-200 start-now-button" style="margin: 2px;" onclick="scrollDown();">
    Comienza Tu Viaje
    <span class="arrow">&rarr;</span>
  </div>
  <div class="not-prose hx-font-medium hx-cursor-pointer hx-select-none hx-px-10 hx-py-3 hx-rounded-lg hx-text-center hx-text-black dark:hx-text-white hx-inline-block not-sure-button hx-transition-all hx-ease-in hx-duration-200" style="margin: 2px;" onclick="scrollMisconceptions();">¿No estás seguro? Aquí está la razón</div>

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

<section class="roadmap" id="roadmap">
  <div>
      <h2 class="hx-text-4xl hx-text-center hx-font-bold md:hx-text-5xl">Hoja de Ruta</h2>
      <div style="display: flex; align-items: center; justify-content: center; flex-wrap: wrap;">
        <div class="tabs hx-select-none">
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
  </div>

  <div id="roadmapContent" class="hx-mt-4">
    <div id="startContent" class="roadmap-section">
      <ol class="centerRoadmapOL">
        <li>{{< roadmap/card title="Sobre Beginner Privacy" id="about-beginner-privacy" link="about" class="start-hf-card-color" >}}</li>
        <li>{{< roadmap/card title="¿Por Qué Preocuparse Por Tu Privacidad?" id="why-care-about-your-privacy" link="articles/why-you-should-care-about-your-privacy" class="start-hf-card-color" >}}</li>
        <li>{{< roadmap/card title="Encontrar Un Modelo de Amenaza" id="finding-a-threat-model" link="articles/how-to-find-a-threat-model-that-suits-you" class="start-hf-card-color" >}}</li>
      </ol>
    </div>
    <div id="basicContent" class="roadmap-section" style="display:none;">
      <ol>
          <li>{{< roadmap/card title="Introducción Básica" id="basic-introduction" link="about/roadmap-introductions/basic" class="basic-hf-card-color" >}}</li>
          <li>{{< roadmap/card title="Contraseñas Fuertes" id="strong-passwords" link="articles/how-to-create-strong-passwords-and-store-them-securely" class="basic-hf-card-color" >}}</li>
          <li>{{< roadmap/card title="Autenticación de Dos Factores (2FA)" id="two-factor-authentication" link="articles/two-factor-authentication-and-why-you-need-it" class="basic-hf-card-color" >}}</li>
          <li>{{< roadmap/card title="Limitar la Información Compartida" id="limit-information-shared" link="articles/limit-the-personal-information-you-share-online" class="basic-hf-card-color" >}}</li>
          <li>{{< roadmap/card title="Navegador Privado" id="private-browser" link="articles/why-you-need-a-private-browser-to-protect-yourself" class="basic-hf-card-color" >}}</li>
          <li>{{< roadmap/card title="Motor de Búsqueda Privado" id="private-search-engine" link="articles/searching-safely-with-a-privacy-focused-search-engine" class="basic-hf-card-color" >}}</li>
          <li>{{< roadmap/card title="Red Privada Virtual (VPN)" id="virtual-private-network" link="articles/what-is-a-vpn-and-should-you-use-one" class="basic-hf-card-color" >}}</li>
          <li>{{< roadmap/card title="Configuración de Privacidad Móvil" id="mobile-privacy-settings" link="articles/change-these-mobile-settings-for-better-privacy" class="basic-hf-card-color" >}}</li>
          <li>{{< roadmap/card title="Configuración de Privacidad Del Escritorio" id="desktop-privacy-settings" link="articles/desktop-settings-to-change-for-better-privacy" class="basic-hf-card-color" >}}</li>
          <li>{{< roadmap/card title="Correo Electrónico Privado" id="private-email" link="articles/protect-your-communication-with-a-private-email" class="basic-hf-card-color" >}}</li>
          <li>{{< roadmap/card title="Mensajería Segura" id="secure-messaging" link="articles/ditch-sms-and-use-secure-communication-methods" class="basic-hf-card-color" >}}</li>
          <li>{{< roadmap/card title="Eliminación de Corredores de Datos" id="removal-from-data-brokers" link="articles/how-to-remove-yourself-from-data-brokers" class="basic-hf-card-color" >}}</li>
      </ol>
    </div>
    <div id="mediumContent" class="roadmap-section" style="display:none;">
      <ol>
        <li>{{< roadmap/card title="Introducción Media" id="medium-introduction" link="about/roadmap-introductions/medium" class="medium-hf-card-color" >}}</li>
        <li>{{< roadmap/card title="Cámbiate a Linux" id="switch-to-linux" link="articles/how-to-effortlessly-switch-to-linux-step-by-step-guide" class="medium-hf-card-color" >}}</li>
        <li>{{< roadmap/card title="Software Libre y de Código Abierto" id="free-and-open-source-software" link="articles/break-free-from-proprietary-software-with-foss" class="medium-hf-card-color" >}}</li>
        <li>{{< roadmap/card title="DNS Encriptado" id="encrypted-dns" link="articles/why-you-need-to-use-an-encrypted-dns" class="medium-hf-card-color" >}}</li>
        <li>{{< roadmap/card title="Interfaces de Redes Sociales" id="social-media-frontends" link="articles/why-you-should-ditch-social-media-and-use-a-frontend"  class="medium-hf-card-color" >}}</li>
        <li>{{< roadmap/card title="¿Qué es Tor?" id="what-is-tor" link="articles/navigating-the-web-anonymously-a-guide-to-tor-basics" class="medium-hf-card-color" >}}</li>
        <li>{{< roadmap/card title="Criptomoneda" id="cryptocurrency" link="articles/cryptocurrency-and-anonymity-a-guide-to-buying-things-without-a-trace" class="medium-hf-card-color" >}}</li>
        <li>{{< roadmap/card title="Autoalojamiento" id="self-hosting" link="articles/why-you-should-start-self-hosting-your-own-services"  class="medium-hf-card-color" >}}</li>
        <li>{{< roadmap/card title="Seguridad Física" id="physical-security" link="articles/why-you-should-enhance-your-physical-security" class="medium-hf-card-color" >}}</li>
      </ol>
    </div>
    <div id="advancedContent" class="roadmap-section" style="display:none;">
      <ol class="centerRoadmapOL">
        <li>{{< roadmap/card title="Más Allá de Beginner Privacy" id="moving-beyond-beginner-privacy" link="articles/moving-beyond-beginner-privacy" class="advanced-hf-card-color" >}}</li>
      </ol>
    </div>
  </div>
</section>

<section id="common-misconceptions" class="hx-text-center">
    <h2 class="hx-text-4xl hx-font-bold md:hx-text-6xl hx-inline">Conceptos Erróneos Comunes</h2>
    <div class="misconception-container">
        <div class="misconception-card">
            <h2 class="hx-text-2xl hx-font-bold">"¿Por qué debería preocuparme?"</h2>
            <p class="hx-text-base">Tu privacidad es esencial para tu seguridad y dignidad. Así como cierras la puerta del baño para tener espacio personal, proteger tu información personal es vital. La idea de "no tengo nada que ocultar" pasa por alto el hecho de que la privacidad es un derecho fundamental, no solo para aquellos que tienen secretos. Proteger tus datos ayuda a prevenir el robo de identidad y la vigilancia no deseada.</p>
        </div>
        <div class="misconception-card">
            <h2 class="hx-text-2xl hx-font-bold">"¿No es demasiado tarde ahora?"</h2>
            <p class="hx-text-base">¡El mejor momento para comenzar a proteger tu privacidad es hoy! Es crucial tomar acción ahora, ya que las empresas pueden tener acceso a tus datos. Al ser proactivo con la configuración de tu privacidad y el intercambio de datos, puedes reducir significativamente tu huella digital y mantener tu información personal segura.</p>
        </div>
        <div class="misconception-card">
            <h2 class="hx-text-2xl hx-font-bold">"¿Qué debo hacer?"</h2>
            <p class="hx-text-base">Tratar de mejorar tu privacidad puede resultar abrumador; por eso creamos Beginner Privacy, para hacerlo lo más fácil posible.</p>
            {{< hextra/hero-button text="Comienza a Mejorar Tu Privacidad" onclick="scrollDown();" style="margin-top: 15px;" noLink="true" >}}
        </div>
    </div>
</section>

<section class="community-section">
    <div class="community-content">
        <img src="../images/earth.webp" alt="Imagen de la Comunidad" class="community-image">
    </div>
    <div class="community-cta">
        <h2 class="hx-text-4xl hx-font-bold md:hx-text-5xl hx-leading-none">Únete a Nuestra Comunidad</h2>
        <p class="hx-text-base">Conéctate con personas afines que son apasionadas por la privacidad. Únete a nuestros foros, síguenos en las redes sociales y participa en las discusiones.</p>
        <div class="social-chat-container">
          <div class="chat-section">
            <h2 class="hx-text-2rem hx-font-bold hx-leading-none">Redes Sociales</h2>
            <a href="https://mastodon.social/@BeginnerPrivacy" target="_blank" title="Mastodon" rel="noopener noreferrer">
              <div class="chat-section-button">
                <p>Síguenos en Mastodon&nbsp;&nbsp;</p>{{< hextra/icon name="mastodon" attributes="height=25" >}}
              </div>
            </a>
          </div>
          <div class="chat-section">
            <h2 class="hx-text-2rem hx-font-bold hx-leading-none">Chat</h2>
            <a href="about/join-simplex-group" target="_blank" title="SimpleX Chat">
              <div class="chat-section-button">
                <p>Chatea en SimpleX&nbsp;&nbsp;</p>{{< hextra/icon name="simplex" attributes="height=25" >}}
              </div>
            </a>
          </div>
        </div>
    </div>
</section>

<section class="checklists-section">
  <h2 class="hx-text-4xl hx-font-bold md:hx-text-6xl hx-text-center">Listas de Verificación</h2>
  <p class="hx-text-base hx-mb-10px hx-text-center">Utiliza nuestras listas de verificación para mantenerte seguro y anónimo durante actividades como protestas. <br>Haz clic en el perfil que te corresponde para acceder a consejos y recursos esenciales.</p>
  <div class="carousel-container" aria-label="Checklists carousel">
    <div class="carousel-button prev" aria-label="Previous">&#10094;</div>
      <div class="carousel" tabindex="0" aria-roledescription="carousel" aria-live="polite" aria-atomic="true">
        <div class="carousel-track">
          <a href="checklists/?m=whistleblower" draggable="false" tabindex="-1">
            <div class="carousel-item" tabindex="0">Denunciante</div>
          </a>
          <a href="checklists/?m=protestor" draggable="false" tabindex="-1">
            <div class="carousel-item" tabindex="0">Manifestante</div>
          </a>
          <a href="checklists/?m=casual-internet-user" draggable="false" tabindex="-1">
            <div class="carousel-item" tabindex="0">Usuario de Internet Casual</div>
          </a>
          <a href="checklists/?m=internet-pirate" draggable="false" tabindex="-1">
            <div class="carousel-item" tabindex="0">Pirata de Internet</div>
          </a>
          <a href="checklists/?m=darknet-user" draggable="false" tabindex="-1">
            <div class="carousel-item" tabindex="0">Usuario de la Darknet</div>
          </a>
          <a href="checklists/?m=social-media-influencer" draggable="false" tabindex="-1">
            <div class="carousel-item" tabindex="0">Influencer de Redes Sociales</div>
          </a>
          <a href="checklists/?m=hacker" draggable="false" tabindex="-1">
            <div class="carousel-item" tabindex="0">Hacker</div>
          </a>
          <a href="checklists/?m=digital-nomad" draggable="false" tabindex="-1">
            <div class="carousel-item" tabindex="0">Nómada Digital</div>
          </a>
          <a href="checklists/?m=mass-surveillance" draggable="false" tabindex="-1">
            <div class="carousel-item" tabindex="0">Vigilancia Masiva</div>
          </a>
          <a href="checklists/?m=journalist" draggable="false" tabindex="-1">
            <div class="carousel-item" tabindex="0">Periodista</div>
          </a>
        </div>
      </div>
    <div class="carousel-button next" aria-label="Next">&#10095;</div>
    <div class="carousel-fade left"></div>
    <div class="carousel-fade right"></div>
  </div>
</section>

<section id="contributors" class="hx-mb-16">
    <h2 class="hx-text-4xl hx-font-bold md:hx-text-6xl">¡Necesitamos Tu Ayuda!</h2>
    <p class="hx-text-base">¡Beginner Privacy es 100% gratuito y siempre lo será! Sin embargo, depende de los colaboradores y la comunidad para prosperar.<br>Aquí hay algunas maneras en las que puedes ayudar:</p>
    <div style="display: inline-flex; flex-wrap: wrap; justify-content: center; margin-top: 2rem;">
      {{< hextra/hero-button text="Escribe contenido" link="about/write-content" icon="pencil" class="contributors-button" >}}
      {{< hextra/hero-button text="Traducir" link="about/translate" icon="translate" class="contributors-button" >}}
      {{< hextra/hero-button text="Donar" link="about/donate" icon="heart" class="contributors-button" >}}
      {{< hextra/hero-button text="Corre la voz" onClick="toggleShareDropdown();" icon="share" class="contributors-button shareDropdownButton" noLink="true" >}}
      <div id="shareDropdown" class="dropdown-content">
        <a href="https://www.reddit.com/login/?dest=https%3A%2F%2Fwww.reddit.com%2Fsubmit%3Furl%3Dhttps%253A%252F%252Fbeginnerprivacy.com%26title%3DStart%2BYour%2BPrivacy%2BJourney%2BToday%2521" target="_blank" style="padding-inline: 5px;">Reddit</a>
        <a href="https://www.facebook.com/sharer/sharer.php?u=https://beginnerprivacy.com" target="_blank" style="padding-inline: 5px;">Facebook</a>
        <a href="https://x.com/intent/post?text=Start%20Your%20Privacy%20Journey%20Today!&url=https%3A%2F%2Fbeginnerprivacy.com&mx=2" target="_blank" style="padding-inline: 5px;">𝕏 (Twitter)</a>
        <a href="https://www.linkedin.com/uas/login?session_redirect=https%3A%2F%2Fwww.linkedin.com%2FshareArticle%3Fmini%3Dtrue%26url%3Dhttps%3A%2F%2Fbeginnerprivacy.com%26title%3DStart%2BYour%2BPrivacy%2BJourney%2BToday%21" target="_blank" style="padding-inline: 5px;">LinkedIn</a>
      </div>
    </div>
    <a href="about/contributors"><p class="hx-text-base hx-underline hx-mt-4">Ver todos los contribuyentes</p></a>
</section>