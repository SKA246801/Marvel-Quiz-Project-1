const gifLocation = document.querySelector('.gif')


const userInputApi = function(gifSearch) {
  console.log(gifSearch)
  fetch(`https://api.giphy.com/v1/gifs/search?api_key=yBtaVHxMEXDfPQQhAsxu4RIaqyzHd9CN&q=${gifSearch}&limit=25&offset=0&rating=g&lang=en`)
  .then(function(response) {
    return response.json();
   })
   .then(function(response) {
   console.log(response.data[0]);
   

   var gifImg = document.createElement('img');
   gifImg.setAttribute('src', response.data[0].images.fixed_height.url);
   gifImg.setAttribute('id', 'gif')
   gifLocation.appendChild(gifImg)
 })
}


// Written questions
const question1 = ['Power is not something to be taken lightly.',
'Not even a murderer deserves to die.',
'Negotiations work much better than fighting.',
'People consider me annoying.',
'I feel that everyone deserves a second chance.',
'I consider myself very intelligent', 'I work better alone', 'I consider myself to be an optimist',
 'I am not a dreamer, I am a realist', 'I am calculated, not impulsive', 
'I consider myself to be calm and not very emotional'
];
// Written answers
const options1 = ['<button class=buttons1 onclick=q1i()>Agree</button><br /><br /><button class=buttons1 onclick=q1i()>Disagree</button>'];
const options2 = ['<button class=buttons1 onclick=q2c()>Agree</button><br /><br /><button class=buttons1 onclick=q2i()>Disagree</button>'];
const options3 = ['<button class=buttons1 onclick=q3c()>Agree</button><br /><br /><button class=buttons1 onclick=q3i()>Disagree</button>'];
const options4 = ['<button class=buttons1 onclick=q4i()>Agree</button><br /><br /><button class=buttons1 onclick=q4c()>Disagree</button>'];
const options5 = ['<button class=buttons1 onclick=q5c()>Agree</button><br /><br /><button class=buttons1 onclick=q5i()>Disagree</button>'];
const options6 = ['<button class=buttons1 onclick=q6i()>Agree</button><br /><br /><button class=buttons1 onclick=q6c()>Disagree</button>'];
const options7 = ['<button class=buttons1 onclick=q7c()>Agree</button><br /><br /><button class=buttons1 onclick=q7i()>Disagree</button>'];
const options8 = ['<button class=buttons1 onclick=q8c()>Agree</button><br /><br /><button class=buttons1 onclick=q8i()>Disagree</button>'];
const options9 = ['<button class=buttons1 onclick=q9c()>Agree</button><br /><br /><button class=buttons1 onclick=q9i()>Disagree</button>'];
const options10 = ['<button class=buttons1 onclick=q10c()>Agree</button><br /><br /><button class=buttons1 onclick=q10i()>Disagree</button>'];
const options11 = ['<button class=buttons1 onclick=q11c()>Agree</button><br /><br /><button class=buttons1 onclick=q11i()>Disagree</button>'];

//  Declare each variable
var a = 0;
a++;
let thor = 0
let captainAmerica = 0
let ironMan = 0
let hulk = 0
let spiderMan = 0
let blackWidow = 0
let captainMarvel = 0

//  if statement for q and a
function begin1() {
console.log("click")
disappear1.innerHTML = '';
message1.innerHTML = question1[0];
message2.innerHTML = options1;
number1.innerHTML = a++;
}

function q1c() {
message2.innerHTML = '';
message4.innerHTML = '<button class=buttons2 onclick=next1()>Next</button>';
captainAmerica++
spiderMan++
blackWidow++
captainMarvel++
userInputApi('weak')
}

function q1i() {

message2.innerHTML = '';
message4.innerHTML = '<button class=buttons2 onclick=next1()>Next</button>';
ironMan++
hulk++
thor++
userInputApi('powerful')
}

function q2c() {
gifLocation.innerHTML = ""
message2.innerHTML = '';
message4.innerHTML = '<button class=buttons2 onclick=next1()>Next</button>';
captainAmerica++
spiderMan++
captainMarvel++
userInputApi('alive')
}

function q2i() {
gifLocation.innerHTML = ""

message2.innerHTML = '';
message4.innerHTML = '<button class=buttons2 onclick=next1()>Next</button>';
ironMan++
hulk++
thor++
blackWidow++
userInputApi('murder')
}

function q3c() {
gifLocation.innerHTML = ""
message2.innerHTML = '';
message4.innerHTML = '<button class=buttons2 onclick=next1()>Next</button>';
captainAmerica++
spiderMan++
ironMan++
blackWidow++
userInputApi('negotiating')
}

function q3i() {
gifLocation.innerHTML = ""

message2.innerHTML = '';
message4.innerHTML = '<button class=buttons2 onclick=next1()>Next</button>';
hulk++
thor++
captainMarvel++
userInputApi('fighting')
}

function q4c() {
gifLocation.innerHTML = ""
message2.innerHTML = '';
message4.innerHTML = '<button class=buttons2 onclick=next1()>Next</button>';
hulk++
ironMan++
userInputApi('annoying')
}

function q4i() {
gifLocation.innerHTML = ""

message2.innerHTML = '';
message4.innerHTML = '<button class=buttons2 onclick=next1()>Next</button>';
captainAmerica++
thor++
spiderMan++
blackWidow++
captainMarvel++
userInputApi('not annoying')
}

