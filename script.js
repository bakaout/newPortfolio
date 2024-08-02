const $btnIdea = document.querySelector('.btnIdea')
const $teste = document.querySelector('.teste')

$btnIdea.addEventListener('click', () => {
    $teste.classList.toggle('teste2')
    $teste.removeAttribute('esconder')
})

const $copiaSenha = document.querySelector('.btnCopiar')
$copiaSenha.addEventListener('click', () => {
    let senha = 'me contratem!'
    navigator.clipboard.writeText(senha).then(() => {
        console.log('Deu certo, texto copiado')
    }).catch((erro) => {
        console.error('Deu errado', erro)
    })
})



const enviar = document.querySelector('#enviar')
let prosseguir = false
function auxiliaBtnEnviar(){
    verificaSenha();
}
const input = document.querySelector('.senha')
input.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        verificaSenha();
        console.log('Senha enviada');
        input.value = ''
    }
  });

function verificaSenha(){
    const inputValor = document.querySelector('.senha').value
    console.log(inputValor)
    if(inputValor == 'me contratem!'){
        window.open('./paginas/home.html', '_blank');
    }else{
        alert('Senha errada, tente novamente!')
        input.value = ''
    }
}

const frase = document.querySelector('#frase')
function digitando(elemento){
    const fraseSeparada = elemento.innerHTML.split('')//separando as letras e colocando em um array

    elemento.innerHTML = ''//limpando o array para que apareça apenas com o forEach

    //percorrer os indices e valores do array
    fraseSeparada.forEach((letra, index) => {
        setTimeout(() => {
            elemento.innerHTML += letra
        }, 100 * index)//aqui esta o segredo, a cada index que passa, o valor multiplica, fazendo com que a proxima letra apareça um pouco mais devagar com a impressando de digitando
    })
}
digitando(frase)