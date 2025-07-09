function initializeApp(currentPage = '') {

  loadHeader(currentPage);
  loadFooter();

  const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
  const tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl);
  });
}

function getCurrentPage() {
  const path = window.location.pathname;
  const filename = path.split('/').pop();

  if (filename === '' || filename === 'index.html') return 'index';

  return filename.replace('.html', '');
}

document.addEventListener('DOMContentLoaded', function () {
  const currentPage = getCurrentPage();
  initializeApp(currentPage);
});
