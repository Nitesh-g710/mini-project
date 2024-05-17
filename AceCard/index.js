let PlayerCard1 = document.querySelectorAll("span")[0];
let PlayerCard2 = document.querySelectorAll("span")[1];

let ComputerCard1 = document.querySelectorAll("span")[2];
let ComputerCard2 = document.querySelectorAll("span")[3];

let PlayerTotal = document.querySelectorAll("h2")[0];
let ComputerTotal = document.querySelectorAll("h2")[1];
let startBtn = document.querySelector("button");
let PlayerSum=0;
let ComputerSum=0;
let result = document.querySelector("h6");

    // console.log(PlayerCard1, 
    // PlayerCard2, 
    // PlayerTotal, 
    // ComputerCard1, 
    // ComputerCard2,  
    // ComputerTotal);

function randomNumber() {
    let num = Math.floor(Math.random()*10+1);
    console.log(num);
    return num;
}
randomNumber();

startBtn.addEventListener("click",()=>{
   let PlayerNumber1  = randomNumber();
   let PlayerNumber2  = randomNumber();
   let ComputerNumber1  = randomNumber();
   let ComputerNumber2  = randomNumber();
//    console.log(Pla);

    PlayerCard1.innerHTML = PlayerNumber1;
    PlayerCard2.innerHTML = PlayerNumber2;
    ComputerCard1.innerHTML = ComputerNumber1;
    ComputerCard2.innerHTML = ComputerNumber2;
    
    PlayerSum = PlayerNumber1+PlayerNumber2;
    ComputerSum = ComputerNumber1+ComputerNumber2;

    PlayerTotal.innerHTML =`Total : ${PlayerSum}`;
    ComputerTotal.innerHTML = `Total : ${ComputerSum}` ;
    
    if (PlayerSum > ComputerSum) {
        result.innerHTML = "You won!"
        result.style.color="green"
    } else if(PlayerSum < ComputerSum){
        result.innerHTML = "Computer won!"       
        result.style.color = "red"
    }else{
        result.innerHTML = "Tough Fight, its a Tie! "       
        result.style.color = "white"
    }

});

