import React from 'react'
import logo_star_transparent from '../Assets/Images/Logo/logo-star-transparent.png'
type Props = {}
import { Link } from "react-router-dom";

const LandingPage = (props: Props) => {
  return (
    <>
        <div>
            <img src={logo_star_transparent} alt=""  className='header-logo'/>
            <h1>STAR BOOK</h1>
        </div>
        <Link to="/home"key ="home">
						<button>let's start</button>
				</Link>        
        <Link to="/login"key ="login">
						<button>Login</button>
				</Link>   
    </>
  )
}

export default LandingPage


