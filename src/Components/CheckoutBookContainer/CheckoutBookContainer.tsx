import { useState, useEffect, useContext } from 'react'
import { FC } from 'react'
import { CartBookType, CartContext } from '../../context/BookContext'

import { BookType } from '../../Types/book'
import "./checkoutBookContainer.styles.css"
import { BiCartDownload } from "react-icons/bi"
import { currencyFormat } from '../../utils/utils'
type Props = {
    book: CartBookType
}

export const CheckoutBookContainer: FC<Props> = ({ book }) => {

    const { cartItems, handleAddBook, removeFromCart, restBookUnits } = useContext(CartContext)


    const [totalPrice, setTotalPrice] = useState<number>(book.book.price)
    const add = () => {
        if (book.units < book.book.stock) {
            console.log("chechoutBookOcntainer book stock= " + book.book.stock)
            handleAddBook(book.book)
        }
    }
    const rest = () => {
        if (book.units > 0) {
            restBookUnits(book.book)
        }
    }
    const reset = () => {
        removeFromCart(book.book)
    }

    useEffect(() => {
        if (book.units === 0) setTotalPrice(current => current = book.book.price)
        setTotalPrice(book.book.price * book.units)
    }, [cartItems])

    return (
        <section className='CheckoutBookContainer'>
            <img src={book.book.img} alt={`${book.book.title} image`} />
            <div className="bookCard_body">
                <h2>{book.book.title}</h2>
                <h4>{book.book.author}</h4>
                <div className="bookCard_cart_container">
                    <div className="bookCard_cart">
                        <div>
                            <button onClick={rest}>-</button>
                            <h4 className="bookCard_cart_quantity">{book.units}</h4>
                            <button onClick={add}>+</button>
                        </div>
                        <button
                            className="bookCard_cart_buyBtn"
                            onClick={reset}
                        > X
                        </button>
                    </div>
                    {book.book.stock < 4 && book.book.stock > 0 && <p className="bookCard_cart_message">{`Only available: ${book.book.stock}units`}</p>}
                    {book.book.stock === 0 && <p className="bookCard_cart_message errorMessage">{"This book isn't available"}</p>}
                </div>
            </div >
            <h3>{currencyFormat(totalPrice)}</h3>
        </section>
    )
}

export default CheckoutBookContainer