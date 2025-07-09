function createHeader() {
  return `
    <!-- Sidebar Navigation -->
    <nav id="sidebar" class="sidebar">
      <div class="sidebar-header">
        <div class="d-flex align-items-center">
          <i class="fas fa-heartbeat text-primary me-2 fs-4"></i>
          <h5 class="mb-0 text-white fw-bold">InovaMed</h5>
        </div>
        <button class="btn btn-link text-white d-md-none" id="sidebarToggle">
          <i class="fas fa-times"></i>
        </button>
      </div>
      
      <div class="sidebar-content">
        <ul class="nav flex-column">
          <li class="nav-item">
            <a class="nav-link" href="index.html" data-page="index">
              <i class="fas fa-home me-2"></i>
              <span>Início</span>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="hospital.html" data-page="hospital">
              <i class="fas fa-hospital me-2"></i>
              <span>Hospital Municipal</span>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="samu.html" data-page="samu">
              <i class="fas fa-ambulance me-2"></i>
              <span>SAMU</span>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="ubs.html" data-page="ubs">
              <i class="fas fa-clinic-medical me-2"></i>
              <span>UBS</span>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="upa.html" data-page="upa">
              <i class="fas fa-user-md me-2"></i>
              <span>UPA</span>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="servicos.html" data-page="servicos">
              <i class="fas fa-stethoscope me-2"></i>
              <span>Serviços</span>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="sobre.html" data-page="sobre">
              <i class="fas fa-info-circle me-2"></i>
              <span>Sobre</span>
            </a>
          </li>
        </ul>
      </div>
    </nav>

    <!-- Overlay for mobile -->
    <div class="sidebar-overlay d-md-none" id="sidebarOverlay"></div>

    <!-- Mobile Menu Toggle -->
    <button class="btn btn-primary mobile-menu-btn d-md-none" id="mobileMenuToggle">
      <i class="fas fa-bars"></i>
    </button>
  `;
}

function setActiveNavItem(currentPage) {
  document.querySelectorAll('.sidebar .nav-link').forEach(link => {
    link.classList.remove('active');
  });

  const currentLink = document.querySelector(`[data-page="${currentPage}"]`);
  if (currentLink) {
    currentLink.classList.add('active');
  }
}

function initializeHeader() {
  const sidebar = document.getElementById('sidebar');
  const mobileMenuToggle = document.getElementById('mobileMenuToggle');
  const sidebarToggle = document.getElementById('sidebarToggle');
  const sidebarOverlay = document.getElementById('sidebarOverlay');

  if (mobileMenuToggle) {
    mobileMenuToggle.addEventListener('click', function () {
      sidebar.classList.add('show');
      sidebarOverlay.classList.add('show');
    });
  }

  if (sidebarToggle) {
    sidebarToggle.addEventListener('click', function () {
      sidebar.classList.remove('show');
      sidebarOverlay.classList.remove('show');
    });
  }

  if (sidebarOverlay) {
    sidebarOverlay.addEventListener('click', function () {
      sidebar.classList.remove('show');
      sidebarOverlay.classList.remove('show');
    });
  }

  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });

  window.addEventListener('scroll', function () {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.sidebar .nav-link');

    let current = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      if (scrollY >= (sectionTop - 200)) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  });
}

function loadHeader(currentPage = '') {
  // Create a container for the header if it doesn't exist
  let headerContainer = document.getElementById('header-container');
  if (!headerContainer) {
    headerContainer = document.createElement('div');
    headerContainer.id = 'header-container';
    document.body.insertBefore(headerContainer, document.body.firstChild);
  }

  headerContainer.innerHTML = createHeader();

  if (currentPage) {
    setActiveNavItem(currentPage);
  }

  initializeHeader();
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { loadHeader, setActiveNavItem };
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', function () {
    loadHeader();
  });
} else {
  loadHeader();
}
