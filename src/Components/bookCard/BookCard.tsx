import { BookType } from "../../Types/book"
import BuyBookButton from "../buyBookButton/BuyBookButton"
import { Link } from "react-router-dom"
import { currencyFormat } from "../../utils/utils"
import "./BookCard.styles.css"
import { useId } from "react"



const BookCard = (book: BookType) => {
  return (
    <Link to={`/product/${book.isbn}`} key={book.isbn}>
      <article className="bookCard" key={book.isbn} >
        <div className="bookCard_info">
          <img src={book.img} alt={`${book.title} image`} />
          <div className="bookCard_body">
            <h2>{book.title}</h2>
            <h4>{book.author}</h4>
            <p> {currencyFormat(book.price)} </p>
          </div >
        </div>

        <BuyBookButton {...book} />
      </article>
    </Link>
  )
}

export default BookCard