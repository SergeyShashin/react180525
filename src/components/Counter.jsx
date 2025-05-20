import React, { Component } from "react";

export class Counter extends Component {
  constructor(props) {
    super(props)
  }

  state = {
    counter: 8,
  };

  numberInterval = null;

  handleClick = (e) => {
    this.setState(prevState => {
      return { counter: prevState.counter + Number(e.target.dataset.operation) }
    });
  };

  componentDidMount() {
    this.numberInterval = setInterval(() => {
      console.log('Компонент показывается.')
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.numberInterval)
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