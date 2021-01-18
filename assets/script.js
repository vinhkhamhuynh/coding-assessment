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
        "Coputer Style Sheet",
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
    
    
})
function builtQuestionCard() {
    

    answerBox.innerHTML = "";
    infoTitle.textContent = questions[q].question;
    questions[q].choices.forEach(function (choice) {
        var button = document.createElement("button");
        button.textContent = choice;
        button.setAttribute("value", choice);
        button.onclick = evaulateAnswer;
        answerBox.appendChild(button);
        startBtn.remove();
        


    })

}

function evaulateAnswer() {
    if (this.value === questions[q].answer) {
        r++;
        
       
        resultDisplay.textContent = "You are CORRECT!!! You have " + r + " RIGHT " + w + " WRONG OUT OF 5";

    } else {
        w++;
        resultDisplay.textContent = "You are CORRECT!!! You have " + r + " RIGHT " + w + " WRONG OUT OF 5";

    }
    q++;
    if (q === questions.length) {
        infoTitle.textContent = "GAME OVER!!!";
        resultDisplay.textContent = "Congratulation! You have "  + r + " RIGHT and " + w + " WRONG out of 5 questions";
        
        answerBox.innerHTML = "";
        var submitBtn = document.createElement("button");
        submitBtn.textcontent = "Submit Highscores",
        answerBox.appendChild(submitBtn);

    } else {
        builtQuestionCard();
    }
}



/*var questions = [
    {
        "q1": "What does HTML stand for ?" = [{
            "opt": "Hyper Text Preprocessor",
            "opt": "Hyper Text Markup Language",
            "opt": "Hyper Tool Multi Language",
            "opt": "Hyper Text Multiple Language",
            "ans1": "Hyper Text Markup Language"
        }]
    },

    {
        "q2": "What does CSS stand for?" = [{
            "opt": "Common Style Sheet",
            "opt": "Colorful Style Sheet",
            "opt": "Coputer Style Sheet",
            "opt": "Cascading Style Sheet",
            "ans1": "Cascading Style Sheet"
        }]





    }

/* What does PHP stand for?
Hypertext Preprocessor
Hypertext Programming
Hypertext Preprogramming
Hometext Preprocessor

What does
*/
