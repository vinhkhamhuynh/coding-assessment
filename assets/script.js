//Set Variables
var startBtn = document.getElementById("startBtn");
var infoBox = document.getElementById("infoBox");
var answerBox = document.getElementById("answerBox")
var infoTitle = document.getElementById("infoTitle");
var timer = document.getElementById("timer");
var highscores = document.getElementById("highscores");
var resultDisplay = document.getElementById("resultDisplay");

var q = 0;
var r = 0;
var w = 0;
var secondsLeft = 60;

var questions = [{
    question: "What does HTML stand for ?",
    choices: ["Hyper Text Preprocessor",
        "Hyper Text Markup Language",
        "Hyper Tool Multi Language",
        "Hyper Text Multiple Language"

    ],
    answer: "Hyper Text Markup Language"

},

{
    question: "What does CSS stand for?",
    choices: ["Common Style Sheet",
        "Colorful Style Sheet",
        "Computer Style Sheet",
        "Cascading Style Sheet"

    ],
    answer: "Cascading Style Sheet"

},

{
    question: "What does PHP stand for?",
    choices: ["Hypertext Preprocessor",
        "Hypertext Programming",
        "Hypertext Preprogramming",
        "Hometext Preprocessor"

    ],
    answer: "Hypertext Preprocessor"
},

{
    question: "What tag is used to define an image – or add an image – to an HTML page?",
    choices: ["<table>",
        "<meta",
        "<img>",
        "<div>"

    ],
    answer: "<img>"
},

{
    question: "What is the format called that is used for storing and transporting data?",
    choices: ["Syntax",
        "JSON",
        "HTML",
        "Font"

    ],
    answer: "JSON"
}


]

startBtn.addEventListener("click", function () {
    builtQuestionCard();
    setTime();
    resultDisplay.textContent = "Let's PLAY!! You have 5 QUESTIONS";


})
function builtQuestionCard() {


    answerBox.innerHTML = "";
    infoTitle.textContent = questions[q].question;
    questions[q].choices.forEach(function (choice) {
        var button = document.createElement("button");
        button.textContent = choice;
        button.setAttribute("value", choice);
        button.setAttribute("style", "height: 60px; width:100% ; font-size:15px;  justify-content:center;align-items:center; padding: 5px; margin: 5px; cursor: pointer; border-radius: 5px;border: 1px solid #007bff;");
        button.onclick = evaulateAnswer;
        answerBox.appendChild(button);
        startBtn.remove();



    })

}
//set style for result div
resultDisplay.setAttribute("style", "color: #007bff; font-weight: 400; font-size: 20px;");


function evaulateAnswer() {
    if (this.value === questions[q].answer) {
        r++;


        resultDisplay.textContent = "You are CORRECT!!! You have " + r + " RIGHT " + w + " WRONG OUT OF 5";
        
        

    } else {
        w++;
        secondsLeft -= 10;
        resultDisplay.textContent = "You are CORRECT!!! You have " + r + " RIGHT " + w + " WRONG OUT OF 5";

    }
    q++;
    if (q === questions.length) {
        infoTitle.textContent = "GAME OVER!!!";
        infoTitle.setAttribute("style", "color: red;");
        resultDisplay.textContent = "Congratulation! You have " + r + " RIGHT and " + w + " WRONG out of 5 questions";

        answerBox.innerHTML = "";

        var nameLabel = document.createElement("label");
        nameLabel.textContent = "Enter INITIALS: "
        nameLabel.setAttribute("style", "font-size: 25px;");
        answerBox.appendChild(nameLabel);

        var nameInput = document.createElement("input");
       // nameInput.setAttribute("type", Text );
        nameInput.setAttribute("id", "userInput");
        nameInput.setAttribute("style", "width: 70%; font-size: 25px; text-transform: uppercase");
        answerBox.appendChild(nameInput);
        

        


        var submitBtn = document.createElement("button");
        submitBtn.textContent = "Submit",
        submitBtn.setAttribute("style", "margin: 0px 5px; height: 40px; width: 30%; border: 1px solid #007bff; background: #007bff; border-radius: 5px;color: #fff; font-size: 16px; font-weight: 500;cursor: pointer;");
        answerBox.setAttribute("style", "display:flex");
        answerBox.appendChild(submitBtn);
        
        //add click event to capture player intials and time left
        submitBtn.addEventListener("click", function(){
            
            var score = secondsLeft * r 
            var userInput = document.querySelector("#userInput").value;

            var highscore = {userInput, score};
            var highscores = JSON.parse(localStorage.getItem("highscores") )|| [];
            highscores.push(highscore)

            localStorage.setItem("highscores", JSON.stringify(highscores));


           
           console.log(highscores);
           
           window.location.href = "highscores.html";
        });


    } else {
        builtQuestionCard();
    }
}

//timer function to run countdown 
function setTime() {
    var timerInterval = setInterval(function() {
        secondsLeft--;
        timer.textContent = secondsLeft + " seconds left!!";

        if (secondsLeft === 0 || q === questions.length) {
            clearInterval(timerInterval);
            var timerResult = document.createElement("div");
            timerResult.textContent ="You have " + secondsLeft + " seconds left!!";
            answerBox.appendChild(timerResult);
        }
    }, 1000);

}




