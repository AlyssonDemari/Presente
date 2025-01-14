const button = () =>{
    const voltar = document.createElement('a')
    let section = document.querySelector('section')
    voltar.href = "../../index.html"
    voltar.innerHTML = "Voltar"
    section.insertAdjacentElement('afterend', voltar)
}
button()


const startQuiz = document.querySelector('.start-quiz')
const questionsCont = document.querySelector('.questions-container')
const answerCont = document.querySelector('.answer-container')
const questionText = document.querySelector('.question')
const nextQuestionButton = document.querySelector('.next-question')
const father =  document.querySelector('.container')

let currentQuestion = 0 //contador de perguntas 
let totalCorrect = 0


startQuiz.addEventListener('click', ()=> {
    startQuiz.classList.add('hide')
    questionsCont.classList.remove('hide')
    father.style.justifyContent = 'space-between';
    
    nextQuestion()
})

nextQuestionButton.addEventListener('click', ()=> {
    nextQuestion()
})


const nextQuestion = () => {

    resetState()

    if(questions.length == currentQuestion){
       return finishGame()
    }
    
    questionText.textContent = questions[currentQuestion].question
    questions[currentQuestion].answers.forEach(answer => {
        const newAnswer = document.createElement('button')
        newAnswer.classList.add("button", "answer")
        newAnswer.textContent = answer.text

        if(answer.correct){
            newAnswer.dataset.correct = answer.correct
        }
        answerCont.appendChild(newAnswer)

        newAnswer.addEventListener('click', selectAnswer)
    })
} 

const resetState = () => {
    while(answerCont.firstChild){
        answerCont.removeChild(answerCont.firstChild)
    }

    nextQuestionButton.classList.add('hide')
}

const selectAnswer = (event) => {
    const answerClicked = event.target

    if (answerClicked.dataset.correct) {
        totalCorrect++
    } 

    document.querySelectorAll('.answer').forEach(button => {
        if(button.dataset.correct){
            button.classList.add('correct')
        }else {
            button.classList.add('incorrect')
        }

        button.disabled= true
    })

    nextQuestionButton.classList.remove('hide')
    currentQuestion++
}

function finishGame() {
const totalQuestions = questions.length
const performance = Math.floor(totalCorrect * 100 / totalQuestions)

let message = ""

    switch (true) {
        case (performance >= 90):
        message = "Excelente :)"
        break
        case (performance >= 70):
        message = "Muito bom :)"
        break
        case (performance >= 50):
        message = "Bom"
        break
        default:
        message = "Pode melhorar :("
    }

    questionsCont.innerHTML = 
    `
        <p style="margin: 30px ;"> Você acertou ${totalCorrect} de ${totalQuestions} questões!
        <span>Resultado: ${message}</span></p>
        <button onclick=window.location.reload() class="button">Refazer teste</button>
    `
}








const questions = [
    { question: "Onde nos conhecemos?",
        answers: [
            {text: "No trabalho", correct: false},
            {text: "Em uma festa", correct: false},
            {text: "No evador do trabalho", correct: false},
            {text: "Pela internet", correct: true},
        ]
    },
    { question: "Onde foi o primeiro encontro?",
        answers: [
            {text: "Pista de skate", correct: false},
            {text: "Shopping", correct: false},
            {text: "Redenção", correct: true},
            {text: "Ao ar livre", correct: false},
        ]
    },
    { question: "Qual foi a data do primeiro beijo?",
        answers: [
            {text: "21/05/2024", correct: false},
            {text: "19/05/2024", correct: true},
            {text: "21/06/2024", correct: false},
            {text: "19/05/2025", correct: false},
        ]
    },
    { question: "Qual foi o primeiro filme que assistimos juntos?",
        answers: [
            {text: "Emoji", correct: false},
            {text: "As branquelas", correct: true},
            {text: "Enrolados", correct: false},
            {text: "Nenhuma das opções", correct: false},
        ]
    },
    { question: "Como foi selebrado o primeiro aniversário de namoro juntos?",
        answers: [
            {text: "Fomos a um restaurante", correct: false},
            {text: "Fomos a um parque", correct: false},
            {text: "Fomos a praia ", correct: false},
            {text: "Nenhuma das opções ", correct: true},
        ]
    },
    { question: "Qual é meu apelido favorito?",
        answers: [
            {text: "Tatum", correct: true},
            {text: "Pug", correct: false},
            {text: "Minha linda", correct: false},
            {text: "Princesa", correct: false},
        ]
    },
    { question: "Qual foi o primeiro presente que você recebeu?",
        answers: [
            {text: "Uma roupa", correct: false},
            {text: "Um buque de flores", correct: false},
            {text: "Um cartão de presente", correct: true},
            {text: "Alianças de namoro", correct: false},
        ]
    },
    { question: "Qual é nosso hobby?",
        answers: [
            {text: "Assistir série", correct: false},
            {text: "Resolver o cubo mágico", correct: true},
            {text: "Assistir filmes", correct: false},
            {text: "Nenhuma das opções", correct: false},
        ]
    },
    { question: "Qual foi o filme que eu odiei assistir?",
        answers: [
            {text: "CampRock", correct: true},
            {text: "Emoji", correct: false},
            {text: "Baywatch", correct: false},
            {text: "Anaconda", correct: false},
        ]
    },
    { question: "Se vocês fossem personagens de um filme, qual seria o enredo?",
        answers: [
            {text: "Uma comédia romântica cheia de momentos embaraçosos", correct: false},
            {text: "Uma aventura épica com muitas viagens", correct: false},
            {text: "Um drama emocionante sobre superação juntos", correct: true},
            {text: "Uma animação com muita diversão e risadas", correct: false},
        ]
    },
]