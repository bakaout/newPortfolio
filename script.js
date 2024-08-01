const $btnIdea = document.querySelector('.btnIdea')
const $teste = document.querySelector('.teste')

$btnIdea.addEventListener('click', () => {
    $teste.classList.toggle('teste2')
    $teste.removeAttribute('esconder')
})

const $copiaSenha = document.querySelector('.btnCopiar')
$copiaSenha.addEventListener(() => {
    let senha = 'me contratem!'
})