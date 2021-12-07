import React, { useState, useEffect, useRef, useMemo, useCallback, useReducer   } from 'react';
import CustomHook from './CustomHook';
import './mysass.scss';

export default function Hooks() {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);
  const [title, setTitle] = useState('');

     // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    // Update the document title using the browser API
    document.title = `You clicked ${count} times`;
  }, [count]);
    
  useEffect(() => {
      
        console.log('change title');
    // Update the document title using the browser API
      document.title = `You clicked ${title} times`;
      
      return function cleanup() {
          console.log('cleanup method');
    };
  },[title]);
    
  return (
    <div className="hooks">
      
          <p>You clicked {count} times</p>
          <p>You clicked {title} {count}  times</p>
          
      <button onClick={() => setCount(count + 1)}>
        Click count
       </button>
      <button onClick={() => setTitle("hello world")}>
        Click title
          </button>
          <br />
          <br />
          <br />
          <TextInputWithFocusButton />
          <br />
          <br />
          <br />
          <Usecemocomponent />
          
          <br />
          <br />
          <br />
          <Usecallbackcomponent />*
          
          <br />
          <br />
          <br />
          <Todos />
          
          
          <br />
          <br />
          <br />
          <CustomHook />
          
          
    </div>
  );
}


function TextInputWithFocusButton() {
  const inputEl = useRef('hello');
  const onButtonClick = () => {
    inputEl.current.focus();
  };
  return (
    <>
      <input ref={inputEl} type="text" value={inputEl.current} />
      <button onClick={onButtonClick}>Focus the input</button>
    </>
  );
}



const expensiveFunction = (inputValue) => {
  let expensiveValue = inputValue * 42;
    expensiveValue = 'World';
    console.log('with memo');
  return expensiveValue;
};

export const Usecemocomponent = ({ something }) => {
  const [inputValue, setInputValue] = useState(2);
    
    // with memo
    const expensiveValue = useMemo(
        () => expensiveFunction(inputValue % 2), 
        [ inputValue ]
    );

    // without memo
   // const expensiveValue = expensiveFunction(inputValue);
    return <>
    <button onClick={() => setInputValue(inputValue + 1)}>increment le nmbre </button>
    <h1>Hello {expensiveValue}</h1>
    </>;
};



function Usecallbackcomponent() {
    const [test, setTest] = useState(2);
    // handleClick is the same function object
    console.log('use callback');

    // use callback
    const handleClick = useCallback(() => {
                console.log('Clicked! .'+ test);
    }, [test]);
    
     return <>
    <button onClick={() => handleClick()}>Click Me </button>
    <button onClick={() => setTest(() => test + 2)}>Click Me 2 </button>
    </>;
}




const initialTodos = [
  {
    id: 1,
    title: "Todo 1",
    complete: false,
  },
  {
    id: 2,
    title: "Todo 2",
    complete: false,
  },
];

const reducer = (state, action) => {
  switch (action.type) {
    case "COMPLETE":
      return state.map((todo) => {
        if (todo.id === action.id) {
          return { ...todo, complete: !todo.complete };
        } else {
          return todo;
        }
      });
    default:
      return state;
  }
};

function Todos() {
  const [todos, dispatch] = useReducer(reducer, initialTodos);

  const handleComplete = (todo) => {
    dispatch({ type: "COMPLETE", id: todo.id });
  };

  return (
    <>
      {todos.map((todo) => (
        <div key={todo.id}>
          <label>
            <input
              type="checkbox"
              checked={todo.complete}
              onChange={() => handleComplete(todo)}
            />
            {todo.title}
          </label>
        </div>
      ))}
    </>
  );
}