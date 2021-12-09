import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from './counterSlice'

export default function Counter() {
  
    const count = useSelector((state) => state.counter.value)
    const title = useSelector((state) => state.counter.title)
    
  const dispatch = useDispatch()

  return (
      <div>
          <h1>{title}</h1>
          <h1>{count}</h1>
          
        <button onClick={() => dispatch(increment())}>
          Increment
        </button>
              
        <span>{count}</span>
        
        <button onClick={() => dispatch(decrement())}>
          Decrement
        </button>
    </div>
  )
}