// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

  const likeButtons = document.querySelectorAll(".like-glyph");
  likeButtons.forEach(likeButton => {
    likeButton.addEventListener('click', event => {
      if(likeButton.classList.contains("activated-heart")) {
        likeButton.textContent = EMPTY_HEART;
        likeButton.classList.remove("activated-heart");
      } else {
        mimicServerCall()
        .then(event => {
          likeButton.textContent = FULL_HEART;
          likeButton.classList.add("activated-heart");
        })
        .catch(event => {
          document.getElementById("modal").classList.remove("hidden");
          setTimeout(event => {
            document.getElementById("modal").classList.add("hidden")
          }, 3000)
        })
      }
    })
  })

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