// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

    //select the element to add event listener

  const activeHearts =  document.querySelectorAll(".like-glyph")
  
   for (const glyph of activeHearts){
    glyph.addEventListener('click', updateHeart);}
   
  function updateHeart(e){
    const heartSpan = e.target;                   //whats the target
     mimicServerCall()
     .then( () => {                                 //perform this if event met
      if(heartSpan.innerText === EMPTY_HEART){
         heartSpan.innerText = FULL_HEART
      } else {
        heartSpan.innerText = EMPTY_HEART;
      }
    })

     .catch(error => {
      const modal = document.getElementById("modal");
      modal.innerText = error;
      setTimeout(() =>  modal.className = "hidden", 3000);
    });

  }


//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
