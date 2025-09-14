---
title: 为什么你应该设置自己的本地AI聊天机器人
date: 2025-09-14
authors:
  - name: PrintN
    link: https://github.com/PrintN
    image: https://github.com/PrintN.png
excludeSearch: false
---
AI聊天机器人变得越来越流行，能够进行类人对话来回答问题、提供建议或协助完成任务。然而，将个人信息、健康问题或财务数据与基于云的服务共享可能会带来隐私风险。

### 为什么你应该运行自己的本地AI
像ChatGPT或Google Gemini这样的基于云的AI聊天机器人虽然方便，但它们会将你的对话存储在服务器上，并用于训练模型和创建用户广告档案。它们还可能会面临停机问题，导致无法访问。本地AI将数据保存在你的设备上，提供完全控制权，而无需依赖互联网连接或外部服务器。

| 优点              | 缺点                  |
| --------------- | ------------------- |
| 增强隐私—没有数据离开你的设备 | 需要不错的硬件（例如GPU）来提高性能 |
| 初始设置后可离线工作      | 模型下载较大（几个GB）        |
| 免费使用（开源模型）      | 对于初学者，设置可能有些技术性     |
| 完全控制模型和数据       | 模型可能不如GPT-5等专有模型先进  |

### 使用Ollama设置你自己的本地AI
Ollama是一个用户友好的工具，允许你在电脑上本地运行大型语言模型（LLM）。它适用于macOS、Linux和Windows，适合大多数用户。以下是开始的步骤指南。

#### 第一步：下载并安装Ollama
- **macOS**：访问[ollama.com/download](https://ollama.com/download)并下载macOS安装程序。需要macOS 12（Monterey）或更高版本。
- **Linux**：打开终端并运行：`curl -fsSL https://ollama.com/install.sh | sh`。
- **Windows**：访问[ollama.com/download](https://ollama.com/download)并下载Windows安装程序。需要Windows 10或更高版本。

安装后，打开终端并输入`ollama`以验证是否正常工作。

#### 第二步：启动你的第一个模型
Ollama使下载和运行其库中的模型变得简单。开始时可以使用一个轻量级的模型，如DeepSeek R1进行测试。

在终端中运行：
```
ollama run deepseek-r1:8b
```

此命令会下载8亿参数的模型（约5GB）并启动一个交互式聊天会话。现在你可以直接在终端中输入问题并得到回复。

你可以在[ollama.com/models](https://ollama.com/models)找到其他模型，如GPT-OSS或Gemma。

#### 第三步：为Ollama设置GUI
尽管终端界面功能齐全，但图形用户界面（GUI）能提供更像ChatGPT的体验。最好的选择之一是[Open WebUI](https://docs.openwebui.com/)，这是一个支持Ollama的基于Web的界面。

安装Open WebUI（Docker方法）：

1. 如果没有安装[Docker](https://www.docker.com/)，请先安装。
2. 在终端中运行以下命令：

   ```
   docker run -d -p 3000:8080 --add-host=host.docker.internal:host-gateway -v open-webui:/app/backend/data --name open-webui --restart always ghcr.io/open-webui/open-webui:main
   ```
3. 确保Ollama在后台运行，如果没有，运行`ollama serve`。
4. 打开浏览器，访问`http://localhost:3000`，即可看到一个漂亮的聊天界面。
5. 在Open WebUI中，你可以从Ollama的库中拉取模型，并轻松切换它们。

如果你更喜欢非Docker安装，请参考[这里](https://docs.openwebui.com/#manual-installation)。

### 在低功耗设备上使用隐私专注的AI
如果你的计算机缺乏存储或GPU性能来本地运行AI模型，或者你使用的是移动设备，我们推荐使用一个在线隐私专注的AI聊天机器人，如[Duck.ai](https://duck.ai)，它提供：
- 匿名访问Claude 3.5、GPT-5 mini或Mistral等模型。
- DuckDuckGo或模型提供商不会存储聊天记录。
- 不会将数据用于AI训练。
