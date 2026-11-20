import { isNumber, isBalanceEnough, verifyPin } from "./utulls.js";

let balance = 3479.87;
let pin = 1522;
let agentCode = 67836;
let confirmation = 1;

/*=======================================================================================================
1.Funçao definida para validação de caractér:

Esta função tem como objectivo de verificar os  caractéres no nosso sistema se é um número ou 
qualquer outro tipo de caractér.incluido espaços,vírgulas,pontos,etc.iremos utilizar durante a criação do sistema da 
compra de credelec, uma vez que não pretendemos inserir algum outro tipo de caractér que não seja um número.  
*/


//Fim da função;

/*=========================================================================================================
2.Função definida para validação de saldo:

Esta função tem como objectivo de validar o saldo do usuário antes da conclusão da compra após inserir o valor
que desejar pagar durante a transação da compra de credelec.iremos utilizar esta função durante a criaçã do sistema,
uma vez que para comprar um determinado produto deve haver algum fundo (dinheiro).
*/
//Fim função;



/*==========================================================================================================
4.Função definida para verificar o valor minímo de compra:

esta função tem como objectivo de verificar se o valor da compra que o usuário pretende inserir é correspondente
ao valor minímo declarado no sistema de compra de credelec.uma vez cobrada as taxas de impostos na compra de energia.
*/
function minValue(value) {
  return value >= 20;
}
//Fim função

/*============================================================================================================
5.Função definida para confirmações:

Esta Função tem como objectivo de confirmar qualquer transação do nosso sistena de credelec.Usada  para  facilitar usuario 
durante o processo de compra de energia (credelec). ela confirma a compra e confirmar se os dados do usuario.
*/
function confirmationOption(value){
  return value == confirmation
}
//Fim função

/*=============================================================================================================
6.Função definida para verificar os dados no array de objectos:

Esta função tem como objectivo de verificar os dados de cada contatador na nossa "Base de dados"incluindo o seu numero
nome, e ID, resgistrado na "EDM".
*/
const findCounter = (numero) => {

  const findContador = contadores.find((contador) => {

    return contador.number == numero;

  });

  return findContador;
};

//Fim função


/* ================================================================================================================
7.Constante definida para menú principal:

Esta constante foi definida como um menú principal,poderá ser usada no switch case,com intenção de facilitar 
o usuário escolher  qual das operações pretende efectuar consoante ao menú.
 */


//Fim switch case





function choose() {

/* ================================================================================================================
9.Constante definida para menú da compra Credelec:

Esta constante foi definida como um menú do Credelec,poderá ser usada no switch case,com intenção de facilitar 
o usuário escolher  qual das operações pretende efectuar consoante ao menú.
 */
  const option3 = prompt(`Comprando credelec:
                             
                        1.Introduz o numero do contador
                        2.Ultima compra
                        3.Gerir contador
                        4.Menu principal`);
/*=================================================================================================================
10.Switch case a caixa das opções:

Este é o switch case que foi definido para colocar a nossa constante do menú da compra de credelec após o usuario escolher opção
3 no menú principal.
*/

  if (isNumber(option3)) {
    switch (Number(option3)) {
      case 1:
        buyCredelec();
        break;

      case 2:
        break;
      case 3:
        break;
      case 4:
        alert("Volte ao menu principal para escolher outra operação.");
        break;

      default:
        alert("Insira uma opção válida");
        break;
    }
  } else {
    alert("Insira um número");
  }
}

//Fim switch case


/*======================================================================================================
11.Array de objectos base de dados:

Este array de objectos foi declarado com objectivo de criar um id para cada contador,onde incluí um numero unico
para respectivo contador,e o nome próprio*/

const contadores = [

  {
    id: 36376,
    number: 54687898547,
    name: "JOAQUIM UBISSE"
  },

  {
    id: 83919,
    number: 54678965432,
    name: "WESLEY SAFADÃO"
  },

  {
    id: 84275,
    number: 54789632145,
    name: "KEREN HAPUKE"
  },

  {
    id: 80937,
    number: 54896321789,
    name: "TOMé NUVUNGA"
  }

  

];


/**
 * ===================================================================
 * Função para comprar credelec do jeito mais simples e bem limpinho;
 * =====================================================================
 */


// A compra é iniciada pelo menu principal (main.js).
export function buyCredelec(){

//1.Prompt para introduzir o numero de contador;
  const digitNumber = prompt(`Insira o numero Do contador:`)
  if (digitNumber === null) return;
//FIM prompt

//2.Condição para verificar se o usuario introduziu realmente um numero;
 if (!isNumber (digitNumber) ) {

    alert("Insira apenas números");

    return;
}
//FIM condicão

//3.Constante para verificar os contadores na base de dados;
const counter = findCounter (Number(digitNumber) );
//FIM constante

//4.Condição para verificar se existe o numero do contador na base de dados
if (!counter) {

    alert(`O numero do contador não existe`);

    return;
}
//FIM condição

//5.Prompt para inserir o valor da compra;
let money = Number(prompt(`Insira o valor da compra:`));
//FIM prompt

//6.Condinção para verificar se o que usuario colocou no prompt valor da compra é realmente número
if (!isNumber(moneyInput)) {
  const retryMoney = prompt(`Digite apenas Número`);
  if (retryMoney === null) return;
  money = Number(retryMoney);
}
//FIM condição

//7.Condição para verficar novamente se o que usuario colocou lá no prompt da compra é numero(2ª chance)
if (!Number.isFinite(money) || money <= 0) {
  alert(`Querido usuario se não queiser efectuar a compra valorize o seu tempo porfavor`);
  
  return;
}
//FIM condição

//8.Condição para verificar o valor minimo da compra que usuario digitou  é >= 20;
if (!minValue (money) ){
  alert(`O valor da compra são 20MT no minímo`);
return;
}
//FIM condição

//9.Prompt para digitar a palavra passe;
const password = prompt(`Digite o seu PIN:`);
//FIM prompt

//10.Condiçnão para verificar se a palavra passe passe é mesmo a do usuário;
if (!verifyPin(password, pin)){

//Prompt para o caso de usuario falhar a palavra passe poderá ter uma segunda chance;
const password2 = prompt(`Digite o seu PIN novamente`)
//FIM prompt

if(!verifyPin(password2, pin)){
  alert (`Pin incorrecto.Se não recorda o seu PIN Aproxime a loja mais próxima ou contacte o suporte.obrigado`)
return;}
}
//FIM condição

//11.Condição para verificar se existe um saldo suficiente na conta do usuário a pois ele digitar o valor da compra;
if (!isBalanceEnough(money, balance)) {
alert(`Saldo insuficiente`);
return;
}
//FIMcondição

//12.Prompt para o usuario poder verificar os seus dados antes de confirmar a compra;
const optionConfirmation = prompt(`
Deseja confirmar a compra?

Nome do contador: ${counter.name}
Contador Nº: ${counter.number}
Valor da compra: ${money}.00 MT

1. Confirmar
0. Voltar
`);
//FIM prompt

//13.Condição para o usuario escolher a opção de voltar ao menú ao digitar "0" no prompt de confirmação;
if (optionConfirmation == "0") {

choose()

return;
}
//FIM condição

//14.Condição para caso usuario confirmar a compra do credelec 
if (confirmationOption(optionConfirmation)) {
balance = balance - money ;
 
alert(`Transação Bem Sucedida!

ID: ${counter.id}

Nome do contador: ${counter.name}

Contador Nº: ${counter.number}

Valor da compra: ${money}.00 MT

Saldo actual: ${balance}.00 MT

obrigado!

 M-PESA E FACIL
`)
}
//FIM condição
}
//FIM