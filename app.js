const dataInicio = new Date('2024-09-14T17:34:10');

function calcularAnosPassados(dataInicial, dataAtual = new Date()) {
    let anosPassados = dataAtual.getFullYear() - dataInicial.getFullYear();

    const mesAtual = dataAtual.getMonth();
    const mesInicial = dataInicial.getMonth();
    const diaAtual = dataAtual.getDate();
    const diaInicial = dataInicial.getDate();

    if (mesAtual < mesInicial || (mesAtual === mesInicial && diaAtual < diaInicial)) {
        anosPassados--;
    } 

    
    return anosPassados;
}

function calcularMesesPassados(dataInicial, dataAtual = new Date()) {
    let mesesPassados = (dataAtual.getFullYear() - dataInicial.getFullYear()) * 12 + (dataAtual.getMonth() - dataInicial.getMonth());

    const diaAtual = dataAtual.getDate();
    const diaInicial = dataInicial.getDate();

    if (diaAtual < diaInicial) {
        mesesPassados--;
    }


    return mesesPassados;
}

function calcularDiasPassados(dataInicial, dataAtual = new Date()) {
    // Calcular a diferença em milissegundos
    const diferencaMilissegundos = dataAtual - dataInicial;

    // Converter milissegundos para dias
    const diasPassados = Math.floor(diferencaMilissegundos / (1000 * 60 * 60 * 24));

    return diasPassados;
}

function calcularHorasPassadas(dataInicial, dataAtual = new Date()) {
    // Calcular a diferença em milissegundos
    const diferencaMilissegundos = dataAtual - dataInicial;

    // Converter milissegundos para horas
    const horasPassadas = Math.floor(diferencaMilissegundos / (1000 * 60 * 60));

    return horasPassadas;
}

function calcularMinutosPassados(dataInicial, dataAtual = new Date()) {
    // Calcular a diferença em milissegundos
    const diferencaMilissegundos = dataAtual - dataInicial;

    // Converter milissegundos para minutos
    const minutosPassados = Math.floor(diferencaMilissegundos / (1000 * 60));

    return minutosPassados;
}

function calcularSegundosPassados(dataInicial, dataAtual = new Date()) {
    // Calcular a diferença em milissegundos
    const diferencaMilissegundos = dataAtual - dataInicial;

    // Converter milissegundos para segundos
    const segundosPassados = Math.floor(diferencaMilissegundos / 1000);

    if (segundosPassados === 0) {
        document.getElementById('contadorSegundos').textContent = `Ainda virão muitos segundos pela frente!`;
    } else if (segundosPassados === 1) {
        document.getElementById('contadorSegundos').textContent = `Se passou ${segundosPassados} segundo desde o nosso dia`;
    } else {
        document.getElementById('contadorSegundos').textContent = `Se passaram ${segundosPassados} segundos desde o nosso dia`;
    }

    return segundosPassados;
}



document.getElementById('contadorAnos').textContent = `Passaram-se ${calcularAnosPassados(dataInicio)} Anos desde o nosso dia.`;

document.getElementById('contadorMeses').textContent = `Passaram-se ${calcularMesesPassados(dataInicio)} meses desde o nosso dia.`;

document.getElementById('contadorDias').textContent = `Passaram-se ${calcularDiasPassados(dataInicio)} dias desde o nosso dia.`;

document.getElementById('contadorHoras').textContent = `Passaram-se ${calcularHorasPassadas(dataInicio)} horas desde o nosso dia.`;

document.getElementById('contadorMinutos').textContent = `Passaram-se ${calcularMinutosPassados(dataInicio)} minutos desde o nosso dia.`;

document.getElementById('contadorSegundos').textContent = `Passaram-se ${calcularSegundosPassados(dataInicio)} segundos desde o nosso dia.`;







