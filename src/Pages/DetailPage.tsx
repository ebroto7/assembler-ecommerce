import { useParams, Link } from "react-router-dom"
import { apiContext } from "../context/APIContext";
// import booksList from "../Assets/db/db";
// import { booksFromAPI } from "../utils/API";
import BuyBookButton from "../Components/buyBookButton/BuyBookButton";

import { IoArrowBackCircleOutline } from "react-icons/io5"
import { HOME } from "../Routes/paths";
import ErrorView, { error } from '../Components/errorView/ErrorView';

const DetailPage = () => {
    const { isbn: productISBN } = useParams<{ isbn: string }>()
    const { apiBooks } = apiContext()
    const book = productISBN && apiBooks.find(({ isbn }) => isbn === productISBN)

    

    return (
        <>
            {/* <Navbar /> */}

            <header className="cartPage_Header">
                <Link to={HOME} key="home">
                    <button><IoArrowBackCircleOutline /> Home</button>
                </Link>
                {book && <BuyBookButton {...book} />}
            </header>
            {book ?
                <section>
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
                </section>
                :
                <ErrorView error={error.unknownBook} />
            }
        </>
    )
}

export default DetailPage