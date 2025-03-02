---
linkTitle: "Write Content"
title: Write Content
---
Welcome to the Beginner Privacy content guide!

### Getting Started
**Choose your editing method:**
1. GitHub Editor: Edit directly in your browser.
2. Local Setup (Recommended): Clone the repository using Git.

### Create Your Article
1. Navigate to the [content/articles/](https://github.com/beginnerprivacy/beginnerprivacy.github.io/tree/main/content/articles) folder.
2. Create a new folder with a URL-friendly name (e.g., `why-privacy-matters` for "Why Privacy Matters").
3. Inside this folder, create three files:
    - **index.md** (English)
    - **index.es.md** (Spanish)
    - **index.zh-cn.md** (Chinese Simplified)

🖼️ **Need images?**
- Create a matching folder in [static/images/articles/](https://github.com/beginnerprivacy/beginnerprivacy.github.io/tree/main/static/images/articles) (e.g., `why-privacy-matters`).

### Article Template
Include this at the top of your article.
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

### Writing Style
**Audience:** Adults using technology – avoid oversimplification but explain jargon.

**Style:**
- Use American English.
- Be concise while covering key details (e.g., why a tool is recommended).
- Structure content with Markdown headers (`##`, `###`).

### Translating Article
1. **Translate** the English version using tools like [LibreTranslate](https://libretranslate.com/) or any other translator you prefer.
2. **Translation Verification:** Translate the article that has already been translated back into English, and then compare it to the original English article to:
    - Catch mistranslated technical terms
    - Verify sentence structure matches the intended meaning
    - Identify missing context
3. **Adjust image paths** for non-English articles:
    - Add `../` to paths (e.g., `../../images/...` → `../../../images/...` for the Spanish/Chinese articles).
4. **Proofread:** Fix formatting issues and ensure clarity.


### Markdown & Shortcodes
Check out the Hextra documentation on [markdown](https://imfing.github.io/hextra/docs/guide/markdown/) and [shortcodes](https://imfing.github.io/hextra/docs/guide/shortcodes/). If there is a certain tool or piece of software that you want to recommend in the article, you can use this shortcode.
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