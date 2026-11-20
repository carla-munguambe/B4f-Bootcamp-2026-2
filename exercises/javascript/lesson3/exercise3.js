import vendas from "./vendas.json" with {type: "json"};

const object = vendas;


console.table(vendas.slice(0,5))

//exercicio2

const calcularTotal = () => {
const totalCidade = vendas.map((venda) => {
const total = venda.produtos.reduce((acc, item) => acc + item.preco * item.quantidade,0);

return{
    cidade: venda.cidade,
    total,
    Data: venda.data
};
});
const agrupar = totalCidade.reduce ((acc, item))







};
