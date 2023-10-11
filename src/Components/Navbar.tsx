import { FC } from 'react';
import { useState, useContext } from 'react';
import logo_star_transparent from '../Assets/Images/Logo/logo-star-transparent.png'
import SearchBar from './searchBar/SearchBar';
import { NavLink } from 'react-router-dom'
import { FaSearch } from "react-icons/fa"
import { IoMdMenu } from "react-icons/io"
import { SEARCH } from '../Routes/paths';
import { useAuthContext } from '../context/authContext';


const Navbar: FC = () => {
    const isAuthenticated = useAuthContext()
    const [isLoged, setIsLoged] = useState<Boolean>(isAuthenticated)

    console.log("navbar",isAuthenticated)
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
            {isLoged && <div className='navBar_userAuthenticatedBar'>Hello</div>}

        </header>
    )
}

export default Navbar