import { useState } from "react"
import { BookType } from "../../Types/book"
import BuyButtonsStack from "../buyButtonsStack/BuyButtonsStack"

const BookCard = (book: BookType) => {  

  return (
      <article className="bookCard" key={book.id} > 
        <img src={book.img} alt={`${book.title} image`} />
        <div className="bookCard_body">
          <h2>{book.title}</h2>
          <h4>{book.author}</h4>
        </div >
       <BuyButtonsStack 
            units ={book.units}
        />
      </article>
  )
}

export default BookCard