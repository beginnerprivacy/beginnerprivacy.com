---
title: ¿Qué es I2P? ¿Y deberías usarlo?
date: 2025-10-07
authors:
  - name: PrintN
    link: https://github.com/PrintN
    image: https://github.com/PrintN.png
excludeSearch: false
---
### ¿Qué es I2P?
Lanzado en 2003 por defensores de la privacidad, el Proyecto de Internet Invisible (I2P) es una red de código abierto para comunicación anónima y resistente a la censura. No es para navegar por la web pública como Tor; en cambio, construye una superposición oculta para servicios P2P como eepsites, compartición de archivos, chats y correo electrónico—todo encriptado e interno.

<br>

I2P utiliza enrutamiento de ajo: los mensajes se agrupan en "ajos" con múltiples "dientes de ajo" (tus datos mezclados con los de otros), lo que hace difícil el análisis de tráfico. Esto supera las capas de cebolla de Tor al agregar desvíos. Los datos viajan a través de túneles unidireccionales con encriptación de extremo a extremo, y las claves cambian en cada salto. Totalmente descentralizado, funciona en routers voluntarios sin control central, resistiendo apagones y espionaje.

### ¿Deberías Usar I2P?
I2P destaca en P2P privado, pero no es amigable para principiantes. Considera esto:

| **Pros** | **Cons** |
|------|------|
| Excelente anonimato para actividades internas como torrenting (vía I2PSnark) sin nodos de salida. | Velocidades más lentas debido a la encriptación pesada y el enrutamiento. |
| Resiste la vigilancia mediante la mezcla de datos y sin un punto único de fallo. | Base de usuarios más pequeña (30k-60k routers) significa menos contenido y confiabilidad. |
| Comunidad activa con integraciones para IRC y correo electrónico dentro de la red. | Configuración más empinada: aprende conceptos como destinos; no hay un paquete de navegador fácil. |

Opta por I2P si necesitas una red interna anónima y puedes manejar la configuración. Para acceso a clearnet, usa Tor o VPN.

### Instalando I2P
Descarga I2P desde el [sitio web oficial](https://geti2p.net/en/download), recuerda verificar las firmas.

**Requisitos Previos:** [Java JRE](https://www.oracle.com/java/technologies/downloads/) (excepto el Easy Bundle de Windows).

**Windows:** Easy Bundle (sin Java) desde geti2p.net/nsis, o instalador estándar después de instalar Java.

**macOS:** Ejecuta el instalador .jar con doble clic o en la terminal: `java -jar i2pinstall_2.10.0.jar`.

**Linux:** Ejecuta el instalador .jar en la terminal: `java -jar i2pinstall_2.10.0.jar`.

**Android:** APK desde el sitio o F-Droid (Android 4.0+, 512MB RAM); desinstala versiones antiguas.

**Después de la Instalación:** Accede a la consola en `http://127.0.0.1:7657/` para la configuración. Comienza con bajo ancho de banda. Integra aplicaciones como I2PSnark.