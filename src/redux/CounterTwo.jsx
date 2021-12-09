import React from 'react'
import { useSelector } from 'react-redux'

export default function CounterTwo() {
  
    const count = useSelector((state) => state.counter.value)
    const title = useSelector((state) => state.counter.title)
    

  return (
      <div>
          <h1>{title}</h1>
          <h1>{count}</h1>
    </div>
  )
}