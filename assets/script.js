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
    question: "What is 2*5?",
    choices: [2, 5, 10, 15, 20],
    correctAnswer: 2
  }, {
    question: "What is 3*6?",
    choices: [3, 6, 9, 12, 18],
    correctAnswer: 4
  }, {
    question: "What is 8*9?",
    choices: [72, 99, 108, 134, 156],
    correctAnswer: 0
  }, {
    question: "What is 1*7?",
    choices: [4, 5, 6, 7, 8],
    correctAnswer: 3
  }, {
    question: "What is 8*8?",
    choices: [20, 30, 40, 50, 64],
    correctAnswer: 4
  }];


function quizBuild(){
    for (var i = 0; i < questions.length; i++){
        var temp = [];
        questionCont.textContent = questions[i].question; 
        temp.push(questions[i].choices);
        for (var j = 0; j < temp.length; j++){
            var tempTwo = [];
            tempTwo.push(temp[j]);
            for (var a = 0; a < tempTwo.length; a++){
            console.log(tempTwo);
            var ansBtn = document.createElement('button');
            ansBtn.setAttribute('class', 'ans-btn'); 
            ansBtn.textContent = tempTwo[a]; 
            btnContainer.appendChild(ansBtn);
            }
        }
    }
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
