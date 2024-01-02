let attacker = prompt('Informe o nome do atacante:');
let attackPower = parseFloat(prompt(`Informe o poder de ataque do ${attacker}:`));

let defender = prompt('Informe o nome do defensor:');
let healthPoints = parseFloat(prompt(`Informe os pontos de vida do ${defender}:`));
let defensePower = parseFloat(prompt(`Informe o poder de defesa do ${defender}:`));
let hasShield = confirm(`O ${defender} possui escudo?`);

let damageCaused = 0;

if (attackPower > defensePower && !hasShield) {
  damageCaused += attackPower - defensePower;
  
  healthPoints -= damageCaused;
} else if (attackPower > defensePower && hasShield) {
  damageCaused += (attackPower - defensePower) / 2;

  healthPoints -= damageCaused;
}