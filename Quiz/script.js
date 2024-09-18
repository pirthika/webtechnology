document.addEventListener('DOMContentLoaded', function () {
    const round1Content = document.getElementById('round1-content');
    const round2Content = document.getElementById('round2-content');
    const nextButton = document.querySelector('.quiz-navigation button');
    const submitButton = document.querySelector('#round2-content .quiz-navigation button'); 

    let currentRound = 1; 
    let currentQuestion = 1;

    
    function handleNextClick() {
        if (currentRound === 1) {
            round1Content.style.display = 'none';
            round2Content.style.display = 'block';
            currentRound = 2;
        }
    }



    function handleSubmitClick() {
        alert('Submitted successfully!');
    }
    

   
    nextButton.addEventListener('click', handleNextClick);
    submitButton.addEventListener('click', handleSubmitClick);
});

const questions = document.querySelectorAll('.question');

questions.forEach(question => {
  
    const buttons = question.querySelectorAll('.btn');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            buttons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
        });
    });
});