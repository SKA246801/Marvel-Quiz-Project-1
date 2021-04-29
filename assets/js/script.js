const PUBLIC_KEY = "407e4467d27709793035e60508d32fdf";
const PRIVATE_KEY = "d49a689257f6451c7403a124fd37f1845b3719cc";

const fetchFunc = async () => {
  let ts = Date.now();
  let hashKey = md5(ts + PRIVATE_KEY + PUBLIC_KEY);
  let request = await fetch(
    `https://gateway.marvel.com:443/v1/public/characters?ts=${ts}&apikey=${PUBLIC_KEY}&hash=${hashKey}&name=hulk`
  );
  let data = await request.json();
  console.log(data);
};

fetchFunc();
 

userInputApi = function() {
    
    fetch('https://api.giphy.com/v1/gifs/search?api_key=yBtaVHxMEXDfPQQhAsxu4RIaqyzHd9CN&q=explosion&limit=25&offset=0&rating=g&lang=en')
    .then(function(response) {
      return response.json();
     })
     .then(function(response) {
     console.log(response.data[0]);
     
     const gifLocation = document.querySelector('.gif')
 
     var gifImg = document.createElement('img');
     gifImg.setAttribute('src', response.data[0].images.fixed_height.url);
       
     gifLocation.appendChild(gifImg)
   })
}

   userInputApi()


// // Written questions
// const question1 = [

// ];
// // Written answers
// const options1 = ['<button class=buttons1 onclick=q1i()>test 1;</button><br /><br /><button class=buttons1 onclick=q1i()>test 2</button><br /><br /><button class=buttons1 onclick=q1c()>test 3</button>'];
// const option2 = [];
// const option3 = [];
// const option4 = [];
// const option5 = [];
// const option6 = [];
// const option7 = [];
// const option8 = [];
// const option9 = [];
// const option10 = [];

// //  Declare each variable
// var a = 0;
// a++;
// var b = 0;
// b++;
// var c;

// //  if statement for q and a
// function begin1() {
// c = 100;
// disappear1.innerHTML = "";
// message1.innerHTML = question1[0];
// message2.innerHTML = options1;
// }

// function q1c() {
// message3.innerHTML = "Correct.";
// message2.innerHTML = "";
// message4.innerHTML = "<button class=buttons2 onclick=next1()>Next</button>";
// }

// function q1i() {
// message3.innerHTML = "Incorrect.";
// message2.innerHTML = "";
// message4.innerHTML = "<button class=buttons2 onclick=next1()>Next</button>";
// }