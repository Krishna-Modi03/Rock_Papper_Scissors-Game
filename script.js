let userScore = 0;
let compScore = 0;

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const genCompChoice = () => {
    // Rock, Papper, Scissor
    const options = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * 3);
    return options[randomIndex];
}

const drawGame = () => {
    msg.textContent = "Game Draw....Play Again...!";
    msg.style.backgroundColor = "black";
}

const showWinner = (userWin, userChoice, compChoice) => {
    if(userWin){
        userScore++;
        userScorePara.textContent = userScore;
        msg.textContent = `You Won!! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "teal";
    }else{
        compScore++;
        compScorePara.textContent = compScore;
        msg.textContent = `You Lost! ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "crimson";
    }
}

const playGame = (userChoice)=>{
    // Generate Computer Choice
    const compChoice = genCompChoice();

    if(userChoice === compChoice){
        // Game draw
        drawGame();
    }
    else{
        let userWin = true;
        if (userChoice === "rock") {
            // Scissors, Papper
            userWin = compChoice === "paper" ? false : true;
        }
        else if(userChoice === "paper"){
            // rock, Scissors
            userWin = compChoice === "scissors" ? false : true;
        }
        else{
            // rock, paper
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
}

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});