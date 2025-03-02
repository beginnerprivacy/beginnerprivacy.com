---
linkTitle: "写内容"
title: 写内容
---
欢迎来到初学者隐私内容指南！

### 开始使用
选择你的编辑方式：
1. GitHub 编辑器：直接在浏览器中编辑。
2. 本地设置（推荐）：使用Git克隆代码库。

### 创建您的文章
1. 导航到 [content/articles/](https://github.com/beginnerprivacy/beginnerprivacy.github.io/tree/main/content/articles) 文件夹。
2. 创建一个带有URL友好名称的新文件夹（例如，“为什么隐私很重要”的URL友好名称是`why-privacy-matters`）。
3. 在这个文件夹内，创建三个文件：
- **index.md** (中文)
- **index.es.md** (西班牙语)
- **index.zh-cn.md** (简体中文)

🖼️ **需要图片吗？**
- 在 [static/images/articles/](https://github.com/beginnerprivacy/beginnerprivacy.github.io/tree/main/static/images/articles) 中创建一个匹配的文件夹（例如，`why-privacy-matters`）。

### 文章模板
将此内容放在您文章的开头。
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

### 写作风格
**受众：**  使用技术的成年人——避免过于简化，但要解释术语。
上下文：**风格：**  
要翻译的文本：**风格：**
使用美式英语。
- 在涵盖关键细节时要简明扼要（例如，为什么推荐某个工具）。
- 使用Markdown标题（`##`，`###`）来结构化内容。

### 翻译文章
1. **翻译**英文版本，使用像[LibreTranslate](https://libretranslate.com/)或任何其他你喜欢的翻译工具。
2. **翻译验证：**  将已经翻译过的文章再翻译回英语，然后将其与原始英语文章进行比较：
    - 捕捉翻译错误的技术术语
    - 验证句子结构是否符合预期的意思
    - 识别缺失的上下文
3. **调整非英语文章的图片路径**：
    - 在路径中添加 `../`（例如，`../../images/...` → `../../../images/...` 用于西班牙语/中文文章）。
4. **校对：** 修正格式问题并确保清晰度。

### Markdown 和短代码
查看Hextra文档中的[markdown](https://imfing.github.io/hextra/docs/guide/markdown/)和[短代码](https://imfing.github.io/hextra/docs/guide/shortcodes/)。如果您想在文章中推荐某个工具或软件，可以使用这个短代码。
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