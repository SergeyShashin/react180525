// import { User } from './user.js';

// console.log('Welcome, WORLD!!!');

// let user = new User('Luck', 'Skywalker');
// user.sayWelcome();

import React from "react";
import { createRoot } from 'react-dom/client';

// const element = React.createElement(
//   'h1',
//   { className: 'react-welcome' },
//   'Привет! Реакт работает!',
// );
// const element = <h1 className='react-welcome' >'Привет! Реакт JSX работает!'</h1>;

const messages = ['Привет друг!', 'Как дела?', 'Как настроение?', 'Как погода?'];
const Message = (props) => <p>{props.message}</p>;
const Messages = (props) => props.messages.map(msg => <Message message={msg} />);

const root = createRoot(document.getElementById('root'));
root.render(<Messages messages={messages} />);