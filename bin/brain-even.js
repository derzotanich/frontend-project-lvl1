#!/usr/bin/env node
import readlineSync from 'readline-sync';
import greeting from '../src/cli.js';

const userName = greeting();

console.log('Answer "yes" if the number is even, otherwise answer "no".');
const arr = [15, 6, 7];
let isLastAnswerCorrect;
for (let i = 0; i < arr.length; i += 1) {
  console.log(`Question: ${arr[i]}`);
  let rightAnswer = 'no';
  if (arr[i] % 2 === 0) {
    rightAnswer = 'yes';
  }
  const answer = readlineSync.question('');
  isLastAnswerCorrect = answer === rightAnswer;
  if (isLastAnswerCorrect) {
    console.log('Correct!');
  } else {
    console.log('"yes" is wrong answer ;(. Correct answer was "no".');
    console.log(`Let's try again, ${userName}!`);
    break;
  }
}

if (isLastAnswerCorrect) {
  console.log(`Congratulations, ${userName}!`);
}
