---
linkTitle: "本地设置"
title: 本地设置
category: Contributing
---
### 先决条件
#### 集成开发环境 (IDE)
推荐使用 [VSCodium](https://vscodium.com/)（无遥测功能的 VSCode 版本）进行开发。

#### Git
根据操作系统安装版本控制系统：

**Linux:**
```bash
# Debian/Ubuntu
sudo apt install git -y

# Fedora
sudo dnf install git -y
```

**Windows:**
从 [git-scm.com](https://git-scm.com/downloads/win) 下载并运行安装程序

**MacOS:**
使用 Homebrew：
```bash
brew install git
```
或从 [git-scm.com](https://git-scm.com/downloads/mac) 下载

#### Hugo (扩展版)
安装 Hugo v0.145.0 或更高版本（需扩展版）：

**Linux:**
```bash
sudo apt install hugo
```
或
```bash
wget https://github.com/gohugoio/hugo/releases/download/v0.145.0/hugo_extended_0.145.0_linux-amd64.deb
sudo dpkg -i hugo_extended_0.145.0_linux-amd64.deb
```

**Windows:**
使用 Chocolatey（管理员权限 PowerShell）：
```powershell
choco install hugo-extended -y
```
或从 [GitHub Releases](https://github.com/gohugoio/hugo/releases) 下载

**MacOS:**
使用 Homebrew：
```bash
brew install hugo
```

#### Go
安装 Go 1.20：

**Linux：**
```bash
# 下载并解压
wget https://go.dev/dl/go1.20.linux-amd64.tar.gz
sudo tar -C /usr/local -xzf go1.20.linux-amd64.tar.gz
# 添加到 PATH（添加到 ~/.bashrc 或 ~/.zshrc）
echo 'export PATH=$PATH:/usr/local/go/bin' >> ~/.bashrc
source ~/.bashrc
```

**Windows：**
从 [go.dev/dl](https://go.dev/dl/go1.20.windows-amd64.msi) 下载安装程序并运行。  
或者使用 Chocolatey：
```powershell
choco install golang --version=1.20 -y
```

**MacOS：**
使用 Homebrew：
```bash
brew install go@1.20
# 链接到 PATH
echo 'export PATH=$(brew --prefix go@1.20)/bin:$PATH' >> ~/.zshrc
source ~/.zshrc
```
或从 [go.dev/dl](https://go.dev/dl/go1.20.darwin-amd64.pkg) 下载安装包。

### 下载并运行 Beginner Privacy
克隆仓库：
```bash
git clone https://github.com/beginnerprivacy/beginnerprivacy.com
cd beginnerprivacy.com
```

启动开发服务器：
`hugo server`

访问以下地址查看：
`http://localhost:1313/`

*注：使用 Ctrl+C 停止服务器*

### Git 提交信息规范
遵循以下提交信息格式：

**格式：**
`<type>: <subject>`

**示例：**
`docs: Add local setup instructions`

**要求：**
- 使用现在时态（例如用"添加"而非"已添加"）
- 主题行不超过72个字符

**类型：**
- **chore：** 一般更改
- **feat：** 新功能
- **fix：** 错误修复
- **docs：** 文档更改
- **article：** 文章更改
- **checklist：** 检查清单更改
- **style：** 格式更改
- **refactor：** 代码重构