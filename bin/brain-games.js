#!/usr/bin/env node

import { showGreeting, showPrompt, getName } from '../src/utils/console.js';

showPrompt();
showGreeting(getName());
