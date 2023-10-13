import { FC, useState } from 'react';
import { useContext } from 'react';
import logo_star_transparent from '../Assets/Images/Logo/logo-star-transparent.png'
import { NavLink, Link } from 'react-router-dom'

import { ABOUTUS, HOME, LOGIN, SEARCH } from '../Routes/paths';
import { AuthContext } from '../context/authContext/authContext'

import Dropdown from 'react-bootstrap/Dropdown';

import { FaSearch } from "react-icons/fa"
import { IoMdMenu } from "react-icons/io"
import { IoLibraryOutline } from "react-icons/io5"
import { BsInfoCircle } from "react-icons/bs"
import { BsCartCheck } from "react-icons/bs"
import { BiLogIn } from "react-icons/bi"
import { BiLogOut } from "react-icons/bi"


const Navbar: FC = () => {
    const { authState, logout } = useContext(AuthContext)
    const { isLogged, user } = authState
    console.log("navbar", authState)
    console.log("navbar name", authState.user.userName)
    console.log("navbar logged", user.userName)

    const [viewLogin, setViewLogin] = useState<Boolean>(isLogged)

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
                    {/* <NavLink to={SEARCH} key="search">
                        <button><FaSearch /></button>
                    </NavLink> */}
                    {/* <button><IoMdMenu /></button> */}
                    <Dropdown>
                        <Dropdown.Toggle className='navBar_dropdownMenu_button' variant="success" id="dropdown-menu-align-end">
                            <IoMdMenu /> menu
                        </Dropdown.Toggle>

                        <Dropdown.Menu >
                            {!viewLogin && <Dropdown.Item href={LOGIN}> <p className='navBar_dropDownMenu_link'> <BiLogIn />Login </p> </Dropdown.Item>}
                            {viewLogin && <Dropdown.Item onClick={handleLogout}> <p className='navBar_dropDownMenu_link'> <BiLogOut />Logout </p> </Dropdown.Item>}
                            <Dropdown.Divider />

                            <Dropdown.Item href={HOME}><p className='navBar_dropDownMenu_link'> <IoLibraryOutline />Home </p></Dropdown.Item>
                            <Dropdown.Item href={SEARCH}><p> <FaSearch /> Search</p></Dropdown.Item>
                            <Dropdown.Item href={SEARCH}><p> <BsCartCheck /> Cart</p></Dropdown.Item>
                            <Dropdown.Divider />

                            <Dropdown.Item href={ABOUTUS}><p> <BsInfoCircle /> About Us</p></Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>

                </div>
            </div>

            {viewLogin && <div className='navBar_userAuthenticatedBar'><p>Welcome</p>
                <h3>{user.userName}</h3><p>!</p>
            </div>}

        </header>
    )
}

export default Navbar