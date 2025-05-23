import './Message.scss';
import React, { Component } from "react";
import classNames from 'classnames';

export class Message extends Component {
  constructor(props) {
    super(props);
  }

  get direction() {
    return this.props.message.author === 'Автоответчик' ? 'start' : 'end';
  }

  render() {
    let { message } = this.props;
    let classes = classNames('message', {
      'message-owner': message.author !== 'Автоответчик',
      'message-autoanswering': message.author === 'Автоответчик'
    });
    return (
      // <div className='message' style={{ alignSelf: `flex-${this.direction}` }}>
      <div className={classes}>
        <div>{message.text}</div>
        <div>{message.author}</div>
      </div>
    )
  }
}