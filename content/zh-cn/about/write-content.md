---
linkTitle: "写内容"
title: 写内容
category: Contributing
---
欢迎来到初学者隐私内容指南！

### 开始使用
**选择你的编辑方式：**
- GitHub 编辑器：直接在浏览器中编辑。
- 本地设置（推荐）：[学习如何在本地设置这个网站。](../setup-locally/)

**查看要写的内容：** 

前往我们在 GitHub 上的 [文章状态板](https://github.com/orgs/beginnerprivacy/projects/1) 查看哪些文章尚未编写。

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
**受众：** 

Beginner Privacy 的受众是年龄在 18 到 50 岁之间的成年人，他们对互联网和计算机有基本的了解。在避免过度简化的同时，重要的是要澄清使用的任何行话。

**风格：**
- 使用美式英语。
- 在涵盖关键细节时要简明扼要（例如，为什么推荐某个工具）。
- 使用Markdown标题（`###`）来结构化内容。

### 翻译文章
Beginner Privacy 提供三种语言：英语、西班牙语和简体中文。
1. **翻译** 英文版本，使用像 [LibreTranslate](https://libretranslate.com/) 这样的工具或您喜欢的任何其他翻译器翻译成西班牙语和中文（简 体）。
2. **翻译验证：**  将已经翻译过的文章再翻译回英语，然后将其与原始英语文章进行比较：
    - 捕捉翻译错误的技术术语
    - 验证句子结构是否符合预期的意思
    - 识别缺失的上下文
3. **调整非英语文章的图片路径**：
    - 在路径中添加 `../`（例如，`../../images/...` → `../../../images/...` 用于西班牙语/中文文章）。
4. **校对：** 修正格式问题并确保清晰度。

### Markdown 和短代码
探索Hextra文档中的[Markdown](https://imfing.github.io/hextra/docs/guide/markdown/)和[短代码](https://imfing.github.io/hextra/docs/guide/shortcodes/)，以增强您的文章，使其更具互动性和易读性。此外，初学者隐私提供了几个自定义短代码，详细信息如下。

#### 推荐卡
当您想推荐某个工具或软件时。
```
<div class="recommendations">
  <div class="grid">
    {{</* articles/recommendation title="MullvadVPN" link="https://mullvad.net/en/vpn" logo="../../../../images/articles/what-is-a-vpn-and-should-you-use-one/mullvadvpn.webp" text="付费，开源" platformIcon="linux android ios macos windows" buttonText="访问网站" */>}}
  </div>
</div>
```
<div class="recommendations">
  <div class="grid">
    {{< articles/recommendation title="MullvadVPN" link="https://mullvad.net/en/vpn" logo="../../../../images/articles/what-is-a-vpn-and-should-you-use-one/mullvadvpn.webp" text="付费，开源" platformIcon="linux android ios macos windows" buttonText="访问网站" >}}
  </div>
</div>

#### 评估
帮助读者发现更多关于他们的隐私需求的信息。
```
{{</* articles/assessment id="threat-model-assesment" */>}}
{
  "questions": [
    {
      "question": "您典型的在线活动有多敏感？",
      "answers": [
        {"text": "基本的网页浏览（例如，阅读新闻，购物）", "score": 1},
        {"text": "一些个人通信（例如，社交媒体，电子邮件）", "score": 2},
        {"text": "处理敏感工作文件（例如，客户数据，合同）", "score": 3},
        {"text": "激进主义或举报（例如，分享敏感信息）", "score": 4}
      ]
    },
    {
      "question": "您最大的隐私担忧 是什么？",
      "answers": [
        {"text": "定向广告", "score": 1},
        {"text": "大规模监控", "score": 2},
        {"text": "拥有数字足迹", "score": 3},
        {"text": "被恶意行为者针对", "score": 4}
      ]
    },
    {
      "question": "您愿意为保护隐私付出多大努力？",
      "answers": [
        {"text": "我更喜欢便利而不是安全", "score": 1},
        {"text": "我会付出一些努力，但不会太多", "score": 2},
        {"text": "我愿意牺牲一定的便利以获得更好的安全和隐私", "score": 3},
        {"text": "我准备在安全上投入大量资金并改变我的生活方式", "score": 4}
      ]
    }
  ],
  "resultText": {
    "casual": "普通用户：推荐基本的隐私保护",
    "privacyConscious": "隐私意识：建议中等水平的安全措施",
    "advanced": "高级用户：需要全面的安全框架"
  }
}
{{</* /articles/assessment */>}}
```

{{< articles/assessment id="threat-model-assesment" >}}
{
  "questions": [
    {
      "question": "您典型的在线活动有多敏感？",
      "answers": [
        {"text": "基本的网页浏览（例如，阅读新闻，购物）", "score": 1},
        {"text": "一些个人通信（例如，社交媒体，电子邮件）", "score": 2},
        {"text": "处理敏感工作文件（例如，客户数据，合同）", "score": 3},
        {"text": "激进主义或举报（例如，分享敏感信息）", "score": 4}
      ]
    },
    {
      "question": "您最大的隐私担忧是什么？",
      "answers": [
        {"text": "定向广告", "score": 1},
        {"text": "大规模监控", "score": 2},
        {"text": "拥有数字足迹", "score": 3},
        {"text": "被恶意行为者针对", "score": 4}
      ]
    },
    {
      "question": "您愿意为保护隐私付出多大努力？",
      "answers": [
        {"text": "我更喜欢便利而不是安全", "score": 1},
        {"text": "我会付出一些努力，但不会太多", "score": 2},
        {"text": "我愿意牺牲一定的便利以获得更好的安全和隐私", "score": 3},
        {"text": "我准备在安全上投入大量资金并改变我的生活方式", "score": 4}
      ]
    }
  ],
  "resultText": {
    "casual": "普通用户：推荐基本的隐私保护",
    "privacyConscious": "隐私意识：建议中等水平的安全措施",
    "advanced": "高级用户：需要全面的安全框架"
  }
}
{{< /articles/assessment >}}

#### 测验
测试读者的知识或评估他们对文章的理解。
```
{{</* articles/quiz id="math-quiz" */>}}
{
  "questions": [
    {
      "question": "什么是质数？",
      "answers": [
        {"text": "3", "isCorrect": true},
        {"text": "4", "isCorrect": false}
      ]
    },
    {
      "question": "以下哪些是偶数？",
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
      "question": "什么是质数？",
      "answers": [
        {"text": "3", "isCorrect": true},
        {"text": "4", "isCorrect": false}
      ]
    },
    {
      "question": "以下哪些是偶数？",
      "answers": [
        {"text": "2", "isCorrect": true},
        {"text": "5", "isCorrect": false}
      ]
    }
  ]
}
{{< /articles/quiz >}}