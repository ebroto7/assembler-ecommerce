import { useState, useEffect } from 'react'
import { FC } from 'react'
import { BookType } from '../../Types/book'
import "./checkoutBookContainer.styles.css"
import { BiCartDownload } from "react-icons/bi"
import { currencyFormat } from '../../utils/utils'
currencyFormat
type Props = {
    book: BookType
    units: number
}

// export const CheckoutBookContainer: FC<Props> = ({{price, img, title, author}, units}) => {
export const CheckoutBookContainer: FC<Props> = ({book, units}) => {
    // units = book.units

    const [quantity, setQuantity] = useState<number>(1)
    const [totalPrice, setTotalPrice] = useState<number>(book.price)
    const add = () => {
        if (quantity < book.stock) setQuantity(current => current + 1)
        console.log("chechoutBookOcntainer book stock= "+book.stock)
    }
    const rest = () => {
        if (quantity > 0) setQuantity(current => current - 1)
    }
    const reset = () => {
        // add to cart (locale storage)
        setQuantity(0)
    }

    useEffect(() => {
        if (quantity === 0) setTotalPrice(current => current = book.price)
        setTotalPrice(current => current = book.price * quantity)
        // units = quantity
    }, [quantity])

  return (
    <section className='CheckoutBookContainer'>
        <img src={book.img} alt={`${book.title} image`} />
        <div className="bookCard_body">
          <h2>{book.title}</h2>
          <h4>{book.author}</h4>
          <div className="bookCard_cart_container">
                <div className="bookCard_cart">
                <div>
                <button onClick={rest}>-</button>
                    <h4 className="bookCard_cart_quantity">{quantity}</h4>
                    <button onClick={add}>+</button>
                </div>
                <button 
                    className="bookCard_cart_buyBtn" 
                    onClick={reset}
                    ><BiCartDownload />
                    </button>
                </div>
                {units < 4 && units > 0 &&  <p className="bookCard_cart_message">{`Only available: ${units}units`}</p>}
                {units === 0 &&  <p className="bookCard_cart_message errorMessage">{"This book isn't available"}</p>}
            </div>
        </div >
        <h3>{currencyFormat(totalPrice)}</h3>
    </section>
  )
}

export default CheckoutBookContainer