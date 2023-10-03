import { useParams, Link } from "react-router-dom"
import { useState, useContext } from "react";
import { BookType } from "../Types/book";
import {IoArrowBackCircleOutline} from "react-icons/io5"
import Navbar from "../Components/Navbar";

import { CartContext } from '../context/BookContext'
import booksList from "../Assets/db/db";
import BuyBookButton from "../Components/buyBookButton/BuyBookButton";

const DetailPage = () => {
    const {isbn: productISBN} = useParams()
    const book = booksList.find(({isbn}) => isbn === productISBN)

    console.log("detail page cart item units = "+book?.stock)
    const [isBuy, setIsBuy] = useState(false)

  

  return (
    <>
        {/* <Navbar /> */}

        <header className="pages_Header cartPage_Header">
            <Link to="/home"key ="home">
                <button><IoArrowBackCircleOutline /> Home</button>
            </Link>  
            <BuyBookButton {...book}/>
        </header>
        <article className="detailPage_imgContainer ">
            <div className="detailPage_roundImgContainer ">
                    <img className="detailPage_bookImg" src={book?.img} alt={`${book?.title} image`} />
            </div>
        </article> 
        <article className="detailPage_mainContainer ">
            <h1>{book?.title}</h1>
            <h2>{book?.author}</h2>
            <p>{book?.description}</p>
            <h1>your book with ISBN: {productISBN}</h1>
        </article>
    </>
  )
}

export default DetailPage