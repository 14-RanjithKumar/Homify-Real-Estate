
let buyBtn = document.querySelector('.buy');
let rentBtn = document.querySelector('.rent');
let buyDetails = document.querySelector('.buy-details');
let rentDetails = document.querySelector('.rent-details');

buyBtn.addEventListener("click",() =>{
    buyBtn.classList.add('changeBg')
    rentBtn.classList.remove('changeBg');
    buyDetails.style.display="flex";
    rentDetails.style.display="none";
});

rentBtn.addEventListener("click",displayRent =() => {
    rentBtn.classList.add('changeBg');
    buyBtn.classList.remove('changeBg');
    buyDetails.style.display="none";
    rentDetails.style.display="flex";
});

// images
let mainImage = document.querySelector('#main-cons-img');
let imageOne = document.querySelector('#cons-image01');
let imageTwo = document.querySelector('#cons-image02');
let imageThree = document.querySelector('#cons-image03');
let imageFour = document.querySelector('#cons-image04');

function imgOne(){
    mainImage.src = imageOne.src;
}

function imgTwo(){
    mainImage.src = imageTwo.src;
}

function imgThree(){
    mainImage.src = imageThree.src;
}

function imgFour(){
    mainImage.src = imageFour.src;
}


let greeting = document.getElementById("greeting");
let now = new Date();
let hour = now.getHours();

function getGreeting(){
    if(hour >=5 && hour<12){
        greeting.innerHTML = "Good Morning";
    }
    else if(hour>=12 && hour<16){
        greeting.innerHTML = "Good Afternoon";
    }
    else if(hour>=16 && hour<20){
        greeting.innerHTML = "Good Evening";
    }
    else{
        greeting.innerHTML = "Good Night";
    }
}
getGreeting();

let body = document.getElementById("body");
let moon = document.getElementById("moon");


moon.addEventListener("click",() => {
    if(moon.className == "fa-solid fa-moon"){
        moon.className = "fa-solid fa-sun";
    }
    else{
        moon.className = "fa-solid fa-moon";
    }
});

moon.addEventListener("click",()=>{
    body.classList.toggle("dark");
})



let bell = document.getElementById("bell-btn");
bell.addEventListener("click", onClick);

function onClick() {
    confetti();
  };