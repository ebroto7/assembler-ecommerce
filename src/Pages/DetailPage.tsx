import { useParams, Link } from "react-router-dom"
import { useEffect, useState } from "react";

// import booksList from "../Assets/db/db";
// import { booksFromAPI } from "../utils/API";
import BuyBookButton from "../Components/buyBookButton/BuyBookButton";

import { IoArrowBackCircleOutline } from "react-icons/io5"
import { BookType } from "../Types/book";

const DetailPage = () => {
    const { isbn: productISBN } = useParams()

    useEffect(() => {
        const url = 'http://localhost:3000/books'
        const getProducts = async () => {
            const response = await fetch(url);
            const data = await response.json();
            console.log("json data= " + data)
            setBooks(data)
        }
        getProducts();

    }, [])

    const [books, setBooks] = useState([])
    let book: BookType = books.find(({ isbn }) => isbn === productISBN)!
    console.log("useparamsisbn= "+productISBN)
    console.log("fetchbookisbn= "+book.isbn)

    return (
        <>
            {/* <Navbar /> */}

            <header className="cartPage_Header">
                <Link to="/home" key="home">
                    <button><IoArrowBackCircleOutline />Home</button>
                </Link>
                <BuyBookButton {...book} />
            </header>
            <article className="detailPage_imgContainer ">
                <div className="detailPage_roundImgContainer ">
                    <img className="detailPage_bookImg" src={book.img} alt={`${book.title} image`} />
                </div>
            </article>
            <article className="detailPage_mainContainer ">
                <h1>{book.title}</h1>
                <h2>{book.author}</h2>
                <p>{book.description}</p>
                <h1>your book with ISBN: {productISBN}</h1>
            </article>
        </>
    )
}

export default DetailPage