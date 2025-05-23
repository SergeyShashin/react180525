import './MessageField.scss';

import React, { Component } from "react";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

export class MessageField extends Component {
  constructor(props) {
    super(props);
  }

  state = {
    author: '',
    text: '',
  };

  handleInputChange = (e) => {
    let fieldName = e.target.name;
    this.setState({
      [fieldName]: e.target.value,
    });
  };

  handleSend = () => {
    this.props.onSend(this.state);
    this.setState({ text: '' });
  };

  handleCtrlEnter = (e) => {
    if (e.ctrlKey && e.keyCode == 13) {
      this.handleSend();
    }
  }

  render() {
    return (
      <div className='messageField'>
        {/* <input name='author' placeholder='author' onChange={this.handleInputChange} /> */}
        {/* <input name='text' placeholder='text' onChange={this.handleInputChange} onKeyDown={this.handleCtrlEnter} /> */}
        <TextField name='author' variant="standard" label='author' onChange={this.handleInputChange} />
        <TextField name='text' variant="standard" label='text' onChange={this.handleInputChange} onKeyDown={this.handleCtrlEnter} />
        {/* <button onClick={this.handleSend}>Отправить</button> */}
        <Button onClick={this.handleSend}>Отправить</Button>
      </div>
    )
  }
}
