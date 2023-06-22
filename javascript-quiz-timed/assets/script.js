
let startButton = document.querySelector("#startButton");
let quiz = document.querySelector("#quiz");
let questionText = document.querySelector("#questionText");
let initialsScore = document.querySelector("#initialsScore");
let yourInitials = document.querySelector("#yourInitials")
let yourScore = document.querySelector("#yourScore");
let submitScoreBtn = document.querySelector("#submitScoreBtn");
let scoreList = [];
let iterationNumber = 0;
let answerA = document.querySelector("#answerA");
let answerB = document.querySelector("#answerB");
let answerC = document.querySelector("#answerC");
let answerD = document.querySelector("#answerD");
let submitButton = document.querySelector("#submitButton");
let ansChoice = "";
let score = 0;
let safeTimerDisplay = document.querySelector("#safeTimerDisplay");
var sec = 60;


  
function timer(){
    var timer = setInterval(function(){
        document.getElementById('safeTimerDisplay').innerHTML='00:'+sec;
        sec--;
        if (sec < 0) {
            clearInterval(timer);
            safeTimerDisplay.innerHTML = "Time's up!"
            showScore();
        }
    }, 1000);
}

let questionList = ["Which of the following is NOT a javascript datatype?",
                    "What symbols are used to call a function?",
                    "What is the correct way to comment in javascript?",
                    "Which of the following is NOT a way to define a variable?",
                    "Which of the following events occurs when the user clicks on an HTML element?"]
let answerAList = ["Boolean", "()", "{#...#}", "obj", "onchange"]
let answerBList = ["string", "//", "/*...*/", "var", "onmouseover"]
let answerCList = ["event", "{}", "//...", "const", "onmouseclick"]
let answerDList = ["number", "C'mere function!", "||...||", "let", "onclick"]

window.onload = function() {
    quiz.style.display = "none";
    submitButton.style.display = "none";
    initialsScore.style.display = "none";
  };

function aFunction() {
    answerA.style.color = "red";
    answerB.style.color = "#13294B";
    answerC.style.color = "#13294B";
    answerD.style.color = "#13294B";
    ansChoice = "a";
}
function bFunction() {
    answerB.style.color = "red";
    answerA.style.color = "#13294B";
    answerC.style.color = "#13294B";
    answerD.style.color = "#13294B";
    ansChoice = "b";
}
function cFunction() {
    answerC.style.color = "red";
    answerA.style.color = "#13294B";
    answerB.style.color = "#13294B";
    answerD.style.color = "#13294B";
    ansChoice = "c";
}
function dFunction() {
    answerD.style.color = "red";
    answerA.style.color = "#13294B";
    answerB.style.color = "#13294B";
    answerC.style.color = "#13294B";
    ansChoice = "d";
}
function resetColors() {
    answerA.style.color = "#13294B";
     answerB.style.color = "#13294B";
    answerC.style.color = "#13294B";
     answerD.style.color = "#13294B";
}
submitButton.onclick = function() {
    if (iterationNumber === 0) {
        submitQ1();
        question2();
        resetColors();
    } else if (iterationNumber === 1) {
        submitQ2();
        question3();
        resetColors();
    } else if (iterationNumber === 2) {
        submitQ3();
        question4();
        resetColors();
    } else if (iterationNumber === 3) {
        submitQ4();
        question5();
        resetColors();
    }
    else {
        submitQ5();
        showScore();}
};

function question1() {
    timer();
    startButton.style.display = "none";
    quiz.style.display = "block";
    submitButton.style.display = "block";
    questionText.innerHTML = questionList[iterationNumber];
    answerA.innerHTML = answerAList[iterationNumber];
    answerB.innerHTML = answerBList[iterationNumber];
    answerC.innerHTML = answerCList[iterationNumber];
    answerD.innerHTML = answerDList[iterationNumber];
}
    function submitQ1() {
        if (ansChoice == "c") {
            score += 1;}
        else {sec -= 5;}
        iterationNumber += 1;}


function question2() {
    questionText.innerHTML = questionList[iterationNumber];
    answerA.innerHTML = answerAList[iterationNumber];
    answerB.innerHTML = answerBList[iterationNumber];
    answerC.innerHTML = answerCList[iterationNumber];
    answerD.innerHTML = answerDList[iterationNumber];
}
    function submitQ2() {
        if (ansChoice == "a") {
            score += 1;}
        else {sec -= 5;}
        iterationNumber += 1;}
    

function question3() {
    questionText.innerHTML = questionList[iterationNumber];
    answerA.innerHTML = answerAList[iterationNumber];
    answerB.innerHTML = answerBList[iterationNumber];
    answerC.innerHTML = answerCList[iterationNumber];
    answerD.innerHTML = answerDList[iterationNumber];
}
    function submitQ3() {
        if (ansChoice == "c") {
            score += 1;}
        else {sec -= 5;}
        iterationNumber += 1;}


function question4() {
    questionText.innerHTML = questionList[iterationNumber];
    answerA.innerHTML = answerAList[iterationNumber];
    answerB.innerHTML = answerBList[iterationNumber];
    answerC.innerHTML = answerCList[iterationNumber];
    answerD.innerHTML = answerDList[iterationNumber];
}
    function submitQ4() {
        if (ansChoice == "a") {
            score += 1;}
        else {sec -= 5;}
        iterationNumber += 1;}

function question5() {
    questionText.innerHTML = questionList[iterationNumber];
    answerA.innerHTML = answerAList[iterationNumber];
    answerB.innerHTML = answerBList[iterationNumber];
    answerC.innerHTML = answerCList[iterationNumber];
    answerD.innerHTML = answerDList[iterationNumber];
}
    function submitQ5() {
        if (ansChoice == "d") {
            score += 1;}
}

function showScore() {
    console.log("Your score: " + score);
    questionText.innerHTML = "Your score is " + score + "/5";
    answerA.style.display = "none";
    answerB.style.display = "none";
    answerC.style.display = "none";
    answerD.style.display = "none";
    submitButton.style.display = "none";
    startButton.style.display = "none";
    safeTimerDisplay.style.display = "none";
    initialsScore.style.display = "block";
    yourScore.innerHTML = "Score: " + score + "/5";
}

submitScoreBtn.addEventListener("click", function() {
    let initials = yourInitials.value.trim();
  
    if (initials !== "") {
      let scoreData = { initials: initials, score: score };
  
      let storedScores = JSON.parse(localStorage.getItem("scores")) || [];
      storedScores.push(scoreData);
  
      localStorage.setItem("scores", JSON.stringify(storedScores));
  
      displayScores(); 
      initialsScore.style.display = "none";
      yourScore.innerHTML = "Score: " + score + "/5";
    }
  });

  function displayScores() {
    let storedScores = JSON.parse(localStorage.getItem("scores")) || [];
    let scoreListHTML = "<h2>Score List:</h2>";
  
    for (let i = 0; i < storedScores.length; i++) {
      scoreListHTML += "<p>" + storedScores[i].initials + ": " + storedScores[i].score + "/5</p>";
    }
  
    document.getElementById("scoreList").innerHTML = scoreListHTML;
  }
  

  