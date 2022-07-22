#!/usr/bin/env node
import readlineSync from 'readline-sync';
import greeting from '../src/cli.js';
import getRandomNumber from '../src/index.js';

const userName = greeting();

const arr = [];
for (let i = 0; i < 3; i += 1) {
  arr[i] = getRandomNumber(1, 101);
}

const isPrime = (num) => {
  for (let j = 0; j < num; j += 1) {
    if (num % j === 0) {
      return 'no';
    }
  }
  return 'yes';
};

console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
let isLastAnswerCorrect;
for (let i = 0; i < arr.length; i += 1) {
  console.log(`Question: ${arr[i]}`);
  const rightAnswer = isPrime(arr[i]);
  const answer = readlineSync.question('');
  isLastAnswerCorrect = answer === rightAnswer;
  if (isLastAnswerCorrect) {
    console.log('Correct!');
  } else {
    console.log(`"${answer}" is wrong answer ;(. Correct answer was "${rightAnswer}".`);
    console.log(`Let's try again, ${userName}!`);
    break;
  }
}

if (isLastAnswerCorrect) {
  console.log(`Congratulations, ${userName}!`);
}
