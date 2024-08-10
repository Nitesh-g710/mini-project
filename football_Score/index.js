let count1 = document.querySelectorAll("h1")[0]
let count2 = document.querySelectorAll("h1")[1]
let result = document.querySelectorAll("h1")[2]
let c1 = 0
let c2 = 0
let ar =  document.querySelectorAll("button")
let img1 = document.querySelector('#img1')
let img2 = document.querySelector('#img2')


function cal(i) {
    img1.style.display='none'
        img2.style.display='none'
    result.innerText = ""
    let aa = i.substring(0,1)
    if (aa === '1') 
        {
        c1+=parseInt(i.substring(1))
        console.log(parseInt(i.substring(1)));
        count1.innerHTML = c1
    } 
    else 
    {
        c2+=parseInt(i.substring(1))
        count2.innerHTML = c2
    }
}

ar[ar.length-2].addEventListener('click', ()=>{
    if (c1>c2 ) {
        result.innerText = "Team A is Won"
        img1.style.display='block'
        img2.style.display='block'
    } else if(c1<c2) {
        result.innerText = "Team B is Won"
        img1.style.display='block'
        img2.style.display='block'
    }else if(c1!=0 && c2!=0){
        result.innerText = "It's a Tie"
    }else{
        result.innerText = "Please Enter the score"
    }

});

function reset(){

    window.location.reload()
}