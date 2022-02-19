#!/usr/bin/env node

import readlineSync from 'readline-sync';

const showGreeting = name => console.log(`Hello, ${name}`);
const showPrompt = () => console.log('Welcome to the Brain Games');

showPrompt();
const name = readlineSync.question('May I have your name? ');
showGreeting(name);

