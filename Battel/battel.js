const player=JSON.parse(localStorage.getItem('player'))
const current_location=JSON.parse(localStorage.getItem('location'))
const current_monster=current_location.monsters[0]
const player_elm=document.getElementById('player')
const monster_elm=document.getElementById('monster')

initPlayer=()=>{
    const img='../'+player.avatar.split('/').slice(1).join('/')
    '../player/assets/player/'
    player_elm.src=img
    monster_elm.src=current_monster.src
}

runGame=()=>{
   initPlayer()
}

runGame()