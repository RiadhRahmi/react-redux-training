import React from "react";

export default class Clock extends React.Component {
  constructor(props) {
    super(props);
      this.state = {
          date: new Date(),
          count: 0
      };
  }

 componentDidMount() {
     console.log('componentDidMount method');
     this.setState({count: 10});
  }

    componentWillUnmount() {
        console.log('componentWillUnmount method');
        this.setState({count: 20});
  }

  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
            <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
            <h3>{ this.state.count}</h3>
      </div>
    );
  }
}