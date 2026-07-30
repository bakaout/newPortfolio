"use strict";
//FUNCIONALIDADES QUE QUERO IMPLEMENTAR:
// - alterar para um projeto typescript com node.js
//criar um contaddor de visitas com algumas funcionalidades
//na aba de projetos, usar a api do github para pegar meus projetos, atualizações, tecnologias usadas, datas, read.me formatados direto no site, entre outras
//manter a ideia original do projeto de ser parecido com o ambiente de uma area de trabalho
// paginas: sobre mim, Jornada, Projetos (utilizando api github)
// botao de baixar curriculo na area de Jornada
// tema claro escuro
// navegação pela tool bar
// mudança de portugues para ingles
const $btnArquivo = document.querySelector('.btnArquivo');
const $alteraClasse = document.querySelector('.alteraClasse');
//troca a classe 'alteraClasse' por 'arquivoAberto' e remove a classe 'esconder' 
$btnArquivo?.addEventListener('click', () => {
    $alteraClasse?.classList.toggle('arquivoAberto');
    if ($alteraClasse?.classList.value === 'escoder') {
        $alteraClasse?.classList.remove('esconder');
    }
    else {
        $alteraClasse?.classList.value === 'esconder';
    }
});
//função de copiar a senha para a area de transferencia
const senha = 'me contratem'; //senha da dinamica
const $copiaSenha = document.querySelector('.btnCopiar');
$copiaSenha?.addEventListener('click', () => {
    navigator.clipboard.writeText(senha).then(() => {
        console.log('Deu certo, texto copiado');
    }).catch((erro) => {
        console.log('Deu errado', erro);
    });
});
//caso não queira entrar na dinamica, apenas pula para pagina
const $btnPular = document.querySelector('.btnPular');
$btnPular?.addEventListener('click', () => {
    window.open('../paginas/home.html', '_self');
});
//função do botão enviar
//criando logica de validação de senha e redirecionamento para pagina home
const senhaInserida = document.querySelector('.senha');
function verificaSenha() {
    const valorInput = senhaInserida?.value;
    //eliminando a possibilidade de senhaInserida ser nulla
    if (!senhaInserida) {
        return;
    }
    else if (valorInput === 'senha') {
        window.open('../paginas/home.html', '_self');
        senhaInserida.value = '';
    }
    else {
        alert('Senha errada, vocês tem que me contratar');
        senhaInserida.value = '';
    }
}
//# sourceMappingURL=main.js.map