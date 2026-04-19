<p align="center">
    <img src="/logos/derejdoc.png" alt="Logo DerejSoft" width="140" />
</p>

<h1 align="center">WebDerej</h1>

<p align="center">
    Plataforma web corporativa de <strong>DerejSoft</strong> para presentar servicios,
    proyectos, contenido de valor y documentación legal en una experiencia moderna,
    accesible y responsiva.
</p>

<p align="center">
    <img alt="Estado" src="https://img.shields.io/badge/Estado-Activo-0f766e" />
    <img alt="Stack" src="https://img.shields.io/badge/Stack-HTML5%20%7C%20CSS3%20%7C%20Vanilla_JS-1f2937" />
    <img alt="Arquitectura" src="https://img.shields.io/badge/Arquitectura-Frontend%20Estático%20(MPA)-6d28d9" />
</p>

---

## Tabla de contenido

1. [Visión General](#1-visión-general)
2. [Estructura del Proyecto y Directorios](#2-estructura-del-proyecto-y-directorios)
3. [Tecnologías y Stack](#3-tecnologías-y-stack)
4. [Sistema de Diseño (UI/UX)](#4-sistema-de-diseño-uiux)
5. [Análisis de Componentes Principales](#5-análisis-de-componentes-principales)
6. [Responsive Design y Accesibilidad](#6-responsive-design-y-accesibilidad)
7. [Guía de Mantenimiento y Extensión](#7-guía-de-mantenimiento-y-extensión)
8. [Ejecución Local y Despliegue](#8-ejecución-local-y-despliegue)
9. [Checklist de Calidad](#9-checklist-de-calidad)
10. [Contacto](#10-contacto)

---

## 1. Visión General

**WebDerej** es la plataforma web institucional desarrollada para **DerejSoft**. Su propósito principal es servir como carta de presentación corporativa, catálogo de proyectos de software, centro de recursos (blog) y repositorio de documentación legal. 

El proyecto destaca por su enfoque en rendimiento, diseño moderno (inspirado en la estética *Glassmorphism* y entornos *Dark Mode*) y autonomía de cada vista mediante un patrón de aplicación multipágina (MPA) completamente estático. No depende de ningún backend para renderizar las vistas, facilitando un despliegue rápido.

---

## 2. Estructura del Proyecto y Directorios

El sistema está construido sin frameworks reactivos pesados. La arquitectura de carpetas se organiza semánticamente por contexto de negocio:

```text
webderej/
├── index.html                   # Landing page principal
├── nosotros2.html               # Página institucional y cultura
├── blog.html                    # Índice del blog corporativo
├── README.md                    # Documentación técnica
├── alticulos/                   # Módulo de Blog (Artículos individuales)
│   ├── arti.html, arti2.html...
├── proyectos/                   # Módulo de Portafolio de Productos
│   ├── derejfinance.html
│   ├── derejmotium.html
│   ├── derejpress.html
│   ├── derejstorage.html
│   └── proye1.html
├── Documentos_Legales/          # Módulo Legal y Compliance
│   ├── politica_privacidad.html
│   └── termino_servicio.html
├── imagenes/                    # Assets visuales globales
├── imgproye/                    # Assets clasificados por proyecto
└── logos/                       # Branding, favicon y recursos de identidad
```

---

## 3. Tecnologías y Stack

El desarrollo emplea un stack "Vanilla", eliminando dependencias de compiladores externos para el desarrollo y despliegue.

### Base Tecnológica
* **HTML5:** Marcado semántico, optimizado para accesibilidad (A11y) y SEO.
* **CSS3:** Estilos nativos utilizando Custom Properties (`:root`), CSS Grid, Flexbox y animaciones avanzadas por `@keyframes`. Los estilos están definidos dentro de cada HTML para dar autonomía a las vistas.
* **JavaScript (Vanilla):** Manejo de la interactividad del DOM, eventos de scroll, menús responsivos y animaciones complejas de cursor/partículas.

### Dependencias Externas (CDNs)
* **Tipografía:** Google Fonts (`Outfit` para títulos, `Plus Jakarta Sans`, `Inter`, `Playfair Display` para cuerpos y acentos).
* **Iconografía:** FontAwesome 6 (Iconos de UI) y Devicon (Iconos tecnológicos de lenguajes/herramientas).
* **Interacciones:** SweetAlert2 para lanzar alertas visuales premium en formularios o acciones de usuario.

---

## 4. Sistema de Diseño (UI/UX)

La interfaz se ha diseñado buscando una experiencia de usuario premium, interactiva y tecnológica:

* **Paleta de Colores (Dark Mode Nativo):** Emplea un esquema oscuro (`--bg-dark: #0f0f23`, `--bg-card: #1a1a2e`) con acentos vibrantes neón: Índigo/Violeta (`--primary: #6366f1`), Rosa (`--secondary: #ec4899`) y Esmeralda (`--accent: #10b981`).
* **Glassmorphism:** Tarjetas, headers y bloques de contenido con fondos translúcidos usando `backdrop-filter: blur()`.
* **Micro-interacciones:** Efectos hover avanzados que alteran posiciones, transforman iconos e incrementan el "glow" (sombras CSS dinámicas).
* **Backgrounds Dinámicos:** Fondos fijos con gradientes radiales animados y uso de un *Custom Cursor* interactivo (`cursor-glow`) mediante JavaScript.

---

## 5. Análisis de Componentes Principales

Cada página incrusta sus propios estilos y scripts, previniendo fallos en cascada entre páginas. Los patrones comunes son:

1. **Header & Navegación:** Barra de navegación superior fija (`fixed`), con efecto blur, menú de hamburguesa móvil e indicadores visuales de scroll.
2. **Hero Section (`index.html`):** Incorpora una animación compleja de iconos tecnológicos flotando en bucle vertical y textos con gradientes.
3. **Showcase de Servicios y Proyectos:** Tarjetas diseñadas en `CSS Grid` que reaccionan a las coordenadas del mouse (`Mouse tracking effect`) para iluminar el fondo al hacer hover.
4. **Blog e Información:** Artículos interconectados, publicación de normativas legales desde navegación/footer, y llamadas a la acción (CTAs) con gradientes destacados.

---

## 6. Responsive Design y Accesibilidad

* **Mobile First Adaptativo:** Diseño fluido mediante `flexbox` y `grid`. Uso de `clamp()` en tipografías y `media queries` para asegurar que el reordenamiento de bloques y lectura en resoluciones pequeñas o móviles sea perfecto.
* **Accesibilidad (A11y):** Inclusión de atributos descriptivos (`aria-label`, textos alternativos en imágenes), uso de semántica HTML (`main`, `section`, `nav`, `footer`) y la clase utilitaria `.sr-only` para apoyar a lectores de pantalla. Consideraciones de contraste en colores interactivos.

---

## 7. Guía de Mantenimiento y Extensión

### Modificar estilos y colores globales
La consistencia visual se gestiona reutilizando variables CSS. Edita las variables dentro de `:root` en el `<style>` del `<head>` (Principalmente en `index.html` y `nosotros2.html`).
```css
:root {
  --primary: #6366f1; /* Color principal índigo */
}
```

### Publicar un nuevo artículo en el Blog
1. Crea un nuevo archivo en la carpeta `alticulos/` duplicando un archivo base (`arti.html`).
2. Edita su contenido (Títulos, Textos, Imágenes).
3. Añade la tarjeta/enlace correspondiente en la vista índice `blog.html`.

### Añadir un proyecto al portafolio
1. Crea la página de detalle en `proyectos/` (ej. copiando `proyectos/proye1.html`).
2. Agrega sus recursos visuales (capturas, logos) dentro de una subcarpeta en `imgproye/`.
3. Integra el enlace hacia la nueva página desde la sección correspondiente en el `index.html` o listado de proyectos.

### Actualizar Documentos Legales
1. Edita los archivos HTML de la carpeta `Documentos_Legales/`.
2. Verifica que los enlaces desde el footer global y header apunten correctamente a dichos documentos tras actualizar.

---

## 8. Ejecución Local y Despliegue

### Entorno de desarrollo
1. Clona o descarga el repositorio localmente.
2. Abre la carpeta raíz `webderej/` en un editor como VS Code.
3. Al ser completamente estático, ejecuta `index.html` directamente en el navegador o mediante una extensión como `Live Server`. No se necesitan servidores node/backend locales.

### Despliegue en Producción
El proyecto está optimizado y es apto para cualquier hosting estático gratuito o CDN de alto rendimiento:
- **Vercel / Netlify / Cloudflare Pages:** Vinculando directamente el repositorio de GitHub. No requiere comandos de "build".
- **GitHub Pages:** Activando el entorno desde las configuraciones del repositorio apuntando al branch principal (root).
- **cPanel/Hosting Compartido:** Subiendo el contenido íntegro a `public_html`. (Es vital conservar la estructura de carpetas exacta para evitar enlaces rotos).

---

## 9. Checklist de Calidad

Antes de cualquier actualización o subida a producción, se recomienda verificar:
- [ ] Enlaces internos y anclajes en estado funcional (100%).
- [ ] Menú móvil respondiendo al toque correctamente.
- [ ] Validación de rutas de imágenes (sin imágenes rotas).
- [ ] Metadatos (`title`, `description`) únicos y optimizados por cada vista.
- [ ] Documentos legales y accesos del footer operando correctamente.
- [ ] Comprobación del renderizado en múltiples navegadores (Chrome, Safari, Firefox) y dispositivos.

---

## 10. Contacto

**DerejSoft**

- 📧 Email: `derejsoft2003@gmail.com`
- 📸 Instagram: [@derejsoft](https://www.instagram.com/derejsoft/)
- 🎵 TikTok: [@derejsoft](https://www.tiktok.com/@derejsoft)
- 💬 WhatsApp: `+1 829 477 2269`

---

<p align="center"><strong>Desarrollado con pasión y tecnología por DerejSoft.</strong></p>
