import { isNumber } from "./utulls.js";
import { transferMoney } from "./transference.js";
import { withdrawMoney } from "./withdrawmoney.js";
import { buyCredelec } from "./credelec.js";
import { buyData } from "./buydata.js";

function mainMenu() {
  const option = prompt(`
Bem-vindo(a) ao M-Pesa. Selecione a opção que deseja:

1.Transferir dinheiro
2.Levantar dinheiro
3.Comprar Credelec
4.Comprar dados móveis
0.Sair
`);

  if (option === null) {
    return;
  }

  if (!isNumber(option)) {
    alert("Insira um número");
    return;
  }

  switch (Number(option)) {
    case 1:
      transferMoney();
      break;
    case 2:
      withdrawMoney();
      break;
    case 3:
      buyCredelec();
      break;
    case 4:
      buyData();
      break;
    case 5:
      alert("Obrigado por utilizar o M-Pesa.");
      return;
    default:
      alert("Insira uma opção válida");
      break;
  }
}
mainMenu();