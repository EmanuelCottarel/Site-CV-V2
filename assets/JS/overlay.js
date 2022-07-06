

let overlay= document.querySelector(".portfolio__overlay");
let card = document.querySelector(".portfolio__cards--card");
let closeButton = document.querySelector(".close");



function showOverlay(){
    
    overlay.style.visibility="visible";

}

card.addEventListener('click', showOverlay) 



function closeOverlay(){
  
        overlay.style.visibility="hidden";
}

closeButton.addEventListener('click', closeOverlay) 