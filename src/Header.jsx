import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='links'>
      <Link to={'/moviepage'}>Movie Page</Link>
      <Link to={'/'}>Main page</Link>
    </div>
  )
}

export default Header
