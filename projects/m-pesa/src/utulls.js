// Funções comuns aos módulos M-Pesa.
// Mantidas com a mesma lógica original.

export function isNumber(value) {
  return !isNaN(Number(value));
}

export function isBalanceEnough(value, balance) {
  return balance > value;
}


// Verifica o PIN recebido usando o PIN configurado no módulo.
// A comparação não estrita mantém compatibilidade com prompts que devolvem texto.
export function verifyPin(user_pin, pin) {
  return user_pin == pin;
}
