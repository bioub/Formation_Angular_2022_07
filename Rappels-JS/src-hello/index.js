// Immediately Invoked Function Expression
// Module IIFE
// (function () {
//   'use strict';
// })();

import { hello } from './hello.js';

const pEl = document.createElement('p');
const content = hello('Romain');

pEl.append(content);

document.body.append(pEl);
