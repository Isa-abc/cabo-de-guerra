function jogar() {
  // Criar uma lista com os 3 jogadores.
  let herois = ["", "", ""];
  let viloes = ["", "", ""];

  let forcaHerois = 0;
  let forcaViloes = 0;

  // Escolher os heróis
  for (let i = 0; i < 3; i++) {
    let escolhaHeroi = prompt("Digite o nome do seu personagem: " + (i + 1));
    herois[i] = escolhaHeroi;
    // Calcular a força de cada jogador do time e depois somar para saber o total da força do time.
    forcaHerois += Math.floor(Math.random() * 10) + 1;
 alert("Esses são os seus heróis: " + herois);
  }

  // Escolher os vilões
  for (let i = 0; i < 3; i++) {
    let viloesPossiveis = ["Duende Verde", "Doutor Octopus", "Venom", "Electro", "Homem Areia", "Lagarto", "Thanos"];
    let indiceAleatorio = Math.floor(Math.random() * viloesPossiveis.length);
    viloes[i] = viloesPossiveis[indiceAleatorio]; // Armazenar o vilão escolhido
    // Calcular a força de cada jogador do time adversário.
    forcaViloes += Math.floor(Math.random() * 10) + 1;
alert("Os vilões: " + viloes);
  }

  // Comparar as forças
  if (forcaHerois > forcaViloes) {
    alert("Parabéns! Seus heróis ganharam o Cabo de Guerra! Sua força foi: " + forcaHerois);
  } else if (forcaHerois < forcaViloes) {
    alert("Os heróis perderam! A força dos vilões era: " + forcaViloes);
  } else {
    alert("Os heróis e vilões têm a mesma força. Empate!");
  }
}