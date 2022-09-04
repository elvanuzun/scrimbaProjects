let scoreHome = 0
let homeScoreEl = document.getElementById("home-score")
let homeScoreBtn1 = document.getElementById("home-btn-1")


let scoreGuest = 0
let guestScoreEl = document.getElementById("guest-score")

let newButtonEl = document.getElementById("new-btn")


function onePointHome(){
    scoreHome += 1
    homeScoreEl.textContent  = scoreHome
  
}
function twoPointsHome(){
    scoreHome += 2
    homeScoreEl.textContent  = scoreHome
}

function threePointsHome(){
    scoreHome += 3
    homeScoreEl.textContent  = scoreHome
}


function onePointGuest(){
    scoreGuest += 1
    guestScoreEl.textContent  = scoreGuest
  
}
function twoPointsGuest(){
    scoreGuest += 2
    guestScoreEl.textContent  = scoreGuest
}

function threePointsGuest(){
    scoreGuest += 3
    guestScoreEl.textContent  = scoreGuest
}

function restart(){
    window.location.reload()
}