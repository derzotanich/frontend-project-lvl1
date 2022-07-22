#!/usr/bin/env node
import readlineSync from 'readline-sync';
import greeting from '../src/cli.js';
import getRandomNumber from '../src/index.js';

const userName = greeting();

console.log('What number is missing in the progression?');
let isLastAnswerCorrect;
for (let i = 0; i < 3; i += 1) {
  const arr = [];
  const arrLength = getRandomNumber(5, 11);
  const arrStep = getRandomNumber(1, 11);
  arr[0] = getRandomNumber(1, 101);
  for (let j = 1; j < arrLength; j += 1) {
    arr[j] = arr[j - 1] + arrStep;
  }
  const iSecret = getRandomNumber(1, arrLength);
  const rightAnswer = arr[iSecret];
  arr[iSecret] = '..';

  console.log(`Question: ${arr.join(' ')}`);
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
