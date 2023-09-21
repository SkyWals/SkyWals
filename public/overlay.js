//configurando-janela-flutuante
const openOverlay = document.getElementById("openoverlay")
const closeOverlay = document.getElementById("closeoverlay")
const overlay = document.getElementById("overlay")

openOverlay.onclick = function () {
    overlay.showModal()
}

closeOverlay.onclick = function () {
    overlay.close()
}
