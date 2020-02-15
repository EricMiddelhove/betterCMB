console.log("file loaded");

let nxtBtn = document.getElementById('nxt');
let preBtn = document.getElementById('prev');

let slideContainer = document.querySelector('.slider-container');
let slides = document.querySelectorAll('.slides img');
let slide = document.querySelector('.slides')

let slideWidth = slides[0].clientWidth;
console.log(slideWidth);

let counter = 0;

console.log(nxtBtn);
console.log(preBtn);

nxtBtn.addEventListener('click',()=>{

    slide.style.transition = "transform 0.4s ease-in-out";
    if(counter < slides.length - 1){
        counter++;
        slide.style.transform = "translate(" + (-slideWidth * counter) + "px)";
    }else{
        counter = 0;
        slide.style.transform = "translate(" + (-slideWidth * counter) + "px)";
    }
    
});

preBtn.addEventListener('click', ()=>{

    slide.style.transition = "transform 0.4s ease-in-out";
    if(counter > 0){
        counter--;
        slide.style.transform = "translate(" + (-slideWidth * counter) + "px)";
    }else{
        counter = slides.length-1;
        slide.style.transform = "translate(" + (-slideWidth * counter) + "px)";
    }
    
});