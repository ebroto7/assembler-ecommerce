import { FC } from 'react';
import { useState } from 'react';
import img_1 from '../Images/525-5253539_3d-number-1-png.png';
import logo_star_transparent from '../Assets/Images/Logo/logo-star-transparent.png'
import SearchBar from './searchBar/SearchBar';

const Navbar:FC  = () => {
    const [isVisibleSerach, setIsVisibleSearch] = useState<Boolean>(false)
    const toggleSearchVisibility = () => {
        setIsVisibleSearch(current => !current)
    }
  return (
    <header className='main_header'>
        <div className='main_header_container'>
            <div>
                <img src={logo_star_transparent} alt=""  className='header-logo'/>
                <h1>STAR BOOK</h1>
            </div>
            <div>
                <button onClick={toggleSearchVisibility}>s</button>
                <button>m</button>
            </div>
      
        </div>
        { isVisibleSerach && <SearchBar />}      
    </header>
  )
}

export default Navbar