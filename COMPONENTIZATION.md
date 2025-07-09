# 🚀 InovaMed - Componentização do Header

## ✨ O que foi feito

A header (navegação lateral e superior) foi componentizada em um arquivo JavaScript separado para melhorar a manutenibilidade e evitar duplicação de código.

## 📁 Estrutura dos Componentes

```
components/
├── header.js          # Componente de navegação principal
├── footer.js          # Componente de rodapé (se aplicável)
└── (futuros componentes...)
```

## 🔧 Como funciona

### 1. **Arquivo de Componente (`components/header.js`)**
- Contém a função `createHeader()` que retorna o HTML da navegação
- Detecta automaticamente a página atual para destacar o menu ativo
- Inicializa todos os eventos necessários (toggle de sidebar, overlay, etc.)
- Carrega automaticamente quando o DOM está pronto

### 2. **Páginas HTML**
Todas as páginas agora seguem esta estrutura:

```html
<body>
  <!-- Header will be loaded here by JavaScript -->
  
  <!-- Main Content -->
  <main class="main-content">
    <!-- Conteúdo específico da página -->
  </main>
  
  <!-- Scripts -->
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"></script>
  <script src="components/header.js"></script>
  <script src="components/footer.js"></script>
  <!-- Outros scripts específicos da página -->
</body>
```

## ✅ Benefícios

1. **Manutenibilidade**: Alterar a navegação em um só lugar atualiza todas as páginas
2. **Consistência**: Garante que todas as páginas tenham a mesma estrutura de navegação
3. **Performance**: Reduz o tamanho dos arquivos HTML
4. **Desenvolvimento**: Mais fácil adicionar novas páginas ou modificar a navegação

## 🔄 Arquivos Refatorados

- ✅ `index.html`
- ✅ `hospital.html`
- ✅ `samu.html`
- ✅ `servicos.html`
- ✅ `sobre.html`
- ✅ `ubs.html`
- ✅ `upa.html` (já estava componentizado)

## 📋 Backups

Todos os arquivos originais foram salvos com extensão `.backup` antes da refatoração:
- `index.html.backup`
- `hospital.html.backup`
- `samu.html.backup`
- etc.

## 🚀 Próximos Passos

Para adicionar uma nova página ao sistema:

1. Crie o arquivo HTML seguindo a estrutura padrão
2. Inclua os scripts dos componentes
3. O header será carregado automaticamente
4. A página atual será destacada automaticamente no menu

## 🛠️ Personalizações

Para modificar a navegação:
1. Edite apenas o arquivo `components/header.js`
2. As mudanças serão aplicadas a todas as páginas automaticamente

## 📱 Responsividade

O componente mantém toda a funcionalidade responsiva:
- Menu lateral colapsável em dispositivos móveis
- Overlay para fechar o menu
- Botões de toggle funcionais
- Layout adaptativo

## 🔍 Debugging

Se alguma página não estiver carregando o header:
1. Verifique se o arquivo `components/header.js` está sendo carregado
2. Verifique o console do navegador para erros
3. Confirme se o caminho dos scripts está correto

---

**Versão**: 2.0  
**Data**: Julho 2025  
**Status**: ✅ Concluído
