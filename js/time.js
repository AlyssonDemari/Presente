let dataPedido = new Date('2024-09-14T17:34:10');
let dataAtual = new Date();

function calcularAnos() {
    const containerAnos = document.querySelector(".ANOS");
    const textoAnos = document.querySelector(".anos");  
    const headerAno = document.querySelector(".headerAno");
    
    // Calcula a diferença em anos
    let anosPassados = dataAtual.getFullYear() - dataPedido.getFullYear();
    
    // Ajusta se ainda não chegou o aniversário da data neste ano
    if (dataAtual.getMonth() < dataPedido.getMonth() || 
        (dataAtual.getMonth() === dataPedido.getMonth() && dataAtual.getDate() < dataPedido.getDate())) {
        anosPassados--;
    }
    
    // Exibição do resultado
    if (anosPassados <= 0) {
        containerAnos.style.display = 'none';
    } else {
        containerAnos.style.display = 'block'; // Garante que está visível
        textoAnos.textContent = ` ${anosPassados} ano${anosPassados !== 1 ? 's' : ''}`;
        headerAno.textContent = ` Ano${anosPassados !== 1 ? 's' : ''}`;
    }
    
    return anosPassados;
}
// Chama a função quando a página carrega
window.addEventListener('DOMContentLoaded', calcularAnos);

function calcularMeses() {
    const containerMeses = document.querySelector(".MESES"); // Div principal
    const textoMeses = document.querySelector(".meses");    // Elemento h2 onde o texto será colocado
    const headerMes = document.querySelector(".headerMeses"); // Elemento h2 para o cabeçalho
    
    // Calcula a diferença total em meses
    let mesesPassados = (dataAtual.getFullYear() - dataPedido.getFullYear()) * 12 + 
    (dataAtual.getMonth() - dataPedido.getMonth());
    
    // Ajusta se o dia atual é menor que o dia do pedido
    if (dataAtual.getDate() < dataPedido.getDate()) {
        mesesPassados--;
    }
    
    // Exibição do resultado
    if (mesesPassados <= 0) {
        containerMeses.style.display = 'none';
    } else {
        containerMeses.style.display = 'block';
        textoMeses.textContent = mesesPassados === 1 ? 
            `${mesesPassados} MÊS` : 
            `${mesesPassados} MESES`;
            headerMes.textContent = ` MES${mesesPassados !== 1 ? 'ES' : ''}`;
    }
    
    return mesesPassados;
}

window.addEventListener('DOMContentLoaded', function() {
    calcularAnos(); // Sua função anterior
    calcularMeses(); // Esta função
});

function calcularDias() {
        
    let diferenca = dataAtual.getTime() - dataPedido.getTime();
    let dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));
    const textDias = document.querySelector('.dias');

    textDias.innerHTML= ` ${dias} dias`
    
    console.log("Se passou " + dias + ".");
    
}

calcularDias();


function calcularHoras(){
    const textHoras = document.querySelector('.horas');
    const textoMinutos = document.querySelector('.minutos');
    const textSegundos = document.querySelector('.segundos');

    let diferencaMs = dataAtual - dataPedido;

    let segundosTotais = Math.floor(diferencaMs / 1000);
    let minutosTotais = Math.floor(segundosTotais / 60);
    let horasTotais = Math.floor(minutosTotais / 60);
    let dias = Math.floor(horasTotais / 24);

    let horas = horasTotais % 24;
    let minutos = minutosTotais % 60;
    let segundos = segundosTotais % 60;

    textHoras.innerHTML= ` ${horasTotais} horas `

    textoMinutos.innerHTML= ` ${minutosTotais} minutos `

    textSegundos.innerHTML= ` ${segundosTotais} segundos  `

}

calcularHoras();

function calcularBeijo(){
    const textBeijo = document.querySelector('.textBeijo');

    const dataBeijo = new Date('2024-05-21');
    const diferencaEmMilissegundos = dataAtual - dataBeijo;

    const milissegundosPorDia = 24 * 60 * 60 * 1000;
    const diferencaEmDias = Math.floor(diferencaEmMilissegundos / milissegundosPorDia);

    console.log(`Já se passaram ${diferencaEmDias} dias desde 21/05/2024.`);
    textBeijo.innerHTML= `${diferencaEmDias} dias desde o nosso primeiro beijo`
    
}

calcularBeijo()

 
