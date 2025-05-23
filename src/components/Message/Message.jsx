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
    let { author, text } = this.props.message;
    let classes = classNames('message', {
      'message-owner': author !== 'Автоответчик',
      'message-autoanswering': author === 'Автоответчик'
    });
    return (
      // <div className='message' style={{ alignSelf: `flex-${this.direction}` }}>
      <div className={classes}>
        <div>{text}</div>
        <div className='message-sender'>{author}</div>
      </div>
    )
  }
}