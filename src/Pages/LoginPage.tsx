import React, { useRef, useEffect, useState, useContext } from 'react'

import { Link, useNavigate } from 'react-router-dom'
import toast, { Toaster } from 'react-hot-toast';

import { IoArrowBackCircleOutline } from "react-icons/io5"
import { AuthContext, LogedType } from '../context/authContext/authContext'

export const LoginPage = () => {

  const { loginContext } = useContext(AuthContext)
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

    const userLoged: LogedType = {
      user: { userName: user, password: password },
      isLogged: true
    }
    notify
    loginContext(userLoged)
    navigate(-1)
  
  }


  const notify = () => toast('You have successfully logged in.');

const goBack = () => {
  // navigate(-1)
  navigate(-1)
}

  return (
    <main className='signUpPage_container'>
      <header className="pages_Header">
          <button onClick={goBack} ><IoArrowBackCircleOutline />Back</button>
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
        <Toaster position="top-right" reverseOrder={false} />
      </form>
    </main>
  )
}
