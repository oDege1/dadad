let money = 100;
let popularity = 100;
let questionsRemaining = 5;
let questionIndex = 0;

const questions = [
  { text: "você está com problemas em relação a produção, você não deseja gastar boa parte de seu lucro em investimentos para uma melhora, fazendo com que seus trabalhadores de longa data permaneçam com você, ao invés disso, você decide terceirizar o trabalho para que saia mais barato?", acceptMoney: -30, acceptPopularity: 25, rejectMoney: -25, rejectPopularity: 30 },
  { text: "Na compra de uma nova terra, você aceita comprar uma terra já ocupada por trabalhadores?", acceptMoney: 30, acceptPopularity: -25, rejectMoney: -20, rejectPopularity: 15 },
  { text: "Nessa nova terra, você estaria disposto a ceder os direitos reivindicados pelos operários?", acceptMoney: -30, acceptPopularity: 25, rejectMoney: 30, rejectPopularity: -30 },
  { text: "Com esses novos (ou velhos) trabalhadores, você permitiria-os que construíssem suas casas, mesmo que isso pudesse custar sua custódia de determinada área da terra?", acceptMoney: -30, acceptPopularity: 30, rejectMoney: 20, rejectPopularity: -25 },
];

function updateStats() {
  document.getElementById('money').innerText = money;
  document.getElementById('popularity').innerText = popularity;

  document.getElementById('moneyBarFill').style.width = money + 'px';
  document.getElementById('popularityBarFill').style.width = popularity + 'px';
}

function showMessage(message) {
  document.getElementById('question').innerText = message;
  document.getElementById('acceptButton').style.display = 'none';
  document.getElementById('rejectButton').style.display = 'none';
}

function makeDecision(accept) {
  if (questionsRemaining > 0) {
    questionsRemaining--;

    const currentQuestion = questions[questionIndex];
    questionIndex = (questionIndex + 1) % questions.length;

    if (accept) {
      money += currentQuestion.acceptMoney;
      popularity += currentQuestion.acceptPopularity;
    } else {
      money += currentQuestion.rejectMoney;
      popularity += currentQuestion.rejectPopularity;
    }

    updateStats();

    if (money <= 0) {
      showMessage("Você não atingiu os objetivos financeiros do jogo, mas deu aula em como ser um humano decente. Há princípios que superam o dinheiro, a vida é mais que isso e todas elas devem ser respeitadas. parabéns!");
    } else if (popularity <= 0) {
      showMessage("Parabéns! Você administrou uma empresa de modo em que seus lucros foram superiores ao esperado! Mas a troco de que? trabalhadores explorados, censurados e sem direitos. vidas submetidas ao dinheiro, famílias passando por dificuldades e um cenário em que há troca de dignidade por comida na mesa. decisões básicas foram tomadas nesse questionário, seus valores devem ser revistos.");
    } else if (questionsRemaining === 0) {
      if (money > popularity) {
        showMessage("Parabéns! Você administrou uma empresa de modo em que seus lucros foram superiores ao esperado! Mas a troco de que? trabalhadores explorados, censurados e sem direitos. vidas submetidas ao dinheiro, famílias passando por dificuldades e um cenário em que há troca de dignidade por comida na mesa. decisões básicas foram tomadas nesse questionário, seus valores devem ser revistos.");
      } else if (popularity > money) {
        showMessage("Você não atingiu os objetivos financeiros do jogo, mas deu aula em como ser um humano decente. Há princípios que superam o dinheiro, a vida é mais que isso e todas elas devem ser respeitadas. parabéns!");
      } else {
        showMessage("Game over! It's a tie!");
      }
    } else {
      // Generate a new question
      document.getElementById('question').innerText = currentQuestion.text;
    }
  }
}

// Initial question
document.getElementById('question').innerText = "Um de seus homens diz que seus trabalhadores, por motivos religiosos, necessitam de dias e momentos específicos voltados a religião, não podendo trabalhar em certos momentos.talvez, aceitar isso aumente a produtividade?";