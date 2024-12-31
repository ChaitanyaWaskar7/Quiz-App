document.addEventListener('DOMContentLoaded', () => {
    
    startBtn = document.getElementById('start-btn')
    nextBtn = document.getElementById('next-btn')
    restartBtn = document.getElementById('restart-btn')
    questionContainer = document.getElementById('question-container')
    questionText = document.getElementById('question-text')
    choicesList = document.getElementById('choices-list')
    resultContainer = document.getElementById('result-container')
    scoreDisplay = document.getElementById('score')
    resultContainer = document.getElementById('result-container')
    
     const questions = [
        {
          question: "What is the capital of France?",
          choices: ["Paris", "London", "Berlin", "Madrid"],
          answer: "Paris",
        },
        {
          question: "Which planet is known as the Red Planet?",
          choices: ["Mars", "Venus", "Jupiter", "Saturn"],
          answer: "Mars",
        },
        {
          question: "Who wrote 'Hamlet'?",
          choices: [
            "Charles Dickens",
            "Jane Austen",
            "William Shakespeare",
            "Mark Twain",
          ],
          answer: "William Shakespeare",
        },
    ];

    let currentQuestionIndex = 0;
    score = 0;

    startBtn.addEventListener('click', startQuiz)

    nextBtn.addEventListener('click', () => {
        currentQuestionIndex++;
        if (currentQuestionIndex < questions.length)
        {
            showQuestions()
        }
        else {
            showResult()
        }
    })


    restartBtn.addEventListener('click', () => {
        currentQuestionIndex = 0;
        score = 0;
        resultContainer.classList.add('hidden')
        startQuiz()
    })
  

    function startQuiz()
    {
        startBtn.classList.add('hidden')
        resultContainer.classList.add('hidden')
        questionContainer.classList.remove('hidden')
        showQuestions()
    }

    function showQuestions()
    {
        nextBtn.classList.add('hidden')

        questionText.textContent = questions[currentQuestionIndex].question
        choicesList.innerHTML = "" //clear previous choices
        questions[currentQuestionIndex].choices.forEach(choice => {
            const li = document.createElement('li')
            li.textContent = choice
            li.addEventListener('click', () => selectAnswer(choice))
            choicesList.appendChild(li)
        })
    }

   function selectAnswer(choice)
    {
       const correctAnswer = questions[currentQuestionIndex].answer
       if (choice === correctAnswer)
       {
           score++;
       }
       nextBtn.classList.remove('hidden')
    }

    function showResult()
    {
        questionContainer.classList.add('hidden')
        resultContainer.classList.remove('hidden')
        scoreDisplay.textContent = `${score} out of ${questions.length}`
    }

})