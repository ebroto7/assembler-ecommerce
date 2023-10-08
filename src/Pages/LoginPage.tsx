import { useRef, useEffect, useState } from 'react'

import { Link } from 'react-router-dom'
import {IoArrowBackCircleOutline} from "react-icons/io5"
import { scryRenderedComponentsWithType } from 'react-dom/test-utils'

// type Props = {}

export const LoginPage = () => {

const userNameInput = useRef<HTMLInputElement>(null)
const passwordInput = useRef<HTMLInputElement>(null)

const [user, setUser] = useState<string>("")
const [password, setPassword] = useState<string>("")

useEffect(() => {
 if (userNameInput != null) {
  userNameInput.current.focus()
 }
}, [])

const login = (username: string, password: string) => {
  if(validateLogin(username, password) === true ) {
      /// SAVE USER
      /// Navigate link

      console.log(`login page. user: ${user}, pass: ${password}`)
  }
}
const validateLogin = (username: string, password: string) => {

  if (username.length > 4 && password.length > 8) return true

  return false
}

  return (
      <main className='signUpPage_container'>
        <header className="pages_Header">
                <Link to="/"key ="">
                    <button><IoArrowBackCircleOutline />Home</button>
                </Link>  
        </header>
        <h1>Login</h1>
        <form className="form" onSubmit={ev => {
          ev.preventDefault()
      
          login(user, password)

        }}>
            <h3>User name</h3>
            <input type="text" 
                    name="userName" 
                    placeholder='User Name' 
                    ref={userNameInput} 
                    value={user}
                    onChange={ev => setUser(ev.target.value)}
                    />
            <h3>Password</h3>
            <input type="text" 
                    name="password" 
                    placeholder='Password' 
                    ref={passwordInput}
                    value={password}
                    onChange={ev => setPassword(ev.target.value)}
            />
            <button className='formBtn' type="submit">Login</button>
        </form>
      </main>
    )
}
