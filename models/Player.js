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
    attack() {//attack method returns an integer of damage to deal to monster
        let roll = Math.floor(Math.random() * 20) + 1
        return (roll + this.strength) * this.level
    }
    heal() {//checks if there are potions and if health is lower than max health and heals accordingly
        if (this.potions == 0) {
            return 'no potions left';
        } else if (this.hp === this.maxhp) {
            return 'already at full health'
        } else {
            this.hp = this.maxphp
            return 'healed';
        }
    }
    spendSkillPoints(skill) {//spends skill points if conditions are met

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
    playerRollDice() {//rolls dice to determine who starts first
        return Math.floor(Math.random() * 20) + 1
    }
    playerRun() {//!TO BE IMPLEMENTED
        console.log('load location screen....');
    }
}

//Create player and push to localStorage (called from event listeners)
function choosePlayer(pokemon) {
    switch (pokemon) {
        case 'pikachu':
            localStorage.setItem('player', JSON.stringify(new Player('Pikachu', 3, 3, 3, 1, 100, 100, 0, 1000, "/assets/player/pikachu.png")))
            break;
        case 'charmander':
            localStorage.setItem('player', JSON.stringify(new Player('Charmander', 3, 3, 3, 1, 100, 100, 0, 1000, "/assets/player/charmander.png")))
            break;
        case 'squirtle':
            localStorage.setItem('player', JSON.stringify(new Player('Squirtle', 3, 3, 3, 1, 100, 100, 0, 1000, "/assets/player/squirtle.png")))
            break;
        default:
            break;
    }

}

//Pokemon images for selection
const pikachu = document.querySelector('#pikachu')
const charmander = document.querySelector('#charmander')
const squirtle = document.querySelector('#squirtle')
//selection sounds
const pSound = document.querySelector('#pSound')
const sSound = document.querySelector('#sSound')
const cSound = document.querySelector('#cSound')
const cSoundStart = document.querySelector('#cSoundStart')
const pSoundStart = document.querySelector('#pSoundStart')
const sSoundStart = document.querySelector('#sSoundStart')
//selection listeners
pikachu.addEventListener('click', () => {
    choosePlayer('pikachu')
    pSoundStart.volume = 0.5
    pSoundStart.play()
})
charmander.addEventListener('click', () => {
    choosePlayer('charmander')
    cSoundStart.volume = 0.5
    cSoundStart.play()
})
squirtle.addEventListener('click', () => {
    choosePlayer('squirtle')
    sSoundStart.volume = 0.5
    sSoundStart.play()
})

//pokehovers the play a sound when you hover a pokemon on selection screen

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

