

const player = JSON.parse(localStorage.getItem('player'))
const current_location = JSON.parse(localStorage.getItem('location'))
const current_monster = JSON.parse(localStorage.getItem('monster'))
const player_elm = document.getElementById('player')
const player_deatils = document.querySelector('.detials .player ul')
const monster_elm = document.getElementById('monster')
const monster_deatils = document.querySelector('.detials .monster ul')
const attackBtn = document.querySelector('.attck');
attackBtn.addEventListener('click', hit)

initPlayer = () => {
   player_elm.src = player.avatar
   const keys = Object.keys(player)
   const values = Object.values(player)
   let lies = []
   for (const key of keys) {
      if (key !== 'name' || key !== 'avatar') {
         const li = document.createElement('li')
         const span = document.createElement('span')
         li.innerText = key + ':'
         span.innerText = player[key]
         li.appendChild(span)
         lies.push(li)
      }
   }
   player_deatils.append(...lies)
   // monster_elm.src=current_monster.src
}
initMonster = () => {
   monster_elm.src = current_monster.src
   const keys = Object.keys(current_monster)
   const values = Object.values(current_monster)
   let lies = []
   for (const key of keys) {
      if (key !== 'name' || key !== 'avatar') {
         const li = document.createElement('li')
         const span = document.createElement('span')
         li.innerText = key + ':'
         span.innerText = current_monster[key]
         li.appendChild(span)
         lies.push(li)
      }
   }
   monster_deatils.append(...lies)
   // monster_elm.src=current_monster.src
}
runGame = () => {
   initPlayer()
   initMonster()
}

function playerAttack() {//attack method returns an integer of damage to deal to monster
   let roll = Math.floor(Math.random() * 20) + 1
   return (roll + Number(player.strength)) * Number(player.level)
}
function monsterAttack() {//attack method returns an integer of damage to deal to monster
   let roll = Math.floor(Math.random() * 20) + 1
   return (roll + Number(current_monster.strength)) * Number(current_monster.level)
}
function heal() {//checks if there are potions and if health is lower than max health and heals accordingly
   if (player.potions == 0) {
      return 'no potions left';
   } else if (player.hp === player.maxhp) {
      return 'already at full health'
   } else {
      player.hp = player.maxphp
      return 'healed';
   }
}
function spendSkillPoints(skill) {//spends skill points if conditions are met

   if (player.skillpoints == 0) {
      return 'no sp left'
   } else {
      switch (skill) {
         case 'strength':
            player.strength++
            player.skillpoints--
            break;
         case 'defence':
            player.defence++
            player.skillpoints--
            break;
         case 'dexterity':
            player.dexterity++
            player.skillpoints--
            break;
         default:
            break;
      }
   }
}
function playerRollDice() {//rolls dice to determine who starts first
   return Math.floor(Math.random() * 20) + 1
}

function monsterRollDice() {//rolls dice to determine who starts first
   return Math.floor(Math.random() * 20) + 1
}
function playerRun() {//!TO BE IMPLEMENTED
   console.log('load location screen....');
}



let currentPlayer
function firstHit() {
   let playerRoll = playerRollDice()
   let monsterRoll = monsterRollDice()
   if (playerRoll === monsterRoll) {
      firstHit()
   }
   else if (playerRoll < monsterRoll) {
      currentPlayer = 'monster'
   } else {
      currentPlayer = 'player'
   }
}
function hit() {
   if (currentPlayer === 'monster') {
      let hitpower = monsterAttack()
      player.hp = Number(player.hp) - hitpower;
      player_deatils.innerHTML = ''
      currentPlayer = 'player'
      checkWinnner()
      initPlayer()
   } else if (currentPlayer === 'player') {
      let hitpower = monsterAttack()
      current_monster.healthPoints = Number(current_monster.healthPoints) - hitpower;
      monster_deatils.innerHTML = ''
      currentPlayer = 'monster'
      checkWinnner()
      initMonster()
      setTimeout(hit, 1000)
   }
}

function checkWinnner() {
   if (Number(player.hp) <= 0) {
      alert('you lose')
      location.href = '../index.html'
   } else if (Number(current_monster.hp) <= 0) {
      location.href = '../locationDetials/index.html'
      alert('alert you won')
   }
}

runGame()
firstHit()