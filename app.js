const ctrPanel = document.querySelector('.controls-panel')
const popUpSound = document.getElementById('popUpSound')
const themeSound = document.getElementById('themeSound')

function closeSettings() {
    popUpSound.play()
    ctrPanel.classList.remove('show')
}

function openSettings() {
    popUpSound.play()
    ctrPanel.classList.add('show')
}

function renderSoundControls(){
    const bgBtn=document.getElementById('bg_soundBtn')
    const sfxBtn=document.getElementById('sfxBtn')
    debugger
    bgBtn.checked=isBgPlaying
    sfxBtn.checked=isSfxPlaying
}

const idListener=window.addEventListener('mouseover',()=>{
    themeSound.play()
    setTimeout(()=>{
        window.removeEventListener('mouseover',idListener)
    },500)
})