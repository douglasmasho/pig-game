/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

//function to return a random number between 2 numbers

/*
let getRandomInt = function(min, max){
          //1. Math.floor(Math.random() * max) //this expression will give us a random number between 0 and the max
          //2. Math.floor(Math.random() * max)+ min); //this expression will add min to both the lower bound(0) and the upper bound(max).
          //3. This means that the new lower bound is min, but the new upper bound is (max + min).
          //4. But since we want to get max as our upper bound, we should subtract min from max(max - min) before adding min to the whole expression. This counters the addition to the upper bound
          //5. thus we end up with an expression like this --> Math.floor( (Math.random() * (max - min) ) + min )           
    return Math.floor( (Math.random() * (max - min) ) + min )
}
getRandomInt(5, 10);
// this will return a random interger between 5(inclusive) and 10(exclusive)

*/
var scores, roundScore, activePlayer, gamePlaying, arrsix;


// for(let i = 1; i < ar.length; i++){
//     // if(i > 0 && ar[i] === ar[i--]){
//     //     console.log(true);
//     // };
//     // console.log(ar[i]);
//     // console.log(ar[i - 1]);

//     if (ar[i] === ar[i - 1] && ar[i] === 6){
//         console.log("This works");
//     }else{
//         console.log("this does not work")
//     }
// }

init()

document.querySelector(".btn-roll").addEventListener("click", function() {
    if(gamePlaying){
        
        //1. Random number
        var dice = Math.floor(Math.random() * 6) + 1;

        //2. display the result
        var diceDom = document.querySelector(".dice")
        diceDom.style.display = "block";
        diceDom.src = "dice-" + dice + ".png";

        //3. Update the round score if the rolled number was not a 1
        // dice !== 1 ? roundScore += dice : roundScore = 0;
         if( dice !== 1){
           //update
           roundScore += dice;
           document.querySelector("#current-" + activePlayer).textContent = roundScore;      
         }else{
           nextPlayer();
         }
    }

  }


);


document.querySelector(".btn-hold").addEventListener("click", function(){
    if(gamePlaying){
              //add current score to global score
        scores[activePlayer] += roundScore;

        //update the ui
        document.querySelector("#score-" + activePlayer).textContent = scores[activePlayer];
        //check if the player won the game
        if(scores[activePlayer] >= 20){
            document.querySelector("#name-" + activePlayer).textContent = "Winner!";
            document.querySelector(".dice").style.display = "none";
            document.querySelector(".player-" + activePlayer + "-panel").classList.add("winner");
            document.querySelector(".player-" + activePlayer + "-panel").classList.remove("active");
            gamePlaying = false;
        }else{
            //nextPlayer
            nextPlayer();
        }
    }
});

function nextPlayer(){
    //cleaning the table
    roundScore = 0;
    document.getElementById("current-0").textContent = "0";
    document.getElementById("current-1").textContent = "0";
    document.querySelector(".dice").style.display = "none";

    //initating a player change
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    document.querySelector(".player-0-panel").classList.toggle("active");
    document.querySelector(".player-1-panel").classList.toggle("active");
    arrsix = [];
 
}

document.querySelector(".btn-new").addEventListener("click", init);

function init(){
scores = [0, 0];
roundScore = 0;
activePlayer = 0;
document.querySelector(".dice").style.display = "none"; 
gamePlaying = true;

document.getElementById("score-0").textContent = "0";
document.getElementById("score-1").textContent = "0";
document.getElementById("current-0").textContent = "0";
document.getElementById("current-1").textContent = "0";
document.getElementById("name-0").textContent = "PLAYER 1";
document.getElementById("name-1").textContent = "PLAYER 2";
document.querySelector(".player-0-panel").classList.remove("winner");
document.querySelector(".player-1-panel").classList.remove("winner");
document.querySelector(".player-0-panel").classList.remove("active");
document.querySelector(".player-1-panel").classList.remove("active");
document.querySelector(".player-0-panel").classList.add("active");

arrsix = [];

}


// roundScore = 0;
// document.getElementById("current-0").textContent = "0";
// scores[activePlayer] = 0;
// document.querySelector("#score-" + activePlayer).textContent = 0;
// nextPlayer();


















































































// var scores, roundScore, activePlayer;


// scores = [0,0];
// roundScore = 0;
// activePlayer = 0;


//setter
// document.querySelector("#current-" + activePlayer).textContent = roundScore; //allows you to input plain text into something
// document.querySelector("#current-" + activePlayer).innerHTML = "<em>" + roundScore + "</em>";  //allows you to input HTML into something.....remember it must be a string.

//getter
// var x = document.querySelector("#score-0").textContent;

// console.log(x);

// document.querySelector(".dice").style.display = "none";

// document.getElementById("score-0").textContent = "0";
// document.getElementById("score-1").textContent = "0";
// document.getElementById("current-0").textContent = "0";
// document.getElementById("current-1").textContent = "0";


// document.querySelector(".btn-roll").addEventListener("click", function() {
//     // 1.random number
//     var dice = Math.floor(Math.random() * 6) + 1;

//     //2.display the result
//     var diceDOM = document.querySelector(".dice");
//      diceDOM.style.display = "block";
//      diceDOM.src = "dice-" + dice + ".png"

//     //3. Update the round score IF the rolled number was NOT a 1.
//      if (dice !== 1){
//          //Add score
//          roundScore += dice;
//          document.querySelector("#current-" + activePlayer).textContent = roundScore;
//      } else {
//          //next player's turn
//          activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
//          roundScore = 0;

//          document.getElementById("current-0").textContent = "0";
//          document.getElementById("current-1").textContent = "0";

//          document.querySelector(".player-0-panel").classList.toggle("active");
//          document.querySelector(".player-1-panel").classList.toggle("active");

//         //  document.querySelector(".player-0-panel").classList.remove("active");
//         //  document.querySelector(".player-1-panel").classList.add("active");

//         diceDOM.style.display = "none";

//      }
// } )


