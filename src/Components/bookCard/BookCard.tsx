import React, { useContext, useEffect, useState } from "react"
import { BookType } from "../../Types/book"
import BuyButtonsStack from "../buyButtonsStack/BuyButtonsStack"
import { cartBook } from "../../context/BookContext"
import booksList from "../../Assets/db/db"
import BuyBookButton from "../buyBookButton/BuyBookButton"
import { Link } from "react-router-dom"
import { currencyFormat } from "../../utils/utils"
import "./BookCard.styles.css"

const item4: cartBook ={ 
  book: booksList[1] ,
  units: 4
}



const BookCard = (book: BookType) => {  
  const [cartItems, setCartItems] = useState<BookType[]>([book])



  useEffect(() => {

    // localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems])


  return (
    <Link to={`/product/${book.isbn}`} key={book.isbn}>

      <article className="bookCard" key={book.id} > 

            <img src={book.img} alt={`${book.title} image`} />
            <div className="bookCard_body">
              <h2>{book.title}</h2>
              <h4>{book.author}</h4>
              <p> {currencyFormat(book.price)} </p>  
            </div >
           

            <BuyBookButton {...book}/>
           

      </article> 
      </Link>
    
  )
}

export default BookCard