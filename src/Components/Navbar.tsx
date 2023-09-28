import { FC } from 'react';
import { useState } from 'react';
import logo_star_transparent from '../Assets/Images/Logo/logo-star-transparent.png'
import SearchBar from './searchBar/SearchBar';
import { FaSearch }  from "react-icons/fa"
import { IoMdMenu } from "react-icons/io"

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
                <button onClick={toggleSearchVisibility}><FaSearch /></button>
                <button><IoMdMenu /></button>
            </div>
      
        </div>
        { isVisibleSerach && <SearchBar />}      
    </header>
  )
}

export default Navbar