import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, incrementAsync } from './store/reducers/CounterSlice';

const App = () => {

  const { value } = useSelector(state => state.counter);
  const dispatch = useDispatch(); 
  return (
    <div className='m-auto container mt-5 bg-red-500 p-10'>
      <h1 className='mb-5 text-center font-bold text-3xl text-red-900'>
        Counter : {value}
      </h1>

      <div className='text-center'>
        <button className='text-red-900 border-red-900 border-2 rounded bg-transparent px-5 py-2'
        onClick={()=>dispatch(increment())}>
            Increment
        </button>
        
        <button className='text-red-900 border-red-900 border-2 rounded bg-transparent px-5 py-2'
        onClick={()=>dispatch(decrement())}>
            Decrement
        </button>

        <button className='text-red-900 border-red-900 border-2 rounded bg-transparent px-5 py-2'
        onClick={()=>dispatch(incrementAsync(5))}>
            Increment By 5
        </button>
      </div>
    </div>
  )
}

export default App