// App utilities for InovaMed
// Initialize the application with components

function initializeApp(currentPage = '') {
  // Load header component
  loadHeader(currentPage);

  // Load footer component
  loadFooter();

  // Initialize tooltips if needed
  const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
  const tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl);
  });
}

// Function to determine current page from URL
function getCurrentPage() {
  const path = window.location.pathname;
  const filename = path.split('/').pop();

  if (filename === '' || filename === 'index.html') return 'index';

  return filename.replace('.html', '');
}

// Auto-initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function () {
  const currentPage = getCurrentPage();
  initializeApp(currentPage);
});
