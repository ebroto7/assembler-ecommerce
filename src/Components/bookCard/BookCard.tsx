import { FC } from "react"
import { BookType } from "../../Types/book"


const BookCard = (book: BookType) => {  
  return (
    <>  
      <article className="bookCard" key={book.id} > 
        <img src={book.img} alt={`${book.title} image`} />
        <div className="bookCard_body">
          <h2>{book.title}</h2>
          <h4>{book.author}</h4>
        </div >
      </article>
  </>
  )
}

export default BookCard