// 3 Apr 2020
// Code Quiz | Angel Schultz

// HTML elements
var startBtn = document.getElementById('start-btn');
var questionPage = document.querySelector('#questions');
var startPage = document.querySelector('#start');
var btnContainer = document.getElementById('button-container'); 
var questionCont = document.getElementById('question-container');
var viewScores = document.querySelector('#view-highscores');
var restartBtn = document.querySelector('#restart-btn');
var answerCont = document.getElementById('answer-container');
var gameOver = document.getElementById('gameover');
var saveScoreCont = document.getElementById('save-score');
var scorePage = document.getElementById('scores'); 

initScores();

//Array of objects to hold questions & answer
var questions = [{
    question: "1. What is the HTML tag under which one can write the JavaScript code?",
    choices: ['<javascript>', '<scripted>', '<script>', '<js>'],
    correctAnswer: 2
  }, {
    question: "2. How does Java Script store dates in objects of Date type?",
    choices: ['The number of days since January 1st, 1900', 'The number of milliseconds since January 1st, 1970', ' The number of picoseconds since January 1st, 1970', ' The number of seconds since January 1st, 1970'],
    correctAnswer: 1
  }, {
    question: "3. Which of the following is a server-side Java Script object?",
    choices: ['File', 'Date', 'File Upload', 'I have no idea'],
    correctAnswer: 0
  }, {
    question: "4. The external JavaScript file must contain a <script> tag. True or False?",
    choices: ['True', 'False'],
    correctAnswer: 1
  }, {
    question: "5. C-style block-level scoping is not supported in Java script",
    choices: ['True', 'False'],
    correctAnswer: 0
  },
 {
    question: "6. JavaScript ignores extra spaces",
    choices: ['True', 'False'],
    correctAnswer: 1
  },
  {
    question: "7. Which is the correct way to write a JavaScript array?",
    choices: ['var txt = new Array("arr ","kim","jim")', ' var txt = new Array=" arr ","kim","jim"', 'var txt = new Array:1=(" arr ")2=("kim")3=("jim")', 'var txt = new Array(1:"arr",2:"kim",3:"jim")'],
    correctAnswer: 0
  },
  {
    question: "8.  Which of the following is correct to write “Hello World” on the web page?",
    choices: ['System.out.println(“Hello World”)', 'print(“Hello World”)', 'response.write(“Hello World”)', 'document.write(“Hello World”)'],
    correctAnswer: 3
  },
  {
    question: "9. Which of the following is the tainted property of a window object in Java Script?",
    choices: ['Pathname', 'Host', 'Default status', 'Protocol'],
    correctAnswer: 2
  },
  {
    question: "10. Javascript is an object oriented language?",
    choices: ['True', 'False'],
    correctAnswer: 0
  },
];


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
  checkCounter(); 
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
 
 var wrong;
 var correct;
 var score = 0;
 var finalScore = 0;

function buildBtns(){
  wrong = false; 
  correct = false; 
  var containerBtn = document.getElementById('button-container');
   for (var i = 0; i < answerArray.length; i++){
     var temp = i + 1; 
     var ansBtn = document.createElement('button');
     ansBtn.setAttribute('id', 'ans-btn');
     ansBtn.value = i; 
     ansBtn.textContent = temp + '. ' + answerArray[i]; 
    containerBtn.appendChild(ansBtn); 
    console.log(counter);
    ansBtn.addEventListener('click', function(){ 
      console.log(this.value);
      checkAnswer(this);
      quizBuild();
      scoreTracker();
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
      }, 500)
         seconds = seconds - 10; 
    } else {
      correct = true;
      validationCont.innerHTML = '<p> Correct! </p>';  
      setTimeout(function(){
        validationCont.innerHTML = ''; 
      }, 2000)
      score++; 
    }
   
  }

  function checkCounter(){
    if (counter >= 9) {
      saveScore();
  } else {
    counter++;
  }
  }

 function scoreTracker(){
   if (correct == true){
     score = score + 1; 
   } 
   if (wrong == true){
     score = score += 1; 
   }
   document.getElementById('score-container').textContent = 'Score: ' + score;
   return score; 
 }
 
var userName = document.querySelector('#user-name');
var scoreHolder = document.getElementById('score-display');
 function saveScore() {
   var temp = '';
   temp = score.toString(); 
   show(saveScoreCont);
   hide(questionCont); 
   hide(btnContainer);
   hide(ansBtn); 
  
   hide(questionPage);
   hide(validationCont);
   console.log(temp); 
   scoreHolder.value = temp; 

 countdown(0); 

var users = []; 
var saveBtn = document.querySelector('#save-btn');
saveBtn.addEventListener('click', function(event){
  event.preventDefault();

  var user = {
    name: userName.value.trim(),
    score: scoreHolder.value.trim() 
  };

  if (user.firstName === "") {
    return;
  } else {
  
  console.log(user);
  users.push(user);
  userName.value = '';
  scoreHolder.value = ''; 
  
  hide(saveScoreCont);
  show(scorePage); 

  storeScores();
  renderScores(); 
  
}
})
}
function storeScores(){
  localStorage.setItem('users', JSON.stringify(users));
}

function renderScores(){  
  
  for (var i = 0; i < users.length; i++){
  var user = users[i];
  var horizontalList = document.createElement('ul');
  horizontalList.setAttribute('class', 'list-group list-group-horizontal');
  document.getElementById('scores').appendChild(horizontalList);
  
  var newName = document.createElement('li');
  newName.setAttribute('class', 'list-group-item w-50');
  newName.setAttribute('data-index', i);
  newName.textContent = user.name; 
  horizontalList.appendChild(newName); 
  var newScore = document.createElement('li');
  newScore.setAttribute('class', 'list-group-item w-50');
  newScore.setAttribute('data-index', i); 
  newScore.textContent = user.score; 
  horizontalList.appendChild(newScore); 
}
}

function initScores(){
  
  var savedUsers = JSON.parse(localStorage.getItem('user'));

  if (savedUsers !== null) {
    users = savedUsers;
  }

  renderScores(); 
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
        if (seconds <= 0){
          saveScore();
        }
       
    }
    tick();
}

startBtn.addEventListener('click', function (event) {
    event.preventDefault();
    startPage.style.display = 'none';
    questionPage.style.display = 'block';
    hide(saveScoreCont); 
    seconds = 100;
    countdown(seconds); 
    console.log(seconds);
    quizBuild(); 
});


var show = function(elem) {
  elem.style.display = 'block';
}
var hide = function(elem) {
  elem.style.display = 'none'; 
}

