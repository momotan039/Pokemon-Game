let currentLocation = JSON.parse(localStorage.getItem('location'))

const locName = document.getElementById('locName');
const locationsContainer = document.querySelector('.locationsContainer')


locName.innerHTML = currentLocation.locationName;

currentLocation.monsters.forEach((element, idx, arr) => {
    const locationBox = document.createElement('div')
    const locationBoxTitle = document.createElement('h1')
    const locationBoxImage = document.createElement('img')
    const locationBoxGold = document.createElement('h3')
    const locationBoxXp = document.createElement('h3')
    locationBox.classList.add(`locationBox`)
    locationBox.id = `box${idx}`
    locationBoxTitle.innerHTML = element.name
    locationBoxImage.src = element.src
    locationBoxGold.innerHTML = `Gold reward: ${element.gold}`
    locationBoxXp.innerHTML = `Xp reward: ${element.xpReward}`
    locationsContainer.appendChild(locationBox)
    locationsContainer.lastElementChild.appendChild(locationBoxTitle)
    locationsContainer.lastElementChild.appendChild(locationBoxImage)
    locationsContainer.lastElementChild.appendChild(locationBoxGold)
    locationsContainer.lastElementChild.appendChild(locationBoxXp)
    const eventSelector = document.querySelector(`#box${idx}`)
    eventSelector.addEventListener('click', function () {
        localStorage.setItem('monster', JSON.stringify(currentLocation.monsters[idx]))
        location.href = '../Battel/index.html'
    })

});