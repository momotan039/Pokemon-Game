const monstersArray = [
  "Onix",
  "Machoke",
  "Meowth",
  "Psyduck",
  "Mankey",
  "Beedrill",

  "Charizard",
  "Rapidash",
  "Ninetales",
  "Charmander",
  "Arcanine",
  "Magmar",

  "Gyarados",
  "Poliwhirl",
  "Tentacruel",
  "Vaporeon",
  "Lapras",
  "Dragonair",

  "Mewtwo",
  "Raichu",
  "Alakazam",
  "Arbok",
  "Jigglypuff",
  "Weepinbell",
];

// const player1 = new Player("someName", 2, 3, 4, 5);
// console.log(player1);

export default class Monster {
  constructor(
    number,
    name,
    strength,
    defense,
    level,
    healthPoints,
    xpReward,
    dexterity,
    gold,
    src,
    location,
  ) {
    this.number = number;
    this.name = name;
    this.strength = strength;
    this.defense = defense;
    this.level = level;
    this.dexterity = dexterity;
    this.healthPoints = healthPoints;
    this.xpReward = xpReward;
    this.gold = gold;
    this.src = src
    this.location = location;
  }
  monsterRollDice() {//rolls dice to determine who starts first
    return Math.floor(Math.random() * 20) + 1
  }
  attack() {//attack method returns an integer of damage to deal to monster
    let roll = Math.floor(Math.random() * 20) + 1
    return (roll + this.strength) * this.level
  }
  static defineLocation(monster, i) {
    if (i >= 0 && i <= 5) {
      monster.location = "Canalave";
    }
    else if (i >= 6 && i <= 11) {
      monster.location = "Fire";
    }
    else if (i >= 12 && i <= 17) {
      monster.location = "Pasatoria";
    }
    else if (i >= 18 && i <= 23) {
      monster.location = "Goldenrod";
    }
  }

  static randomIntFromInterval(min, max) {
    // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  static generateMonsterArray(locationInput, player) {
    const generatedMonsters = [];
    for (let i = 0; i < monstersArray.length; ++i) {
      const newMonster = new Monster(
        i,
        monstersArray[i],
        this.randomIntFromInterval(player.strength - 2, player.strength + 2),
        this.randomIntFromInterval(player.defense - 2, player.defense + 2),
        this.randomIntFromInterval(player.level - 2, player.level + 2),
        100,
        this.randomIntFromInterval(1, 5),
        this.randomIntFromInterval(player.dexterity - 2, player.dexterity + 2),
        this.randomIntFromInterval(1, 5),
        this.src = `../monsters/assets/img/${i}.png`
      );
      this.defineLocation(newMonster, i)

      if (newMonster.location === locationInput) {
        generatedMonsters.push(newMonster);
      }
    }
    return generatedMonsters;
    // localStorage.setItem('enemies', JSON.stringify(generatedMonsters))
  }
}
// console.log(Monster.generateMonsterArray("canalaveGymName", player1));

