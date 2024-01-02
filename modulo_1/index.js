let vehicle1 = prompt('Nome do primeiro veículo:');
let speed1 = parseFloat(prompt('Velocidade do primeiro veículo:'));
let vehicle2 = prompt('Nome do segundo veículo:');
let speed2 = parseFloat(prompt('Velocidade do segundo veículo:'));

if (speed1 > speed2) {
  alert(`${vehicle1} é mais rápido!`);

} else if (speed1 < speed2) {
  alert(`${vehicle2} é mais rápido!`);

} else {
  alert(`Os dois veículos são da mesma velocidade.`);
}