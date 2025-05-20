import React, { Component } from "react";
import { Message } from "components/Message";


export class MessagesList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let { messages } = this.props;
    return (
      messages.map((message, idx) => <Message key={idx} message={message} />)
    )
  }
}