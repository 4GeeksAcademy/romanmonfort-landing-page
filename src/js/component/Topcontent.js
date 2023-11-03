import React from 'react'

const Topcontent = (props) => {
  return (
    <div className=' bg-secondary p-3'>
        <h1>{props.title}</h1>
        <p>{props.text}</p>
        <button className='btn btn-primary mb-5'>{props.btn}</button>
        </div>
  )
}

export default Topcontent