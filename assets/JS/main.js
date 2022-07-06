


// Animation text header "machine à écrire"

window.addEventListener("DOMContentLoaded", (event) => {
    animate_text();
  });
  // -------------------
  function animate_text() 
  {
    let delay = 100,
        delay_start = 100,
        contents,
        letters;
  
    document.querySelectorAll(".animate-text").forEach(function (elem) {
      contents = elem.textContent.trim();
      elem.textContent = "";
      letters = contents.split("");
      elem.style.visibility = 'visible';
  
      letters.forEach(function (letter, index_1) {
        setTimeout(function () {
          // ---------
          // effet machine à écrire (SIMPLE)
          elem.textContent += letter;
          
  
          // ---------
        }, delay_start + delay * index_1);
      });    
      delay_start += delay * letters.length;
    });
  }


  

 
  
  