const LegendaryModel = require("../models/LegendaryModel");

const LegendariesService = {
  listLegendaries: () => {
    const mew = new LegendaryModel(
      1,
      "Mew",
      "So rare that it is still said to be a mirage by many experts. Only a few people have seen it worldwide.",
      "Psychic",
      "100",
      "100",
      "100",
      "100",
      "100",
      "100",
      "images/mew.svg"
    );
    const moltres = new LegendaryModel(
      2,
      "Moltres",
      "It’s one of the legendary bird Pokémon. When Moltres flaps its flaming wings, they glimmer with a dazzling red glow.",
      "Flame",
      "90",
      "125",
      "100",
      "85",
      "90",
      "90",
      "images/moltres.svg"
    );
    const articuno = new LegendaryModel(
      3,
      "Articuno",
      "It’s said that this Pokémon’s beautiful blue wings are made of ice. Articuno flies over snowy mountains, its long tail fluttering along behind it.",
      "Ice",
      "90",
      "125",
      "85",
      "100",
      "85",
      "95",
      "images/articuno.svg"
    );
    const zapdos = new LegendaryModel(
        4,
        'Zapdos',
        "This Pokémon has complete control over electricity. There are tales of Zapdos nesting in the dark depths of pitch-black thunderclouds.",
        "Electric",
        "90",
        "125",
        "90",
        "90",
        "85",
        "100",
        "images/zapdos.svg"
    );
    const diance = new LegendaryModel(
        5,
        'Diance',
        "A sudden transformation of Carbink, its pink, glimmering body is said to be the loveliest sight in the whole world.",
        "Fairy",
        "50",
        "160",
        "160",
        "110",
        "110",
        "110",
        "images/diance.svg"
    );
    const xerneas = new LegendaryModel(
        6,
        "Xerneas",
        "Legends say it can share eternal life. It slept for a thousand years in the form of a tree before its revival.",
        "Fairy",
        "126",
        "131",
        "131",
        "98",
        "95",
        "99",
        "images/xerneas.svg"
    )

    return [mew, moltres, articuno, zapdos, diance, xerneas];
  },
  listPokemonData: (pokemonName) => {
    const pokemonList = LegendariesService.listLegendaries();
    let pokemon = pokemonList.find((item) => item.name === pokemonName);
    if (!pokemon) {
      pokemon = pokemonList[0];
    }
    return pokemon;
  },
};

module.exports = LegendariesService;
