---
linkTitle: "Setup Locally"
title: Setup Locally
category: Contributing
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
wget https://github.com/gohugoio/hugo/releases/download/v0.145.0/hugo_extended_0.145.0_linux-amd64.deb
sudo dpkg -i hugo_extended_0.145.0_linux-amd64.deb
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

#### Go
Install Go 1.20:

**Linux:**
```bash
# Download and extract
wget https://go.dev/dl/go1.20.linux-amd64.tar.gz
sudo tar -C /usr/local -xzf go1.20.linux-amd64.tar.gz

# Add to PATH (add to ~/.bashrc or ~/.zshrc)
echo 'export PATH=$PATH:/usr/local/go/bin' >> ~/.bashrc
source ~/.bashrc
```

**Windows:**
Download the installer from [go.dev/dl](https://go.dev/dl/go1.20.windows-amd64.msi) and run it.  
Alternatively, using Chocolatey:
```powershell
choco install golang --version=1.20 -y
```

**MacOS:**
Using Homebrew:
```bash
brew install go@1.20
# Link it into PATH
echo 'export PATH=$(brew --prefix go@1.20)/bin:$PATH' >> ~/.zshrc
source ~/.zshrc
```
Or download from [go.dev/dl](https://go.dev/dl/go1.20.darwin-amd64.pkg).

### Download & Run Beginner Privacy
Clone the repository:
```bash
git clone https://github.com/beginnerprivacy/beginnerprivacy.com
cd beginnerprivacy.com
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

**Types:**
- **chore:** General changes
- **feat:** New feature
- **fix:** Bug fix
- **docs:** Documentation changes
- **article:** Article changes
- **checklist:** Checklist changes
- **style:** Formatting changes
- **refactor:** Code restructuring
