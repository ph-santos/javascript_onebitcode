const word = prompt('Digite uma palavra:')

let wordBackwards = ''

for(let i = word.length - 1; i >= 0; i--) {
  wordBackwards += word[i]
}

if (word === wordBackwards) {
  alert(`${word} é um palíndromo`)

} else {
  alert(`${word} não é um palíndromo`)
}