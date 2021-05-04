const PUBLIC_KEY = "407e4467d27709793035e60508d32fdf";
const PRIVATE_KEY = "d49a689257f6451c7403a124fd37f1845b3719cc";

const fetchFunc = async () => {
  let ts = Date.now();
  let hashKey = md5(ts + PRIVATE_KEY + PUBLIC_KEY);
  let request = await fetch(
    `https://gateway.marvel.com:443/v1/public/characters?ts=${ts}&apikey=${PUBLIC_KEY}&hash=${hashKey}&name=captain marvel`
  );
  let data = await request.json();
  console.log(data);
};

fetchFunc();