function q5c() {
gifLocation.innerHTML = ""
message2.innerHTML = '';
message4.innerHTML = '<button class=buttons2 onclick=next1()>Next</button>';
captainAmerica++
spiderMan++
captainMarvel++
userInputApi('second chance')
}

function q5i() {
gifLocation.innerHTML = ""

message2.innerHTML = '';
message4.innerHTML = '<button class=buttons2 onclick=next1()>Next</button>';
ironMan++
hulk++
thor++
blackWidow++
userInputApi('no chance')
}

function q6c() {
gifLocation.innerHTML = ""
message2.innerHTML = '';
message4.innerHTML = '<button class=buttons2 onclick=next1()>Next</button>';
ironMan++
captainAmerica++
spiderMan++
userInputApi('smart')
}

function q6i() {
gifLocation.innerHTML = ""

message2.innerHTML = '';
message4.innerHTML = '<button class=buttons2 onclick=next1()>Next</button>';
hulk++
thor++
blackWidow++
captainMarvel++
userInputApi('stupid')
}

function q7c() {
gifLocation.innerHTML = ""
message2.innerHTML = '';
message4.innerHTML = '<button class=buttons2 onclick=next1()>Next</button>';
ironMan++
hulk++
thor++
spiderMan++
captainMarvel++
userInputApi('alone')
}

function q7i() {
gifLocation.innerHTML = ""

message2.innerHTML = '';
message4.innerHTML = '<button class=buttons2 onclick=next1()>Next</button>';
captainAmerica++
blackWidow++
userInputApi('teamwork')
}

function q8c() {
gifLocation.innerHTML = ""
message2.innerHTML = '';
message4.innerHTML = '<button class=buttons2 onclick=next1()>Next</button>';
captainAmerica++
spiderMan++
userInputApi('optimist')
}

function q8i() {
gifLocation.innerHTML = ""

message2.innerHTML = '';
message4.innerHTML = '<button class=buttons2 onclick=next1()>Next</button>';
hulk++
thor++
blackWidow++
captainMarvel++
ironMan++
userInputApi('sad')
}

function q9c() {
gifLocation.innerHTML = ""
message2.innerHTML = '';
message4.innerHTML = '<button class=buttons2 onclick=next1()>Next</button>';
thor++
blackWidow++
captainMarvel++
spiderMan++
userInputApi('dreamer')
}

function q9i() {
gifLocation.innerHTML = ""

message2.innerHTML = '';
message4.innerHTML = '<button class=buttons2 onclick=next1()>Next</button>';
ironMan++
hulk++
spiderMan++
userInputApi("don' dream")
}

function q10c() {
gifLocation.innerHTML = ""
message2.innerHTML = '';
message4.innerHTML = '<button class=buttons2 onclick=next1()>Next</button>';
captainAmerica++
spiderMan++
blackWidow++
captainMarvel++
userInputApi('calculate')
}

function q10i() {
gifLocation.innerHTML = ""

message2.innerHTML = '';
message4.innerHTML = '<button class=buttons2 onclick=next1()>Next</button>';
ironMan++
hulk++
thor++
userInputApi('reckless')
}

function q11c() {
  gifLocation.innerHTML = ""

  message2.innerHTML = '';
  message4.innerHTML = '<button class=buttons2 onclick=next1()>Next</button>';
  ironMan++
  captainAmerica++
  blackWidow++
  userInputApi('calm')
  }
  
  function q11i() {
  gifLocation.innerHTML = ""
  
  message2.innerHTML = '';
  message4.innerHTML = '<button class=buttons2 onclick=next1()>Next</button>';
  hulk++
  thor++
  spiderMan++
  captainAmerica++
  userInputApi('emotional')
  }

function next1() {
if (a == '2') {
  message1.innerHTML = question1[1];
  message2.innerHTML = options2;
  number1.innerHTML = a++;
}

else if (a == '3') {
  message1.innerHTML = question1[2];
  message2.innerHTML = options3;
  number1.innerHTML = a++;
}

else if (a == '4') {
  message1.innerHTML = question1[3];
  message2.innerHTML = options4;
  number1.innerHTML = a++;

}

else if (a == '5') {
  message1.innerHTML = question1[4];
  message2.innerHTML = options5;
  number1.innerHTML = a++;

}

else if (a == '6') {
  message1.innerHTML = question1[5];
  message2.innerHTML = options6;
  number1.innerHTML = a++;

}

else if (a == '7') {
  message1.innerHTML = question1[6];
  message2.innerHTML = options7;
  number1.innerHTML = a++;

}

else if (a == '8') {
  message1.innerHTML = question1[7];
  message2.innerHTML = options8;
  number1.innerHTML = a++;

}

else if (a == '9') {
  message1.innerHTML = question1[8];
  message2.innerHTML = options9;
  number1.innerHTML = a++;

}

else if (a == '10') {
  message1.innerHTML = question1[9];
  message2.innerHTML = options10;
  number1.innerHTML = a++;

} else if (a == '11') {
  message1.innerHTML = question1[10]
  message2.innerHTML = options11
  number1.innerHTML = a++
} else {
  message1.innerHTML = 'End of Quiz';
  message2.innerHTML = '';
  message4.innerHTML = '<button class=buttons2 onclick=restart1()>Restart</button>';
}
}

function restart1() {
location.reload();
}

begin1()