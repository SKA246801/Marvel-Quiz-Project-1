let scores = {
  captainAmerica: 0,
  spiderman: 0,
  hulk: 0,
};

// code that changes the scores....
const scoresChanges = () => {
  scores.captainAmerica++;
  scores.spiderman = 2;
  scores.hulk = 9;
};

const finalHero = () => {
  let chosenHero = "captainAmerica";
  let names = Object.keys(scores);

  for (let i = 0; i < names.length; i++) {
    if (scores[names[i]] > scores[chosenHero]) {
      chosenHero = names[i];
    } else if (scores[names[i]] === scores[chosenHero]) {
      chosenHero = Math.random() < 0.5 ? names[i] : chosenHero;
    }
  }
  //   make marvel api fetch with chosen hero
  //  marvelFetch(chosenHero) or whatever the fetch function is called
  console.log(chosenHero);
};

scoresChanges();
finalHero();
