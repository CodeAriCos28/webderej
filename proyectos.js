// ==========================================
// ARCHIVO DE DATOS DE PROYECTOS
// ==========================================
// Aquí puedes agregar, editar o eliminar los proyectos que se muestran en la página principal.
// Simplemente copia y pega uno de los bloques { ... } y cambia la información.

const projectsData = [
  {
    link: '/proyectos/derejpress.html',
    badgeClass: 'finanzas',
    badgeIcon: 'calculator',
    badgeText: 'Finanzas',
    image: '/imagenes/proyecto/DerejPres.webp',
    title: 'DerejPres',
    description: 'Software web para negocios que necesitan controlar financiamientos, pagos y deudas. Organiza clientes, calcula cuotas, evita errores y se adapta a cualquier modelo de negocio.',
    tech: [
      { class: 'django', name: 'Django' },
      { class: 'mysql', name: 'MySQL' },
      { class: 'html', name: 'HTML' },
      { class: 'css', name: 'CSS' },
      { class: 'javascript', name: 'JavaScript' }
    ]
  },
  {
    link: '/proyectos/derejstorage.html',
    badgeClass: 'finanzas',
    badgeIcon: 'calculator',
    badgeText: 'Finanzas',
    image: '/imagenes/proyecto/ds-dashboard-card.webp',
    title: 'DerejStorage',
    description: 'Software para molinos y agroquímicas que organiza facturas de entrada y salida, evita pérdida de documentos, agiliza búsquedas y se adapta a las necesidades de cada cliente.',
    tech: [
      { class: 'django', name: 'Django' },
      { class: 'mysql', name: 'MySQL' },
      { class: 'html', name: 'HTML' },
      { class: 'css', name: 'CSS' },
      { class: 'javascript', name: 'JavaScript' }
    ]
  },
  // {
  //   link: '/proyectos/derejmotium.html',
  //   badgeClass: 'comercio',
  //   badgeIcon: 'shopping-cart',
  //   badgeText: 'Comercio',
  //   image: '/imagenes/proyecto/derejmotium.webp',
  //   title: 'DerejMotium',
  //   description: 'Sistema web para agencias de motocicletas que centraliza ventas de contado y crédito, controla clientes y suplidores, agiliza facturación y reduce errores.',
  //   tech: [
  //     { class: 'django', name: 'Django' },
  //     { class: 'mysql', name: 'MySQL' },
  //     { class: 'html', name: 'HTML' },
  //     { class: 'css', name: 'CSS' },
  //     { class: 'javascript', name: 'JavaScript' }
  //   ]
  // },
  {
    link: '/proyectos/derejfinance.html',
    badgeClass: 'finanzas',
    badgeIcon: 'calculator',
    badgeText: 'Finanzas',
    image: '/imagenes/proyecto/DF-Menu-card.webp',
    title: 'DerejFinance',
    description: 'Aplicación web para controlar tus finanzas con facilidad y mejorar la eficiencia de tu administración financiera personal.',
    tech: [
      { class: 'django', name: 'Django' },
      { class: 'mysql', name: 'MySQL' },
      { class: 'html', name: 'HTML' },
      { class: 'css', name: 'CSS' },
      { class: 'javascript', name: 'JavaScript' }
    ]
  },
  // {
  //   link: '/proyectos/derejautix.html',
  //   badgeClass: 'comercio',
  //   badgeIcon: 'shopping-cart',
  //   badgeText: 'Comercio',
  //   image: '/imagenes/proyecto/derejautix.webp',
  //   title: 'DerejAutix',
  //   description: 'Sistema web para agencias de motocicletas que centraliza ventas de contado y crédito, controla clientes y suplidores, agiliza facturación y reduce errores.',
  //   tech: [
  //     { class: 'django', name: 'Django' },
  //     { class: 'mysql', name: 'MySQL' },
  //     { class: 'html', name: 'HTML' },
  //     { class: 'css', name: 'CSS' },
  //     { class: 'javascript', name: 'JavaScript' }
  //   ]
  // },
  // {
  //   link: '/proyectos/derejagro.html',
  //   badgeClass: 'comercio',
  //   badgeIcon: 'shopping-cart',
  //   badgeText: 'Comercio',
  //   image: '/imagenes/proyecto/derejagro.webp',
  //   title: 'DerejAgro',
  //   description: 'Sistema web para agencias de motocicletas que centraliza ventas de contado y crédito, controla clientes y suplidores, agiliza facturación y reduce errores.',
  //   tech: [
  //     { class: 'django', name: 'Django' },
  //     { class: 'mysql', name: 'MySQL' },
  //     { class: 'html', name: 'HTML' },
  //     { class: 'css', name: 'CSS' },
  //     { class: 'javascript', name: 'JavaScript' }
  //   ]
  // },
  // {
  //   link: '/proyectos/derejcitas.html',
  //   badgeClass: 'comercio',
  //   badgeIcon: 'tasks',
  //   badgeText: 'Gestión',
  //   image: '/imagenes/proyecto/derejcitas.webp',
  //   title: 'DerejCitas',
  //   description: 'Sistema web para agencias de motocicletas que centraliza ventas de contado y crédito, controla clientes y suplidores, agiliza facturación y reduce errores.',
  //   tech: [
  //     { class: 'django', name: 'Django' },
  //     { class: 'mysql', name: 'MySQL' },
  //     { class: 'html', name: 'HTML' },
  //     { class: 'css', name: 'CSS' },
  //     { class: 'javascript', name: 'JavaScript' }
  //   ]
  // },
  // {
  //   link: '/proyectos/derejturnos.html',
  //   badgeClass: 'automotriz',
  //   badgeIcon: 'tasks',
  //   badgeText: 'Gestión',
  //   image: '/imagenes/proyecto/derejturnos.webp',
  //   title: 'DerejTurnos',
  //   description: 'Sistema web para agencias de motocicletas que centraliza ventas de contado y crédito, controla clientes y suplidores, agiliza facturación y reduce errores.',
  //   tech: [
  //     { class: 'django', name: 'Django' },
  //     { class: 'mysql', name: 'MySQL' },
  //     { class: 'html', name: 'HTML' },
  //     { class: 'css', name: 'CSS' },
  //     { class: 'javascript', name: 'JavaScript' }
  //   ]
  // },
  // {
  //   link: '/proyectos/derejkonix.html',
  //   badgeClass: 'comercio',
  //   badgeIcon: 'shopping-cart',
  //   badgeText: 'Comercio',
  //   image: '/imagenes/proyecto/derejkonix.webp',
  //   title: 'DerejKonix',
  //   description: 'Sistema web para agencias de motocicletas que centraliza ventas de contado y crédito, controla clientes y suplidores, agiliza facturación y reduce errores.',
  //   tech: [
  //     { class: 'django', name: 'Django' },
  //     { class: 'mysql', name: 'MySQL' },
  //     { class: 'html', name: 'HTML' },
  //     { class: 'css', name: 'CSS' },
  //     { class: 'javascript', name: 'JavaScript' }
  //   ]
  // },
  {
    link: '/proyectos/derejfood.html',
    badgeClass: 'comercio',
    badgeIcon: 'shopping-cart',
    badgeText: 'Comercio',
    image: '/imagenes/proyecto/df-dashboard-card.webp',
    title: 'DerejFood',
    description: 'Sistema web para restaurantes que centraliza ventas, inventario y pedidos. Gestiona tu restaurante de forma eficiente desde cualquier dispositivo.',
    tech: [
      { class: 'django', name: 'Django' },
      { class: 'mysql', name: 'MySQL' },
      { class: 'html', name: 'HTML' },
      { class: 'css', name: 'CSS' },
      { class: 'javascript', name: 'JavaScript' }
    ]
  }
];

// Función para renderizar los proyectos en el index.html
function renderProjects() {
  const grid = document.getElementById('projects-grid');
  if (!grid) return;
  
  // Limpiamos el grid por si acaso
  grid.innerHTML = '';
  
  // Generamos el HTML para cada proyecto desde el array
  const projectsHTML = projectsData.map(project => `
    <a href="${project.link}" class="project-card">
      <span class="project-badge ${project.badgeClass}">
        <svg class="icon"><use href="/svg/icons.svg#icon-${project.badgeIcon}"/></svg> ${project.badgeText}
      </span>
      <div class="project-image">
        <img src="${project.image}" alt="${project.title}" loading="lazy" width="340" height="200" />
        <div class="project-overlay">
          <svg class="icon"><use href="/svg/icons.svg#icon-external-link-alt"/></svg>
        </div>
      </div>
      <div class="project-content">
        <h3>${project.title}</h3>
        <p>${project.description}</p>
        <div class="project-tech">
          ${project.tech.map(t => `<span class="tech-tag ${t.class}">${t.name}</span>`).join('')}
        </div>
      </div>
    </a>
  `).join('');

  grid.innerHTML = projectsHTML;
}
