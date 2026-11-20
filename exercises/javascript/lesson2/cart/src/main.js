function criarCarrinha() {
    const carrinha = [
        {
            //id: 1,
            nome: "Caneta",
            preco: 15,
            quantidade: 24
        },
        {
            //id: 2,
            nome: "Caderno",
            preco: 50,
            quantidade: 30
        },
    ]

    return {
        adicionar: (item) => {
            carrinha.push(item);
            console.log(carrinha)
        },
        remover: (name) => {
            let removed = carrinha.filter(carrinha => carrinha.nome !== name)
            console.log(removed);


        },
       
        limpar: () => {
            carrinha.length = 0
          console.log("carinha Limpa", carrinha)
        },
        itens: carrinha
    }
}
//
const carrinhaCoronel = criarCarrinha()
console.log("Antes de adicionar item")
console.log(carrinhaCoronel.itens)
carrinhaCoronel.adicionar({nome: "Agrafador", preco: 200, quantidade: 30})
carrinhaCoronel.remover("Caneta");
carrinhaCoronel.limpar();


const copiarEncomenda=(en) =>{
    return {...en}
}
const encomenda= {
    nome: "bom bom",
    price:  15,
    quantidade: 3,
    total: 45
}
const copiaEncomenda= copiarEncomenda(encomenda)
copiaEncomenda.nome="que bom"
copiaEncomenda.price=20
copiaEncomenda.quantidade= 4000

console.table(encomenda)
console.table(copiaEncomenda) //criar copia encomenda.



const loja = { nome: "Beira Shop", 
    contacto: { 
        telefone: null } 
}

console.log(loja.contacto?.email??"sem email") //?? sem email invez d undefind


function estatisticas(...valores){
const min = Math.min(...valores)
const max = Math.max(...valores)
const avg = valores.reduce((total, current)=>
(total+current)) / valores.length
return {
    min: min,                             
    maximo : max,
    media: avg

}}
console.log(estatisticas(10,13,15,17,14)) //Crie estatisticas(...valores) que devolve { minimo, maximo, media }



// function criarProducto ({id=0,name="undefined",preco=0,categoria="undefined",descicao="undefined"}){
// return {id,name,preco,descicao,categoria}
// }                                                                    
// const producto = criarProducto ({id:1,name:"banana",})
// console.log(producto)//Reescreva uma função com 5 parâmetros posicionais para receber um único objecto 


// const criarContador = (initialValue = 0 ) =>{
//     let valor = initialValue
//     return{
// incrementar :() => ++valor
//     }
// }
// const novoContador = criarContador()
// console.log(novoContador.incrementar())//Reescreva uma função com 5 parâmetros posicionais para receber um único objecto



// function criarFormatador(moeda, casas =2){
//     return (valor) => `${valor . toFIXED(casas)} ${moeda}`
// }
// const valorMNZ = criarFormatador("MNZ")
// console.log(valorMNZ(200))// CONTADOR



