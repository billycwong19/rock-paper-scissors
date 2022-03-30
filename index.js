var win = 0;
var lose = 0;
var tie = 0;

var game = ["R", "P", "S"];

function play() {
    var choice = prompt("Let's play a game! \nRock, Paper, Scissors? \nPlease enter R, P, or S.");
    var chosen = choice.toUpperCase();
    var index = Math.floor(Math.random(game) * game.length);
    var cpu = game[index];
    alert("You chose " + chosen + " & The Internet chose: " + cpu);

    if (chosen === null) {
        return play();     
    }   
    if (chosen === cpu) {
            alert("It's a tie!");
            tie++;
    }   
    else if (chosen === "P" && cpu === "R" || 
            chosen === "R" && cpu === "S" || 
            chosen === "S" && cpu === "P") {
            alert("You Win!");
            win++;
    } else {
        alert("You Lose!");
        lose++;
    }
    alert("Status: \nWin: " + win + "\nLose: " + lose + "\nTie: " + tie);
    let playAgain = confirm("Play Again?");

    if (playAgain === true){
        return play();
    }
}

play();
