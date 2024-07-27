const quizData = [
    {
        question: "what does GPS stands for ?",
        a: "Going places sometimes",
        b: "Government positioning satellites",
        c: "Global positioning satellites",
        d: "Global positioning System",
        correct: "d",
    },
    {
        question: "During which year the project on GPS was launched?",
        a: "13535",
        b: "1973",
        c: "1945",
        d: "1980",
        correct: "b",
    },
    {
        question: "who invented the GPS device?",
        a: "Roger L. Easton ",
        b: "Dennis M Ritchie",
        c: "Elon mask ",
        d: "J.J Thomson",
        correct: "a",
    },
    {
        question: "when was the first GPS satellite launched? This might earlier than you’d think…",
        a: "1994",
        b: "1978",
        c: "1967",
        d: "1970",
        correct: "b",
    },
    {
        question: "How many GPS satellites were there when system was originally set up?",
        a: "56",
        b: "24",
        c: "15",
        d: "19",
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