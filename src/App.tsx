import { useState } from 'react'
import { Counter } from './bases/Counter'
import { CounterBy } from './bases/CounterBy'
import { CounterEffect } from './bases/CounterEffect'
import { CounterHook } from './bases/CounterHook'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Counter initialValue={ 15 }/>
      <CounterBy />
      <CounterEffect/>
      <CounterHook />
    </>
  )
}

export default App
