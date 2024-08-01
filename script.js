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