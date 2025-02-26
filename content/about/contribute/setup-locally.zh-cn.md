---
linkTitle: "本地设置"
title: 本地设置
---
## 先决条件
### 集成开发环境 (IDE)
推荐使用 [VSCodium](https://vscodium.com/)（无遥测功能的 VSCode 版本）进行开发。

### Git
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

### Hugo (扩展版)
安装 Hugo v0.145.0 或更高版本（需扩展版）：

**Linux:**
```bash
sudo apt install hugo
```
或
```bash
wget https://github.com/gohugoio/hugo/releases/download/v0.145.0/hugo_extended_0.145.0_linux-arm64.deb
sudo dpkg -i hugo_extended_0.145.0_linux-arm64.deb
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

**验证安装：**
```bash
hugo version
# 应显示： hugo v0.145.0+extended linux/amd64 BuildDate=...
```

## 下载并运行 Beginner Privacy
克隆仓库：
```bash
git clone https://github.com/beginnerprivacy/beginnerprivacy.github.io
cd beginnerprivacy
```

启动开发服务器：
`hugo server`

访问以下地址查看：
`http://localhost:1313/`

*注：使用 Ctrl+C 停止服务器*

## Git 提交信息规范
遵循以下提交信息格式：

**格式：**
`<type>: <subject>`

**示例：**
`docs: Add local setup instructions`

**要求：**
- 使用现在时态（例如用"添加"而非"已添加"）
- 主题行不超过72个字符

**常用类型：**
- **feat:** 新功能
- **fix:** 错误修复
- **docs:** 文档变更
- **style:** 格式调整
- **refactor:** 代码重构