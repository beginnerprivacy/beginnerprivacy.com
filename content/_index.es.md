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
  {{< hextra/hero-headline >}}Comienza Tu Viaje De Privacidad Hoy&nbsp;<br class="sm:hx-block hx-hidden" />con Beginner Privacy{{< /hextra/hero-headline >}}
  </div>

  <div class=" hero-take-quiz hx-mb-6" style="display: inline-flex; width: 100%;">
  {{< hextra/hero-subtitle >}}¡Tu privacidad es importante! Pero las grandes organizaciones lo están quitando.&nbsp;<br class="sm:hx-block hx-hidden" />Beginner Privacy es tu hoja de ruta para recuperar una vida privada.
  {{< /hextra/hero-subtitle >}}
  </div>

  {{< hextra/hero-button text="Empieza ahora" onclick="scrollDown();" style="margin: 2px;" >}}
  {{< hextra/hero-button text="¿No estás seguro? Aquí está la razón" onclick="scrollMisconceptions();" style="margin: 2px;" >}}
</div>

<div id="roadmap" style="margin-bottom: 10rem; width: 100%; padding-top: 10rem;">
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
        <li>{{< hextra/feature-card title="Sobre Beginner Privacy" id="about-beginner-privacy" link="about" style="background: radial-gradient(ellipse at 50% 80%,rgba(38, 125, 255, 0.15),hsla(0,0%,100%,0));" >}}</li>
        <li>{{< hextra/feature-card title="¿Por qué preocuparse por tu privacidad?" id="why-care-about-your-privacy" link="articles/why-you-should-care-about-your-privacy" style="background: radial-gradient(ellipse at 50% 80%,rgba(38, 125, 255, 0.15),hsla(0,0%,100%,0));" >}}</li>
        <li>{{< hextra/feature-card title="Encontrar un modelo de amenaza" id="finding-a-threat-model" link="articles/how-to-find-a-threat-model-that-suits-you" style="background: radial-gradient(ellipse at 50% 80%,rgba(38, 125, 255, 0.15),hsla(0,0%,100%,0));" >}}</li>
      </ol>
    </div>
    <div id="basicContent" class="roadmap-section" style="display:none;">
      <ol>
          <li>{{< hextra/feature-card title="Introducción Básica" id="basic-introduction" link="about/roadmap-introductions/basic" style="background: radial-gradient(ellipse at 50% 80%,rgba(97, 254, 176, 0.15),hsla(0,0%,100%,0));" >}}</li>
          <li>{{< hextra/feature-card title="Contraseñas Fuertes" id="strong-passwords" link="articles/how-to-create-strong-passwords-and-store-them-securely" style="background: radial-gradient(ellipse at 50% 80%,rgba(97, 254, 176, 0.15),hsla(0,0%,100%,0));" >}}</li>
          <li>{{< hextra/feature-card title="Autenticación de Dos Factores (2FA)" id="two-factor-authentication" link="articles/two-factor-authentication-and-why-you-need-it" style="background: radial-gradient(ellipse at 50% 80%,rgba(97, 254, 176, 0.15),hsla(0,0%,100%,0));" >}}</li>
          <li>{{< hextra/feature-card title="Limitar la información compartida" id="limit-information-shared" link="articles/limit-the-personal-information-you-share-online" style="background: radial-gradient(ellipse at 50% 80%,rgba(97, 254, 176, 0.15),hsla(0,0%,100%,0));" >}}</li>
          <li>{{< hextra/feature-card title="Navegador Privado" id="private-browser" link="articles/why-you-need-a-private-browser-to-protect-yourself" style="background: radial-gradient(ellipse at 50% 80%,rgba(97, 254, 176, 0.15),hsla(0,0%,100%,0));" >}}</li>
          <li>{{< hextra/feature-card title="Motor de búsqueda privado" id="private-search-engine" link="articles/searching-safely-with-a-privacy-focused-search-engine" style="background: radial-gradient(ellipse at 50% 80%,rgba(97, 254, 176, 0.15),hsla(0,0%,100%,0));" >}}</li>
          <li>{{< hextra/feature-card title="Red Privada Virtual (VPN)" id="virtual-private-network" link="articles/what-is-a-vpn-and-should-you-use-one" style="background: radial-gradient(ellipse at 50% 80%,rgba(97, 254, 176, 0.15),hsla(0,0%,100%,0));" >}}</li>
          <li>{{< hextra/feature-card title="Configuración de Privacidad Móvil" id="mobile-privacy-settings" link="articles/change-these-mobile-settings-for-better-privacy" style="background: radial-gradient(ellipse at 50% 80%,rgba(97, 254, 176, 0.15),hsla(0,0%,100%,0));" >}}</li>
          <li>{{< hextra/feature-card title="Configuración de privacidad del escritorio" id="desktop-privacy-settings" link="articles/desktop-settings-to-change-for-better-privacy" style="background: radial-gradient(ellipse at 50% 80%,rgba(97, 254, 176, 0.15),hsla(0,0%,100%,0));" >}}</li>
          <li>{{< hextra/feature-card title="Correo electrónico privado" id="private-email" link="articles/protect-your-communication-with-a-private-email" style="background: radial-gradient(ellipse at 50% 80%,rgba(97, 254, 176, 0.15),hsla(0,0%,100%,0));" >}}</li>
          <li>{{< hextra/feature-card title="Mensajería Segura" id="secure-messaging" link="articles/ditch-sms-and-use-secure-communication-methods" style="background: radial-gradient(ellipse at 50% 80%,rgba(97, 254, 176, 0.15),hsla(0,0%,100%,0));" >}}</li>
          <li>{{< hextra/feature-card title="¿Falta algo? ¡Contribuye!" link="about/about-contributing" contributeCard="true" style="background: radial-gradient(ellipse at 50% 80%,rgba(97, 254, 176, 0.15),hsla(0,0%,100%,0));" >}}</li>
      </ol>
    </div>
    <div id="mediumContent" class="roadmap-section" style="display:none;">
      <ol>
        <li>{{< hextra/feature-card title="Introducción Media" id="medium-introduction" link="about/roadmap-introductions/medium" style="background: radial-gradient(ellipse at 50% 80%,rgba(254, 225, 97, 0.15),hsla(0,0%,100%,0));" >}}</li>
        <li>{{< hextra/feature-card title="Software Libre y de Código Abierto" id="free-and-open-source-software" link="articles/break-free-from-proprietary-software-with-foss" style="background: radial-gradient(ellipse at 50% 80%,rgba(254, 225, 97, 0.15),hsla(0,0%,100%,0));" >}}</li>
        <li>{{< hextra/feature-card title="Cámbiate a Linux" id="switch-to-linux" link="articles/how-to-easily-switch-to-linux" style="background: radial-gradient(ellipse at 50% 80%,rgba(254, 225, 97, 0.15),hsla(0,0%,100%,0));" >}}</li>
        <li>{{< hextra/feature-card title="Interfaces de Redes Sociales" id="social-media-frontends" style="background: radial-gradient(ellipse at 50% 80%,rgba(254, 225, 97, 0.15),hsla(0,0%,100%,0));" >}}</li>
        <li>{{< hextra/feature-card title="Eliminación de corredores de datos" id="removal-from-data-brokers" style="background: radial-gradient(ellipse at 50% 80%,rgba(254, 225, 97, 0.15),hsla(0,0%,100%,0));" >}}</li>
        <li>{{< hextra/feature-card title="OpSec Básico" id="basic-opsec" style="background: radial-gradient(ellipse at 50% 80%,rgba(254, 225, 97, 0.15),hsla(0,0%,100%,0));" >}}</li>
        <li>{{< hextra/feature-card title="¿Qué es Tor?" id="what-is-tor" style="background: radial-gradient(ellipse at 50% 80%,rgba(254, 225, 97, 0.15),hsla(0,0%,100%,0));" >}}</li>
        <li>{{< hextra/feature-card title="DNS cifrado" id="encrypted-dns" style="background: radial-gradient(ellipse at 50% 80%,rgba(254, 225, 97, 0.15),hsla(0,0%,100%,0));" >}}</li>
        <li>{{< hextra/feature-card title="¿Falta algo? ¡Contribuye!" link="about/about-contributing" contributeCard="true" style="background: radial-gradient(ellipse at 50% 80%,rgba(254, 225, 97, 0.15),hsla(0,0%,100%,0));" >}}</li>
      </ol>
    </div>
    <div id="advancedContent" class="roadmap-section" style="display:none;">
      <ol>
        <li>{{< hextra/feature-card title="Introducción Avanzada" id="advanced-introduction" link="about/roadmap-introductions/advanced" style="background: radial-gradient(ellipse at 50% 80%,rgba(254, 128, 97, 0.15),hsla(0,0%,100%,0));" >}}</li>
        <li>{{< hextra/feature-card title="Sistema Operativo de Escritorio" id="desktop-operating-system" style="background: radial-gradient(ellipse at 50% 80%,rgba(254, 128, 97, 0.15),hsla(0,0%,100%,0));" >}}</li>
        <li>{{< hextra/feature-card title="Sistema Operativo Móvil" id="mobile-operating-system" style="background: radial-gradient(ellipse at 50% 80%,rgba(254, 128, 97, 0.15),hsla(0,0%,100%,0));" >}}</li>
        <li>{{< hextra/feature-card title="Autoalojamiento" id="self-hosting" style="background: radial-gradient(ellipse at 50% 80%,rgba(254, 128, 97, 0.15),hsla(0,0%,100%,0));" >}}</li>
        <li>{{< hextra/feature-card title="Criptomoneda" id="cryptocurrency" style="background: radial-gradient(ellipse at 50% 80%,rgba(254, 128, 97, 0.15),hsla(0,0%,100%,0));" >}}</li>
        <li>{{< hextra/feature-card title="Adquirir cripto" id="acquiring-crypto" style="background: radial-gradient(ellipse at 50% 80%,rgba(254, 128, 97, 0.15),hsla(0,0%,100%,0));" >}}</li>
        <li>{{< hextra/feature-card title="Encriptar Todo" id="encrypting-everything" style="background: radial-gradient(ellipse at 50% 80%,rgba(254, 128, 97, 0.15),hsla(0,0%,100%,0));" >}}</li>
        <li>{{< hextra/feature-card title="Evitando trampas de miel" id="avoiding-honeypots" style="background: radial-gradient(ellipse at 50% 80%,rgba(254, 128, 97, 0.15),hsla(0,0%,100%,0));" >}}</li>
        <li>{{< hextra/feature-card title="¿Qué es I2P?" id="what-is-i2p" style="background: radial-gradient(ellipse at 50% 80%,rgba(254, 128, 97, 0.15),hsla(0,0%,100%,0));" >}}</li>
        <li>{{< hextra/feature-card title="OpSec Avanzado" id="advanced-opsec" style="background: radial-gradient(ellipse at 50% 80%,rgba(254, 128, 97, 0.15),hsla(0,0%,100%,0));" >}}</li>
        <li>{{< hextra/feature-card title="¿Falta algo? ¡Contribuye!" link="about/about-contributing" contributeCard="true" style="background: radial-gradient(ellipse at 50% 80%,rgba(254, 128, 97, 0.15),hsla(0,0%,100%,0));" >}}</li>
      </ol>
    </div>
  </div>
  </div>
