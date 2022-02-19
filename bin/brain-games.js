#!/usr/bin/env node

import readlineSync from 'readline-sync';

export const showGreeting = name => console.log(`Hello, ${name}`);
export const showPrompt = () => console.log('Welcome to the Brain Games');
export const getName = () => readlineSync.question('May I have your name? ');

showPrompt();
showGreeting(getName());
