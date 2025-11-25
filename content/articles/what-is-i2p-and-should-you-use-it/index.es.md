---
title: ¿Qué es I2P? ¿Y deberías usarlo?
date: 2025-10-07
authors:
  - name: PrintN
    link: https://github.com/PrintN
    image: https://github.com/PrintN.png
excludeSearch: false
---
I2P (Invisible Internet Project) es una de las redes superpuestas anónimas más antiguas y resistentes que aún sigue en desarrollo activo. Lanzado en 2003, sigue siendo el favorito entre entusiastas de la privacidad, denunciantes en regímenes represivos y personas que simplemente rechazan confiar en el modelo de nodos de salida de Tor. A diferencia de Tor, I2P nunca fue diseñado para navegar por la clearnet: es una “darknet” completamente separada y autocontenida donde todo permanece dentro de la red.

### ¿Cómo funciona I2P?
I2P está construido de forma completamente diferente a Tor. Aquí está la idea principal en términos simples:

1. **Nadie ve nunca tu IP real**  
   Tu tráfico siempre pasa por túneles formados por nodos voluntarios (pares). Todo usuario de I2P también es un relay.
2. **Túneles unidireccionales (la gran diferencia con Tor)**  
   - Túnel de salida: tus datos salen a través de 3–7 pares aleatorios.  
   - Túnel de entrada: las respuestas regresan por un conjunto completamente diferente de 3–7 pares.  
   Ningún nodo sabe tanto el origen como el destino del tráfico, ni siquiera el primer o último salto.
3. **Enrutamiento garlic (no onion)**  
   Tu mensaje se divide, se encripta muchas veces y se empaqueta (“ajo”) junto con mensajes de otras personas. Algunas partes son reales, otras son señuelos y otras son instrucciones para otros destinos. Esto hace extremadamente difícil el análisis de tráfico y de temporización, mucho más que con las capas de cebolla individuales de Tor.
4. **Los túneles cambian cada 10 minutos**  
   Los caminos antiguos se descartan y se construyen nuevos caminos aleatorios. Aunque alguien te vigile durante días, la imagen se reinicia constantemente.
5. **Cifrado de extremo a extremo**  
   Solo tú y el destinatario final tenéis las claves para leer el contenido. Los nodos voluntarios del medio solo mueven paquetes encriptados; nunca ven el interior.
6. **Totalmente dentro de su propia red**  
   No existen “nodos de salida” que toquen Internet normal (salvo que uses un outproxy raro explícitamente). Todo —sitios web (.i2p), torrents, chat, correo— permanece dentro de I2P.

I2P oculta tanto quién eres como lo que dices rebotando pedazos encriptados y mezclados a través de túneles voluntarios unidireccionales que cambian constantemente, y nunca permite que nada salga de su propia red oculta.

### ¿Deberías usar I2P?
I2P destaca en P2P privado, pero no es muy amigable para principiantes. Considera esto:

| **Ventajas** | **Desventajas** |
|------|------|
| Excelente anonimato para actividades internas como torrenting (vía I2PSnark) sin nodos de salida. | Velocidades más lentas por el pesado encriptado y enrutamiento. |
| Resiste la vigilancia mediante mezcla de datos y sin punto único de fallo. | Base de usuarios más pequeña (30k-60k routers) → menos contenido y fiabilidad. |
| Comunidad activa con integraciones para IRC y correo dentro de la red. | Configuración más compleja: hay que aprender conceptos como “destinos”; no hay bundle fácil para navegador. |

Elige I2P si necesitas red interna anónima y puedes con la configuración. Para acceso a la clearnet, usa [Tor](/es/articles/navigating-the-web-anonymously-a-guide-to-tor-basics) o [VPNs](/es/articles/what-is-a-vpn-and-should-you-use-one).

### Instalación de I2P: Paso a Paso
1. **Descargar I2P**  
   Ve al sitio oficial: [geti2p.net/es/download](https://geti2p.net/es/download)
2. **Requisitos previos (Escritorio)**  
   - [Java Runtime Environment (JRE)](https://www.oracle.com/java/technologies/downloads/)
   - Excepción: El “Easy Install Bundle” de Windows ya incluye todo (no necesita Java).
3. **Instalación**

| Sistema operativo | Instalación |
|-------------------|-------------|
| **Windows** | Descarga y ejecuta el “Easy Install Bundle” (.exe) desde [geti2p.net/es/nsis](https://geti2p.net/es/nsis) |
| **macOS** | Descarga el `.jar` para macOS y haz doble clic en `i2pinstall_X.X.X.jar`, o ejecuta en terminal: <br>`java -jar i2pinstall_X.X.X.jar` |
| **Linux** | Descarga el `.jar` para Linux y ejecuta en terminal: <br>`java -jar i2pinstall_X.X.X.jar` |
| **Android** | Descarga el APK directamente desde la web de I2P o vía [F-Droid](https://f-droid.org/packages/net.i2p.android.router/) |

4. **Después de la instalación**  
   - Inicia el router I2P (normalmente arranca automáticamente).  
   - Abre tu navegador y ve a la consola: `http://127.0.0.1:7657/`
   - En el primer arranque elige **bajo ancho de banda** (puedes aumentarlo después).  
   - Explora la consola: ajusta tu ancho de banda, activa aplicaciones integradas como **I2PSnark** (cliente torrent) y empieza a navegar sitios .i2p o a añadir otras aplicaciones I2P.