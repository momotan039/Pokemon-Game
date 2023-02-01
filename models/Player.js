class Player {
    constructor(id, strength, defence, dexterity, level, maxhp, hp, exp, maxexp) {
        this.id = id
        this.strength = strength
        this.defence = defence
        this.dexterity = dexterity
        this.level = level
        this.maxhp = maxhp
        this.hp = hp
        this.exp = exp
        this.maxexp = maxexp
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

let player = new Player(1, 3, 3, 3, 1, 100, 100, 0, 1000)