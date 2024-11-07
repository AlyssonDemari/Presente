function calcularAnos(dataInicial) {
    const dataAtual = new Date();
    const anoAtual = dataAtual.getFullYear();
    const anoInicial = dataInicial.getFullYear();

    let anosPassados = anoAtual - anoInicial;

    if (
        dataAtual.getMonth() < dataInicial.getMonth() || 
        (dataAtual.getMonth() === dataInicial.getMonth() && dataAtual.getDate() < dataInicial.getDate())
    ) {
        anosPassados--;
    }

    if (anosPassados == 0) {
        document.getElementById('contadorAnos').textContent = `Ainda virão muitos anos pela frente`;
    } else if(anosPassados === 1){
        document.getElementById('contadorAnos').textContent =  `Já se passsou ${anosPassados} ano desde o nosso dia.`;
    } else{
        document.getElementById('contadorAnos').textContent = `Já se passaram ${anosPassados} anos.`;
    }

    return anosPassados;
}



let dataInicial = new Date("2024-09-14T17:34:10");
let horarioAtual = new Date();

let diferencaMs = horarioAtual - dataInicial;

let segundosTotais = Math.floor(diferencaMs / 1000);
let minutosTotais = Math.floor(segundosTotais / 60);
let horasTotais = Math.floor(minutosTotais / 60);
let dias = Math.floor(horasTotais / 24);

let horas = horasTotais % 24;
let minutos = minutosTotais % 60;
let segundos = segundosTotais % 60;

console.log(`Passaram-se ${dias} dias, ${horas} horas, ${minutos} minutos e ${segundos} segundos.`);

const anos =calcularAnos(dataInicial)
console.log(`Já se passaram ${anos} anos desde a data inicial.`);

document.getElementById('contadorDias').textContent = `Passaram-se ${dias} dias desde o nosso dia.`;

document.getElementById('contadorHoras').textContent = `Passram-se ${horas} horas desde o nosso dia.`;

document.getElementById('contadorMinutos').textContent = `Passram-se ${minutos} Minutos desde o nosso dia.`;

document.getElementById('contadorSegundos').textContent = `Passram-se ${segundos} Segundos desde o nosso dia.`;

