const buttons = document.querySelectorAll(".btn");
let playerScore = 0;
let computerScore = 0;

// A chaque clique
buttons.forEach((button) => {
  button.addEventListener("click", function () {

// Choix du joueur
    const playerSelection = this.textContent.toLowerCase();

// Détermine le choix de l'ordinateur
    const choice = ["pierre", "feuille", "ciseaux"];
    const computerSelection = choice[Math.floor(Math.random()*choice.length)];
    alert("L'ordinateur choisit" + " " + computerSelection + ".");

// Lance un round
    playRound(playerSelection, computerSelection);
   
// Annone qui gagne la manche et met à jour le score 
    updateScore();
    if (checkWinner()) {
      playerScore = computerScore = 0;
      updateScore();
    }
  });
});

 // Un round de jeu
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

};

// Affiche le score
function updateScore() {
  document.getElementById("p-score").textContent = playerScore;
  document.getElementById("c-score").textContent = computerScore;
};

// Annonce le vainqueur
function checkWinner() {
  if (playerScore === 5 || computerScore === 5) {
    const winner =
      playerScore === 5
        ? "Tu as gagné! Félicitations!"
        : "GAME OVER, recommence !";
    alert(winner);
    return true;
  }
  return false;
};

