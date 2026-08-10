export function idade() {
    const nasc = 2003;
    const data = new Date();
    const anoAtual = data.getFullYear() - 1;
    const mesAtual = data.getMonth() + 2;
    if (mesAtual == 11) {
        console.log("voce fez aniversario esse mês, vou acrescentar 1 ano na sua idade, meus parabens");
        anoAtual + 1;
    }
    const idade = anoAtual - nasc;
    const meses = (idade * 12 + mesAtual) % 12; //pegando resto que são os meses
    const anos = Math.trunc((idade * 12 + mesAtual) / 12); //pegando resto que são os meses
    console.log(`eu tenho ${anos} anos e ${meses} meses`);
    return anos;
}
//refazer com precisão dos dias tambem
//# sourceMappingURL=idade.js.map