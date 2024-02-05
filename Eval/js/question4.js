let wickedCssClass = document.getElementById("wickedCssClass")
let wickedCSSBtn = document.getElementById("wickedCSSBtn")
let randomCSSBtn = document.getElementById("randomCSSBtn")
let result = document.getElementById("result")




wickedCSSBtn.addEventListener("click", function (e) {
    let input = wickedCssClass.value
    result.className = `${input} simple-box pt-5`
})




let arr = ["floater", "barrelRoll", "rollerRight", "rollerLeft", "heartBeat", "pulse", "rotation", "sideToSide", "zoomer", "zoomerOut", "spinner", "wiggle", "shake", "pound", "slideUp", "slideDown", "slideRight", "slideLeft", "fadeIn", "fadeOut", "rotateInRight", "rotateInLeft", "rotateIn", "bounceIn"]






randomCSSBtn.addEventListener('click', function () {

    result.className = `${arr[Math.floor(Math.random() * 23)]} simple-box pt-5`


})

