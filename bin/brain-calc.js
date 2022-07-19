#!/usr/bin/env node
import readlineSync from 'readline-sync';
import greeting from '../src/cli.js';

const userName = greeting();

const getRandomNumber = (min, max) => Math.round(Math.random() * (max - min) + min);

const arrMathSymb = ['+', '-', '*'];

console.log('What is the result of the expression?');
let isLastAnswerCorrect;
for (let i = 0; i < 3; i += 1) {
  const firstNum = getRandomNumber(1, 101);
  const secondNum = getRandomNumber(1, 11);
  const operator = arrMathSymb[Math.floor(Math.random() * arrMathSymb.length)];
  console.log(`Question: ${firstNum} ${operator} ${secondNum}`);

  let rightAnswer = 0;
  switch (operator) {
    case '-':
      rightAnswer = firstNum - secondNum;
      break;
    case '+':
      rightAnswer = firstNum + secondNum;
      break;
    case '*':
      rightAnswer = firstNum * secondNum;
      break;
    default:
      rightAnswer = NaN;
  }

  const answer = Number(readlineSync.question(''));
  isLastAnswerCorrect = answer === rightAnswer;
  if (isLastAnswerCorrect) {
    console.log('Correct!');
  } else {
    console.log(`${answer} is wrong answer ;(. Correct answer was ${rightAnswer}.`);
    console.log(`Let's try again, ${userName}!`);
    break;
  }
}

if (isLastAnswerCorrect) {
  console.log(`Congratulations, ${userName}!`);
}
