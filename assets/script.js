function rollDice() {
    var diceNum = Math.floor(Math.random() * 6) + 1;
    const x = document.getElementById("dice-face");
    x.innerHTML = '<img src="assets/img/dice' + diceNum + '.svg" />';
    console.log(x.innerHTML);
}
// Roll when load the website
rollDice();