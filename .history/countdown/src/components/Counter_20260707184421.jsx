import React from 'react'

const Counter = ({title, number}) => {
  return (
    <div className='counter'>
        <p className='counter-number'>{number}</p>
        <h3 className=''></h3>
    </div>
  )
}

export default Counter