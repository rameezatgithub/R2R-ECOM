// Hamburger Menu

const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');

if(bar){
    bar.addEventListener('click', ()=>{
        nav.classList.add('active');
    })
}

if(close){
    close.addEventListener('click', ()=>{
        nav.classList.remove('active');
    })
}

// Image Switching

var mainImage=document.getElementsByClassName("main-image");
var smallImage=document.getElementsByClassName("small-img");

// var handleClick = function(i){}

smallImage[0].onclick = () => {
    mainImage[0].src = smallImage[0].src;
  }
smallImage[1].onclick = () => {
  mainImage[0].src = smallImage[1].src;
}
smallImage[2].onclick = () => {
  mainImage[0].src = smallImage[2].src;
}
smallImage[3].onclick = () => {
  mainImage[0].src = smallImage[3].src;
}