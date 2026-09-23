"use strict";
const content = {
    whoami: "Meu nome é João Victor, tenho 22 anos. Atualmente estudo arquitetura de APIs REST, autenticação, banco de dados SQL e boas práticas de desenvolvimento.Também atuo como freelancer desenvolvendo sites e soluções para pequenos negócios, o que me permitiu desenvolver habilidades de comunicação com clientes e resolução de problemas.Busco uma oportunidade de emprego onde eu possa contribuir com projetos reais enquanto continuo evoluindo tecnicamente.",
    myjourney: "Escrever mais sobre minha jornada...",
    tecnologys: "Escrever mais sobre tecnologias do meu conhecimento...",
    whathaveibeenstudying: "Escrever mais sobre meus estudos"
};
const $pasta = document.querySelectorAll('.pasta');
const $alteraClasse = document.querySelector('.alteraClasse');
const $popup = document.querySelector('.popup');
$pasta.forEach((pastas) => {
    console.log(pastas);
    pastas.addEventListener('click', () => {
        const arquivo = pastas.dataset.arquivo;
        if ($popup) {
            $popup.textContent = content[arquivo];
        }
        $alteraClasse?.classList.toggle('arquivoAberto');
        if ($alteraClasse?.classList.value === 'escoder') {
            $alteraClasse?.classList.remove('esconder');
        }
    });
});
// $whoamiButton?.addEventListener('click', () => {
//     $alteraClasse?.classList.toggle('arquivoAberto')
//     if( $alteraClasse?.classList.value === 'escoder'){
//         $alteraClasse?.classList.remove('esconder')
//     }
// })
//# sourceMappingURL=esconderDiv.js.map