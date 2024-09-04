const readline = require("readline");

function reverseString(str) {
  let reversed = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return reversed;
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Digite uma string para inverter: ", (inputString) => {
  console.log(`String original: ${inputString}`);
  console.log(`String invertida: ${reverseString(inputString)}`);
  rl.close();
});
