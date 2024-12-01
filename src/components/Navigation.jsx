import React from 'react'

function Navigation() {
  return (
    <nav className='container'>
    <div className="logo">
      <img src="/image/brand_logo.png" alt="brand logo" />
    </div>

    <ul>
      <li href="#">MENU</li>
      <li href="#">LOCATION</li>
      <li href="#">ABOUT</li>
      <li href="#">CONTACT</li>
    </ul>

    <button>Log in</button>
  </nav>
  )
}

export default Navigation