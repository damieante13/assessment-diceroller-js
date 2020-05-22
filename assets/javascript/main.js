//dwight shouts
const rollButton=document.querySelector("#roll-button");
const numberOfDice=document.querySelector("#number-of-dice");
const outputElement=document.querySelector("#total-of-roll");
const showAllRolls=document.querySelector("#show-all-rolls");
const allRolls=document.querySelector("#all-rolls");
const sidesDieInput=document.querySelector("#side-of-die");
const reset=document.querySelector("#reset");


//  list of each die that has been rolled in new array
const dieRolls=[];
//counter
let numberToRoll=0;
//die sides -- 6 default
let sidesDie=6;

//event listen1
rollButton.addEventListener("click", function(){
     //take user input
    numberToRoll = numberOfDice.value;
    //take sides user input
    sidesDie=sidesDieInput.value;
    
    //max no# is 100
    for (let counter=0; counter<numberToRoll; counter+=1){
   //random number and push to array
        dieRolls.push( Math.floor(Math.random()*sidesDie)+1);
    }

//dice total    
let sumDice=0;

for (let i=0; i<dieRolls.length; i+=1){
    sumDice += dieRolls[i];
}
outputElement.innerHTML=sumDice; 

})

//event listen2 show all dice values
showAllRolls.addEventListener("click", function(){
for(let i=0; i<dieRolls.length; i+=1){
    allRolls.innerHTML+="<li>" + dieRolls[i] + "</li>";
}

})

//event listen3 reset
reset.addEventListener("click", function(){
    numberToRoll=0;
    let sumDice=0;
    numberOfDice.value=0;
    sidesDieInput.value=0;
    sidesDie=6;
    outputElement.innerHTML=0
    allRolls.innerHTML=""
    dieRolls.length=0;
})

// Then you need to roll the dice. It is time to write a loop. 
// Use Math.random() to simulate rolling a single six-sided die X number of times,
//  where X is the number from the text input box. X is also the number of times 
//  you will loop. (4 points)
// Push the result of each roll onto your dieRolls array. (2 points)
// Sum all your dice rolls and display the result in the Total area 
// on the page using innerHTML. (2 point)