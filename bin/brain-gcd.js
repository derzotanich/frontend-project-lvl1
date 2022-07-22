#!/usr/bin/env node
import readlineSync from 'readline-sync';
import greeting from '../src/cli.js';
import getRandomNumber from '../src/index.js';

const userName = greeting();

const gcd = (a, b) => {
  if (b === 0) {
    return a;
  }
  return gcd(b, a % b);
};

console.log('Find the greatest common divisor of given numbers.');
let isLastAnswerCorrect;
for (let i = 0; i < 3; i += 1) {
  const num1 = getRandomNumber(1, 101);
  const num2 = getRandomNumber(1, 10);
  console.log(`Question: ${num1} ${num2}`);
  const rightAnswer = gcd(num1, num2);
  const answer = readlineSync.question('');
  isLastAnswerCorrect = Number(answer) === rightAnswer;
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
