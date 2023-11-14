import { FC } from 'react';
import { useContext } from 'react';
import logo_star_transparent from '../Assets/Images/Logo/logo-star-transparent.png'

import { AuthContext } from '../context/authContext/authContext'

import ButtonMenu from './buttonMenu/ButtonMenu';

const Navbar: FC = () => {
    const { authState } = useContext(AuthContext)
    const { isLogged, user } = authState

    return (
        <header className='main_header'>
            <div className='main_header_container'>
                <div>
                    <img src={logo_star_transparent} alt="" className='header-logo' />
                    <h1>STAR BOOK</h1>
                </div>
                <ButtonMenu />
            </div>

            {isLogged && <div className='navBar_userAuthenticatedBar'><p>Welcome</p>
                <h3>{user.userName}</h3><p>!</p>
            </div>}

        </header>
    )
}

export default Navbar