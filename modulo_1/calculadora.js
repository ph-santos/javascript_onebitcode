let number1 = Number(prompt('Digite o primeiro número'));
let number2 = Number(prompt('Digite o segundo número'));

let sum = number1 + number2;
let subtraction = number1 - number2;
let multiplication = number1 * number2;
let division = number1 / number2;

alert(
  `A soma dos valores ${number1} + ${number2} = ${sum}\n` + 
  `A subtração dos valores ${number1} - ${number2} = ${subtraction}\n` +
  `A multiplicação dos valores ${number1} x ${number2} = ${multiplication}\n` +
  `A divisão dos valores ${number1} / ${number2} = ${division}\n` 
);