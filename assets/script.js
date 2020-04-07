// 3 Apr 2020
// Code Quiz | Angel Schultz

// HTML elements
var startBtn = document.getElementById('start-btn');
var questionPage = document.querySelector('#questions');
var startPage = document.querySelector('#start');
var btnContainer = document.getElementById('button-container'); 
var questionCont = document.getElementById('question-container');


//Array of objects to hold questions & answer
var questions = [{
    question: "1. What is the HTML tag under which one can write the JavaScript code?",
    choices: ['<javascript>', '<scripted>', '<script>', '<js>'],
    correctAnswer: 2
  }, {
    question: "2. Choose the correct JavaScript syntax to change the content of the following HTML code: <p id='geek'>GeeksforGeeks</p>",
    choices: ['document.getElement(“geek”).innerHTML=”I am a Geek”;', 'document.getElementById(“geek”).innerHTML=”I am a Geek”;', ' document.getId(“geek”)=”I am a Geek”;', ' document.getElementById(“geek”).innerHTML=I am a Geek;'],
    correctAnswer: 1
  }, {
    question: "3. What is the correct syntax for referring to an external script called “geek.js”?",
    choices: ['<script src=”geek.js”>', '<script href=”geek.js”>', '<script ref=”geek.js”>', '<script name=”geek.js”>'],
    correctAnswer: 0
  }, {
    question: "Q4",
    choices: [4, 5, 6, 7, 8],
    correctAnswer: 3
  }, {
    question: "Q5",
    choices: [20, 30, 40, 50, 64],
    correctAnswer: 4
  }];


var questionsCount = 0;
var questionArray = [];
var correctAnswerArray = [];
var answers = []; 
function answersBuild(){
    for (var i = 0; i < questions.length; i++){
        answers.push(questions[i].choices);
        console.log(answers); 
    } 
 }
answersBuild();


var answerArray = []; 
var counter = 0;

 function quizBuild(){
      document.getElementById('answer-container').innerHTML = ''; 
       var btnContainer = document.createElement('div');
       btnContainer.setAttribute('id', 'button-container');       
       document.getElementById('answer-container').appendChild(btnContainer);
      questionArray.push(questions[counter].question);
      correctAnswerArray.push(questions[counter].correctAnswer);
      console.log(correctAnswerArray[counter]); 
      questionCont.textContent = questionArray[counter];
      answerArray = answers[counter]; 
       buildBtns(); 
     }
 
 var wrong = false;
 var correct = false;
 var score = 0;
 
function buildBtns(){
  wrong = false; 
  var containerBtn = document.getElementById('button-container');
   for (var i = 0; i < answerArray.length; i++){
     var temp = i + 1; 
     var ansBtn = document.createElement('button');
     ansBtn.setAttribute('id', 'ans-btn');
     ansBtn.value = i; 
     ansBtn.textContent = temp + '. ' + answerArray[i]; 
    containerBtn.appendChild(ansBtn); 
    console.log(ansBtn);
    ansBtn.addEventListener('click', function(){ 
      console.log(this.value);
      checkAnswer(this);
      quizBuild();
    }) 
   }
  }

  function checkAnswer(btn) {
    var validationCont = document.getElementById('validation-container');
    var btnValue = parseInt(btn.value); 
    console.log(btnValue);
    if ( btnValue !== correctAnswerArray[counter]){
      wrong = true;
      console.log(wrong); 
      validationCont.innerHTML = '<p> Wrong! </p>';
      setTimeout(function(){
        validationCont.innerHTML = ''; 
      }, 2000)
         seconds = seconds - 10; 
    } else {
      correct = true;
      console.log(wrong);  
      validationCont.innerHTML = '<p> Correct! </p>';  
      setTimeout(function(){
        validationCont.innerHTML = ''; 
      }, 2000)
    }
    counter++;
   
  }

 
 

//Timer function 
var seconds = 0;

function countdown() {
    function tick() {
        var time = document.getElementById("counter");
        time.textContent = 'Time: ' + seconds;
        seconds--;
        if (seconds >= 0) {
            setTimeout(tick, 1000);
        }
        if (seconds < 10 ){
          time.style.color = 'red';
        }
       
    }
    tick();
}

startBtn.addEventListener('click', function (event) {
    event.preventDefault();
    startPage.style.display = 'none';
    questionPage.style.display = 'block';
    seconds = 75;
    countdown(seconds); 
    console.log(seconds);
    quizBuild(); 
});
 