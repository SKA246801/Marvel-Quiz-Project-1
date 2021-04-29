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