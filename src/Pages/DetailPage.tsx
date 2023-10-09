import { useParams, Link } from "react-router-dom"
import { apiContext } from "../context/APIContext";
// import booksList from "../Assets/db/db";
// import { booksFromAPI } from "../utils/API";
import BuyBookButton from "../Components/buyBookButton/BuyBookButton";

import { IoArrowBackCircleOutline } from "react-icons/io5"

const DetailPage = () => {
    const { isbn: productISBN } = useParams<{isbn: string}>()
    const {apiBooks} = apiContext()
// console.log("detail page cart books"+)
    const book = productISBN 
    ? apiBooks.find(({ isbn }) => isbn === productISBN)
    : undefined

    if (!book) return null

    const { title, author, description, img } = book

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
                    <img className="detailPage_bookImg" src={img} alt={`${title} image`} />
                </div>
            </article>
            <article className="detailPage_mainContainer ">
                <h1>{title}</h1>
                <h2>{author}</h2>
                <p>{description}</p>
                <h1>your book with ISBN: {productISBN}</h1>
            </article>
        </>
    )
}

export default DetailPage