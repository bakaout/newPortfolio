//FUNCIONALIDADES QUE QUERO IMPLEMENTAR:
// - alterar para um projeto typescript com node.js
//criar um contaddor de visitas com algumas funcionalidades
//na aba de projetos, usar a api do github para pegar meus projetos, atualizações, tecnologias usadas, datas, read.me formatados direto no site, entre outras
//manter a ideia original do projeto de ser parecido com o ambiente de uma area de trabalho
import { loadUser } from "./services/github.js";
import { loadRepos } from "./services/github.js";
async function main() {
    const user = await loadUser();
    const repos = await loadRepos();
    infos(user);
    repositorios(repos);
    console.log(user);
    console.log(repos);
}
main();
//INSERIR LOGICA DE: A CADA PROJETO CRIADO, CRIAR UMA DIV COM AS INFORMAÇÕES DESSE PROJETO
//Corrigir bug do pq não estar aparecendo as informações dos repositorios nas paginas. Obs: loadRepos retorna um array mas a função esa esperando outra informação. corrijir isto
function repositorios(projetos) {
    const project_id = document.querySelector('#project_id');
    const nameProjeto = document.querySelector('.nameP');
    const descProjeto = document.querySelector('.descP');
    //const languagesProjeto = document.querySelector('.languagesP') as HTMLHeadingElement
    const lastCommit = document.querySelector('.lastCommit');
    if (nameProjeto)
        nameProjeto.textContent = projetos.name;
    if (descProjeto)
        descProjeto.textContent = projetos.description;
    if (lastCommit)
        lastCommit.textContent = projetos.pushed_at;
}
function infos(meuPerfil) {
    const avatar = document.querySelector('.avatar');
    const h1 = document.querySelector('.titulo');
    const bio = document.querySelector('.bio');
    const repo = document.querySelector('.repo');
    if (h1)
        h1.textContent = meuPerfil.name;
    if (bio)
        bio.textContent = meuPerfil.bio;
    if (repo)
        repo.textContent = meuPerfil.public_repos.toString(); //forçando a se tornar string
    if (avatar)
        avatar.setAttribute('src', `${meuPerfil.avatar_url}`);
}
const $btnArquivo = document.querySelector('.btnArquivo');
const $alteraClasse = document.querySelector('.alteraClasse');
//troca a classe 'alteraClasse' por 'arquivoAberto' e remove a classe 'esconder' 
$btnArquivo?.addEventListener('click', () => {
    $alteraClasse?.classList.toggle('arquivoAberto');
    if ($alteraClasse?.classList.value === 'escoder') {
        $alteraClasse?.classList.remove('esconder');
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
const senhaInserida = document.querySelector('.senha');
function btnEnviaSenha() {
    verificaSenha();
    senhaInserida?.addEventListener('keypress', function (event) {
        if (event.key === 'Enter') {
            console.log('Senha enviada');
            senhaInserida.value = '';
        }
    });
}
//criando logica de validação de senha e redirecionamento para pagina home
function verificaSenha() {
    //eliminando a possibilidade de senhaInserida ser nulla
    if (!senhaInserida) {
        return;
    }
    else if (senhaInserida.value === senha) {
        window.open('../paginas/home.html', '_self');
        senhaInserida.value = '';
    }
    else {
        alert('Senha errada, vocês tem que me contratar');
        senhaInserida.value = '';
    }
}
//criação da função 'digitando'
const frase = document.querySelector('#frase');
function digitando(digit) {
    //separando as letras por espaço e colocando em um array
    const fraseSplit = digit.textContent?.split('');
    //limpando o array para que apareça apenas com o forEach
    digit.textContent = '';
    fraseSplit.forEach((letra, index) => {
        setTimeout(() => {
            digit.textContent += letra;
        }, 100 * index); //aqui esta o segredo, a cada index que passa, o valor multiplica, fazendo com que a proxima letra apareça um pouco mais devagar com a impressando de digitando
    });
}
if (frase) {
    digitando(frase);
}
//# sourceMappingURL=main.js.map