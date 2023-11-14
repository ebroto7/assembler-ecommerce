import {useState, useContext} from 'react'
import { AuthContext } from '../../context/authContext/authContext'

import { ABOUTUS, HOME, LOGIN, SEARCH } from '../../Routes/paths';

import Dropdown from 'react-bootstrap/Dropdown';

import { FaSearch } from "react-icons/fa"
import { IoMdMenu } from "react-icons/io"
import { IoLibraryOutline } from "react-icons/io5"
import { BsInfoCircle } from "react-icons/bs"
import { BsCartCheck } from "react-icons/bs"
import { BiLogIn } from "react-icons/bi"
import { BiLogOut } from "react-icons/bi"


function ButtonMenu() {
    const { authState, logout } = useContext(AuthContext)
    const { isLogged } = authState
 
    const [viewLogin, setViewLogin] = useState<Boolean>(isLogged)

    const handleLogout = () => {
        logout()
        setViewLogin(false)
    }

  return (
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
  )
}

export default ButtonMenu