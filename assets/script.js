const dice = document.getElementById("dice-face");
const menu = document.getElementById("menu");

function rollDice() {
    let diceNum = Math.floor(Math.random() * 6) + 1;
    let diceFace = "bi-dice-" + diceNum;
    dice.setAttribute("class", diceFace);
    console.log(dice.getAttribute("class"));
}

function openNav() {
    menu.style.width = "100%";
}

function closeNav() {
    menu.style.width = "0%";
}

rollDice();
dice.addEventListener("mousemove", rollDice);
menu.addEventListener("click", closeNav);
