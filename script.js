let userScore = 0;
let compScore = 0;

let choices = document.querySelectorAll(".choice");
let message = document.querySelector("#msg");
let user_Score = document.querySelector("#user-score");
let computer_Score = document.querySelector("#computer-score");

const getComputerChoice =()=>{
const compChoice = ["rock", "paper", "scissor"];
const randIdx = Math.floor(Math.random() * 3);
return compChoice[randIdx]
};


const updateScore = (winner)=>{
  if(winner === "user"){
    userScore = userScore + 1;
    user_Score.innerText = userScore;
  }
  else if(winner === "computer"){
    compScore = compScore + 1;
    computer_Score.innerText = compScore;
  }
}

const playGame = (userChoice)=>{
computer_Score.innerText = compScore;

let user_choice = userChoice;
let comp_choice = getComputerChoice();

console.log("User Choice is :- ", user_choice);
console.log("Computer Choice is :-", comp_choice);

if(user_choice === comp_choice){
  message.innerText = "Game Draw";
  message.style.backgroundColor = "blue";

}
else if((user_choice === "rock" && comp_choice === "scissor") || 
        (user_choice === "scissor" && comp_choice === "paper") ||
        (user_choice === "paper" && comp_choice === "rock")){
          updateScore("user");
          message.innerText = "You Won The Game";
          message.style.backgroundColor = "green";


}
else{
  updateScore("computer");
  message.innerText = `Computer Won The Game! ${comp_choice} beats your ${user_choice}`;
  message.style.backgroundColor = "red";


}
};

choices.forEach((choice)=>{
  choice.addEventListener("click", ()=>{
  let choiceId = choice.getAttribute("id");
  console.log(choiceId, "Was clicked!");
  playGame(choiceId)
})
});