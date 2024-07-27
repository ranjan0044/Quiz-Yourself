const quizData = [
    {
        question: "which  is the first search engine in internet?",
        a: "Ada  Lovelace",
        b:"Thomas Harriot",
        c: "Vinton cerf ",
        d: " Archie",
        correct: "d",
    },
    {
        question: "Number of bit used by the IPv6 address –",
        a: "120 bit",
        b: "128 bit",
        c: "125 bit",
        d: "127 bit",
        correct: "b",
    },
    {
        question: "which is the first web browsers invented in 1990?",
        a: "Nexus ",
        b: "Param ",
        c: "Google ",
        d: "Motorala",
        correct: "a",
    },
    {
        question: "who is the first computer programmer?",
        a: "Vint cerf",
        b: "Ada  Lovelace ",
        c: "Thomas",
        d: "seymour cray",
        correct: "b",
    },
    {
        question: "Who is known as Modern father of internet?",
        a: "Vint cerf",
        b: "Viton G.",
        c: "seymour cray",
        d: "Thomas Clif",
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