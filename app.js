//Правило игры-У игроков есть всего одна кость.Они ходят последовательно, друг за другом. Игроки подсчитывают выпавшую очку,и очка добавляется за каждый разОни до 50и очков конкурируются друг с другом.Если кость упала строной единицы ,то того игрока сумма начнется с нуля.
//переменное,для очереди игроков:пусть  Первый игрок -0, второй - 1
var activePlayer = 0;

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

//shoog shideh event listener
document.querySelector(".btn-roll").addEventListener("click",function shooShid(){
    var diceNumber = Math.floor(Math.random()*6)+1;
//shooni zurgiig web deer gargaj irne
diceDom.style.display="block";
//buusan sanmasargvi shooni tooni zurgiig web deer gargaj irne
diceDom.src= "dice-"+diceNumber + ".png";

/*toglogchiin eeljin onoog oorchilno
buusan too ni 1ees yalgaatai bol idewhitei toglogchiin onoog nemegdvvlne*/
if (diceNumber !== 1)
{
    // 1-ees oor too buula.Ter toog nemlee
    roundScores = roundScores + diceNumber;
    document.getElementById("current-"+activePlayer).textContent=roundScores;
}
 else {
     //1 buusan tul bvh onoog 0 bolgoloo-eelj soligdono
     //ene toglogchiin eeljindee tsugluulsan onoog 0 bolgono
     roundScores=0;
     document.getElementById("current-"+activePlayer).textContent= 0;
     //toglogchiin eeljiig nogoo toglogchruu shiljvvlne
     //0 idewhitei toglogch rvv shiljine
     activePlayer=== 0 ? (activePlayer =1) :( activePlayer = 0);
    
     //:-vgvi bol, bol ?

     // ulaan tsegiig shiljvvleh
     //class songohd zaawal tseg tawina 'player-0-panel'- ene bol class
     document.querySelector('.player-0-panel').classList.toggle('active');
     document.querySelector('.player-1-panel').classList.toggle('active');
//toggle - esregrvv shiljvvlne utgig

//shoog alga bolgoh toglogchiig solih ywtsad

diceDom.style.display="block";






     /*
     if(activePlayer ===0)
     {
         activePlayer=1;
     }
     else{
         activePlayer=0;
     }
 }*/
}
});
