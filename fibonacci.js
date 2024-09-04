const readline = require("readline-sync");

function isFibonacci(num) {
  let a = 0,
    b = 1,
    temp;

  if (num === 0 || num === 1) {
    return `O número ${num} pertence à sequência de Fibonacci.`;
  }

  while (b < num) {
    temp = a + b;
    a = b;
    b = temp;
  }

  return b === num
    ? `O número ${num} pertence à sequência de Fibonacci.`
    : `O número ${num} não pertence à sequência de Fibonacci.`;
}

const num = parseInt(
  readline.question(
    "Informe um número para verificar se ele pertence à sequência de Fibonacci: "
  )
);
console.log(isFibonacci(num));
