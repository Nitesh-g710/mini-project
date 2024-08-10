let arr = [
  {
    name: "Iphone",
    price: "1,50,000/-",
    src: "img/iPhone-14-Midnight.jpeg",
    rate: '4.8',
  },
  {
    name: "Kawasaki",
    price: "7,70,000/-",
    src: "img/kawasaki.webp",
    rate: '4.9',
  },
  {
    name: "Laptop",
    price: "1,70,000/-",
    src: "img/Laptop.jpg",
    rate: '4.5',
  },
  {
    name: "Color Set",
    price: "3,000/-",
    src: "img/painting-brushes.jpg",
    rate: '4.6',
  },
];


let next = document.querySelectorAll('i')[2]
let back = document.querySelectorAll('i')[1]
let name1 = document.querySelectorAll('span')[0]
let price = document.querySelectorAll('span')[1]
let rate = document.querySelectorAll('span')[2]
let img = document.querySelector('img')

let index = 0

console.log(next);

next.addEventListener('click', (e)=>{
    if (index<arr.length-1) {
        index++;
    } else {
        index=0;
    }
    console.log(arr[index].name);
    
    name1.innerText = arr[index].name;
    price.innerText = arr[index].price;
    rate.innerText = arr[index].rate;
    img.src = arr[index].src

})

back.addEventListener('click', (e)=>{
    console.log(e);
    if (index>0) {
        index--;
    } else {
        index=arr.length-1;
    }
    console.log(arr[index].name);
    
    name1.innerText = arr[index].name;
    price.innerText = arr[index].price;
    rate.innerText = arr[index].rate;
    img.src = arr[index].src
    
    
})


// setInterval(() => {
//     if (index<arr.length-1) {
//         index++;
//     } else {
//         index=0;
//     }
//     name1.innerText = arr[index].name;
//     price.innerText = arr[index].price;
//     rate.innerText = arr[index].rate;
//     img.src = arr[index].src
// }, 5000);