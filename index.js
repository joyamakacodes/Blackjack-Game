let firstCard = getRandomCard()
let secondCard = getRandomCard()
let cards = [firstCard, secondCard]
let sum = cards[0] + cards[1]
 let isblackJack = false;
 let isAlive = false;
 let message = ""
 let messageEl = document.getElementById("message")
let sumEl = document.getElementById("sumEl")
let cardEl = document.getElementById("cardEl")
let playerForm = document.querySelector(".input")
let input = playerForm.value; 
let printPlayer = document.getElementById("playerEl")
let submitForm = document.getElementById("submitForm").addEventListener("submit", displayName)

function displayName(e){
   let input = playerForm.value; 
   
   printPlayer.textContent = input 
   
    
   input = " "
   e.preventDefault()
}


function getRandomCard(){
  let randomNum = Math.floor(Math.random() *14)
  return randomNum
 }
function playGame(){
   isAlive = true
   
console.log(sum);
console.log(cards[0]);
console.log(cards[1]);
 Game()
}

 function Game(){
  cardEl.textContent = "Cards: "
  for(let i= 0;i<cards.length; i++){
   cardEl.textContent += cards[i] + " "
 }
 sumEl.textContent = "Sum: " + sum
    if (sum <= 20){
       message = "Do you want  pick a new card?"
     } else if (sum === 21){
        message = "congrats! you won a blackjack"
        isblackJack = true
        printPlayer.textContent += input + ": You won " + "$" + 200

     }else{
        message = " you lose"
        printPlayer.textContent += input +  ":  " + message 
        isAlive= false
     }   
     messageEl.textContent = message
     console.log(message);
 }

 function newGame(){
 if (isAlive === true && isblackJack === false){
   
  let newCard = getRandomCard()
  sum += newCard 
  cards.push(newCard)
  console.log(cards) 
 
 Game()
 }
      
      
 }


 
