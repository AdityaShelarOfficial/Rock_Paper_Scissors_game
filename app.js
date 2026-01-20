let userScore=0;
let compScore=0;

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const userScorePara=document.querySelector("#user-score");
const compScorePara=document.querySelector("#comp-score");

const genrateComchoice = () => {
    let options=["rock","paper","scissor"];
    const randIdx=Math.floor(Math.random()*3);
    return options[randIdx];
}

const drawGame = () =>{
    console.log("Game was Draw");
    msg.innerText = "Game Was Draw.Play Again";
    msg.style.backgroundColor = "#31093c";
}

const showWinner = (userWin,userChoice,compChoice) =>{
    if(userWin){
        userScore++;
        userScorePara.innerText=userScore;
       msg.innerText = `You Win! Your ${userChoice} beats ${compChoice}`;
       msg.style.backgroundColor = "#4CAF50";
    }
    else{
        compScore++;
        compScorePara.innerText=compScore;
        msg.innerText = `You Lose! ${compChoice} beats Your ${userChoice}`;
        msg.style.backgroundColor = "#b82121";
    }
}

const playGame = (userChoice) =>{
    console.log("user choice=",userChoice);
    const compChoice = genrateComchoice();
    console.log("Computer choice=",compChoice);

    if(userChoice === compChoice){
        drawGame();
    }
    else{
        let userWin=true;
        if(userChoice === "rock"){
            userWin = compChoice === "paper" ? false : true;            
        }
        else if(userChoice === "paper"){
            userWin = compChoice === "scissor" ? false : true;
        }
        else{
            userWin=compChoice === "rock" ? false : true; 
        }
        showWinner(userWin,userChoice,compChoice);
    }
}
choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
        playGame(userChoice);
    });
});