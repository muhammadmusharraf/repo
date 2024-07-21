import React from 'react'
import { useState } from 'react'

const Counter = () => {
    const [count, setCount] = useState(0)

    const increament=()=>{
        
    setCount(count+1);
    
    }
    const decrement=()=>{
        setCount(count-1)
    }
    const reset=()=>{
        setCount(0)
    }

  return (
    <>
    <div className=' bg-blue-500 h-48 m-12 w-96  ml-96'>

    <div className='pt-4 w-96 flex justify-center'>
       <h1 className='text-white font-bold flex'>Counter App</h1>
    </div>
    <div className='flex justify-center mt-6'>
    <h1>Counter:{count}</h1>
    
 
    </div>
    <div className='flex justify-center space-x-4 pt-12'>
        <button className='bg-black text-white h-6 w-24 rounded-md 'onClick={increament}>
            increament
        </button>
        <button className='bg-black text-white h-6 w-24 rounded-md 'onClick={decrement}>decrement </button>
        <button className='bg-black text-white h-6 w-24 rounded-md ' onClick={reset}>reset</button>
      </div>

      </div>

    </>
  )
}

export default Counter
