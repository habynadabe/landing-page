var left = window.document.getElementById("left")
var right = window.document.getElementById("right")
var bruna = window.document.getElementById("bruna")
var leonardo = window.document.getElementById("leonardo")
var samantha = window.document.getElementById("samantha")

function Right() {
    bruna.style = "display:none"
    samantha.style = "display:flex"
    left.style = "display:flex"
    right.style = "display:none"
}

function Left() {
    bruna.style = "display:flex"
    samantha.style = "display:none"
    left.style = "display:none"
    right.style = "display:flex"
}