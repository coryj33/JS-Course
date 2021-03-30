'use strict';
/*
document.querySelector('.message').textContent = 'Correct Number! ✔';
document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;
document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/
let secretNumber = Math.trunc(Math.random() * 20) + 1;
console.log(secretNumber);
let currentScore = 20;
let highScore = 0;

document.querySelector('.number').textContent = '??';
document.querySelector('.again').addEventListener('click', function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  currentScore = 20;
  document.querySelector('body').style.backgroundColor = 'black';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '??';
  document.querySelector('.guess').value = '';
  document.querySelector('.score').textContent = '20';
  console.log(secretNumber);
});
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  // When there is no input
  if (!guess) {
    document.querySelector('.message').textContent = '😒 No number.';
  } // When guess is too high
  else if (guess > secretNumber) {
    if (currentScore > 1) {
      document.querySelector('.message').textContent = 'Too high! Try again.';
      currentScore--;
      document.querySelector('.score').textContent = currentScore;
    } else {
      document.querySelector('.score').textContent = ' You lost the game!';
      currentScore--;
    }

    // When guess is too low
  } else if (guess < secretNumber) {
    if (currentScore > 1) {
      document.querySelector('.message').textContent = 'Too low! Try again.';
      currentScore--;
      document.querySelector('.score').textContent = currentScore;
    } else {
      document.querySelector('.score').textContent = ' You lost the game!';
      currentScore--;
    }
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent =
      'Congratulations 🎉 You were correct!';
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secretNumber;
    if (currentScore > highScore) {
      document.querySelector('.highscore').textContent = currentScore;
    }
  }
});
