import { useParams, Link } from "react-router-dom"
import { apiContext } from "../context/APIContext";

import BuyBookButton from "../Components/buyBookButton/BuyBookButton";
import ErrorView, { error } from '../Components/errorView/ErrorView';
import Navbar from "../Components/Navbar";

import { currencyFormat } from "../utils/utils";

import { BsStarHalf } from "react-icons/bs"



const DetailPage = () => {
    const { isbn: productISBN } = useParams<{ isbn: string }>()
    const { apiBooks } = apiContext()
    const book = productISBN && apiBooks.find(({ isbn }) => isbn === productISBN)



    return (
        <>
            <Navbar />
            {/* 
            <header className="cartPage_Header">
                <Link to={HOME} key="home">
                    <button><IoArrowBackCircleOutline /> Home</button>
                </Link>
                {book && <BuyBookButton {...book} />}
            </header> */}
            {book ?
                <section className="detailPage_mainContainer">
                    <article className="detailPage_imgContainer ">

                        <div className="detailPage_roundImgContainer ">
                            <img className="detailPage_bookImg" src={book.img} alt={`${book.title} image`} />
                        </div>

                    </article>

                    <article className="detailPage_infoContainer ">
                        <div className="detailPage_priceContainer">
                            <h3>{currencyFormat(book.price)}</h3>
                            <h3>{book.rating} <BsStarHalf /></h3>
                        </div>
                        {book && <BuyBookButton {...book} />}
                        <h1>{book.title}</h1>
                        <h2>{book.author}</h2>
                        <p>{book.description}</p>
                    </article>
                </section>
                :
                <ErrorView error={error.unknownBook} />
            }
        </>
    )
}

export default DetailPage