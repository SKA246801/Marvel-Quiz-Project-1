// `${data.data.results[0].thumbnail.path}/portrait_uncanny.${data.data.results[0].thumbnail.extension}` this is the src needed for the img
const PUBLIC_KEY = "407e4467d27709793035e60508d32fdf";
const PRIVATE_KEY = "d49a689257f6451c7403a124fd37f1845b3719cc";
let finalHero = ""; // <------------ get local storage here and set the variable

// function to be used to restart the quiz
function restart1() {
  location.reload();
  //change location back to index.html
}

const fetchHero = async (chosenHero) => {
  let ts = Date.now();
  let hashKey = md5(ts + PRIVATE_KEY + PUBLIC_KEY);
  let request = await fetch(
    `https://gateway.marvel.com:443/v1/public/characters?ts=${ts}&apikey=${PUBLIC_KEY}&hash=${hashKey}&name=${chosenHero}`
  );
  let data = await request.json();
  displayHero(data.data);
};

fetchHero(finalHero);
