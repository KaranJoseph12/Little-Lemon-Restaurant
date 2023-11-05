import React from 'react'
import logo from "../images/Logo .svg"

const Footer = () => {
  return (
    <footer>
        <section>
            <div className='company-info'>
                <img src={logo} alt="" />
                <p>We are a family owned <br />Mediterraneran Restaurant,<br /> focused on traditional <br /> recipes served with a modern <br /> twist</p>
            </div>
            <div>
              <h3>Contact</h3>
              <ul>
                  <li>Address: <br />354 New York City, USA</li>
                  <li>Phone: <br />++ 123 456 789</li>
                  <li>Email: <br/> littlelemon@mail.com</li>
              </ul>
            </div>
            <div>
              <h3>Social Media</h3>
              <ul>
                  <li><a href="/">Facebook</a></li>
                  <li><a href="/">Instagram</a></li>
                  <li><a href="/">Twitter</a></li>
              </ul>
            </div>
        </section>
    </footer>
  )
}

export default Footer