# ![DerejSoft Logo](/logos/derejdoc.png)


# Documentación del Proyecto WebDerej

## Índice
- [](#)
- [Documentación del Proyecto WebDerej](#documentación-del-proyecto-webderej)
  - [Índice](#índice)
  - [Descripción General](#descripción-general)
  - [Estructura de Carpetas](#estructura-de-carpetas)
  - [Tecnologías Utilizadas](#tecnologías-utilizadas)
  - [Estructura de los Archivos HTML](#estructura-de-los-archivos-html)
  - [Accesibilidad y Buenas Prácticas](#accesibilidad-y-buenas-prácticas)
  - [Responsive Design](#responsive-design)
  - [Componentes Clave](#componentes-clave)
  - [Personalización y Estilos](#personalización-y-estilos)
  - [Despliegue y Uso](#despliegue-y-uso)
  - [Mantenimiento y Actualizaciones](#mantenimiento-y-actualizaciones)
  - [Contacto y Créditos](#contacto-y-créditos)

---

## Descripción General
WebDerej es una web corporativa para la empresa DerejSoft, orientada a mostrar servicios, proyectos, artículos y documentos legales, con enfoque en accesibilidad, diseño moderno y adaptabilidad a dispositivos.

## Estructura de Carpetas
```
blog.html
index.html
nosotros2.html
alticulos/
    arti.html
    arti2.html
    arti3.html
Documentos_Legales/
    politica_privacidad.html
    termino_servicio.html
imagenes/
logos/
null/
    login.html
proyectos/
    derejfinance.html
    derejmotium.html
    derejpress.html
    derejstorage.html
    proye1.html
```
- **index.html**: Página principal.
- **nosotros2.html**: Sobre la empresa.
- **alticulos/**: Artículos y blog.
- **Documentos_Legales/**: Políticas y términos legales.
- **proyectos/**: Descripción de proyectos desarrollados.
- **imagenes/**, **logos/**: Recursos gráficos.
- **null/login.html**: Acceso (en desarrollo o placeholder).

## Tecnologías Utilizadas
- **HTML5** y **CSS3** (con variables y custom properties)
- **FontAwesome** y **Devicon** para iconos
- **Google Fonts** (Outfit, Plus Jakarta Sans)
- **JavaScript** (para animaciones, menú móvil, scroll, paginación, etc.)
- **No frameworks JS pesados** (todo es vanilla JS)

## Estructura de los Archivos HTML
- **Header**: Menú fijo, logo, navegación accesible.
- **Hero Section**: Presentación visual con fondo animado e iconos flotantes.
- **Contenido Principal**: Secciones de servicios, proyectos, artículos, contacto, etc.
- **Footer**: Logo, enlaces legales, redes sociales accesibles, copyright.
- **Documentos legales**: Sidebar con tabla de contenidos, contenido legal estructurado.

## Accesibilidad y Buenas Prácticas
- Uso de `aria-label`, `title` y `.sr-only` para accesibilidad en enlaces de redes.
- Contraste de colores revisado para cumplir estándares WCAG.
- Navegación por teclado y foco visible.
- Etiquetas semánticas (`<main>`, `<section>`, `<nav>`, `<footer>`, etc.).

## Responsive Design
- Layout fluido con CSS Grid y Flexbox.
- Breakpoints para desktop, laptop, tablet y móvil (`@media` queries).
- Menú móvil colapsable.
- Footer y redes sociales adaptados a todas las resoluciones.
- Sidebar de documentos legales sin scroll, todo visible.

## Componentes Clave
- **Menú de navegación**: Fijo, con animaciones y subrayado dinámico.
- **Hero**: Fondo animado, iconos de tecnología, texto destacado.
- **Cards de servicios/proyectos**: Con hover, iconos y etiquetas tecnológicas.
- **Formulario de contacto**: Validación, feedback visual, integración con FormSubmit.
- **Tabla de contenidos**: En sidebar, tipo chips/botones, sin scroll.
- **Footer**: Logo, enlaces, redes sociales accesibles y con hover de marca.

## Personalización y Estilos
- Variables CSS para colores, fuentes, radios, sombras y transiciones.
- Gradientes y fondos animados.
- Efectos de hover y animaciones de entrada (`fade-in-up`).
- Clases utilitarias para espaciados y alineaciones.

## Despliegue y Uso
1. Clona el repositorio o descarga los archivos.
2. Abre `index.html` en tu navegador para ver la web.
3. Para desarrollo, puedes usar extensiones como Live Server o Five Server.
4. Las rutas son relativas, por lo que puedes desplegar en cualquier hosting estático.

## Mantenimiento y Actualizaciones
- Para agregar nuevos artículos, crea archivos en `alticulos/` y enlaza desde el blog.
- Para nuevos proyectos, añade HTML en `proyectos/` y actualiza la sección de proyectos.
- Actualiza los documentos legales en `Documentos_Legales/` según sea necesario.
- Los estilos globales están en la etiqueta `<style>` de cada HTML principal.

## Contacto y Créditos
- **DerejSoft**
- Email: derejsoft2003@gmail.com
- Instagram: [@derejsoft](https://www.instagram.com/derejsoft/)
- TikTok: [@derejsoft](https://www.tiktok.com/@derejsoft)
- WhatsApp: +1 829 477 2269

---

**Desarrollado con pasión por DerejSoft.**
