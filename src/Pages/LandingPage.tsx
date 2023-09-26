import React from 'react'
import logo_star_transparent from '../Assets/Images/Logo/logo-star-transparent.png'

type Props = {}

const LandingPage = (props: Props) => {
  return (
    <>
        <div>
            <img src={logo_star_transparent} alt=""  className='header-logo'/>
            <h1>STAR BOOK</h1>
        </div>
        <button>Les's start</button>
    </>
  )
}

export default LandingPage