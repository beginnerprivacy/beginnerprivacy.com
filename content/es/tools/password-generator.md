---
title: Generador de Contraseñas
description: Genera contraseñas fuertes, únicas, frases de contraseña memorables y PINs seguros al instante. Personaliza la longitud, tipos de caracteres y configuraciones de seguridad para adaptarse a todas las necesidades de seguridad.
---
<div id="tool-container">
  <div class="tabs">
    <button onclick="switchTab(0)" id="tab-0" class="tab-button hx-p-4 active">Contraseña</button>
    <button onclick="switchTab(1)" id="tab-1" class="tab-button hx-p-4">Frase de Contraseña</button>
    <button onclick="switchTab(2)" id="tab-2" class="tab-button hx-p-4">Código PIN</button>
  </div>
  <div class="options-column">
    <div id="options-0" class="options-group">
      <div class="slider-group">
        <div class="slider-header">
          <label>Caracteres:</label>
          <span id="length-val-0" class="slider-value">16</span>
        </div>
        <input type="range" id="length-0" min="8" max="128" value="16" step="1" oninput="updateSlider(0)">
      </div>
      <div class="hx-flex hx-flex-wrap hx-justify-center hx-p-4">
        <label class="option-card">
          <input type="checkbox" id="upper" checked>
          <div>A-Z</div>
        </label>
        <label class="option-card">
          <input type="checkbox" id="lower" checked>
          <div>a-z</div>
        </label>
        <label class="option-card">
          <input type="checkbox" id="numbers" checked>
          <div>0-9</div>
        </label>
        <label class="option-card">
          <input type="checkbox" id="symbols" checked>
          <div>!@#$%^</div>
        </label>
      </div>
    </div>
    <div id="options-1" class="options-group hidden">
      <div class="slider-group">
        <div class="slider-header">
          <label>Palabras:</label>
          <span id="words-val" class="slider-value">5</span>
        </div>
        <input type="range" id="length-1" min="3" max="20" value="5" step="1" oninput="updateWords()">
      </div>
      <div class="hx-flex hx-flex-wrap hx-justify-center hx-p-4">
        <label class="option-card">
          <input type="checkbox" id="cap" checked>
          <div>Capitalizar</div>
        </label>
        <label class="option-card">
          <input type="checkbox" id="add-num">
          <div>Agregar número</div>
        </label>
        <label class="option-card">
          <input type="text" id="separator" value="-" oninput="setSep(this, this.value)">
          <div>Separador de palabras</div>
        </label>
      </div>
    </div>
    <div id="options-2" class="options-group hidden">
      <div class="slider-group">
        <div class="slider-header">
          <label>Dígitos:</label>
          <span id="length-val-2" class="slider-value">6</span>
        </div>
        <input class="hx-mb-4" type="range" id="length-2" min="4" max="40" value="6" step="1" oninput="updateSlider(2)">
      </div>
    </div>
  </div>
  <div class="result-card">
    <button onclick="copyPassword()" id="password-box" class="password-display" title="Haga clic para copiar"></button>
    <hr style="width: 95%; margin: auto;">
    <div id="crack-display" class="hx-p-2">Tiempo estimado para descifrar: <span id="crack-time">-</span></div>
  </div>
  <div class="hx-flex hx-flex-wrap hx-justify-center hx-py-4 hx-gap-1">
    <button onclick="copyPassword()" class="not-prose hx-font-medium hx-cursor-pointer hx-select-none hx-px-8 hx-py-2 hx-rounded-full hx-text-center hx-text-white hx-inline-flex hx-items-center hx-bg-primary-600 hover:hx-bg-primary-700 dark:hx-bg-primary-600 dark:hover:hx-bg-primary-700 hx-transition-all hx-ease-in hx-duration-200 hx-gap-1">
      {{< hextra/icon name="copy" attributes="height=20" >}}
      <span>Copiar</span>
    </button>
    <button onclick="generatePassword()" class="not-prose hx-font-medium hx-cursor-pointer hx-select-none hx-px-8 hx-py-2 hx-rounded-full hx-text-center hx-text-white hx-inline-flex hx-items-center hx-bg-primary-600 hover:hx-bg-primary-700 dark:hx-bg-primary-600 dark:hover:hx-bg-primary-700 hx-transition-all hx-ease-in hx-duration-200 hx-gap-1">
      {{< hextra/icon name="arrow-path" attributes="height=20" >}}
      <span>Regenerar</span>
    </button>
  </div>
</div>

<div class="faq-container">
  <h3 class="hx-text-center">Preguntas Frecuentes</h3>
  {{< tools/faq-item question="¿Qué es una contraseña fuerte?" answer="Una contraseña fuerte usa una combinación de letras mayúsculas, minúsculas, números y símbolos. Debe tener al menos 16 caracteres y ser única." >}}
  {{< tools/faq-item question="¿Son las frases de contraseña más seguras?" answer="No necesariamente. Las frases de contraseña no son inherentemente más seguras que las contraseñas, pero generalmente son más fáciles de recordar. Por esa razón, a menudo se recomiendan como la contraseña maestra para los [gestores de contraseñas](/es/roadmap/basic/strong-passwords)." >}}
  {{< tools/faq-item question="¿Es seguro este generador de contraseñas?" answer="Sí. Todas las contraseñas se generan localmente en tu navegador. Nada se almacena ni se transmite." >}}
</div>

<div id="toast" class="hidden">
  {{< hextra/icon name="check" attributes="height=20" >}}
  <span id="toast-msg">Contraseña copiada al portapapeles</span>
</div>