(function(){
  function buildQuiz(){
    const output = [];
    myQuestions.forEach(
      (currentQuestion, questionNumber) => {
        const answers = [];
        for(letter in currentQuestion.answers){
          answers.push(
            `<label>
              <input type="radio" name="question${questionNumber}" value="${letter}">
              ${letter} :
              ${currentQuestion.answers[letter]}
            </label>`
          );
        }
        output.push(
          `<div class="question"> ${currentQuestion.question} </div>
          <div class="answers"> ${answers.join('')} </div>`
        );
      }
    );
    quizContainer.innerHTML = output.join('');
  }

  function showResults(){

    const answerContainers = quizContainer.querySelectorAll('.answers');

    let numCorrect = 0;

    myQuestions.forEach( (currentQuestion, questionNumber) => {

      const answerContainer = answerContainers[questionNumber];
      const selector = `input[name=question${questionNumber}]:checked`;
      const userAnswer = (answerContainer.querySelector(selector) || {}).value;

      if(userAnswer === currentQuestion.correctAnswer){
        numCorrect++;

        answerContainers[questionNumber].style.color = 'lightgreen';
      }
      else{
        answerContainers[questionNumber].style.color = 'red';
      }
    });

    resultsContainer.innerHTML = `Правильных ответов ${numCorrect} из ${myQuestions.length}`;
  }

  const quizContainer = document.getElementById('quiz');
  const resultsContainer = document.getElementById('results');
  const submitButton = document.getElementById('submit');
  const myQuestions = [
    {
      question: "1. где следует завязывать галстук?",
      answers: {
        a: "на воротнике рубашки",
        b: "на манжете рукава",
        c: "на глаза"
      },
      correctAnswer: "a"
    },
    {
      question: "2. где должен находиться кончик галстука?",
      answers: {
        a: "должен достигать первой пуговицы на рубашке",
        b: "его нужно закидывать на плечо",
        c: "достигать ремня"
      },
      correctAnswer: "c"
    },
    {
      question: "3. самый популярный узел",
      answers: {
        a: "кент",
        b: "мент",
        c: "узел",
        d: "винт"
      },
      correctAnswer: "a"
    },
    {
      question: "4. где обязателен галстук?",
      answers: {
        a: "футболка",
        b: "свитер",
        c: "джинсовая рубашка",
        d: "костюм-тройка"
      },
      correctAnswer: "d"
    },
    {
      question: "5. самый популярныйй цвет галстука",
      answers: {
        a: "белый",
        b: "черный",
        c: "красный",
        d: "серобуромалиновый"
      },
      correctAnswer: "b"
    },
    {
      question: "6. до какой степени нужно затянуть галстук?",
      answers: {
        a: "чтобы не смог дышать",
        b: "чтобы спадал с рубашки",
        c: "до комфортного уровня",
        d: "вообще не затягивать"
      },
      correctAnswer: "c"
    },
    {
      question: "7. галстуки делятся на:",
      answers: {
        a: "повседневные, официальные, летние",
        b: "летние, официальные",
        c: "только повседневные",
        d: "только официальные"

      },
      correctAnswer: "c"
    },
    {
      question: "8. кто ходит в галстуках",
      answers: {
        a: "элегантные и респектабельные, ценящие хороший вкус и соблюдающие этикет настоящие мужчины.",
        b: " бомжи"
      },
      correctAnswer: "a"
    },
    {
      question: "9. кто может носить галстуки",
      answers: {
        a: "девушки",
        b: "парни",
        c: "все вышеперечисленные",
        d: "никто"
      },
      correctAnswer: "c"
    },
    {
      question: "10. как дела?",
      answers: {
        a: "супер",
        b: "отлично",
        c: "нормально",
        d: "все плохо"
      },
      correctAnswer: "d"
    }
  ];
  buildQuiz();
  submitButton.addEventListener('click', showResults);
})();
