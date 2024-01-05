const number = prompt('Informe uma número:')
let result = ''

for(let i = 0; i <= 20; i++) {
  result += `${number} x ${i} = ${number * i}\n`
}

alert(
  `Tabuada de ${number} até 20:\n` +
  result
)