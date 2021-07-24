let material = document.getElementById('material');
let preço = document.getElementById('preço');
let quantidade = document.getElementById('quantidade');
let resposta = document.getElementById('resposta');
let total = 0;

function verificar(){

    if(preço.value.length != 0 && quantidade.value.length != 0 && material.value.length != 0){
        total += Number(preço.value*quantidade.value);
        resposta.innerHTML += `${material.value}: ${preço.value} x ${quantidade.value} = ${preço.value*quantidade.value} preço total: ${total}<br>`
    }
    else{alert('Preencha os campos')}
} 