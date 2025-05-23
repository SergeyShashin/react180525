import './MessagesList.scss';

import React, { Component } from "react";
import { Message } from "components/Message";


export class MessagesList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let { messages } = this.props;
    return (
      <div className='messagesList'>
        {messages.map((message, idx) => <Message key={idx} message={message} />)}
      </div>
    )
  }
}