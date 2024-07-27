const quizData = [
    {
        question: "Who developed the first learning Machine?",
        a: "Kalyan",
        b: "Joiners Denner",
        c: "Tom Anderson",
        d: "Arthur Samuel",
        correct: "d",
    },
    {
        question: "Which of the following are the most widely used metrics tools to access a Classified model?",
        a: "Cost sensitive accuracy",
        b: "confusion matrix",
        c: "Area under the ROC curve",
        d: "All of the above",
        correct: "b",
    },
    {
        question: "How many types of Machine Learning technique?",
        a: "4 types",
        b: "3 types",
        c: "5 types",
        d: "2 types",
        correct: "a",
    },
    {
        question: "Machine Learning is a subset of ______",
        a: "EC (Electronic Communication)",
        b: "AI(artificial intelligence)",
        c: "IOT (internet of things)",
        d: "Data structure",
        correct: "b",
    },
    {
        question: "How can you handle missing or corrupted data in a dataset?",
        a: "Assign a unique category to missing values",
        b: "All of these",
        c: "Drop missing rows or columns",
        d: "Replace missing values with mean/median / mode ",
        correct: "b",
    },


];

const quiz= document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')


let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz() {

    deselectAnswers()

    const currentQuizData = quizData[currentQuiz]

    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}

function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}

function getSelected() {
    let answer
    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })
    return answer
}


submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    if(answer) {
       if(answer === quizData[currentQuiz].correct) {
           score++
       }

       currentQuiz++

       if(currentQuiz < quizData.length) {
           loadQuiz()
       } else {
           quiz.innerHTML = `
           <h2 style="padding:10rem 8rem;">You Answered '${score}' Correctly Out of '${quizData.length}' Questions</h2>
            <span>
            <button class="exit-btn" class="fa-solid fa-circle-xmark" onclick="history.back()"> 
    <i class="fa-solid fa-xmark"></i>          Exit  
    </button>
           <button class="submit" submit onclick="location.reload()">Reload</button>
           </span>
           `
       }
    }
})