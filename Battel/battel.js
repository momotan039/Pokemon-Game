const player=JSON.parse(localStorage.getItem('player'))
const current_location=JSON.parse(localStorage.getItem('location'))
const current_monster=JSON.parse(localStorage.getItem('monster'))
const player_elm=document.getElementById('player')
const player_deatils=document.querySelector('.detials .player ul')
const monster_elm=document.getElementById('monster')
const monster_deatils=document.querySelector('.detials .monster ul')

initPlayer=()=>{
    player_elm.src=player.avatar
    const keys=Object.keys(player)
    const values=Object.values(player)
    let lies=[]
    for (const key of keys) {
       if(key!=='name'||key!=='avatar'){
        const li=document.createElement('li')
        const span=document.createElement('span')
        li.innerText=key+':'
        span.innerText=player[key]
        li.appendChild(span)
        lies.push(li)
       }
    }
    player_deatils.append(...lies)
    // monster_elm.src=current_monster.src
}

runGame=()=>{
   initPlayer()
}

runGame()