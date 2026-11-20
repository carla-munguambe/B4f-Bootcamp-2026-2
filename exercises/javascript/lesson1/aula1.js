// 1 Escreva uma função copiarEncomenda(encomenda) que devolve uma cópia em que alterar o total não altera o original. Prove-o com console.log.
// 2 Dado const loja = { nome: "Beira Shop", contacto: { telefone: null } }, obtenha o email com ?. e ??, mostrando "Sem email" quando não existir.
// 3 Crie estatisticas(...valores) que devolve { minimo, maximo, media } e chame-a com spread a partir de um array de preços em MT.
// 4 Reescreva uma função com 5 parâmetros posicionais para receber um único objecto desestruturado com valores por omissão.
// 5 Divida o exercício anterior em dois módulos (calculos.js e main.js) e execute-o com node --watch.

1
let original ={client:"Carla",total:350};                             
let copy = buyorder(original);
copy.total = 1000

function buyorder(order){
    return{
        order
    }
}
console.log("copy",copy.total)



