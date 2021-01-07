const playBtn = document.getElementById("playBtn")
const closeBtn = document.getElementById("close")
const popup = document.querySelector(".popup-video")

playBtn.addEventListener( 'click', () => {
    popup.style.visibility = 'visible';
})

closeBtn.addEventListener( 'click', () => {
    popup.style.visibility = 'hidden';
})
