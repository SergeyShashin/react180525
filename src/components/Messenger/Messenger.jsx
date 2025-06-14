import './Messenger.scss';
import React, { Component } from "react";
import { MessagesList } from "components/MessagesList";
import { MessageField } from "components/MessageField";
import { Header } from 'components/Header';
import { ChatList } from 'components/ChatList';

// const messages = [
//   { author: 'Author', text: 'Привет, друг!' },
//   { author: 'Author', text: 'Как дела?' },
//   { author: 'Author', text: 'Как погода?' },
//   { author: 'Author', text: 'Как настроение?' }
// ];

export class Messenger extends Component {
  constructor(props) {
    super(props);
  }

  state = {
    messages: [{ author: 'Author', text: 'Добро пожаловать!' }]
  };

  numberInterval = null;

  componentDidMount() {
    // this.numberInterval = setInterval(() => {
    //   let randomIdx = Math.floor(Math.random() * messages.length);
    //   this.setState({ messages: this.state.messages.concat(messages[randomIdx]) });
    // }, 3000);
  }

  addNewMessage = (message) => {
    this.setState({ messages: this.state.messages.concat(message) });
  }

  componentDidUpdate() {
    let lastMessage = this.state.messages[this.state.messages.length - 1];
    if (lastMessage.author !== 'Автоответчик') {
      setTimeout(() => {
        this.setState({ messages: this.state.messages.concat({ author: 'Автоответчик', text: `${lastMessage.author}, cпасибо за Ваше сообщение)` }) });
      }, 1000);
    }
  }

  componentWillUnmount() {
    clearInterval(this.numberInterval);
  }

  render() {
    let { messages } = this.state;
    console.log(this.props);
    return (
      <div className='messenger'>
        {/* {messages.map((message, idx) => <p key={idx}>{message.author}: {message.text}</p>)} */}
        <Header />
        <div className='main'>
          <ChatList />
          <div>
            <MessagesList messages={messages} />
            <MessageField onSend={this.addNewMessage} />
          </div>
        </div>
      </div>
    )
  }
}