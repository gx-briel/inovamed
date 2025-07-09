// Script de refatoração para remover header e footer dos arquivos HTML
// Este script deve ser executado uma vez para cada arquivo HTML

// Regex patterns para identificar e remover seções
const HEADER_PATTERN = /<!-- Sidebar Navigation -->[\s\S]*?<!-- Mobile Menu Toggle -->\s*<button[^>]*id="mobileMenuToggle"[^>]*>[\s\S]*?<\/button>/;
const FOOTER_PATTERN = /<!-- Footer -->[\s\S]*?<\/footer>/;
const SCRIPT_PATTERN = /<script>\s*\/\/ Sidebar functionality[\s\S]*?<\/script>/;

// Função para refatorar um arquivo HTML
function refactorHTMLFile(content) {
  let refactoredContent = content;
  
  // Remove header section
  refactoredContent = refactoredContent.replace(HEADER_PATTERN, '<!-- Header will be loaded here by JavaScript -->');
  
  // Remove footer section
  refactoredContent = refactoredContent.replace(FOOTER_PATTERN, '<!-- Footer will be loaded here by JavaScript -->');
  
  // Remove old JavaScript
  refactoredContent = refactoredContent.replace(SCRIPT_PATTERN, '');
  
  // Add new script imports before closing body tag
  refactoredContent = refactoredContent.replace(
    '</body>',
    `  <!-- Scripts -->
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"></script>
  <script src="components/header.js"></script>
  <script src="components/footer.js"></script>
  <script src="js/app.js"></script>
</body>`
  );
  
  return refactoredContent;
}

// Lista de arquivos para refatorar
const filesToRefactor = [
  'index.html',
  'hospital.html', 
  'samu.html',
  'ubs.html',
  'servicos.html',
  'sobre.html'
];

console.log('Script de refatoração criado!');
console.log('Para aplicar, você pode usar este script manualmente ou aplicar as mudanças uma por uma.');
console.log('Arquivos para refatorar:', filesToRefactor);
