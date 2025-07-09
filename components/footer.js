function createFooter() {
  return `
    <!-- Footer -->
    <footer class="bg-dark text-white text-center py-4">
      <div class="container">
        <div class="row">
          <div class="col-md-6 text-md-start text-center">
            <p class="mb-0">&copy; 2024 InovaMed. Todos os direitos reservados.</p>
          </div>
          <div class="col-md-6 text-md-end text-center">
            <p class="mb-0">Conectando você à saúde que precisa</p>
          </div>
        </div>
      </div>
    </footer>
  `;
}

function loadFooter() {
  let footerContainer = document.getElementById('footer-container');
  if (!footerContainer) {
    footerContainer = document.createElement('div');
    footerContainer.id = 'footer-container';
    document.body.appendChild(footerContainer);
  }

  footerContainer.innerHTML = createFooter();
}
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { loadFooter };
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', function () {
    loadFooter();
  });
} else {
  loadFooter();
}
