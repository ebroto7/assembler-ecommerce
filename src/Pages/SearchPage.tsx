import React from 'react'
import { Link } from 'react-router-dom'
import { apiContext } from "../context/APIContext";

import { IoArrowBackCircleOutline } from "react-icons/io5"


type Props = {}

function SearchPage({ }: Props) {
    return (
        <>

            <header className="cartPage_Header">
                <Link to="/home" key="home">
                    <button><IoArrowBackCircleOutline />Home</button>
                </Link>
            </header>
            <div className='SearchBar_container'>
                <input type="search" name="SearchBar" id="SearchBar" placeholder='search' />
                <p>lupa</p>
            </div>
        </>
    )
}

export default SearchPage