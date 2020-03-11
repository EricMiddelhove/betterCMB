
/* Dropdown*/
let hamburger = document.querySelector('#menuicon');
let isShown = false;

console.log(hamburger);
hamburger.addEventListener('click', function(){
    console.log("heyhoe");
    
    showDropdown(isShown);

});

function showDropdown(show){
    let objects = document.querySelector('.menue-mobile');

    if(!show){
        objects.style.display = 'block';
        isShown = true;
    }else{
        objects.style.display = 'none';
        isShown = false;
    }
}