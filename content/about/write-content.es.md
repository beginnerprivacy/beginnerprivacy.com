---
linkTitle: "Escribir contenido"
title: Escribir contenido
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
3. **Ajustar las rutas de las imágenes** para artículos en otros idiomas:
    - Agrega `../` a las rutas (por ejemplo, `../../images/...` → `../../../images/...` para los artículos en español/chino).
4. **Revisar:** Corrige problemas de formato y asegura la claridad.

### Markdown y Shortcodes
Consulta la documentación de Hextra sobre [markdown](https://imfing.github.io/hextra/docs/guide/markdown/) y [shortcodes](https://imfing.github.io/hextra/docs/guide/shortcodes/). Si hay alguna herramienta o software que quieras recomendar en el artículo, puedes usar este shortcode.
```html
<div class="recommendations">
  <div class="grid">
    {{</* hextra/recommendation-card title="MullvadVPN" link="https://mullvad.net/en/vpn" logo="../../../../images/articles/what-is-a-vpn-and-should-you-use-one/mullvadvpn.webp" text="Paid, open source" platformIcon="linux android ios macos windows" buttonText="Visit Website" */>}}
  </div>
</div>
```
<div class="recommendations">
  <div class="grid">
    {{< hextra/recommendation-card title="MullvadVPN" link="https://mullvad.net/en/vpn" logo="../../../../images/articles/what-is-a-vpn-and-should-you-use-one/mullvadvpn.webp" text="Paid, open source" platformIcon="linux android ios macos windows" buttonText="Visit Website" >}}
  </div>
</div>
