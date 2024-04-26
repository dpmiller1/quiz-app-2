let next = document.getElementById('next');
let previous = document.getElementById('previous');
let submit = document.getElementById('submit');
let reset = document.getElementById('reset');
let score = 0;
let userAnswers = [];
let answered = document.querySelectorAll('input');
let resultsContainer = document.getElementById('results-ctr');
let question1 = document.getElementsByClassName('question1')[0];

let questions = [
    {
        questionTitle: 'Question 1 of 3',
        questionText: 'Which of the following is not a real eCommerce platform?',
        AnswerA: 'Shopify',
        AnswerB:'WooCommerce',
        AnswerC: 'ShopCommerce',
        AnswerD: 'BigCommerce',
        correct: 'C'
    },
    {
        questionTitle: 'Question 2 of 3',
        questionText: 'If Shopify is so good, why are Shopify developers necessary?',
        questionAnswers: ['To save time on things like store setups and migrations', 'To extend the limited design options and functionalities of themes with custom code', 'To provide support with a deep understanding of how the platform works and what its limitations are', 'All of the above']
    },
    {
        questionTitle: 'Question 3 of 3',
        questionText: 'Which of the following is true about Shopify developers?',
        questionAnswers: ['They are paid extremely well', 'There is a high demand for them', 'They need to know web development, the platform itself, and the liquid template language', 'All of the above']
    }
];

for (let answer of answered) {
    answer.addEventListener('click', function(e) {
        userAnswers.push(e.currentTarget.value);
    });
};

    submit.addEventListener('click', function() {
        let currentQuestion = document.querySelector('.show-active');
        currentQuestion.classList.remove('show-active');
        previous.style.display = 'none';
        submit.style.display = 'none';
        for (let answer of userAnswers) {
            if (answer == 'correct') {
                score++;
            };
        document.getElementById('score').innerText = score;
        };
        resultsContainer.style.display = 'block';
    });


next.addEventListener('click', function() {
    let currentQuestion = document.querySelector('.show-active');
    let nextQuestion = currentQuestion.nextElementSibling;
    if (nextQuestion) {
        currentQuestion.classList.remove('show-active');
        nextQuestion.classList.add('show-active');
        previous.style.display = 'inline';
    };
    if (nextQuestion.classList.contains('question3')) {
        next.style.display = 'none';
        submit.style.display = 'inline';
    };
});

previous.addEventListener('click', function() {
    let currentQuestion = document.querySelector('.show-active');
    let previousQuestion = currentQuestion.previousElementSibling;
    if (previousQuestion) {
        currentQuestion.classList.remove('show-active');
        previousQuestion.classList.add('show-active');
        next.style.display = 'inline';
        submit.style.display = 'none';
    }
    if (previousQuestion.classList.contains('question1')) {
        previous.style.display = 'none';
    }
});

reset.addEventListener('click', function() {
    for (let answer of userAnswers) {
        score--;
    }
    resultsContainer.style.display = 'none';
    question1.classList.add('show-active');
    next.style.display = 'inline';
})