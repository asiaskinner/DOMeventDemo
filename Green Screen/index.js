const bgColor = document.querySelector(".bgColor")
const colorInput = document.querySelector(".colorInput")
const colorChanger = document.querySelector(".colorChanger")


function applyStyles() {
    bgColor.style.backgroundColor = colorInput.value
}

colorChanger.addEventListener("click", function(){
    applyStyles()
})