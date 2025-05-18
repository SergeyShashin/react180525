// import { User } from './user.js';

// console.log('Welcome, WORLD!!!');

// let user = new User('Luck', 'Skywalker');
// user.sayWelcome();

import React from "react";
import { createRoot } from 'react-dom/client';

const element = React.createElement(
  'h1',
  { className: 'react-welcome' },
  'Привет! Реакт работает!',
);

const root = createRoot(document.getElementById('root'));
root.render(element);