---
linkTitle: "Escribir Contenido"
title: Escribir Contenido
category: Contributing
---
¡Bienvenido a la guía de contenido de Privacidad para Principiantes!

### Empezando
**Elige tu método de edición:**
- Editor de GitHub: Edita directamente en tu navegador.
- Configuración Local (Recomendada): [Aprende cómo configurar este sitio web localmente.](../setup-locally/)

**Echa un vistazo a lo que debes escribir:** 

Dirígete a nuestro [Tablero de estado de artículos](https://github.com/orgs/beginnerprivacy/projects/1) en GitHub para ver qué artículos aún no se han escrito.

### Crea tu artículo
1. Navega a la carpeta [content/articles/](https://github.com/beginnerprivacy/beginnerprivacy.github.io/tree/main/content/articles).
2. Crea una nueva carpeta con un nombre amigable para URL (por ejemplo, `why-privacy-matters` para "¿Por qué es importante la privacidad?").
3. Dentro de esta carpeta, crea tres archivos:
- **index.md** (Inglés)
- **index.es.md** (Español)
- **index.zh-cn.md** (Chino Simplificado)

🖼️ **¿Necesitas imágenes?**
- Crea una carpeta correspondiente en [static/images/articles/](https://github.com/beginnerprivacy/beginnerprivacy.github.io/tree/main/static/images/articles) (ejemplo, `why-privacy-matters`).

### Plantilla de Artículo
Incluye esto al principio de tu artículo.
```markdown
---
title: [Article Title Here]
date: 2025-02-25
authors:
  - name: [Your Name]
    link: https://github.com/[Your GitHub Username]
    image: https://github.com/[Your GitHub Username].png
excludeSearch: false
---
```

### Estilo de escritura
**Público:**

La audiencia de Beginner Privacy está compuesta por adultos de entre 18 y 50 años que tienen un conocimiento básico de internet y computadoras. Es importante aclarar cualquier jerga utilizada, evitando la simplificación excesiva.

**Estilo:**
- Usa el inglés americano.
- Sea conciso mientras cubre los detalles clave (por ejemplo, por qué se recomienda una herramienta).
- Estructura el contenido con encabezados Markdown (`###`).

### Traduciendo Artículo
Beginner Privacy está disponible en 3 idiomas: inglés, español y chino (simplificado).
1. **Traduce** la versión en inglés usando herramientas como [LibreTranslate](https://libretranslate.com/) o cualquier otro traductor que prefieras al español y al chino (simplificado).
2. **Verificación de Traducción:**  Verificación de traducción: Traduce el artículo que ya ha sido traducido de nuevo al inglés, y luego compáralo con el artículo original en inglés para:
    - Atrapar términos técnicos mal traducidos
    - Verifica que la estructura de la oración coincida con el significado previsto.
    - Identificar el contexto faltante
3. **Revisar:** Corrige problemas de formato y asegura la claridad.

### Markdown y Shortcodes
Explora la documentación de Hextra sobre [Markdown](https://imfing.github.io/hextra/docs/guide/markdown/) y [Shortcodes](https://imfing.github.io/hextra/docs/guide/shortcodes/) para mejorar tus artículos, haciéndolos más interactivos y fáciles de leer. Además, Beginner Privacy ofrece varios shortcodes personalizados, que se detallan a continuación.

#### Tarjeta de Recomendación
Cuando hay una herramienta o software que deseas recomendar.
```
<div class="recommendations">
  <div class="grid">
    {{</* articles/recommendation title="MullvadVPN" link="https://mullvad.net/en/vpn" logo="/images/articles/what-is-a-vpn-and-should-you-use-one/mullvadvpn.webp" text="De pago, código abierto" platformIcon="linux android ios macos windows" buttonText="Visitar Sitio Web" */>}}
  </div>
</div>
```
<div class="recommendations">
  <div class="grid">
    {{< articles/recommendation title="MullvadVPN" link="https://mullvad.net/en/vpn" logo="/images/articles/what-is-a-vpn-and-should-you-use-one/mullvadvpn.webp" text="De pago, código abierto" platformIcon="linux android ios macos windows" buttonText="Visitar Sitio Web" >}}
  </div>
</div>

#### Evaluación
Ayuda al lector a descubrir más sobre, por ejemplo, sus necesidades de privacidad.
```
{{</* articles/assessment id="threat-model-assesment" */>}}
{
  "questions": [
    {
      "question": "¿Qué tan sensible es tu actividad en línea típica?",
      "answers": [
        {"text": "Navegación web básica (por ejemplo, leer noticias, comprar)", "score": 1},
        {"text": "Algunas comunicaciones personales (por ejemplo, redes sociales, correos electrónicos)", "score": 2},
        {"text": "Manejo de documentos de trabajo sensibles (por ejemplo, datos de clientes, contratos)", "score": 3},
        {"text": "Activismo o filtración de información (por ejemplo, compartir información sensible)", "score": 4}
      ]
    },
    {
      "question": "¿Cuál es tu mayor preocupación de privacidad?",
      "answers": [
        {"text": "Anuncios dirigidos", "score": 1},
        {"text": "Vigilancia masiva", "score": 2},
        {"text": "Tener una huella digital", "score": 3},
        {"text": "Ser objetivo de actores maliciosos", "score": 4}
      ]
    },
    {
      "question": "¿Qué tan lejos estás dispuesto a llegar para proteger tu privacidad?",
      "answers": [
        {"text": "Prefiero la conveniencia sobre la seguridad", "score": 1},
        {"text": "Haré un esfuerzo, pero no demasiado", "score": 2},
        {"text": "Estoy dispuesto a sacrificar una cantidad razonable de conveniencia por mejor seguridad y privacidad", "score": 3},
        {"text": "Estoy listo para invertir mucho en seguridad y cambiar mi estilo de vida", "score": 4}
      ]
    }
  ],
  "resultText": {
    "casual": "Usuario Casual: Se recomiendan protecciones básicas de privacidad",
    "privacyConscious": "Consciente de la Privacidad: Se aconsejan medidas de seguridad de nivel medio",
    "advanced": "Usuario Avanzado: Se necesita un marco de seguridad integral"
  }
}
{{</* /articles/assessment */>}}
```

{{< articles/assessment id="threat-model-assesment" >}}
{
  "questions": [
    {
      "question": "¿Qué tan sensible es tu actividad en línea típica?",
      "answers": [
        {"text": "Navegación web básica (por ejemplo, leer noticias, comprar)", "score": 1},
        {"text": "Algunas comunicaciones personales (por ejemplo, redes sociales, correos electrónicos)", "score": 2},
        {"text": "Manejo de documentos de trabajo sensibles (por ejemplo, datos de clientes, contratos)", "score": 3},
        {"text": "Activismo o filtración de información (por ejemplo, compartir información sensible)", "score": 4}
      ]
    },
    {
      "question": "¿Cuál es tu mayor preocupación de privacidad?",
      "answers": [
        {"text": "Anuncios dirigidos", "score": 1},
        {"text": "Vigilancia masiva", "score": 2},
        {"text": "Tener una huella digital ", "score": 3},
        {"text": "Ser objetivo de actores maliciosos", "score": 4}
      ]
    },
    {
      "question": "¿Qué tan lejos estás dispuesto a llegar para proteger tu privacidad?",
      "answers": [
        {"text": "Prefiero la conveniencia sobre la seguridad", "score": 1},
        {"text": "Haré un esfuerzo, pero no demasiado", "score": 2},
        {"text": "Estoy dispuesto a sacrificar una cantidad razonable de conveniencia por mejor seguridad y privacidad", "score": 3},
        {"text": "Estoy listo para invertir mucho en seguridad y cambiar mi estilo de vida", "score": 4}
      ]
    }
  ],
  "resultText": {
    "casual": "Usuario Casual: Se recomiendan protecciones básicas de privacidad",
    "privacyConscious": "Consciente de la Privacidad: Se aconsejan medidas de seguridad de nivel medio",
    "advanced": "Usuario Avanzado: Se necesita un marco de seguridad integral"
  }
}
{{< /articles/assessment >}}

#### Cuestionario
Pon a prueba el conocimiento del lector o evalúa su comprensión del artículo.
```
{{</* articles/quiz id="math-quiz" */>}}
{
  "questions": [
    {
      "question": "¿Cuál es el número primo?",
      "answers": [
        {"text": "3", "isCorrect": true},
        {"text": "4", "isCorrect": false}
      ]
    },
    {
      "question": "¿Cuáles de los siguientes son números pares?",
      "answers": [
        {"text": "2", "isCorrect": true},
        {"text": "5", "isCorrect": false}
      ]
    }
  ]
}
{{</* /articles/quiz */>}}
```

{{< articles/quiz id="math-quiz" >}}
{
  "questions": [
    {
      "question": "¿Cuál es el número primo?",
      "answers": [
        {"text": "3", "isCorrect": true},
        {"text": "4", "isCorrect": false}
      ]
    },
    {
      "question": "¿Cuáles de los siguientes son números pares?",
      "answers": [
        {"text": "2", "isCorrect": true},
        {"text": "5", "isCorrect": false}
      ]
    }
  ]
}
{{< /articles/quiz >}}