</div>

<div id="common-misconceptions" class="hx-text-center" style="margin-bottom: 10rem;width: 100%; padding-top: 10rem;">
    <h2 class="hx-text-4xl hx-font-bold md:hx-text-5xl" style="display: inline;">Conceptos Erróneos Comunes</h2>
    <div class="misconception-container">
        <div class="misconception-card">
            <h2 style="font-size: 1.5rem; font-weight: bold;">"¿Por qué debería preocuparme?"</h2>
            <p style="font-size: 1rem;">Tu privacidad es esencial para tu seguridad y dignidad. Así como cierras la puerta del baño para tener espacio personal, proteger tu información personal es vital. La idea de "no tengo nada que ocultar" pasa por alto el hecho de que la privacidad es un derecho fundamental, no solo para aquellos que tienen secretos. Proteger tus datos ayuda a prevenir el robo de identidad y la vigilancia no deseada.</p>
        </div>
        <div class="misconception-card">
            <h2 style="font-size: 1.5rem; font-weight: bold;">"¿No es demasiado tarde ahora?"</h2>
            <p style="font-size: 1rem;">¡El mejor momento para comenzar a proteger tu privacidad es hoy! Es crucial tomar acción ahora, ya que las empresas pueden tener acceso a tus datos. Al ser proactivo con la configuración de tu privacidad y el intercambio de datos, puedes reducir significativamente tu huella digital y mantener tu información personal segura.</p>
        </div>
        <div class="misconception-card">
            <h2 style="font-size: 1.5rem; font-weight: bold;">"¿Qué debo hacer?"</h2>
            <p style="font-size: 1rem;">Tratar de mejorar tu privacidad puede resultar abrumador; por eso creamos Beginner Privacy, para hacerlo lo más fácil posible.</p>
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
        <p style="font-size: 1.1rem;">Conéctate con personas afines que son apasionadas por la privacidad. Únete a nuestros foros, síguenos en las redes sociales y participa en las discusiones.</p>
        <div class="social-chat-container">
          <div class="chat-section">
            <h2 style="font-size: 2rem; font-weight: bold;">Redes Sociales</h2>
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
            <h2 style="font-size: 2rem; font-weight: bold;">Chat</h2>
            <div class="platform-icons">
              <a href="https://simplex.chat/contact#/?v=2-7&smp=smp%3A%2F%2FSkIkI6EPd2D63F4xFKfHk7I1UGZVNn6k1QWZ5rcyr6w%3D%40smp9.simplex.im%2FcfczJf7T628buhqA3Wx-R5Z8Qeb8Rm6O%23%2F%3Fv%3D1-3%26dh%3DMCowBQYDK2VuAyEAsuFeRqk-qIj6V3DaF651t7NnZZgaQdjIrVaanCtIjgs%253D%26srv%3Djssqzccmrcws6bhmn77vgmhfjmhwlyr3u7puw4erkyoosywgl67slqqd.onion&data=%7B%22groupLinkId%22%3A%220DamkEDZ2yoh6F7pbxsmRw%3D%3D%22%7D" target="_blank" title="SimpleX Chat" rel="noopener noreferrer">
                  {{< hextra/icon name="simplex" attributes="height=25" >}}
              </a>
            </div>
          </div>
        </div>
    </div>
