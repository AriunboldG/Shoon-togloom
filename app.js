
var activePlayer;
var scores;
var roundScore;
var diceDom = document.querySelector(".dice");

initGame();
function initGame() {

  activePlayer = 0;
  scores = [0, 0];
  roundScore = 0;


  document.getElementById("score-0").textContent = "0";
  document.getElementById("score-1").textContent = "0";
  document.getElementById("current-0").textContent = "0";
  document.getElementById("current-1").textContent = "0";


  document.getElementById("name-0").textContent = "Player 1";
  document.getElementById("name-1").textContent = "Player 2";

  document.querySelector(".player-0-panel").classList.remove("winner");
  document.querySelector(".player-1-panel").classList.remove("winner");

  document.querySelector(".player-0-panel").classList.remove("active");
  document.querySelector(".player-1-panel").classList.remove("active");

  document.querySelector(".player-0-panel").classList.add("active");

  diceDom.style.display = "none";
}


document.querySelector(".btn-roll").addEventListener("click", function() {

  var diceNumber = Math.floor(Math.random() * 6) + 1;

  diceDom.style.display = "block";

  diceDom.src = "dice-" + diceNumber + ".png";


  if (diceNumber !== 1) {
  
    roundScore = roundScore + diceNumber;
    document.getElementById("current-" + activePlayer).textContent = roundScore;
  } else {

    switchToNextPlayer();
  }
});


document.querySelector(".btn-hold").addEventListener("click", function() {

  scores[activePlayer] = scores[activePlayer] + roundScore;


  document.getElementById("score-" + activePlayer).textContent =
    scores[activePlayer];


  if (scores[activePlayer] >= 50) {
 
    document.getElementById("name-" + activePlayer).textContent = "WINNER!!!";
    document
      .querySelector(".player-" + activePlayer + "-panel")
      .classList.add("winner");
    document
      .querySelector(".player-" + activePlayer + "-panel")
      .classList.remove("active");
  } else {
    
    switchToNextPlayer();
  }
});


function switchToNextPlayer() {
  // Ð­Ð½Ñ Ñ‚Ð¾Ð³Ð»Ð¾Ð³Ñ‡Ð¸Ð¹Ð½ ÑÑÐ»Ð¶Ð¸Ð½Ð´ÑÑ Ñ†ÑƒÐ³Ð»ÑƒÑƒÐ»ÑÐ°Ð½ Ð¾Ð½Ð¾Ð¾Ð³ 0 Ð±Ð¾Ð»Ð³Ð¾Ð½Ð¾.
  roundScore = 0;
  document.getElementById("current-" + activePlayer).textContent = 0;


  activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);


  document.querySelector(".player-0-panel").classList.toggle("active");
  document.querySelector(".player-1-panel").classList.toggle("active");

  diceDom.style.display = "none";
}

// New Game
document.querySelector(".btn-new").addEventListener("click", initGame);