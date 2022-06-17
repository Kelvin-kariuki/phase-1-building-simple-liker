// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
const modal = document.querySelector("#modal");
modal.classList.add("hidden");

const click = (event) =>{
  const isClicked = event.target
  isClicked.innerTEXT = EMPTY_HEART

  mimicServerCall()
  .then(resp => {
    if(isClicked.innerTEXT === EMPTY_HEART){
      isClicked.innerTEXT = FULL_HEART
      isClicked.classList.add("activated-heart")
    } else {
      isClicked.innerTEXT = EMPTY_HEART
      isClicked.classList.remove("activated-heart")
    }
  })

  .catch(err =>{
    modal.classList.remove("hidden");
    modal.querySelector("#modal-message").textContent = err.message;
    setTimeout(() => {
      modal.classList.add("hidden");
    }, 3000);
  })

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
