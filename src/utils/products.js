// Pizzas
import FireFlower from "../assets/FireFlower.svg";
import SuperStar from "../assets/SuperStar.svg";
import PokePizza from "../assets/PokePizza.svg";
import HyruleSupreme from "../assets/HyruleSupreme.svg";
import ReiBowser from "../assets/ReiBowser.svg";

// Drinks
import Mana_Potion from "../assets/Mana.svg";
import Health_Potion from "../assets/Health.svg";
import Elixir_Supreme from "../assets/Elixir.svg";

// Desserts
import Choco_Kart from "../assets/Choco-Kart.svg";
import Donut_Kirby from "../assets/DonutKirby.svg";
import Ice_Sundae from "../assets/icebeam.svg";

// Accompaniments
import Breadsticks from "../assets/Breadstick.svg";
import Power_Up_Fries from "../assets/CheeseFries.svg";
import Mushroom_Bruschetta from "../assets/Bruscheta.svg";

// Combos
import Feast from "../assets/Feast.svg";
import Deluxe from "../assets/Deluxe.svg";
import Mestre_pokemon from "../assets/Mestre_pokemon.svg";

export const pizzas = [
  {
    name: "Fire Flower Calabresa",
    price: "R$ 49,90",
    img: FireFlower,
    ingredients:
      "Massa crocante, molho de tomate, muçarela, calabresa, cebola e toque de pimenta.",
    description:
      "Forjada nas chamas do Mushroom Kingdom, esta pizza concede o poder de lançar bolas de fogo, aquecendo sua aventura com um sabor ardente!",
  },
  {
    name: "Super Star 4 Queijos",
    price: "R$ 47,90",
    img: SuperStar,
    ingredients:
      "Muçarela, gorgonzola, parmesão e provolone sobre uma base dourada.",
    description:
      "Uma relíquia estelar que te torna invencível por alguns minutos, brilhando com uma explosão de sabores que atravessam qualquer nível!",
  },
  {
    name: "PokéPizza Frango",
    price: "R$ 46,90",
    img: PokePizza,
    ingredients: "Frango desfiado, catupiry cremoso e temperos especiais.",
    description:
      "Capturada após uma batalha épica, esta pizza aumenta sua agilidade e força, perfeita para treinar seus sentidos gustativos!",
  },
  {
    name: "Hyrule Supreme Portuguesa",
    price: "R$ 48,90",
    img: HyruleSupreme,
    ingredients: "Presunto, ovo, cebola, azeitonas e ervas mágicas.",
    description:
      "Preparada pelos sábios de Hyrule, esta pizza restaura sua stamina e te equipa com coragem para enfrentar qualquer dungeon!",
  },
  {
    name: "Rei Bowser Atum",
    price: "R$ 46,90",
    img: ReiBowser,
    ingredients: "Atum suculento, cebola roxa e ervas especiais.",
    description:
      "Forjada no covil de Bowser, esta pizza te dá uma explosão de energia feroz, com um sabor que ruge como o rei dos Koopas!",
  },
];

export const drinks = [
  {
    name: "Mana Potion (Refrigerante lata)",
    price: "R$ 6,90",
    img: Mana_Potion,
    ingredients: "Coca-Cola, Guaraná ou Fanta, bem gelado.",
    description:
      "Uma poção mágica que recarrega seu MP, permitindo que você lance feitiços de alegria em qualquer missão!",
  },
  {
    name: "Health Potion (Suco natural 500ml)",
    price: "R$ 9,90",
    img: Health_Potion,
    ingredients: "Suco natural de laranja, limão ou morango.",
    description:
      "Colhida das árvores sagradas, esta poção cura 50 HP e te mantém firme para o próximo boss!",
  },
  {
    name: "Elixir Supreme (Milkshake 500ml)",
    price: "R$ 14,90",
    img: Elixir_Supreme,
    ingredients: "Chocolate, baunilha ou morango, com leite cremoso.",
    description:
      "Um elixir lendário que concede +20 de resistência e um boost de felicidade para enfrentar o dia!",
  },
];

export const accompaniment = [
  {
    name: "1-UP Breadsticks",
    price: "R$ 12,90",
    img: Breadsticks,
    ingredients:
      "Palitos de massa de pizza, alho, parmesão, ervas e molho marinara.",
    description:
      "Coletados em fases secretas, esses breadsticks te dão uma vida extra para continuar jogando com sabor!",
  },
  {
    name: "Power-Up Cheesy Fries",
    price: "R$ 16,90",
    img: Power_Up_Fries,
    ingredients: "Batatas fritas, queijo derretido e bacon crocante.",
    description:
      "Um item raro que aumenta seu ataque em +10, com um golpe crítico de crocância e sabor!",
  },
  {
    name: "Mushroom Kingdom Bruschetta",
    price: "R$ 14,90",
    img: Mushroom_Bruschetta,
    ingredients: "Pão italiano, tomate temperado, manjericão e azeite de oliva.",
    description:
      "Feita com cogumelos mágicos, esta bruschetta te faz crescer e encarar qualquer desafio com confiança!",
  },
];

export const combos = [
  {
    name: "Combo Fire Flower Feast",
    price: "R$ 69,90",
    img: Feast,
    ingredients:
      "Fire Flower Calabresa + 1-UP Breadsticks + Choco-Kart + Mana Potion.",
    description:
      "Um banquete digno de heróis, este combo te transforma em um guerreiro flamejante com energia infinita para zerar o jogo!",
  },
  {
    name: "Combo Super Star Deluxe",
    price: "R$ 74,90",
    img: Deluxe,
    ingredients:
      "Super Star 4 Queijos + Power-Up Cheesy Fries + Donut do Kirby + Health Potion.",
    description:
      "Equipado com uma estrela brilhante, este combo deluxe te dá invencibilidade e poder para derrotar qualquer inimigo!",
  },
  {
    name: "Combo Mestre Pokémon",
    price: "R$ 79,90",
    img: Mestre_pokemon,
    ingredients:
      "PokéPizza Frango + Mushroom Kingdom Bruschetta + Ice Beam Sundae + Elixir Supreme.",
    description:
      "Treinado por mestres, este combo te torna um campeão Pokémon, com ataques de sabor que capturam qualquer paladar!",
  },
];

export const desserts = [
  {
    name: "Choco-Kart",
    price: "R$ 15,90",
    img: Choco_Kart,
    ingredients: "Brownie de chocolate, calda e sorvete de creme.",
    description:
      "Acelerado na pista de Mario Kart, este doce te dá um turbo de energia e um final doce para qualquer corrida!",
  },
  {
    name: "Donut do Kirby",
    price: "R$ 12,90",
    img: Donut_Kirby,
    ingredients: "Donut com creme de morango e glacê rosa.",
    description:
      "Inspirado no Kirby, este donut fofinho te dá o poder de sugar qualquer tristeza e transformar em pura alegria!",
  },
  {
    name: "Ice Beam Sundae",
    price: "R$ 14,90",
    img: Ice_Sundae,
    ingredients: "Sorvete, chantilly, calda de frutas e granulado.",
    description:
      "Carregado com energia glacial, este sundae lança um Ice Beam que congela o calor e refresca sua aventura!",
  },
];