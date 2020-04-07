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
    question: "Q1",
    choices: [2, 5, 10, 15, 20],
    correctAnswer: 2
  }, {
    question: "Q2",
    choices: [3, 6, 9, 12, 18],
    correctAnswer: 4
  }, {
    question: "Q3",
    choices: [72, 99, 108, 134, 156],
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
       var btnContainer = document.createElement('div');
       btnContainer.setAttribute('id', 'button-container');       
       document.getElementById('answer-container').appendChild(btnContainer);
      questionArray.push(questions[counter].question);
      questionCont.textContent = questionArray[counter];
      console.log(questionArray); 
      console.log(questionsCount);
      answerArray = answers[counter]; 
      console.log(answerArray); 
       buildBtns(); 
       console.log(counter); 
     }
 
 
 
function buildBtns(){
  var containerBtn = document.getElementById('button-container');
   for (var i = 0; i < answerArray.length; i++){
     var ansBtn = document.createElement('button');
     ansBtn.setAttribute('id', 'ans-btn');
     ansBtn.value = i; 
     ansBtn.textContent = answerArray[i]; 
    containerBtn.appendChild(ansBtn); 
    console.log(ansBtn);
    ansBtn.addEventListener('click', function(){ 
      console.log(ansBtn.value); 
      containerBtn.innerHTML = '';
      quizBuild(); 
      
    }) 
   }
counter++;
  }
 

//Timer function 
function countdown(seconds) {
    function tick() {
        var counter = document.getElementById("counter");
        counter.textContent = 'Time: ' + seconds;
        seconds--;
        if (seconds > 0) {
            setTimeout(tick, 1000);
        }
    }
    tick();
}

startBtn.addEventListener('click', function (event) {
    event.preventDefault();
    startPage.style.display = 'none';
    questionPage.style.display = 'block';
    countdown(75); 
    quizBuild(); 
});
 