let PlayerCard1 = document.querySelectorAll("span")[0];
let PlayerCard2 = document.querySelectorAll("span")[1];

let ComputerCard1 = document.querySelectorAll("span")[2];
let ComputerCard2 = document.querySelectorAll("span")[3];

let PlayerTotal = document.querySelectorAll("h2")[0];
let ComputerTotal = document.querySelectorAll("h2")[1];
let startBtn = document.querySelector("button");
let PlayerSum=0;
let ComputerSum=0;
// let result = window.alert("");

    // console.log(PlayerCard1, 
    // PlayerCard2, 
    // PlayerTotal, 
    // ComputerCard1, 
    // ComputerCard2,  
    // ComputerTotal);

    let PName =window.prompt("Enter name :");
    console.log(PName);
    let name1 = document.querySelectorAll("h3")[0];
    if (PName === "") {
        name1.innerHTML = "noob";
    } else {
        name1.innerHTML=PName;
    }

    let restart = document.querySelectorAll("button")[1];
    restart.addEventListener("click", ()=>{
        document.location.reload();
    });


function randomNumber() {
    let num = Math.floor(Math.random()*6+1);
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
        window.alert("You won!");
        // result.style.color="green"
    } else if(PlayerSum < ComputerSum){
        window.alert("Computer won!") ;
        // result.style.color = "red"
    }else{
        window.alert("Tough Fight, its a Tie! ") 
        // result.style.color = "white"
    }

});