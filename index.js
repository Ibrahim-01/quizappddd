let questions = [
    {
        question: "what is 2 + 2 ?",
        answer: [
            {text: "six", correct: false},
            {text: "four", correct: true},
            {text: "twelve", correct: false},
            {text: "twenty-two", correct: false},
        ]
    },
    {
        question: "how many planets are in the solar system ?",
        answer: [
            {text: "six", correct: false},
            {text: "four", correct: false},
            {text: "nine", correct: true},
            {text: "twenty-two", correct: false},
        ]
    },
    {
        question: "how many local governments are in lagos state ?",
        answer: [
            {text: "six", correct: false},
            {text: "four", correct: false},
            {text: "twenty", correct: true},
            {text: "twenty-two", correct: false},
        ]
    },
    {
        question: "how old is your father ?",
        answer: [
            {text: "fifty", correct: true},
            {text: "ninty", correct: false},
            {text: "hundred", correct: false},
            {text: "twenty-two", correct: false},
        ]
    },
    {
        question: "what is the max number of people in a class ?",
        answer: [
            {text: "sixty", correct: false},
            {text: "forty", correct: true},
            {text: "thirty-five", correct: false},
            {text: "forty-five", correct: false},
        ]
    }
]
let next = document.querySelector("#next")
let question1 = document.querySelector("#question1")
let index = 0;
let choice = 0;
questions[0].question && questions[0].answer

next.addEventListener("click", function () {
    questions[0].question && questions[0].answer
})
function changeQuestion(e) {
    
}
