---
linkTitle: "Configuración Local"
title: Configuración Local
category: Contributing
---
### Requisitos Previos
#### IDE
Recomendamos usar [VSCodium](https://vscodium.com/) (versión sin telemetría de VSCode) para el desarrollo.

#### Git
Instala el sistema de control de versiones para tu sistema operativo:

**Linux:**
```bash
# Debian/Ubuntu
sudo apt install git -y

# Fedora
sudo dnf install git -y
```

**Windows:**
Descarga desde [git-scm.com](https://git-scm.com/downloads/win) y ejecuta el instalador.

**MacOS:**
Usando Homebrew:
```bash
brew install git
```
O descarga desde [git-scm.com](https://git-scm.com/downloads/mac)

#### Hugo (Versión Extendida)
Instala Hugo v0.145.0 o superior (se requiere versión extendida):

**Linux:**
```bash
sudo apt install hugo
```
O
```bash
wget https://github.com/gohugoio/hugo/releases/download/v0.145.0/hugo_extended_0.145.0_linux-amd64.deb
sudo dpkg -i hugo_extended_0.145.0_linux-amd64.deb
```

**Windows:**
Usando Chocolatey (PowerShell como administrador):
```powershell
choco install hugo-extended -y
```
O descarga desde [GitHub Releases](https://github.com/gohugoio/hugo/releases)

**MacOS:**
Usando Homebrew:
```bash
brew install hugo
```

#### Go
Instala Go 1.20:

**Linux:**
```bash
# Descargar y extraer
wget https://go.dev/dl/go1.20.linux-amd64.tar.gz
sudo tar -C /usr/local -xzf go1.20.linux-amd64.tar.gz
# Añadir al PATH (agregar a ~/.bashrc o ~/.zshrc)
echo 'export PATH=$PATH:/usr/local/go/bin' >> ~/.bashrc
source ~/.bashrc
```

**Windows:**
Descarga el instalador desde [go.dev/dl](https://go.dev/dl/go1.20.windows-amd64.msi) y ejecútalo.  
Alternativamente, usando Chocolatey:
```powershell
choco install golang --version=1.20 -y
```

**MacOS:**
Usando Homebrew:
```bash
brew install go@1.20
# Enlazar en el PATH
echo 'export PATH=$(brew --prefix go@1.20)/bin:$PATH' >> ~/.zshrc
source ~/.zshrc
```
O descarga desde [go.dev/dl](https://go.dev/dl/go1.20.darwin-amd64.pkg).

### Descargar y Ejecutar Beginner Privacy
Clona el repositorio:
```bash
git clone https://github.com/beginnerprivacy/beginnerprivacy.com
cd beginnerprivacy.com
```

Inicia el servidor de desarrollo:
`hugo server`

El sitio estará disponible en:
`http://localhost:1313/`

*Nota: Usa Ctrl+C para detener el servidor.*

### Directrices de mensajes de confirmación de Git
Siga estas convenciones para los mensajes de confirmación:

**Formato:**
`<type>: <subject>`

**Ejemplo:**
`docs: Add local setup instructions`

**Requisitos:**
- Usa tiempo presente (ej. "Agrega" en lugar de "Agregado")
- Mantén el asunto debajo de 72 caracteres

**Tipos:**
- **chore:** Cambios generales
- **feat:** Nueva característica
- **fix:** Corrección de errores
- **docs:** Cambios en la documentación
- **article:** Cambios en el artículo
- **checklist:** Cambios en la lista de verificación
- **style:** Cambios de formato
- **refactor:** Reestructuración del código