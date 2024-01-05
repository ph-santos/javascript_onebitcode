let avalibleQuantity = parseFloat(prompt('Qual é o valor disponível?'))

let menu = '';

while (menu !== '3') {
  menu = prompt(
    `${avalibleQuantity}\n` +
    '1 - Adicionar quantidade\n' +
    '2 - Remover quantidade\n' +
    '3 - Sair' 
  )

  switch(menu) {
    case '1': 
      avalibleQuantity += parseFloat(prompt('Quanto você deseja adicionar?'))
      break
    case '2':
      avalibleQuantity -= parseFloat(prompt('Quanto você deseja tirar?'))
      break
    case '3':
      alert('Saindo...')
      break
  }
}