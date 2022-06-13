import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className='header'>
      <div>
        <Link className='links' to='/'>
          Home
        </Link>
        <Link className='links' to='/members'>
            Members
          </Link>
          <Link className='links' to='/partners'>
            Partners
          </Link>
          <Link className='links' to='/shop'>
            Shop
          </Link>
      </div>

      <nav className='navbar'>
        <ul>
          <Link className='links' to='/login'>
            Login
          </Link>
          <Link className='links' to='/signup'>
            Sign Up
          </Link>
        </ul>
      </nav>
    </header>
  )
}

export default Header
