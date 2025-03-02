---
linkTitle: "Setup Locally"
title: Setup Locally
---
### Prerequisites
#### IDE
We recommend using [VSCodium](https://vscodium.com/) (no telemetry version of VSCode) for development.

#### Git
Install the version control system for your operating system:

**Linux:**
```bash
# Debian/Ubuntu
sudo apt install git -y

# Fedora
sudo dnf install git -y
```

**Windows:**
Download from [git-scm.com](https://git-scm.com/downloads/win) and run the installer.

**MacOS:**
Using Homebrew:
```bash
brew install git
```
Or download from [git-scm.com](https://git-scm.com/downloads/mac)

#### Hugo (Extended Version)
Install Hugo v0.145.0 or later (extended version required):

**Linux:**
```bash
sudo apt install hugo
```
Or
```bash
wget https://github.com/gohugoio/hugo/releases/download/v0.145.0/hugo_extended_0.145.0_linux-arm64.deb
sudo dpkg -i hugo_extended_0.145.0_linux-arm64.deb
```

**Windows:**
Using Chocolatey (admin PowerShell):

```powershell
choco install hugo-extended -y
```
Or download from [GitHub Releases](https://github.com/gohugoio/hugo/releases)

**MacOS:**
Using Homebrew:
```bash
brew install hugo
```

**Verify installation:**
```bash
hugo version
# Should show: hugo v0.145.0+extended linux/amd64 BuildDate=...
```

### Download & Run Beginner Privacy
Clone the repository:
```bash
git clone https://github.com/beginnerprivacy/beginnerprivacy.github.io
cd beginnerprivacy
```

Start development server:
`hugo server`

The site will be available at:
`http://localhost:1313/`

*Note: Use Ctrl+C to stop the server.*

### Git Commit Message Guidelines
Follow these conventions for commit messages:

**Format:**
`<type>: <subject>`

**Example:**
`docs: Add local setup instructions`

**Requirements:**
- Use present tense (e.g., "Add" not "Added")
- Keep subject line under 72 characters

**Common types:**
- **feat:** New feature
- **fix:** Bug fix
- **docs:** Documentation changes
- **style:** Formatting changes
- **refactor:** Code restructuring
