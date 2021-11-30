import logo from "./logo.svg";
import "./App.css";
import React from "react";
import ReactDOM from "react-dom";



function formatName(user) {
  return user.firstName + ' ' + user.lastName;
}

const user = {
  firstName: 'Harper',
  lastName: 'Perez'
};

const element = (
  <h1>
    Hello, {formatName(user)}!
  </h1>
);

const element1 = React.createElement(
  'h1',
  {className: 'greeting'},
  'Hello, world!'
);

function getGreeting(user) {
  if (user) {
    return <h1>Hello, {formatName(user)}!</h1>;
  }
  return <h1>Hello, Stranger.</h1>;
}


function tick() {
  const element = (
    <div>
      <h1>Hello, world!</h1>
      <h2>It is {new Date().toLocaleTimeString()}.</h2>
    </div>
  );
  ReactDOM.render(element, document.getElementById('test'));
}


function App() {

          setInterval(tick, 1000);
  return (
      <div className="App">
          {element1}
          {getGreeting()}
      {element}
    </div>
  );
}

export default App;
