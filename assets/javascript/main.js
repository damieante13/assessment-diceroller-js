const rollButton=document.querySelector("#roll-button");
const numberOfDice=document.querySelector("#number-of-dice");
const outputElement = document.querySelector("#total-of-roll");

//  list of each die that has been rolled
const dieRolls=[];
let numberToRoll=0;

 rollButton.addEventListener("click", function(){
    numberToRoll = numberOfDice.value;
     
    while (numberToRoll < 101){
    //const diceRolledValue= Math.floor(Math.random()*6)+1;
     //const diceTotal=0;
     console.log(numberToRoll);
     numberToRoll ++; 
    }
//outputElement.innerHTML=diceTotal;    
 })




// Then you need to roll the dice. It is time to write a loop. 
// Use Math.random() to simulate rolling a single six-sided die X number of times,
//  where X is the number from the text input box. X is also the number of times 
//  you will loop. (4 points)
// Push the result of each roll onto your dieRolls array. (2 points)
// Sum all your dice rolls and display the result in the Total area 
// on the page using innerHTML. (2 point)