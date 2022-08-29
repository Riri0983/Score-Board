let hscore = 0
let homeBox = hscore
let ascore = 0
let awayBox = ascore

function home1() {
  console.log(hscore += 1)
  document.getElementById("homescore").textContent = hscore
}
function home2() {
  console.log(hscore += 2)
  document.getElementById("homescore").textContent = hscore
}
function home3() {
  console.log(hscore += 3)
  document.getElementById("homescore").textContent = hscore
}


function away1() {
  console.log(ascore += 1)
  document.getElementById("awayscore").textContent = ascore
}

function away2() {
  console.log(ascore += 2)
  document.getElementById("awayscore").textContent = ascore
}

function away3() {
  console.log(ascore += 3)
  document.getElementById("awayscore").textContent = ascore
}
