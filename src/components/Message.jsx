import React, { Component } from "react";


export class Message extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let { message } = this.props;
    return (
      <div>
        {message.author}: {message.text}
      </div>
    )
  }
}