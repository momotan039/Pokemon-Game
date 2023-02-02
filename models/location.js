const location1 = document.querySelector("#goldenrod-gym");
const location2 = document.querySelector("#castelia-gym");
const location3 = document.querySelector("#canalave-gym");
const location4 = document.querySelector("#pasatoria-gym");
const location5 = document.querySelector("#fire-gym");
const imgContainer = document.querySelector('.backGround-img-container');
const setUpGame = document.querySelector('.setup-game');

const name1 = document.querySelector(".goldenrod-name");
const name2 = document.querySelector("#castelia-name");
const name3 = document.querySelector("#canalave-name");
const name4 = document.querySelector("#pasatoria-name");
const name5 = document.querySelector("#fire-name");

// arrayImg = ['location1', 'location2', 'location3','location4','location5'];
// arrayName = ['name1', 'name2','name3', 'name4','name5' ]
import  Monster from "./monster.js";
const current_player=JSON.parse(localStorage.getItem('player'))
class Location{
    constructor(locationName, locationImg, monstersAmount){
        this.locationName = locationName;
        this.locationImg = locationImg;
        this.monstersAmount = monstersAmount;
        this.monsters=[]
    }
    // monsters = [];
}

name1.addEventListener('click', ()=>{
    const _location= new Location('Goldenrod', './img/Goldenrod_Gym_anime.png', 5);
    _location.monsters=Monster.generateMonsterArray(_location.locationName,current_player)
    localStorage.setItem('location', JSON.stringify(_location))
    location.href = '../locationDetials/index.html'
})

name2.addEventListener('click', ()=>{
    const _location= new Location('Castelia', './img/Castelia_Gym_field.webp', 5);
    _location.monsters=Monster.generateMonsterArray(_location.locationName,current_player)
    localStorage.setItem('location', JSON.stringify(_location))
    location.href = '../location detials/index.html'
})

name3.addEventListener('click', ()=>{
    const _location= new Location('Canalave', './img/Canalave_Gym_anime.png', 5);
    _location.monsters=Monster.generateMonsterArray(_location.locationName,current_player)
    localStorage.setItem('location', JSON.stringify(_location))
    location.href = '../location detials/index.html'
})

name4.addEventListener('click', ()=>{
    const _location= new Location('Pasatoria', './img/PastoriaGym.png', 5);
    _location.monsters=Monster.generateMonsterArray(_location.locationName,current_player)
    localStorage.setItem('location', JSON.stringify(_location))
    location.href = '../location detials/index.html'
})
name5.addEventListener('click', ()=>{
    const _location= new Location('Fire', './img/firelocations.jpg', 5);
    _location.monsters=Monster.generateMonsterArray(_location.locationName,current_player)
    localStorage.setItem('location', JSON.stringify(_location))
    location.href = '../location detials/index.html'
})

