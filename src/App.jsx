import logo from "./logo.svg";
import "./App.css";
import React from "react";
import ReactDOM from "react-dom";
import Clock from "./Clock";
import Toggle from "./Toggle";
import NameForm from "./NameForm";
import FilterableProductTable from "./FilterableProductTable";
import Error from "./Error";
import Fragment from "./Fragment";
import Hooks from "./Hooks";
import Modal from "./Portal";
import Bootstrap from "./Bootstrap";
import Todos from "./Todos";
import 'bootstrap/dist/css/bootstrap.min.css';


import CompA from "./components/CompA";
import { Counter } from "./components/Counter";
import CounterContextProvider from "./contexts/CounterContext";
import NameContextProvider from "./contexts/NameContext";


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


function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

class WelcomeOne extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}


function App() {
        //   setInterval(tick, 1000);
    const numbers = [1, 2, 3, 4, 5];
    const listItems = numbers.map((number) =>
    <li>{number}</li>
    );

    const PRODUCTS = [
  {category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football'},
  {category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball'},
  {category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball'},
  {category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch'},
  {category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5'},
  {category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7'}
];

  return (
      <div className="App">

          <Todos />

       {/* <Bootstrap />
          
             <h1>Portal API</h1>
          <Modal />
          

            <h1>Context API</h1>
           <Hooks />
          
          <h1>Context API</h1>
            <CounterContextProvider>
                <Counter />
                <NameContextProvider>
                    <CompA />
                </NameContextProvider>
            </CounterContextProvider> */}
       
          

          {/* <Error /> */}
          {/* <Fragment /> */}

          {/* <FilterableProductTable products={PRODUCTS} /> */}

          {/* <NameForm />
        

          <ul>
              {listItems}
          </ul>

          Example 2
      
          <ul>
               {numbers.map((number) =>
                  <li>{number}</li>
                )}
        </ul> */}

          {/* <Welcome name="Sara" />
          <Welcome name="Cahal" />
          <Welcome name="Edite" />
          <WelcomeOne name="Edite One" /> */}
          {/* <Clock />
          <Toggle /> */}
          
          {/* {element1} */}
          {/* {getGreeting()} */}
          {/* {element} */}
    </div>
  );
}

export default App;
