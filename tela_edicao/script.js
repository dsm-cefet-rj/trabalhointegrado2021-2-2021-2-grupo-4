var section = window.document.getElementsByTagName('section');
var telaAtual = 1;
var nome = "";

function mostraTela(tela) {
    switch(tela) {
        case 'painel-prof':
            telaAtual = 2;
            section[0].hidden = false;            
            section[1].hidden = true;
            break;
        case 'exportacao':
            telaAtual = 3;
            section[0].hidden = true;           
            section[1].hidden = false;
            break;
        default:
            telaAtual = 1;
            section[0].hidden = false;           
            section[1].hidden = true;
            break;
    }
}

function salvar() {
    console.log('Salvando dados do painel...');
}

function exportar() {
    console.log('Gerando excel...');
}