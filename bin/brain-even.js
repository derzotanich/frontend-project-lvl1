#!/usr/bin/env node
import readlineSync from 'readline-sync';
import greeting from '../src/cli.js';

const userName = greeting();

console.log('Answer "yes" if the number is even, otherwise answer "no".');
const arr = [15, 6, 7];
let lastAnswer = '';
for (let i = 0; i < arr.length; i += 1) {
  console.log(`Question: ${arr[i]}`);
  let rightAnswer = 'no';
  if (arr[i] % 2 === 0) {
    rightAnswer = 'yes';
  }
  const answer = readlineSync.question('');
  if (answer === rightAnswer) {
    console.log('Correct!');
    lastAnswer = 'correct';
  } else {
    lastAnswer = 'incorrect';
    console.log('"yes" is wrong answer ;(. Correct answer was "no".');
    console.log(`Let's try again, ${userName}!`);
    break;
  }
}

if (lastAnswer === 'correct') {
  console.log(`Congratulations, ${userName}!`);
}
