//Set Variables
var startBtn = document.getElementById("startBtn");
var infoBox = document.getElementById("infoBox");
var infoTitle = document.getElementById("info-title");
var timer = document.getElementById("timer");
var highscores = document.getElementById("highscores")

var q = 0;

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
}

]

startBtn.addEventListener("click", function () {
    builtQuestionCard()
    console.log(questions[q].question);
})
function builtQuestionCard() {
    var answerBox = document.getElementById("answerBox")

    answerBox.innerHTML = ""
    infoTitle.textContent = questions[q].question
    questions[q].choices.forEach(function (choice) {
        var button = document.createElement("button");
        button.textContent = choice
        button.setAttribute("value", choice)
        button.onclick = evaulateAnswer
        answerBox.appendChild(button)


    })

}

function evaulateAnswer() {
    if (this.value === questions[q].answer) {
        console.log("correct");
    } else {
        console.log("wrong");

    }
    q++;
    if (q === questions.length) {
        console.log("end game");
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
