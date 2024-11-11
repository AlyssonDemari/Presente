let dataPedido = new Date('2024-09-14T17:34:10');
let dataAtual = new Date();

function calcularAnos() {
    let anosPassados = dataAtual.getFullYear() - dataPedido.getFullYear();
    
    if (
    dataAtual.getMonth() < dataPedido.getMonth() ||
    (dataAtual.getMonth() === dataPedido.getMonth() && dataAtual.getDate() < dataPedido.getDate())
    ) {
        anosPassados--; 
    }

    if(anosPassados == 0){
        console.log('Virão muitos anos')
        document.getElementById('contadorAnos').innerHTML= 'Ainda virão muitos anos '
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

    if (mesesPassados <= 0) {
        console.log('Virão muitos anos');
        document.getElementById('contadorMeses').innerHTML = 'Ainda virão muitos meses';
    } else if (mesesPassados === 1) {
        console.log(`Se passou ${mesesPassados} mês`);
        document.getElementById('contadorMeses').innerHTML = `Se passou ${mesesPassados} mês `;
    } else {
        console.log(`Se passaram ${mesesPassados} meses `);
        document.getElementById('contadorMeses').innerHTML = `Se passaram ${mesesPassados} meses `;
    }
}


calcularMeses();

function calcularDias() {
        
    let diferenca = dataAtual.getTime() - dataPedido.getTime();
    let dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));

    document.getElementById('contadorDias').innerHTML= `Se passou ${dias} dias `
    
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

    document.getElementById('contadorHoras').innerHTML= `Se passou ${horasTotais} horas `

    document.getElementById('contadorMinutos').innerHTML= `Se passou ${minutosTotais} minutos `

    document.getElementById('contadorSegundos').innerHTML= `Se passou ${segundosTotais} segundos  `

}

calcularHoras();

let count = 1; 
document.getElementById("radio1").checked = true;

setInterval( function(){
    nextImage();
}, 3500)

function nextImage(){
    count++; 
    if (count>4){
        count = 1
    }

    document.getElementById('radio'+count).checked = true
}