// 2. Escreva lerNumero(texto: string): number que lança um erro (função never) quando o texto não é um número válido


// function throwError (mensaagem: string):never{
// throw new Error(mensaagem);
// }
// function lerNumero(texto: string): number{
//     const numero = Number(texto);
//     if (texto.trim()==="" || !Number.isFinite(numero)){

//     }
//     return numero;
// }
// console.log(lerNumero("250"));



// // 3. Reescreva três funções do módulo de JavaScript Avançado com anotações apenas nas fronteiras e confirme os tipos inferidos no editor
// function precoFinal(preco,regraDesconto){
//     const comDesconto = regraDesconto(preco);
//     return +(comDesconto * 1.17). toFixed(2);
// }

// function precofinal2(preco: number,taxa: 1.16) : number{
// const comDesconto = Number(preco);
// return +(comDesconto * 1.17). toFixed
// }



//  4.Modele com tuplos o resultado de uma pesquisa paginada: [itens, total, temSeguinte] com nomes em cada posição
// type produto = {
// nome: string;
// preco: number;
// }

// type ResultadoPesquisa = [
// itens: produto[],
// total: number,
// temSeguinte: boolean

// ];

// const resultado: ResultadoPesquisa = [   
// [
// {nome: "Arroz", preco: 450},
// {nome: "oleo", preco: 150}
// ],


// ]


// 5. Escreva uma função que recebe unknown e devolve o preço em MT se o valor for um objecto com preco numérico, ou null caso contrário

function ObterPreco(valor: unknown): number | null {

if (
typeof valor === "object" &&
valor !== null &&
"preco" in  valor &&
typeof valor.preco === "number" &&
Number.isFinite(valor.preco)

){
    return valor.preco;
}
return null 















}