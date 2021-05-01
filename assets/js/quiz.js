const userInputApi = function() {
  fetch('https://api.giphy.com/v1/gifs/search?api_key=yBtaVHxMEXDfPQQhAsxu4RIaqyzHd9CN&q=explosion&limit=25&offset=0&rating=g&lang=en')
  .then(function(response) {
    return response.json();
   })
   .then(function(response) {
   console.log(response.data[0]);
   
   const gifLocation = document.querySelector('.gif')

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
];
// Written answers
const options1 = ['<button class=buttons1 onclick=q1i()>test 1</button><br /><br /><button class=buttons1 onclick=q1i()>test 2</button><br /><br /><button class=buttons1 onclick=q1c()>test 3</button>'];
const options2 = ['<button class=buttons1 onclick=q2c()>test 1</button><br /><br /><button class=buttons1 onclick=q2i()>test 2</button>'];
const options3 = ['<button class=buttons1 onclick=q3c()>test 1</button><br /><br /><button class=buttons1 onclick=q3i()>test 2</button>'];
const options4 = ['<button class=buttons1 onclick=q4i()>test 1</button><br /><br /><button class=buttons1 onclick=q4c()>test 2</button>'];
const options5 = ['<button class=buttons1 onclick=q5c()>test 1</button><br /><br /><button class=buttons1 onclick=q5i()>test 2</button>'];
const options6 = ['<button class=buttons1 onclick=q6i()>test 1</button><br /><br /><button class=buttons1 onclick=q6c()>test 2</button>'];
const options7 = ['<button class=buttons1 onclick=q7c()>test 1</button><br /><br /><button class=buttons1 onclick=q7i()>test 2</button>'];
const options8 = ['<button class=buttons1 onclick=q8c()>test 1</button><br /><br /><button class=buttons1 onclick=q8i()>test 2</button>'];
const options9 = ['<button class=buttons1 onclick=q9c()>test 1</button><br /><br /><button class=buttons1 onclick=q9i()>test 2</button>'];
const options10 = ['<button class=buttons1 onclick=q10i()>test 1</button><br /><br /><button class=buttons1 onclick=q10c()>test 2</button>'];

//  Declare each variable
var a = 0;
a++;

//  if statement for q and a
function begin1() {
console.log("click")
disappear1.innerHTML = '';
message1.innerHTML = question1[0];
message2.innerHTML = options1;
number1.innerHTML = a++;
}

function q1c() {
message3.innerHTML = 'Correct.';
message2.innerHTML = '';
message4.innerHTML = '<button class=buttons2 onclick=next1()>Next</button>';
}

function q1i() {
message3.innerHTML = 'Incorrect.';
message2.innerHTML = '';
message4.innerHTML = '<button class=buttons2 onclick=next1()>Next</button>';
}

function q2c() {
message3.innerHTML = 'Correct.';
message2.innerHTML = '';
message4.innerHTML = '<button class=buttons2 onclick=next1()>Next</button>';
}

function q2i() {
message3.innerHTML = 'Incorrect.';
message2.innerHTML = '';
message4.innerHTML = '<button class=buttons2 onclick=next1()>Next</button>';
}

function q3c() {
message3.innerHTML = 'Correct.';
message2.innerHTML = '';
message4.innerHTML = '<button class=buttons2 onclick=next1()>Next</button>';
}

function q3i() {
message3.innerHTML = 'Incorrect.';
message2.innerHTML = '';
message4.innerHTML = '<button class=buttons2 onclick=next1()>Next</button>';
}

function q4c() {
message3.innerHTML = 'Correct.';
message2.innerHTML = '';
message4.innerHTML = '<button class=buttons2 onclick=next1()>Next</button>';
}

function q4i() {
message3.innerHTML = 'Incorrect.';
message2.innerHTML = '';
message4.innerHTML = '<button class=buttons2 onclick=next1()>Next</button>';
}

function q5c() {
message3.innerHTML = 'Correct.';
message2.innerHTML = '';
message4.innerHTML = '<button class=buttons2 onclick=next1()>Next</button>';
}

function q5i() {
message3.innerHTML = 'Incorrect.';
message2.innerHTML = '';
message4.innerHTML = '<button class=buttons2 onclick=next1()>Next</button>';
}

function q6c() {
message3.innerHTML = 'Correct.';
message2.innerHTML = '';
message4.innerHTML = '<button class=buttons2 onclick=next1()>Next</button>';
}

function q6i() {
message3.innerHTML = 'Incorrect.';
message2.innerHTML = '';
message4.innerHTML = '<button class=buttons2 onclick=next1()>Next</button>';
}

function q7c() {
message3.innerHTML = 'Correct.';
message2.innerHTML = '';
message4.innerHTML = '<button class=buttons2 onclick=next1()>Next</button>';
}

function q7i() {
message3.innerHTML = 'Incorrect.';
message2.innerHTML = '';
message4.innerHTML = '<button class=buttons2 onclick=next1()>Next</button>';
}

function q8c() {
message3.innerHTML = 'Correct.';
message2.innerHTML = '';
message4.innerHTML = '<button class=buttons2 onclick=next1()>Next</button>';
}

function q8i() {
message3.innerHTML = 'Incorrect.';
message2.innerHTML = '';
message4.innerHTML = '<button class=buttons2 onclick=next1()>Next</button>';
}

function q9c() {
message3.innerHTML = 'Correct.';
message2.innerHTML = '';
message4.innerHTML = '<button class=buttons2 onclick=next1()>Next</button>';
}

function q9i() {
message3.innerHTML = 'Incorrect.';
message2.innerHTML = '';
message4.innerHTML = '<button class=buttons2 onclick=next1()>Next</button>';
}

function q10c() {
message3.innerHTML = 'Correct.';
message2.innerHTML = '';
message4.innerHTML = '<button class=buttons2 onclick=next1()>Next</button>';
}

function q10i() {
message3.innerHTML = 'Incorrect.';
message2.innerHTML = '';
message4.innerHTML = '<button class=buttons2 onclick=next1()>Next</button>';
}

function next1() {
if (a == '2') {
  message1.innerHTML = question1[1];
  message2.innerHTML = options2;
  message3.innerHTML = 'TEST DOES THIS WORK';
  number1.innerHTML = a++;
  message4.innerHTML = 'TESTTESTESTSET 2';
}

else if (a == '3') {
  message1.innerHTML = question1[2];
  message2.innerHTML = options3;
  message3.innerHTML = '';
  number1.innerHTML = a++;
  message4.innerHTML = 'TESTTESTSETSET';
}

else if (a == '4') {
  message1.innerHTML = question1[3];
  message2.innerHTML = options4;
  message3.innerHTML = '';
  number1.innerHTML = a++;
  message4.innerHTML = '';
}

else if (a == '5') {
  message1.innerHTML = question1[4];
  message2.innerHTML = options5;
  message3.innerHTML = '';
  number1.innerHTML = a++;
  message4.innerHTML = '';
}

else if (a == '6') {
  message1.innerHTML = question1[5];
  message2.innerHTML = options6;
  message3.innerHTML = '';
  number1.innerHTML = a++;
  message4.innerHTML = '';
}

else if (a == '7') {
  message1.innerHTML = question1[6];
  message2.innerHTML = options7;
  message3.innerHTML = '';
  number1.innerHTML = a++;
  message4.innerHTML = '';
}

else if (a == '8') {
  message1.innerHTML = question1[7];
  message2.innerHTML = options8;
  message3.innerHTML = '';
  number1.innerHTML = a++;
  message4.innerHTML = '';
}

else if (a == '9') {
  message1.innerHTML = question1[8];
  message2.innerHTML = options9;
  message3.innerHTML = '';
  number1.innerHTML = a++;
  message4.innerHTML = '';
}

else if (a == '10') {
  message1.innerHTML = question1[9];
  message2.innerHTML = options10;
  message3.innerHTML = '';
  number1.innerHTML = a++;
  message4.innerHTML = '';
} else {
  message1.innerHTML = 'End of Quiz';
  message2.innerHTML = '';
  message3.innerHTML = '';
  message4.innerHTML = '<button class=buttons2 onclick=restart1()>Restart</button>';
}
}

function restart1() {
location.reload();
}

begin1()