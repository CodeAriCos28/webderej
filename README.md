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
    <img alt="Stack" src="https://img.shields.io/badge/Stack-HTML5%20%7C%20CSS3%20%7C%20JavaScript-1f2937" />
    <img alt="Arquitectura" src="https://img.shields.io/badge/Arquitectura-Frontend%20Estático-6d28d9" />
</p>

---

## Tabla de contenido

1. [Resumen del proyecto](#resumen-del-proyecto)
2. [Objetivo y alcance](#objetivo-y-alcance)
3. [Mapa completo del sitio](#mapa-completo-del-sitio)
4. [Estructura del repositorio](#estructura-del-repositorio)
5. [Arquitectura frontend](#arquitectura-frontend)
6. [Tecnologías y recursos externos](#tecnologías-y-recursos-externos)
7. [Funcionalidades clave](#funcionalidades-clave)
8. [Accesibilidad y buenas prácticas](#accesibilidad-y-buenas-prácticas)
9. [Responsive design](#responsive-design)
10. [Ejecución local](#ejecución-local)
11. [Despliegue](#despliegue)
12. [Guía de mantenimiento](#guía-de-mantenimiento)
13. [Checklist de calidad](#checklist-de-calidad)
14. [Contacto](#contacto)

---

## Resumen del proyecto

**WebDerej** es la web institucional de DerejSoft. El sistema está orientado a:

- Comunicar la propuesta de valor y servicios de la marca.
- Exponer proyectos y productos desarrollados.
- Publicar artículos y contenido informativo.
- Mostrar documentos legales obligatorios (privacidad y términos).

La solución está construida con frontend puro (`HTML`, `CSS`, `JavaScript`), optimizada para carga rápida y despliegue simple en hosting estático.

## Objetivo y alcance

### Objetivo

Consolidar una presencia web profesional y confiable para clientes, aliados y visitantes, con navegación clara, estética moderna y contenido corporativo estructurado.

### Alcance actual

- Landing principal con secciones de negocio.
- Página institucional "Nosotros".
- Sección de blog y artículos individuales.
- Sección de proyectos con páginas dedicadas.
- Documentación legal publicada en páginas propias.
- Recursos multimedia organizados por carpetas.

## Mapa completo del sitio

### Páginas raíz

- `index.html`: portada principal de la marca.
- `nosotros2.html`: presentación institucional y cultura de empresa.
- `blog.html`: índice general del blog.

### Artículos

- `alticulos/arti.html`
- `alticulos/arti2.html`
- `alticulos/arti3.html`

### Proyectos

- `proyectos/proye1.html`
- `proyectos/derejfinance.html`
- `proyectos/derejmotium.html`
- `proyectos/derejpress.html`
- `proyectos/derejstorage.html`

### Documentos legales

- `Documentos_Legales/politica_privacidad.html`
- `Documentos_Legales/termino_servicio.html`

## Estructura del repositorio

```text
webderej/
|-- index.html
|-- nosotros2.html
|-- blog.html
|-- README.md
|-- alticulos/
|   |-- arti.html
|   |-- arti2.html
|   |-- arti3.html
|-- Documentos_Legales/
|   |-- politica_privacidad.html
|   |-- termino_servicio.html
|-- proyectos/
|   |-- proye1.html
|   |-- derejfinance.html
|   |-- derejmotium.html
|   |-- derejpress.html
|   |-- derejstorage.html
|-- imagenes/
|-- imgproye/
|   |-- derejfinance/
|   |-- derejmotium/
|   |-- derejpress/
|   |-- derejstorange/
|-- logos/
```

### Rol de cada carpeta

- `alticulos/`: contenido editorial individual.
- `Documentos_Legales/`: cumplimiento legal y transparencia.
- `proyectos/`: detalle de productos/proyectos del portafolio.
- `imagenes/`: assets visuales generales.
- `imgproye/`: imágenes segmentadas por proyecto.
- `logos/`: branding, favicon y recursos de identidad.

## Arquitectura frontend

### Patrón general

- Sitio multipágina (MPA) con rutas estáticas.
- Navegación horizontal con versión móvil colapsable.
- Estructura visual basada en secciones (hero, bloques de valor, cards, footer).
- Estilos definidos dentro de cada HTML para autonomía por vista.

### Componentes comunes observados

- `header` fijo con menú principal.
- Hero visual con gradientes y/o elementos animados.
- Cards informativas para servicios, posts y proyectos.
- Footer corporativo con enlaces legales y redes.
- Botón flotante de contacto en secciones aplicables.

## Tecnologías y recursos externos

### Base tecnológica

- `HTML5` semántico.
- `CSS3` moderno con variables (`:root`), `flex`, `grid`, animaciones y media queries.
- `JavaScript Vanilla` para interacciones y comportamiento dinámico.

### Dependencias CDN utilizadas

- Google Fonts (`Outfit`, `Plus Jakarta Sans`, `Inter`, `Playfair Display`).
- Font Awesome para iconografía.
- Devicon para iconos tecnológicos.
- SweetAlert2 (en páginas que lo incluyen) para alertas visuales.

## Funcionalidades clave

- Navegación fija y contexto visual de la sección activa.
- Menú responsive para móviles.
- Animaciones de entrada y efectos hover en bloques interactivos.
- Sección de blog con artículos enlazados por página individual.
- Showcase de proyectos con páginas de detalle.
- Publicación de información legal accesible desde navegación/footer.
- Integración de enlaces de contacto y redes sociales.

## Accesibilidad y buenas prácticas

- Uso de etiquetas semánticas (`main`, `section`, `nav`, `footer`).
- Inclusión de atributos descriptivos (`aria-label`, `title`, textos alternativos).
- Presencia de clase utilitaria `sr-only` para apoyo a lectores de pantalla.
- Jerarquía tipográfica y separación clara de contenidos.
- Contrastes y foco visual considerados en componentes interactivos.

## Responsive design

- Diseño fluido mediante `flexbox` y `CSS grid`.
- Adaptación progresiva para escritorio, tablet y móvil.
- Menús y bloques reordenados según ancho de pantalla.
- Ajustes de tipografía y espaciado para legibilidad en pantallas pequeñas.

## Ejecución local

1. Clona o descarga el repositorio.
2. Abre la carpeta `webderej` en VS Code.
3. Ejecuta `index.html` en navegador o con una extensión tipo `Live Server`.
4. Navega al resto de vistas mediante los enlaces del menú.

## Despliegue

- Proyecto apto para cualquier hosting estático (GitHub Pages, Netlify, Vercel estático, cPanel, etc.).
- Requiere conservar la misma estructura de carpetas para que las rutas relativas funcionen correctamente.
- No depende de backend para renderizar vistas principales.

## Guía de mantenimiento

### Publicar nuevo artículo

1. Crear archivo en `alticulos/` con la misma convención actual.
2. Añadir tarjeta/enlace correspondiente en `blog.html`.
3. Verificar navegación, estilos y enlaces internos.

### Publicar nuevo proyecto

1. Crear nueva página en `proyectos/`.
2. Añadir recursos visuales en `imgproye/<nombre-proyecto>/`.
3. Integrar enlace desde portada o sección de proyectos.

### Actualizar documentos legales

1. Editar archivos dentro de `Documentos_Legales/`.
2. Validar títulos, anclas y navegación lateral si aplica.
3. Confirmar que estén enlazados desde header o footer.

### Recomendaciones técnicas

- Mantener consistencia visual reutilizando variables CSS.
- Evitar duplicar estilos complejos sin necesidad.
- Optimizar imágenes antes de publicarlas.
- Validar cada cambio en desktop y móvil antes de subir.

## Checklist de calidad

- Enlaces internos funcionando al 100%.
- Menú móvil operativo.
- Sin imágenes rotas.
- Metadatos (`title`, `description`) actualizados por página.
- Documentos legales accesibles desde la navegación.
- Pruebas en al menos 2 navegadores modernos.

## Contacto

**DerejSoft**

- Email: `derejsoft2003@gmail.com`
- Instagram: [@derejsoft](https://www.instagram.com/derejsoft/)
- TikTok: [@derejsoft](https://www.tiktok.com/@derejsoft)
- WhatsApp: `+1 829 477 2269`

---

<p align="center"><strong>Desarrollado con pasión por DerejSoft.</strong></p>
