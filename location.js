'use strict';
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

class Location{
    constructor(locationName, locationImg, monstersAmount){
        this.locationName = locationName;
        this.locationImg = locationImg;
        this.monstersAmount = monstersAmount;
    }
    monsters = [];
}

let location;
name1.addEventListener('click', ()=>{
    location= new Location('Goldenrod', './models/img/Goldenrod_Gym_anime.png', 5);
    localStorage.setItem('location', JSON.stringify(location))
    location.href = '#'
})

name2.addEventListener('click', ()=>{
    location= new Location('Castelia', './models/img/Castelia_Gym_field.webp', 5);
    localStorage.setItem('location', JSON.stringify(location))

})

name3.addEventListener('click', ()=>{
    location= new Location('Canalave', './models/img/Canalave_Gym_anime.png', 5);
    localStorage.setItem('location', JSON.stringify(location))
})

name4.addEventListener('click', ()=>{
    location= new Location('Pasatoria', './models/img/PastoriaGym.png', 5);
    localStorage.setItem('location', JSON.stringify(location))

})
name5.addEventListener('click', ()=>{
    location= new Location('Fire', './models/img/firelocations.jpg', 5);
    localStorage.setItem('location', JSON.stringify(location))
})

