//Правило игры-У игроков есть всего одна кость.Они ходят последовательно, друг за другом. Игроки подсчитывают выпавшую очку,и очка добавляется за каждый разОни до 50и очков конкурируются друг с другом.Если кость упала строной единицы ,то того игрока сумма начнется с нуля.
//переменное,для очереди игроков:пусть  Первый игрок -0, второй - 1
var activePlayer = 1;

//переменное,для сохранения общего счета игроков
var scores =[0,0];

//переменное,для сохранения счета одного раз игроков
var roundScores =0;
//переменное,для сохранения числа костя (случайные переменные 1-6)
//<div class="player-score" id="score-0">27</div>
var dice = Math.floor(Math.random()*6)+1;
// window.document.querySelector('#score-0').textContent =dice;
//document gedg ni windowooso(html) olj bnaa gesen vg
//document.querySelector('#score-1').textContent =dice;
//Готовим к началу игры
document.querySelector('#score-0').textContent =0;
document.querySelector('#score-1').textContent =0;
document.querySelector('#current-0').textContent =0;
document.querySelector('#current-1').textContent =0;

var diceDom = document.querySelector(".dice");

diceDom.style.display="none";

document.querySelector(".btn-roll").addEventListener("click",function shooShid(){
    var diceNumberr = Math.floor(Math.random()*6)+1;
  // alert("Кость упала : " + diceNumberr);
diceDom.style.display="block";
diceDom.src= "dice-"+diceNumberr + ".png";
});
