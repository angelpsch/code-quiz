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
      document.getElementById('answer-container').innerHTML = ''; 
       var btnContainer = document.createElement('div');
       btnContainer.setAttribute('id', 'button-container');       
       document.getElementById('answer-container').appendChild(btnContainer);
      questionArray.push(questions[counter].question);
      correctAnswerArray.push(questions[counter].correctAnswer);
      console.log(questionArray[counter]); 
      questionCont.textContent = questionArray[counter];
      answerArray = answers[counter]; 
       
       if (endQuiz == true){
        btnContainer.innerHTML = '';  
        return;
       } else { 
         buildBtns();
        }
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
   
      if (endQuiz == true){
        console.log(endQuiz);
        containerBtn.innerHTML = ''; 
        return; 
      }
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
      }, 500); 
         seconds = seconds - 10; 
    } else {
      correct = true;
      validationCont.innerHTML = '<p> Correct! </p>';  
      setTimeout(function(){
        validationCont.innerHTML = ''; 
      }, 500); 
      score++;
      scoreTracker();
    }
    if (endQuiz == true){
      return; 
    }
    checkCounter(); 
    return; 
  }

  var endQuiz = false;
  function checkCounter(){
    if (counter == questions.length-1) {
      saveScore();
      endQuiz = true; 
      return; 
  } else {
    counter+=1
    console.log(questions.length);
    endQuiz = false;
    quizBuild(); 
  }
    return; 
  };

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
var scoreHolder = document.querySelector('#score-display');
 function saveScore() {
   var temp = '';
   temp = score.toString(); 
   saveScoreCont.style.display = 'block';
    questionPage.style.display = 'none'; 
   scoreHolder.value = temp;
 }
 

 var users = []; 

var saveBtn = document.querySelector('#save-btn');
saveBtn.addEventListener('click', function(event){
  event.preventDefault();
  saveScoreCont.style.display = 'none'; 
  document.getElementById('score-list').style.display = 'block';
  var user = {
    name: userName.value.trim(),
    score: scoreHolder.value.trim() 
  };

  if (user.name == "") {
    user.name = 'No Name';
  }
  
  console.log(user);
  users.push(user);
  
  storeScores();
  renderScores(); 
})

function storeScores(){
  localStorage.setItem('users', JSON.stringify(users));
  
}


function renderScores(){  
  
  console.log(users);
  document.getElementById('score-list').innerHTML = '';
  saveScoreCont.style.display = 'none';
  scorePage.style.display = 'block';

  for (var i = 0; i < users.length; i++){  
  var user = users[i];

  var userList = document.createElement('div');
  userList.setAttribute('id', 'user-list');
  userList.setAttribute('class', 'row');
  document.getElementById('score-list').appendChild(userList); 
 
  var newName = document.createElement('div');
  newName.setAttribute('data-index', i);
  newName.textContent = user.name; 
  userList.appendChild(newName); 
  var newScore = document.createElement('div');
  newScore.setAttribute('class', 'col border')
  newName.setAttribute('class', 'col border')
  newScore.textContent = user.score; 
  userList.appendChild(newScore); 
}

}

function initScores(){

  var savedUsers = [];
  savedUsers.push(JSON.parse(localStorage.getItem('user')));

  if (savedUsers !== null) {
    users = savedUsers;
  } 
  console.log(savedUsers);
  console.log(users); 
  
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
        if (endQuiz == true){
          seconds = 0; 
          return; 
        }
       
    }
    tick();
}

startBtn.addEventListener('click', function (event) {
    event.preventDefault();
    startPage.style.display = 'none';
    questionPage.style.display = 'block'; 
    seconds = 100;
    countdown(seconds); 
    console.log(seconds);
    quizBuild(); 
});


initScores();

