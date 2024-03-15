import React from 'react'

function Header(props) {
  
    console.log(props.helloprops.email)
    console.log(props.helloprops.nam)
  return (
    <div>
      <p className='text-success'>This is paragraph </p>
      <p>This is child </p>
    </div>
  )
}

export default Header
