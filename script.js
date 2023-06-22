
let startButton = document.querySelector("#startButton");
let quiz = document.querySelector("#quiz");
let questionText = document.querySelector("#questionText");
let iterationNumber = 0;
let answerA = document.querySelector("#answerA");
let answerB = document.querySelector("#answerB");
let answerC = document.querySelector("#answerC");
let answerD = document.querySelector("#answerD");
let submitButton = document.querySelector("#submitButton");
let ansChoice = "";
let score = 0;



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
function question1() {
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
        score += 1;
    }
    iterationNumber += 1;
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



function question2() {
    questionText.innerHTML = questionList[iterationNumber];
    answerA.innerHTML = answerAList[iterationNumber];
    answerB.innerHTML = answerBList[iterationNumber];
    answerC.innerHTML = answerCList[iterationNumber];
    answerD.innerHTML = answerDList[iterationNumber];
}
    function submitQ2() {
        if (ansChoice == "a") {
            score += 1;
        }
        iterationNumber += 1;
    }

function question3() {
    questionText.innerHTML = questionList[iterationNumber];
    answerA.innerHTML = answerAList[iterationNumber];
    answerB.innerHTML = answerBList[iterationNumber];
    answerC.innerHTML = answerCList[iterationNumber];
    answerD.innerHTML = answerDList[iterationNumber];
}
function submitQ3() {
    if (ansChoice == "c") {
        score += 1;
    }
    iterationNumber += 1;
}

function question4() {
    questionText.innerHTML = questionList[iterationNumber];
    answerA.innerHTML = answerAList[iterationNumber];
    answerB.innerHTML = answerBList[iterationNumber];
    answerC.innerHTML = answerCList[iterationNumber];
    answerD.innerHTML = answerDList[iterationNumber];
}
function submitQ4() {
    if (ansChoice == "a") {
        score += 1;
    }
    iterationNumber += 1;
}


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
    // You can display the score in the HTML or perform any other actions here
}

