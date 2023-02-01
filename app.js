const ctrPanel = document.querySelector('.controls-panel')

function closeSettings() {
    // playSound(pop_up_sound,1)
    ctrPanel.classList.remove('show')
}

function openSettings() {
    // playSound(pop_up_sound,1)
    ctrPanel.classList.add('show')
}

function renderSoundControls(){
    const bgBtn=document.getElementById('bg_soundBtn')
    const sfxBtn=document.getElementById('sfxBtn')
    debugger
    bgBtn.checked=isBgPlaying
    sfxBtn.checked=isSfxPlaying
}

