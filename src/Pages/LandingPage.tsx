import React from 'react'
import logo_star_transparent from '../Assets/Images/Logo/logo-star-transparent.png'
import { Link } from "react-router-dom";

//  type Props = {}


const LandingPage = () => {
  return (
    <main className='landigPage_container'>
        <div>
            <img src={logo_star_transparent} alt="Star Book logo"  />
            <h1>STAR BOOK</h1>
        </div>
        <Link to="/home"key ="home">
						<button>let's start</button>
				</Link>        
        <Link to="/login"key ="login">
						<button>Login</button>
				</Link>   
    </main>
  )
}

export default LandingPage


