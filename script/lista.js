let material = document.getElementById('material');
let preço = document.getElementById('preço');
let quantidade = document.getElementById('quantidade');
let resposta = document.getElementById('resposta');
let total = 0;

function verificar(){

    if(preço.value.length != 0 && quantidade.value.length != 0 && material.value.length != 0){
        
        total +=   parseFloat(Number(preço.value*quantidade.value).toFixed(2)) 

        resposta.innerHTML += `${material.value}: R$${preço.value} x R$${quantidade.value} = ${preço.value*quantidade.value} 
        <br> Preço total: R$${total} <br><br>`

        material.value = ''
        material.focus()

    }
    else{alert('Preencha os campos')}



   
} 