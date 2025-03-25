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
wget https://github.com/gohugoio/hugo/releases/download/v0.145.0/hugo_extended_0.145.0_linux-arm64.deb
sudo dpkg -i hugo_extended_0.145.0_linux-arm64.deb
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

**Verificar instalación:**
```bash
hugo version
# Debe mostrar: hugo v0.145.0+extended linux/amd64 BuildDate=...
```

### Descargar y Ejecutar Beginner Privacy
Clona el repositorio:
```bash
git clone https://github.com/beginnerprivacy/beginnerprivacy.github.io
cd beginnerprivacy
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

**Tipos comunes:**
- **chore:** Cambios generales
- **feat:** Nueva funcionalidad
- **fix:** Corrección de errores
- **docs:** Cambios en documentación
- **article:** Cambios en el artículo
- **style:** Cambios de formato
- **refactor:** Reestructuración de código
