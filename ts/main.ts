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
import type { GitHubUser } from "./services/github.js"
import type { Repositorio } from "./services/github.js"
import type { Language_url } from "./services/github.js"
import { loadUser } from "./services/github.js"
import { loadRepos } from "./services/github.js"
import { LoadLanguages } from "./services/github.js"

async function main() {
    const user = await loadUser()
    const repos = await loadRepos()

        //peganddo as linguagens dos repositorios
        for (const projeto of repos){
        const linguagens = await LoadLanguages(projeto.languages_url)
        
        //console.log('fora da função')

        repositorios(projeto, linguagens)
        
    }

    infos(user)
    //repositorios(repos)

    console.log(user)
    console.log(repos)
}
main()

//PROXIMA FEATURE: INCREMENTAR LINGUAGENS QUE FORAM USADAS NOS REPOSITORIOS





//REPOSITORIOS BBAKAOUT COM NOME, DESCRIÇÃO, ULTTIMO COMMIT
//Obs: deixar repositorios em ordem de ultimo commit e adicionar mais informações, adicionar bottão de redirecionamento ao github ouu aplicação rodando
async function repositorios(projetos: Repositorio, linguagens: any): Promise<void> {
    //console.log(projetos[0]?.id)
        const divRepos = document.querySelector("#repositorios")
        const div = document.createElement('div')
        
        div.className = 'projetos'
        div.innerHTML = `
            <h1>${projetos.name}</h1>
            <p>${projetos.description}</p>
            <p>${projetos.pushed_at}</p>
            <p>${Object.keys(linguagens)}</p>
        `
        divRepos?.appendChild(div)    
}


//INFORMAÇÕES DO PERFIL BBAKAOUT
function infos(meuPerfil: GitHubUser): void {
    const avatar = document.querySelector('.avatar') as HTMLImageElement
    const h1 = document.querySelector('.titulo') as HTMLHeadingElement
    const bio = document.querySelector('.bio') as HTMLHeadingElement
    const repo = document.querySelector('.repo') as HTMLHeadingElement

    if (h1) h1.textContent = meuPerfil.name
    if (bio) bio.textContent = meuPerfil.bio
    if (repo) repo.textContent = `Repositórios: ${meuPerfil.public_repos.toString()}`//forçando a se tornar string
    if(avatar) avatar.setAttribute('src', `${meuPerfil.avatar_url}`)

}

const $btnArquivo = document.querySelector<HTMLButtonElement>('.btnArquivo')
const $alteraClasse = document.querySelector('.alteraClasse') as HTMLHeadingElement

//troca a classe 'alteraClasse' por 'arquivoAberto' e remove a classe 'esconder' 
$btnArquivo?.addEventListener('click', () => {
    $alteraClasse?.classList.toggle('arquivoAberto')
    if( $alteraClasse?.classList.value === 'escoder'){
        $alteraClasse?.classList.remove('esconder')
    }
})

//função de copiar a senha para a area de transferencia
const senha: string = 'me contratem'//senha da dinamica

const $copiaSenha = document.querySelector<HTMLButtonElement>('.btnCopiar')
$copiaSenha?.addEventListener('click', () => {
    navigator.clipboard.writeText(senha).then(() => {
        console.log('Deu certo, texto copiado')
    }).catch((erro: unknown) => {
        console.log('Deu errado', erro)
    })
})

//caso não queira entrar na dinamica, apenas pula para pagina
const $btnPular = document.querySelector<HTMLButtonElement>('.btnPular')
    $btnPular?.addEventListener('click', () => {
       window.open('../paginas/home.html', '_self') 
    })


//função do botão enviar
const senhaInserida = document.querySelector<HTMLInputElement>('.senha')

function btnEnviaSenha(): void{
    verificaSenha()
    senhaInserida?.addEventListener('keypress', function(event) {
        if(event.key === 'Enter'){
            console.log('Senha enviada')
            senhaInserida.value = ''
        }
    })
}


//criando logica de validação de senha e redirecionamento para pagina home
function verificaSenha(): void{

    //eliminando a possibilidade de senhaInserida ser nulla
    if(!senhaInserida){
        return
    }else if(senhaInserida.value === senha){
        window.open('../paginas/home.html', '_self')
        senhaInserida.value = ''
    }else{
        alert('Senha errada, vocês tem que me contratar')
        senhaInserida.value = ''
    }
}


//criação da função 'digitando'
const frase = document.querySelector<HTMLHeadingElement>('#frase')

function digitando(digit: HTMLElement): void{
    //separando as letras por espaço e colocando em um array
    const fraseSplit = digit.textContent?.split('')
    //limpando o array para que apareça apenas com o forEach
    digit.textContent = ''
    fraseSplit.forEach((letra, index) => {
        setTimeout(() => {
            digit.textContent += letra
        }, 100 * index)//aqui esta o segredo, a cada index que passa, o valor multiplica, fazendo com que a proxima letra apareça um pouco mais devagar com a impressando de digitando
    })
}

if(frase){
    digitando(frase)
}
