import { Link } from 'react-router-dom'


import {IoArrowBackCircleOutline} from "react-icons/io5"

// type Props = {}

export const LoginPage = () => {
  return (
      <main className='signUpPage_container'>
        <header className="pages_Header">
                <Link to="/"key ="">
                    <button><IoArrowBackCircleOutline />Home</button>
                </Link>  
        </header>
        <h1>Login</h1>
        <form className="form" action="submit">
            <h3>User name</h3>
            <input type="text" name="User Name" id="userName" placeholder='User Name' />
            <h3>Password</h3>
            <input type="text" name="Password" id="Password" placeholder='Password' />
            <h3>Repeat password</h3>
            <button className='formBtn' type="submit">Login</button>
        </form>
      </main>
    )
}