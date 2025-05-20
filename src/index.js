// import { User } from './user.js';

// console.log('Welcome, WORLD!!!');

// let user = new User('Luck', 'Skywalker');
// user.sayWelcome();

import React, { Component } from "react";
import { createRoot } from 'react-dom/client';

// const element = React.createElement(
//   'h1',
//   { className: 'react-welcome' },
//   'Привет! Реакт работает!',
// );
// const element = <h1 className='react-welcome' >'Привет! Реакт JSX работает!'</h1>;

// const messages = ['Привет, друг!', 'Как дела?', 'Как настроение?', 'Как погода?'];
// const Message = (props) => <p>{props.message}</p>;
// const Messages = (props) => props.messages.map((msg, idx) => <Message message={msg} key={idx} />);

class App extends Component {
  constructor(props) {
    super(props);
  }

  state = {
    counter: 8,
  };


  handleClick = (e) => {
    this.setState(prevState => {
      return { counter: prevState.counter + Number(e.target.dataset.operation) }
    });
  }

  render() {
    return (
      <div>
        <button data-operation='-1' onClick={this.handleClick}>-</button>
        <span>{this.state.counter}</span>
        <button data-operation='1' onClick={this.handleClick}>+</button>
      </div>
    )
  }
}


const root = createRoot(document.getElementById('root'));
// root.render(<Messages messages={messages} />);
root.render(<App />);