import React from 'react'
import main from "../images/Main.jpg"
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className='header'>
      <section>
        {/* banner texts */}
        <div>
          <h2>Little Lemon</h2>
          <h3>Chicago</h3>
          <p>We are a family owned Mediterraneran Restaurant, focused on traditional recipes served with a modern twist</p>
          <Link to="/booking"><button aria-label='On Click'>Reserve Table</button></Link>
        </div>
        {/* image banner */}
        <div className='banner-img'>
          <img src={main} alt="img Banner" />
        </div>
 
      </section>

    </header>
  )
}

export default Header