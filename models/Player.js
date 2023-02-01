class Player {
    constructor(name, strength, defence, dexterity, level, maxhp, hp, exp, maxexp, imgsrc) {
        this.name = name
        this.strength = strength
        this.defence = defence
        this.dexterity = dexterity
        this.level = level
        this.maxhp = maxhp
        this.hp = hp
        this.exp = exp
        this.maxexp = maxexp
        this.avatar = imgsrc
    }
    skillpoints = 3
    gold = 0
    potions = 1
    attack() {
        let roll = Math.floor(Math.random() * 20) + 1
        return (roll + this.strength) * this.level
    }
    heal() {
        if (this.potions == 0) {
            return 'no potions left';
        } else if (this.hp === this.maxhp) {
            return 'already at full health'
        } else {
            this.hp = this.maxphp
            return 'healed';
        }
    }
    spendSkillPoints(skill) {

        if (this.skillpoints == 0) {
            return 'no sp left'
        } else {
            switch (skill) {
                case 'strength':
                    this.strength++
                    this.skillpoints--
                    break;
                case 'defence':
                    this.defence++
                    this.skillpoints--
                    break;
                case 'dexterity':
                    this.dexterity++
                    this.skillpoints--
                    break;
                default:
                    break;
            }
        }
    }
    playerRollDice() {
        return Math.floor(Math.random() * 20) + 1
    }
    playerRun() {
        console.log('load location screen....');
    }
}

//Player create function called from Event listener
let player
function choosePlayer(pokemon) {
    switch (pokemon) {
        case 'pikachu':
            player = new Player('Pikachu', 3, 3, 3, 1, 100, 100, 0, 1000, "/assets/player/pikachu.png")
            break;
        case 'charmander':
            player = new Player('Charmander', 3, 3, 3, 1, 100, 100, 0, 1000, "/assets/player/charmander.png")
            break;
        case 'squirtle':
            player = new Player('Squirtle', 3, 3, 3, 1, 100, 100, 0, 1000, "/assets/player/squirtle.png")
            break;
        default:
            break;
    }
}

//Pokemons
const pikachu = document.querySelector('#pikachu')
const charmander = document.querySelector('#charmander')
const squirtle = document.querySelector('#squirtle')
//sounds
const pSound = document.querySelector('#pSound')
const sSound = document.querySelector('#sSound')
const cSound = document.querySelector('#cSound')
const cSoundStart = document.querySelector('#cSoundStart')
const pSoundStart = document.querySelector('#pSoundStart')
const sSoundStart = document.querySelector('#sSoundStart')

pikachu.addEventListener('click', () => {
    choosePlayer('pikachu')
    pSoundStart.volume = 0.5
    pSoundStart.play()
    console.log(player);
})
charmander.addEventListener('click', () => {
    choosePlayer('charmander')
    cSoundStart.volume = 0.5
    cSoundStart.play()
    console.log(player);
})
squirtle.addEventListener('click', () => {
    choosePlayer('squirtle')
    sSoundStart.volume = 0.5
    sSoundStart.play()
    console.log(player);
})

//pokehovers

pikachu.addEventListener('mouseover', () => {
    pSound.volume = 0.5
    pSound.play()
})
charmander.addEventListener('mouseover', () => {
    cSound.volume = 0.5
    cSound.play()
})
squirtle.addEventListener('mouseover', () => {
    sSound.volume = 0.5
    sSound.play()
})