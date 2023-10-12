import { FC, useState } from 'react';
import { useContext } from 'react';
import logo_star_transparent from '../Assets/Images/Logo/logo-star-transparent.png'
import { NavLink } from 'react-router-dom'
import { FaSearch } from "react-icons/fa"
import { IoMdMenu } from "react-icons/io"
import { SEARCH } from '../Routes/paths';
import { AuthContext, LogedType } from '../context/authContext/authContext'


const Navbar: FC = () => {
    const {authState, logout} = useContext(AuthContext)
    const {isLogged, user} = authState
    console.log("navbar",authState)
    console.log("navbar name",authState.user.userName)
    console.log("navbar logged",user.userName)

    const [viewLogin, setViewLogin]= useState<Boolean>(isLogged)

    const handleLogout = () => {
        logout()
        setViewLogin(false)
    }


    return (
        <header className='main_header'>
            <div className='main_header_container'>
                <div>
                    <img src={logo_star_transparent} alt="" className='header-logo' />
                    <h1>STAR BOOK</h1>
                </div>
                <div>
                    <NavLink to={SEARCH} key="search">
                        <button><FaSearch /></button>
                    </NavLink>
                    <button><IoMdMenu /></button>
                </div>

            </div>
            {viewLogin && <div className='navBar_userAuthenticatedBar'>{`welcome ${user.userName}!`}</div>}
            {viewLogin && <button onClick={handleLogout}>logout</button>}

        </header>
    )
}

export default Navbar