
var activePlayer = 0;


var scores = [0, 0];


var roundScore = 0;



// ÐŸÑ€Ð¾Ð³Ñ€Ð°Ð¼ ÑÑ…Ð»ÑÑ…ÑÐ´ Ð±ÑÐ»Ñ‚Ð³ÑÐµ
document.getElementById("score-0").textContent = "0";
document.getElementById("score-1").textContent = "0";
document.getElementById("current-0").textContent = "0";
document.getElementById("current-1").textContent = "0";

var diceDom = document.querySelector(".dice");
diceDom.style.display = "none";


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
  // Ð£Ð³ Ñ‚Ð¾Ð³Ð»Ð¾Ð³Ñ‡Ð¸Ð¹Ð½ Ñ†ÑƒÐ³Ð»ÑƒÑƒÐ»ÑÐ°Ð½ ÑÑÐ»Ð¶Ð½Ð¸Ð¹ Ð¾Ð½Ð¾Ð¾Ð³ Ð³Ð»Ð¾Ð±Ð°Ð»ÑŒ Ð¾Ð½Ð¾Ð¾Ð½ Ð´ÑÑÑ€ Ð½ÑŒ Ð½ÑÐ¼Ð¶ Ó©Ð³Ð½Ó©.

  //   if (activePlayer === 0) {
  //     scores[0] = scores[0] + roundScore;
  //   } else {
  //     scores[1] = scores[1] + roundScore;
  //   }

  scores[activePlayer] = scores[activePlayer] + roundScore;


  document.getElementById("score-" + activePlayer).textContent =
    scores[activePlayer];


  if (scores[activePlayer] >= 20) {

    document.getElementById("name-" + activePlayer).textContent = "Ялагч!!";
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

  roundScore = 0;
  document.getElementById("current-" + activePlayer).textContent = 0;

  activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);


  document.querySelector(".player-0-panel").classList.toggle("active");
  document.querySelector(".player-1-panel").classList.toggle("active");

  // Ð¨Ð¾Ð¾Ð³ Ñ‚Ò¯Ñ€ Ð°Ð»Ð³Ð° Ð±Ð¾Ð»Ð³Ð¾Ð½Ð¾.
  diceDom.style.display = "block";
}