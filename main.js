// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

// We use the Objects below to control toggling like / unlike status

const glyphStates = {
  "♡": "♥",
  "♥": "♡"
};

const colorStates = {
  "red" : "",
  "": "red"
};


 const articleHearts = document.querySelectorAll(".like-glyph");
const modalError = document.getElementById('modal');
 //console.log(articleHearts)


function likeCallback(e) {
  const heart = e.target;
  
  mimicServerCall()
    .then(function(){
      heart.innerText = glyphStates[heart.innerText];
      heart.style.color = colorStates[heart.style.color];
    })

    .catch(function(error) {
      //alert("Something went wrong!");

      showElement(error)
      //setTimeout(hideElement(),3000)
      setTimeout(()=> errorModal.className = 'hidden.3000');
      
    });
    function hideElement (){
      modalError.className = 'hidden'
      //modalError.classList.add('hidden')
    }
    function showElement (message){
      //modalError.classList.remove('hidden')
      
      modalError.innerText= message
      modalError.className = ''


    }
      
      

}



for (const glyph of articleHearts) {
  glyph.addEventListener("click", likeCallback);
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






































// // We use the Objects below to control toggling like / unlike status

// const glyphStates = {
//   "♡": "♥",
//   "♥": "♡"
// };

// const colorStates = {
//   "red" : "",
//   "": "red"
// };

// // STEP 1: The line of code below is what lets JavaScript find the elements that
// // we want to make clickable. Without JavaScript, clicking on these heart shapes
// // does nothing. Uncomment the code and refresh the demo page. 

//  const articleHearts = document.querySelectorAll(".like-glyph");

// function likeCallback(e) {
//   const heart = e.target;
//   mimicServerCall()
//     .then(function(serverMessage){
//       // STEP 2: Uncomment the 3 lines after the alert.
//       // Here we're using Pillar 1 (DOM Manipulation) to update the screen and
//       // mimicking Pillar 3 (Server Communication) to only update the screen if
//       // the sending of information to the server succeeds.
//       alert("You notified the server!");
//       alert(serverMessage);
//       heart.innerText = glyphStates[heart.innerText];
//       heart.style.color = colorStates[heart.style.color];
//     })
//     // .catch(function(error) {
//     //   alert("Something went wrong!");
//     // });
// }

// // STEP 3: In order for the call to the server and the update of the screen to
// // work, we need to add a click event listener to the elements we identified in
// // STEP 1. That's Pillar 2, event handling. Uncomment this code:

// for (const glyph of articleHearts) {
//   glyph.addEventListener("click", likeCallback);
// }

// // STEP 4: 

// // When all the STEPs' code changes have been complete, you'll be able to see a
// // working demonstration of our reference example. Sure, it's maybe not as
// // pretty as a professional site, but they're only different from our site in
// // style, not substance.

// //------------------------------------------------------------------------------
// // Ignore after this point. Used only for demo purposes
// //------------------------------------------------------------------------------

// // function mimicServerCall() {
// //   return new Promise(function(resolve, reject) {
// //     setTimeout(function() {
// //       resolve("Pretend remote server notified of action!");
// //     }, 300);
// //   });
// // }
