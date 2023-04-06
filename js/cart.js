
//Carrinho de compras

var valortotal=[0,0]
var valorProduto=[50.00,30.00]
var qtd = [0,0]


// adiciona itens no carrinho
function adicionarItem(item){

    var quantidade = document.getElementById("quantidade"+item);
    var total = document.getElementById("total"+item)
    qtd [item]+= 1;
    valortotal[item]= Number.parseFloat(valorProduto[item])*qtd[item];
    quantidade.innerHTML = qtd[item];
    total.innerHTML = valortotal[item].toFixed(2);
    valorCompra()



}

//remove itens do carrinho
function removerItem(item){

    if(qtd[item]>0){

       qtd[item]-=1
       
       var quantidade = document.getElementById("quantidade" + item);
       var total = document.getElementById("total" + item)
       quantidade.innerHTML = qtd[item]
       valortotal[item] = Number.parseFloat(valorProduto[item]) * qtd[item];
       total.innerHTML = valortotal[item].toFixed(2);
       valorCompra()


    }
}

// calcula valor da compra
function valorCompra(){

    var valortotalcompra = document.getElementById("valortotalcompra")
    var valor = 0;

    for( var  i = 0; i < valortotal.length; i++){
        valor += valortotal[i];



    }

    valortotalcompra.innerHTML = valor.toFixed(2);


}
