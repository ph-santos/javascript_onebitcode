let menu = "";

do {
  menu = prompt(
    '1 - Mandar "Bom dia!"\n' +
    '2 - Mandar "Boa tarde!\n' + 
    '3 - Mandar "Boa noite!\n"' +
    '4 - Mandar "Boa Madrugada!"\n' +
    '5 - Sair'
  )

  switch (menu) {
    case '1':
      alert('Bom dia!!!')
      break
    case '2':
      alert('Boa tarde!!!')
      break
    case '3':
      alert('Boa noite!!!')
      break
    case '4':
      alert('Boa madrugada!!!')
      break
    case '5':
      alert('Saindo...')
      break
    default:
      alert('Opção invalida!')
  }
} while (menu !== '5')