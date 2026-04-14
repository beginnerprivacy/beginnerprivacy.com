---
title: Probador de Fuerza de Contraseña
description: Comprueba qué tan fuerte es tu contraseña y estima cuánto tiempo tardaría en ser descifrada utilizando diferentes niveles de potencia de cálculo.
---
<div id="tool-container" class="tool-container">
  <div class="field">
    <label class="label label-text">Potencia de cálculo del atacante:</label>
    <select id="hash-rate" class="select-dropdown">
      <option value="184000">Hardware estándar (184K intentos/seg)</option>
      <option value="3000000">Hardware avanzado (3M intentos/seg)</option>
      <option value="2000000000000">Estado-nación (2T intentos/seg)</option>
    </select>
  </div>

  <div class="password-input field">
    <input id="password-input" type="password" placeholder="Ingresa tu contraseña..." class="input">
    <button onclick="togglePassword()" id="toggle-btn">{{< hextra/icon name="eye" attributes="height=28" >}}</button>
  </div>

  <div class="field">
    <div class="strength-label">
      Fuerza de la contraseña: <span id="strength-text">-</span>
    </div>
    <progress id="strength-bar" max="100" value="0"></progress>
  </div>

  <hr class="divider">

  <div id="crack-display" class="field">
    Tiempo estimado para descifrar: <span id="crack-time">-</span>
  </div>
</div>

<div class="faq-container">
  <h3 class="hx-text-center">Preguntas Frecuentes</h3>
  {{< tools/faq-item question="¿Es seguro escribir mi contraseña real aquí?" answer="Sí, todo se ejecuta localmente en tu navegador y nada se envía a ningún sitio. Dicho esto, lo más recomendable es evitar usar contraseñas reales y usar en su lugar una contraseña ficticia similar." >}}

  {{< tools/faq-item question="¿Qué hace que una contraseña sea fuerte?" answer="Una contraseña fuerte tiene al menos 16 caracteres y combina letras, números y símbolos. Se recomienda usar un [generador de contraseñas](/es/tools/password-generator) para crear contraseñas fuertes y únicas." >}}

  {{< tools/faq-item question="¿Cómo se calcula el tiempo para descifrar?" answer="Estimamos la entropía según la variedad de caracteres y la longitud, luego simulamos ataques de fuerza bruta usando la velocidad del hardware seleccionada." >}}
</div>