</div>

<div class="checklists-section" style="margin-bottom: 16rem; width: 100%; margin-top: 16rem;">
    <h2 class="hx-text-4xl hx-font-bold md:hx-text-5xl" style="display: inline;">Listas de Verificación</h2>
    <div class="carousel-button prev" onclick="moveCarousel(-1)">&#10094;</div>
    <div class="carousel-button next" onclick="moveCarousel(1)">&#10095;</div>
    <p style="font-size: 1.1rem; margin-bottom: 10px;">Utiliza nuestras listas de verificación para mantenerte seguro y anónimo durante actividades como protestas. <br>Haz clic en el perfil que te corresponde para acceder a consejos y recursos esenciales.</p>
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

<div class="hx-mt-16" style="width: 100%; text-align: center; font-size: 2rem;">
    <h2 class="hx-text-4xl hx-font-bold md:hx-text-5xl">¡Necesitamos tu ayuda!</h2>
    <p style="font-size: 1.1rem;">¡Beginner Privacy es 100% gratuito y siempre lo será! Sin embargo, depende de los colaboradores y la comunidad para prosperar.<br>Aquí hay algunas maneras en las que puedes ayudar:</p>
    <div style="display: inline-flex; flex-wrap: wrap; justify-content: center; margin-top: 2rem;">
    {{< hextra/hero-button text="Escribe contenido" link="about/write-content" icon="pencil" style="height: 50px; font-size: 18px; display: flex; center; align-items: center;justify-content: center; width: 200px; margin: 2px;" >}}
    {{< hextra/hero-button text="Traducir" link="about/translate" icon="translate" style="height: 50px; font-size: 18px; display: flex; center; align-items: center;justify-content: center; width: 200px; margin: 2px;" >}}
    {{< hextra/hero-button text="Donar" link="about/donate" icon="heart" style="height: 50px; font-size: 18px; display: flex; center; align-items: center;justify-content: center; width: 200px; margin: 2px;" >}}
    {{< hextra/hero-button text="Corre la voz" onClick="" icon="share" style="height: 50px; font-size: 18px; display: flex; center; align-items: center;justify-content: center; width: 200px; margin: 2px;" >}}
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