import './Message.scss';
import React, { Component } from "react";

export class Message extends Component {
  constructor(props) {
    super(props);
  }

  get direction() {
    return this.props.message.author === 'Автоответчик' ? 'start' : 'end';
  }

  render() {
    let { message } = this.props;
    return (
      <div className='message' style={{ alignSelf: `flex-${this.direction}` }}>
        <div>{message.text}</div>
        <div>{message.author}</div>
      </div>
    )
  }
}