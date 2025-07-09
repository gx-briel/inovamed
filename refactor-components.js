// Script para refatorar arquivos HTML e usar componentes
const fs = require('fs');
const path = require('path');

// Lista de arquivos HTML para refatorar
const htmlFiles = [
    'index.html',
    'hospital.html',
    'samu.html',
    'servicos.html',
    'sobre.html',
    'ubs.html'
];

// Função para encontrar e remover a seção de header/sidebar
function removeHeaderSection(content) {
    // Remove desde o início da nav sidebar até o fim do mobile overlay
    const sidebarStart = content.indexOf('<!-- Sidebar Navigation -->') || content.indexOf('<nav id="sidebar"');
    const overlayEnd = content.indexOf('</div>', content.indexOf('mobile-overlay')) + 6;

    if (sidebarStart !== -1 && overlayEnd !== -1) {
        return content.substring(0, sidebarStart) + '\n\n' + content.substring(overlayEnd);
    }

    return content;
}

// Função para adicionar os scripts necessários
function addComponentScripts(content) {
    const scriptSection = content.indexOf('<!-- Scripts -->');
    const bootstrapScript = content.indexOf('<script src="https://cdn.jsdelivr.net/npm/bootstrap');

    if (scriptSection !== -1) {
        // Adiciona após a seção Scripts
        const insertPoint = content.indexOf('\n', scriptSection);
        return content.substring(0, insertPoint) +
            '\n  <script src="components/header.js"></script>' +
            '\n  <script src="components/footer.js"></script>' +
            content.substring(insertPoint);
    } else if (bootstrapScript !== -1) {
        // Adiciona após o script do Bootstrap
        const insertPoint = content.indexOf('\n', content.indexOf('</script>', bootstrapScript)) + 1;
        return content.substring(0, insertPoint) +
            '  <script src="components/header.js"></script>\n' +
            '  <script src="components/footer.js"></script>\n' +
            content.substring(insertPoint);
    }

    return content;
}

// Função para processar cada arquivo
function refactorFile(filename) {
    const filePath = path.join(__dirname, filename);

    try {
        let content = fs.readFileSync(filePath, 'utf8');

        console.log(`Processando ${filename}...`);

        // Remove a seção de header
        content = removeHeaderSection(content);

        // Adiciona os scripts dos componentes
        content = addComponentScripts(content);

        // Cria backup
        fs.writeFileSync(filePath + '.backup', fs.readFileSync(filePath));

        // Salva o arquivo refatorado
        fs.writeFileSync(filePath, content);

        console.log(`✅ ${filename} refatorado com sucesso!`);

    } catch (error) {
        console.error(`❌ Erro ao processar ${filename}:`, error.message);
    }
}

// Função principal
function main() {
    console.log('🚀 Iniciando refatoração dos arquivos HTML...\n');

    htmlFiles.forEach(refactorFile);

    console.log('\n✨ Refatoração concluída!');
    console.log('📝 Backups criados com extensão .backup');
    console.log('🔧 Verifique se todos os arquivos estão funcionando corretamente');
}

// Executar apenas se chamado diretamente
if (require.main === module) {
    main();
}

module.exports = { refactorFile, removeHeaderSection, addComponentScripts };
