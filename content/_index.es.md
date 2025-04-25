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

  <div class="hx-mt-6 hx-mb-4">
  {{< hextra/hero-headline >}}Comienza Tu Viaje De Privacidad Hoy&nbsp;<br class="sm:hx-block hx-hidden" />con Beginner Privacy{{< /hextra/hero-headline >}}
  </div>

  <div class=" hero-take-quiz hx-mb-6" style="display: inline-flex; width: 100%;">
  {{< hextra/hero-subtitle >}}¡Tu privacidad es importante! Pero las grandes organizaciones lo están quitando.&nbsp;<br class="sm:hx-block hx-hidden" />Beginner Privacy es tu hoja de ruta para recuperar una vida privada.
  {{< /hextra/hero-subtitle >}}
  </div>

  {{< hextra/hero-button text="Empieza ahora" onclick="scrollDown();" style="margin: 2px;" >}}
  {{< hextra/hero-button text="¿No estás seguro? Aquí está la razón" onclick="scrollMisconceptions();" style="margin: 2px;" >}}
</div>

<div id="roadmap">
  <div class="roadmap hx-mt-6">
    <div>
      <h2 class="hx-text-4xl hx-font-bold md:hx-text-5xl">Hoja de ruta</h2>
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
      </div>
  </div>

  <div id="roadmapContent" class="hx-mt-4">
    <div id="startContent" class="roadmap-section">
      <ol>
        <li>{{< hextra/feature-card title="Sobre Beginner Privacy" id="about-beginner-privacy" link="about" class="start-hf-card-color" >}}</li>
        <li>{{< hextra/feature-card title="¿Por qué preocuparse por tu privacidad?" id="why-care-about-your-privacy" link="articles/why-you-should-care-about-your-privacy" class="start-hf-card-color" >}}</li>
        <li>{{< hextra/feature-card title="Encontrar un modelo de amenaza" id="finding-a-threat-model" link="articles/how-to-find-a-threat-model-that-suits-you" class="start-hf-card-color" >}}</li>
      </ol>
    </div>
    <div id="basicContent" class="roadmap-section" style="display:none;">
      <ol>
          <li>{{< hextra/feature-card title="Introducción Básica" id="basic-introduction" link="about/roadmap-introductions/basic" class="basic-hf-card-color" >}}</li>
          <li>{{< hextra/feature-card title="Contraseñas Fuertes" id="strong-passwords" link="articles/how-to-create-strong-passwords-and-store-them-securely" class="basic-hf-card-color" >}}</li>
          <li>{{< hextra/feature-card title="Autenticación de Dos Factores (2FA)" id="two-factor-authentication" link="articles/two-factor-authentication-and-why-you-need-it" class="basic-hf-card-color" >}}</li>
          <li>{{< hextra/feature-card title="Limitar la información compartida" id="limit-information-shared" link="articles/limit-the-personal-information-you-share-online" class="basic-hf-card-color" >}}</li>
          <li>{{< hextra/feature-card title="Navegador Privado" id="private-browser" link="articles/why-you-need-a-private-browser-to-protect-yourself" class="basic-hf-card-color" >}}</li>
          <li>{{< hextra/feature-card title="Motor de búsqueda privado" id="private-search-engine" link="articles/searching-safely-with-a-privacy-focused-search-engine" class="basic-hf-card-color" >}}</li>
          <li>{{< hextra/feature-card title="Red Privada Virtual (VPN)" id="virtual-private-network" link="articles/what-is-a-vpn-and-should-you-use-one" class="basic-hf-card-color" >}}</li>
          <li>{{< hextra/feature-card title="Configuración de Privacidad Móvil" id="mobile-privacy-settings" link="articles/change-these-mobile-settings-for-better-privacy" class="basic-hf-card-color" >}}</li>
          <li>{{< hextra/feature-card title="Configuración de privacidad del escritorio" id="desktop-privacy-settings" link="articles/desktop-settings-to-change-for-better-privacy" class="basic-hf-card-color" >}}</li>
          <li>{{< hextra/feature-card title="Correo electrónico privado" id="private-email" link="articles/protect-your-communication-with-a-private-email" class="basic-hf-card-color" >}}</li>
          <li>{{< hextra/feature-card title="Mensajería Segura" id="secure-messaging" link="articles/ditch-sms-and-use-secure-communication-methods" class="basic-hf-card-color" >}}</li>
          <li>{{< hextra/feature-card title="¿Falta algo? ¡Contribuye!" link="about/about-contributing" contributeCard="true" class="basic-hf-card-color" >}}</li>
      </ol>
    </div>
    <div id="mediumContent" class="roadmap-section" style="display:none;">
      <ol>
        <li>{{< hextra/feature-card title="Introducción Media" id="medium-introduction" link="about/roadmap-introductions/medium" class="medium-hf-card-color" >}}</li>
        <li>{{< hextra/feature-card title="Software Libre y de Código Abierto" id="free-and-open-source-software" link="articles/break-free-from-proprietary-software-with-foss" class="medium-hf-card-color" >}}</li>
        <li>{{< hextra/feature-card title="Cámbiate a Linux" id="switch-to-linux" link="articles/how-to-effortlessly-switch-to-linux-step-by-step-guide" class="medium-hf-card-color" >}}</li>
        <li>{{< hextra/feature-card title="Interfaces de Redes Sociales" id="social-media-frontends" class="medium-hf-card-color" >}}</li>
        <li>{{< hextra/feature-card title="Eliminación de corredores de datos" id="removal-from-data-brokers" class="medium-hf-card-color" >}}</li>
        <li>{{< hextra/feature-card title="¿Qué es Tor?" id="what-is-tor" class="medium-hf-card-color" >}}</li>
        <li>{{< hextra/feature-card title="¿Falta algo? ¡Contribuye!" link="about/about-contributing" contributeCard="true" class="medium-hf-card-color" >}}</li>
      </ol>
    </div>
    <div id="advancedContent" class="roadmap-section" style="display:none;">
      <ol>
        <li>{{< hextra/feature-card title="Introducción Avanzada" id="advanced-introduction" link="about/roadmap-introductions/advanced" class="advanced-hf-card-color" >}}</li>
        <li>{{< hextra/feature-card title="Sistema Operativo de Escritorio" id="desktop-operating-system" class="advanced-hf-card-color" >}}</li>
        <li>{{< hextra/feature-card title="Sistema Operativo Móvil" id="mobile-operating-system" class="advanced-hf-card-color" >}}</li>
        <li>{{< hextra/feature-card title="Autoalojamiento" id="self-hosting" class="advanced-hf-card-color" >}}</li>
        <li>{{< hextra/feature-card title="Criptomoneda" id="cryptocurrency" class="advanced-hf-card-color" >}}</li>
        <li>{{< hextra/feature-card title="Evitando trampas de miel" id="avoiding-honeypots" class="advanced-hf-card-color" >}}</li>
        <li>{{< hextra/feature-card title="¿Qué es I2P?" id="what-is-i2p" class="advanced-hf-card-color" >}}</li>
        <li>{{< hextra/feature-card title="OpSec Avanzado" id="advanced-opsec" class="advanced-hf-card-color" >}}</li>
        <li>{{< hextra/feature-card title="Inteligencia de Amenazas" id="threat-intelligence" class="advanced-hf-card-color" >}}</li>
        <li>{{< hextra/feature-card title="¿Falta algo? ¡Contribuye!" link="about/about-contributing" contributeCard="true" class="advanced-hf-card-color" >}}</li>
      </ol>
    </div>
  </div>
  </div>
