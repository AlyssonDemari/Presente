let dataPedido = new Date('2024-09-14T17:34:10');
let dataAtual = new Date();

function calcularAnos() {
    let anosPassados = dataAtual.getFullYear() - dataPedido.getFullYear();
    const contAno = document.querySelector(".ANOS")
    
    if (
    dataAtual.getMonth() < dataPedido.getMonth() ||
    (dataAtual.getMonth() === dataPedido.getMonth() && dataAtual.getDate() < dataPedido.getDate())
    ) {
        anosPassados--; 
    }

    if(anosPassados == 0){
        contAno.style.display = 'none'
    } else if(anosPassados == 1){
        console.log('Se passou ${anosPassados} ano')
        document.getElementById('contadorAnos').innerHTML= `Se passou ${anosPassados} ano `
    } else {
        console.log(`se passou ${anosPassados} anos `)
        document.getElementById('contadorAnos').innerHTML= `Se passou ${anosPassados} anos `
    }
        
    
    return anosPassados;
}

calcularAnos();

function calcularMeses() {

    let mesesPassados = (dataAtual.getFullYear() - dataPedido.getFullYear()) * 12 + (dataAtual.getMonth() - dataPedido.getMonth());

    if (dataAtual.getDate() <= 14) {
        mesesPassados--;
    }
    if (mesesPassados < 0) {
        console.log('Virão muitos anos');
        document.getElementById('contadorMeses').innerHTML = 'Ainda virão muitos meses';
    } else if (mesesPassados === 1) {
        console.log(`Se passou ${mesesPassados} mês`);
        document.getElementById('contadorMeses').innerHTML = `${mesesPassados} `;
    } else {
        console.log(`Se passaram ${mesesPassados} meses`);
        document.getElementById('contadorMeses').innerHTML = `${mesesPassados}`;
    }
}


calcularMeses();

function calcularDias() {
        
    let diferenca = dataAtual.getTime() - dataPedido.getTime();
    let dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));

    document.getElementById('contadorDias').innerHTML= ` ${dias} `
    
    console.log("Se passou " + dias + ".");
    
}

calcularDias();


function calcularHoras(){

    let diferencaMs = dataAtual - dataPedido;

    let segundosTotais = Math.floor(diferencaMs / 1000);
    let minutosTotais = Math.floor(segundosTotais / 60);
    let horasTotais = Math.floor(minutosTotais / 60);
    let dias = Math.floor(horasTotais / 24);

    let horas = horasTotais % 24;
    let minutos = minutosTotais % 60;
    let segundos = segundosTotais % 60;

    document.getElementById('contadorHoras').innerHTML= ` ${horasTotais}  `

    document.getElementById('contadorMinutos').innerHTML= ` ${minutosTotais}  `

    document.getElementById('contadorSegundos').innerHTML= ` ${segundosTotais}   `

}

calcularHoras();

function calcularBeijo(){

    const dataBeijo = new Date('2024-05-21');
    const diferencaEmMilissegundos = dataAtual - dataBeijo;

    const milissegundosPorDia = 24 * 60 * 60 * 1000;
    const diferencaEmDias = Math.floor(diferencaEmMilissegundos / milissegundosPorDia);

    console.log(`Já se passaram ${diferencaEmDias} dias desde 21/05/2024.`);
    document.getElementById('contadorBeijos').innerHTML= `Se passou ${diferencaEmDias} dias desde o nosso primeiro beijo`
    
}

calcularBeijo()

 
