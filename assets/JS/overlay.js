
// Overlay Adhoc

let overlayAdhoc= document.querySelector("#overlayAdhoc");
let cardAdhoc = document.querySelector("#cardAdhoc");
let closeButtonAdhoc = document.querySelector("#closeAdhoc");

showOverlayAdhoc = () => {overlayAdhoc.style.visibility="visible";}
cardAdhoc.addEventListener('click', showOverlayAdhoc) 
closeOverlayAdhoc = () => {overlayAdhoc.style.visibility="hidden";}
closeButtonAdhoc.addEventListener('click', closeOverlayAdhoc) 


// Overlay TeaCozy

let overlayTeaCozy= document.querySelector("#overlayTeaCozy");
let cardTeaCozy = document.querySelector("#cardTeaCozy");
let closeButtonTeaCozy = document.querySelector("#closeTeaCozy");

showOverlayTeaCozy = () => {overlayTeaCozy.style.visibility="visible";}
cardTeaCozy.addEventListener('click', showOverlayTeaCozy) 
closeOverlayTeaCozy = () => {overlayTeaCozy.style.visibility="hidden";}
closeButtonTeaCozy.addEventListener('click', closeOverlayTeaCozy) 


// Overlay CV

let overlayCv= document.querySelector("#overlayCv");
let cardCv = document.querySelector("#cardCv");
let closeButtonCv = document.querySelector("#closeCv");

showOverlayCv = () => {overlayCv.style.visibility="visible";}
cardCv.addEventListener('click', showOverlayCv) 
closeOverlayCv = () => {overlayCv.style.visibility="hidden";}
closeButtonCv.addEventListener('click', closeOverlayCv) 