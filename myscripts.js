let choice = ["pierre", "feuille", "ciseaux"];
let playerScore = 0;
let computerScore = 0;

// Détermine le choix de l'ordinateur
function computerPlay() {
    return choice[Math.floor(Math.random()*choice.length)];
}

// Paramètres
let computerSelection = computerPlay();
const playerSelection = ["pierre", "feuille", "ciseaux"];

 // Un round du jeu
function playRound(playerSelection, computerSelection) {
   
    if (playerSelection == computerSelection) {
        alert("Egalité!") 
    } else if (playerSelection == "pierre" && computerSelection == "ciseaux") {
        alert("Tu as gagné ! La Pierre bat les Ciseaux.");
        playerScore++;
    } else if (playerSelection == "ciseaux" && computerSelection == "pierre") {
        alert("Tu as perdu... La Pierre bat les Ciseaux.");
        computerScore++
    } else if (playerSelection == "feuille" && computerSelection == "pierre") {
        alert("Tu as gagné ! La Feuille bat la Pierre.");
        playerScore++;
    } else if (playerSelection == "pierre" && computerSelection == "feuille") {
        alert("Tu as perdu... La Feuille bat la Pierre.");
        computerScore++;
    } else if (playerSelection == "ciseaux" && computerSelection == "feuille") {
        alert("Tu as gagné ! Les Ciseaux battent la Feuille.");
        playerScore++;
    } else if(playerSelection == "feuille" && computerSelection == "ciseaux") {
        alert("Tu as perdu... Les Ciseaux battent la Feuille.");
        computerScore++;
    } else {
        alert("HEIN???");
    }
}

// Lance le jeu pour 5 rounds
function game() {
    for (let i = 0; i < 5; i++) {
    let playerSelection = prompt("Pierre, Feuille ou Ciseaux ?" , 'Ecris ton choix').toLowerCase(); // Permet au joueur d'entrer son choix
    let computerSelection = computerPlay();
    alert("L'ordinateur choisit" + " " + computerSelection + ".");
    result = playRound(playerSelection, computerSelection);
    scoreboard = "Humain :" + " " + playerScore + " " + "VS" + " " + "Machine :" + " " + computerScore; // Affichage du score
    console.log(scoreboard)
    alert(scoreboard)
    console.log(result); // Donne le score à chaque round
    }

// Déqigne le vainqueur
    if (playerScore < computerScore) {
        console.log("GAME OVER");
        alert("GAME OVER");
    } else if (playerScore == computerScore) {
        console.log("Egalité, recommence!")
        alert("Egalité, recommence!");
    } else {
        console.log("Gagné! Félicitations!");
        alert("Gagné! Félicitations!");
    }
}
 
// Lance le jeu
game();