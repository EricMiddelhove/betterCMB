console.log("file loaded");

let slideContainer = document.querySelector('.slider-container');
let slides = document.querySelectorAll('.slides img');
let slide = document.querySelector('.slides')

let slideWidth = slides[0].clientWidth;
console.log(slideWidth);

let counter = 0;

setInterval(function(){
    slide.style.transition = "transform 1s ease-in-out";
    if(counter < slides.length - 1){
        counter++;
        slide.style.transform = "translate(" + (-slideWidth * counter) + "px)";
    }else{
        counter = 0;
        slide.style.transform = "translate(" + (-slideWidth * counter) + "px)";
    }

},5000);

let hamburger = document.querySelector('#menuicon');
let isShown = false;
console.log(hamburger);
hamburger.addEventListener('click', function(){
    console.log("heyhoe");
    
    showDropdown(isShown);

});

function showDropdown(show){
    let objects = document.querySelector('.dropdown');

    if(!isShown){
        objects.style.display = 'block';
        isShown = true;
    }else{
        objects.style.display = 'none';
        isShown = false;
    }
}