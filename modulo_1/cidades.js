let nome = prompt('Qual é o seu nome?');
let confirmation = prompt('Já visitou alguma cidade? sim/não');
let cities = '';
let numberOfCitiesVisited = 0;

while (confirmation === "sim") {
  let cityVisited = prompt('Qual o nome da cidade visitada?');
  cities += `${cityVisited} | `;
  numberOfCitiesVisited += 1;
  let secondConfirmation = prompt('Visitou alguma outra cidade? sim/não');

  if (secondConfirmation === 'não') {
    confirmation = 'não';
  }
}

alert(
  `Nome do turista: ${nome}\n` +
  `Cidades visitadas: ${cities}\n` +
  `Número de cidades visitadas: ${numberOfCitiesVisited}`
);