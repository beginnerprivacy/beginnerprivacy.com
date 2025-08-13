let currentAssessmentScores = {};
let currentQuizScores = {};

function startQuizAssessment(id) {
  const container = document.querySelector(`#${id}`);
  container.querySelector('.tm-start-button').style.display = 'none';
  container.querySelector('.tm-questions-container').style.display = 'block';
  showQuestion(id, 0);

  if (container.dataset.type === "assessment") {
    setupAssessmentButtons(id);
  } else {
    setupQuizButtons(id);
  }
}

function setupAssessmentButtons(assessmentId) {
  document.querySelectorAll('.tm-option').forEach(button => {
    button.addEventListener('click', function() {
      const currentIndex = parseInt(this.closest('.tm-question').dataset.index);
      const totalQuestions = document.querySelectorAll(`#${assessmentId} .tm-question`).length;

      currentAssessmentScores[assessmentId] = (currentAssessmentScores[assessmentId] || 0) + parseInt(this.dataset.score);

      if (currentIndex < totalQuestions - 1) {
        showQuestion(assessmentId, currentIndex + 1);
      } else {
        showAssessmentResult(assessmentId);
      }
    });
  });
}

function setupQuizButtons(quizId) {
  document.querySelectorAll('.tm-option').forEach(button => {
    button.addEventListener('click', function() {
      const currentIndex = parseInt(this.closest('.tm-question').dataset.index);
      const totalQuestions = document.querySelectorAll(`#${quizId} .tm-question`).length;

      const isCorrect = this.dataset.iscorrect === "true";
      if (isCorrect) {
        currentQuizScores[quizId] = (currentQuizScores[quizId] || 0) + 1;
      }

      if (currentIndex < totalQuestions - 1) {
        showQuestion(quizId, currentIndex + 1);
      } else {
        showQuizResult(quizId);
      }
    });
  });
}

function showQuestion(id, index) {
  const container = document.querySelector(`#${id}`);
  container.querySelectorAll('.tm-question').forEach(q => {
    q.classList.remove('active');
  });
  container.querySelector(`.tm-question[data-index="${index}"]`).classList.add('active');
}

function previousQuestion(id) {
  const currentIndex = parseInt(document.querySelector(`#${id} .tm-question.active`).dataset.index);
  showQuestion(id, Math.max(0, currentIndex - 1));
}

function showAssessmentResult(id) {
  const container = document.querySelector(`#${id}`);
  const totalScore = currentAssessmentScores[id] || 0;
  let resultText = '';

  if (totalScore <= 5) {
    resultText = resultTexts.casual;
  } else if (totalScore <= 10) {
    resultText = resultTexts.privacyConscious;
  } else {
    resultText = resultTexts.advanced;
  }

  container.querySelector('.tm-result-content').textContent = resultText;
  container.querySelector('.tm-result').style.display = 'block';
  container.querySelectorAll('.tm-question').forEach(q => {
    q.style.display = 'none';
  });
}

function showQuizResult(id) {
  const container = document.querySelector(`#${id}`);
  const totalScore = currentQuizScores[id] || 0;
  const totalQuestions = document.querySelectorAll(`#${id} .tm-question`).length;

  let resultText = totalScore + " / " + totalQuestions;

  container.querySelector('.tm-result-content').textContent = resultText;
  container.querySelector('.tm-result').style.display = 'block';
  container.querySelectorAll('.tm-question').forEach(q => {
    q.style.display = 'none';
  });
}

function restartQuizAssessment(id) {
  const container = document.querySelector(`#${id}`);
  currentAssessmentScores[id] = 0;
  currentQuizScores[id] = 0;
  container.querySelector('.tm-result').style.display = 'none';
  container.querySelectorAll('.tm-question').forEach(q => {
    q.style.cssText = '';
  });
  container.querySelector('.tm-questions-container').style.display = 'block';
  showQuestion(id, 0);
}