</div>

<div id="common-misconceptions" class="hx-text-center">
    <h2 class="hx-text-4xl hx-font-bold md:hx-text-5xl hx-inline">Conceptos Erróneos Comunes</h2>
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
            {{< hextra/hero-button text="Comienza a Mejorar Tu Privacidad" onclick="scrollDown();" style="margin-top: 15px;" >}}
        </div>
    </div>
</div>

<div class="community-section">
    <div class="community-content">
        <img src="../images/earth.webp" alt="Imagen de la Comunidad" class="community-image">
    </div>
    <div class="community-cta">
        <h2 class="hx-text-4xl hx-font-bold md:hx-text-5xl">Únete a Nuestra Comunidad</h2>
        <p class="hx-text-base">Conéctate con personas afines que son apasionadas por la privacidad. Únete a nuestros foros, síguenos en las redes sociales y participa en las discusiones.</p>
        <div class="social-chat-container">
          <div class="chat-section">
            <h2 class="hx-text-2rem hx-font-bold">Redes Sociales</h2>
            <div class="platform-icons">
                <a href="https://x.com/BeginnerPrivacy" title="𝕏" target="_blank" rel="noopener noreferrer">
                    {{< hextra/icon name="x-twitter" attributes="height=25" >}}
                </a>
                <a href="https://youtube.com/@BeginnerPrivacy" title="YouTube" target="_blank" rel="noopener noreferrer">
                    {{< hextra/icon name="youtube" attributes="height=25" >}}
                </a>
                <a href="https://odysee.com/@BeginnerPrivacy" title="Odysee" target="_blank" rel="noopener noreferrer">
                    {{< hextra/icon name="odysee" attributes="height=25" >}}
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
    <h2 class="hx-text-4xl hx-font-bold md:hx-text-5xl hx-inline">Listas de Verificación</h2>
    <div class="carousel-button prev" onclick="moveCarousel(-1)">&#10094;</div>
    <div class="carousel-button next" onclick="moveCarousel(1)">&#10095;</div>
    <p class="hx-text-base hx-mb-10px">Utiliza nuestras listas de verificación para mantenerte seguro y anónimo durante actividades como protestas. <br>Haz clic en el perfil que te corresponde para acceder a consejos y recursos esenciales.</p>
    <div class="carousel">
        <div class="carousel-track">
            <a href="checklists/?m=whistleblower" draggable="false">
              <div class="carousel-item">
                  <h3>Denunciante</h3>
              </div>
            </a>
            <a href="checklists/?m=protestor" draggable="false">
              <div class="carousel-item">
                  <h3>Protestor</h3>
              </div>
            </a>
            <a href="checklists/?m=casual-internet-user" draggable="false">
              <div class="carousel-item">
                  <h3>Usuario de Internet Casual</h3>
              </div>
            </a>
            <a href="checklists/?m=darknet-user" draggable="false">
              <div class="carousel-item">
                  <h3>Usuario de la Darknet</h3>
              </div>
            </a>
            <a href="checklists/?m=social-media-influencer" draggable="false">
              <div class="carousel-item">
                  <h3>Influencer de Redes Sociales</h3>
              </div>
            </a>
            <a href="checklists/?m=hacker" draggable="false">
              <div class="carousel-item">
                  <h3>Hacker</h3>
              </div>
            </a>
            <a href="checklists/?m=digital-nomad" draggable="false">
              <div class="carousel-item">
                  <h3>Nómada Digital</h3>
              </div>
            </a>
            <a href="checklists/?m=mass-surveillance" draggable="false">
              <div class="carousel-item">
                  <h3>Vigilancia Masiva</h3>
              </div>
            </a>
        </div>
    </div>
</div>

<div id="contributors" class="hx-mt-16">
    <h2 class="hx-text-4xl hx-font-bold md:hx-text-5xl">¡Necesitamos tu ayuda!</h2>
    <p class="hx-text-base">¡Beginner Privacy es 100% gratuito y siempre lo será! Sin embargo, depende de los colaboradores y la comunidad para prosperar.<br>Aquí hay algunas maneras en las que puedes ayudar:</p>
    <div style="display: inline-flex; flex-wrap: wrap; justify-content: center; margin-top: 2rem;">
      {{< hextra/hero-button text="Escribe contenido" link="about/write-content" icon="pencil" class="contributors-button" >}}
      {{< hextra/hero-button text="Traducir" link="about/translate" icon="translate" class="contributors-button" >}}
      {{< hextra/hero-button text="Donar" link="about/donate" icon="heart" class="contributors-button" >}}
      {{< hextra/hero-button text="Corre la voz" onClick="toggleShareDropdown();" icon="share" class="contributors-button shareDropdownButton" >}}
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