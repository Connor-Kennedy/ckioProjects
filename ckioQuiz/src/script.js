const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')
const questionCounter = document.getElementById('question-count')
const scoreElement = document.getElementById('score')
const introBlock = document.getElementById('intro-block')

let shuffledQuestions, currentQuestionIndex, currentQuestionCount, questions = [], currentScoreCount = 0

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
    currentQuestionIndex++
    setNextQuestion()
})

function startGame() {
    console.log('Started')
    questions = []
    generateRandomQuestions(10)
    startButton.classList.add('hide')
    introBlock.classList.add('hide')
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    currentQuestionCount = currentQuestionIndex + 1
    currentScoreCount = 0
    scoreElement.innerText = "Score: " + currentScoreCount
    questionContainerElement.classList.remove('hide')
    setNextQuestion()
}

function setNextQuestion() {
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex])
    questionCounter.innerText = 'Question ' + currentQuestionCount + ' of ' + questions.length
    currentQuestionCount ++
    
}

function showQuestion(question) {
    questionElement.innerText = question.question
    question.answers.forEach(answer => {
        const button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn')
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectAnswer)
        answerButtonsElement.appendChild(button)
    })
}

function resetState() {
    clearStatusClass(document.body)
    //Hide the 'Next' button
    nextButton.classList.add('hide')
    //Removes all answer buttons
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild)
    }
}

function selectAnswer(e) {
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    scoreElement.innerText = "Score: " + currentScoreCount
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })
    if (selectedButton.dataset.correct) {
        currentScoreCount++
        scoreElement.innerText = "Score: " + currentScoreCount
    }
    if (shuffledQuestions.length > currentQuestionIndex + 1) {
        nextButton.classList.remove('hide')
    } else {
        startButton.innerText = 'Restart'
        startButton.classList.remove('hide')
    }
    
}

function setStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct) {
        element.classList.add('correct')
    } else {
        element.classList.add('wrong')
    }
}

function clearStatusClass(element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')
}

function generateRandomQuestions(howmanyquestions){
    for (i = 0; i < howmanyquestions; i ++) {

        //Math questions are easy to randomly generate!

        //Randomly generate a pair of numbers, each from 1 to 9
        var max = 9
        var min = 1
        var a = Math.floor(Math.random() * (+max - +min)) + +min
        var b = Math.floor(Math.random() * (+max - +min)) + +min

        //Randomly generate operator + - / *
        var op

        switch(Math.floor(Math.random() * (4 - 1)) + 1) {
            case 1:
                op = '+'
                break;
            case 2:
                op = '-'
                break;
            case 3:
                op = '*'
                break;
            case 4:
                op = '/'
                break;
        }

        //Generate the question
        q = 'What is ' + a + ' ' + op + ' ' + b + '?'

        //Calculate the correct answer

        var answ

        switch(op){
            case '+':
                answ = a + b
                break;
            case '-':
                answ = a - b
                break;
            case '*':
                answ = a * b
                break;
            case '/':
                answ = a / b
                break;
        }

        //Calculate three incorrect answers

        var wrongAnsw1 = answ + 3
        var wrongAnsw2 = answ + 2
        var wrongAnsw3 = answ - 2

        //Push question to questions array
        questions.push(
            {
                question: q,
                answers: [
                    { text: answ, correct: true},
                    { text: wrongAnsw1, correct: false},
                    { text: wrongAnsw2, correct: false},
                    { text: wrongAnsw3, correct: false}
                ]
                
            }
        )

        //Shuffle the answers
        // This doesnt seem very random!
        questions[questions.length-1].answers.sort(() => Math.random() - .5)
    }

}