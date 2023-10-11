import React, { useRef, useEffect, useState, useContext } from 'react'

import { Link, useNavigate } from 'react-router-dom'
import { IoArrowBackCircleOutline } from "react-icons/io5"
import { AuthContext, userLogedType } from '../context/authContext/authContext'

export const LoginPage = () => {

  const {loginContext} = useContext(AuthContext)
  const navigate = useNavigate()


  const userNameInput = useRef<HTMLInputElement>(null)
  const passwordInput = useRef<HTMLInputElement>(null)

  const [user, setUser] = useState<string>("")
  const [password, setPassword] = useState<string>("")

  useEffect(() => {
    // if(userNameInput !== null) {
    userNameInput.current?.focus()
    // } 
  }, [])

 
  const validateUserName = (username: string) => {
    if (username.length < 4) return "invalid user name. The username must contain a minimum of 4 characters"
  }
  const userErrorMessage = validateUserName(user)

  const validatePassword = (password: string) => {
    var regularExpression = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,10}$/;

    if (!regularExpression.test(password)) return "invalid password. Password should contain atleast one number and one special character and 6 to 10 characters"
  }
  const passwordErrorMessage = validatePassword(password)

  const handleSubmit = (ev: React.FormEvent) => {
    ev.preventDefault()
    const newUser: userLogedType = { user: user, password :password}

    loginContext(newUser)
    navigate("/")
  }

  return (
    <main className='signUpPage_container'>
      <header className="pages_Header">
        <Link to="/" key="">
          <button><IoArrowBackCircleOutline />Back</button>
        </Link>
      </header>
      <h1>Login</h1>
      <form className="form" onSubmit={handleSubmit}>

        <section>
          <h3>User name</h3>
          <input type="text"
            name="userName"
            placeholder='User Name'
            ref={userNameInput}
            value={user}
            onChange={ev => setUser(ev.target.value)}
          />
          <p className='formErrorMessage'>{userErrorMessage}</p>
          <h3>Password</h3>
        </section>

        <section>
          <input type="text"
            name="password"
            placeholder='Password'
            ref={passwordInput}
            value={password}
            onChange={ev => setPassword(ev.target.value)}
          />
          <p className='formErrorMessage'>{passwordErrorMessage}</p>
        </section>
        
        <button className='formBtn' type="submit">Login</button>
      </form>
    </main>
  )
}
