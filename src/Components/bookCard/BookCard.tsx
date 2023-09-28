import { useState } from "react"
import { BookType } from "../../Types/book"
import BuyButtonsStack from "../buyButtonsStack/BuyButtonsStack"
import "./BookCard.styles.css"

const BookCard = (book: BookType) => {  
  const [isBuy, setIsBuy] = useState(false)

  const handleCart = () => {
    setIsBuy(current => !current)
    if (!isBuy) console.log(book.title+' is in cart')
    if (isBuy) console.log(book.title+' is not in cart')

  }

  return (
      <article className="bookCard" key={book.id} > 
        <img src={book.img} alt={`${book.title} image`} />
        <div className="bookCard_body">
          <h2>{book.title}</h2>
          <h4>{book.author}</h4>
        </div >
        {(!isBuy) && <button onClick={handleCart} className="bookCard_buyButton">Add to cart</button>}
        {(isBuy) && <button onClick={handleCart} className="bookCard_buyButton">Remove from cart</button>}

       {/* <BuyButtonsStack 
            units ={book.units}
        /> */}
      </article>
  )
}

export default BookCard