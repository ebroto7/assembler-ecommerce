import { useState, useEffect, useContext } from 'react'
import { FC } from 'react'
import { CartBookType, CartContext } from '../../context/BookContext'

import { BookType } from '../../Types/book'
import "./checkoutBookContainer.styles.css"
import {GoTrash} from 'react-icons/go'
import { currencyFormat } from '../../utils/utils'
type Props = {
    book: CartBookType
}

export const CheckoutBookContainer: FC<Props> = ({ book }) => {

    const { handleAddBook, removeFromCart, restBookUnits } = useContext(CartContext)

    const [numberItems, setMumberItems] = useState<number>(book.units)
    const [bookPrice, setBookPrice] = useState<number>(book.book.price*numberItems)

    const add = () => {
        if (book.units < book.book.stock) {
            console.log("chechoutBookOcntainer book stock= " + book.book.stock)
            handleAddBook(book.book)
            setMumberItems(current => current +1)
        }
    }
    const rest = () => {
        if (book.units > 0) {
            restBookUnits(book.book)
            setMumberItems(current => current -1)
        }
        
    }
    const reset = () => {
        removeFromCart(book.book)
        setMumberItems(0)

    }
    useEffect(() => {
        setBookPrice(book.book.price * numberItems)

    },[numberItems])

    // useEffect(() => {
    //     if (book.units === 0) setBookPrice(current => current = book.book.price)
    // }, [cartItems])

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
                            <h4 className="bookCard_cart_quantity">{numberItems}</h4>
                            <button onClick={add}>+</button>
                        </div>
                        <button
                            className="bookCard_cart_buyBtn"
                            onClick={reset}
                        > <GoTrash />
                        </button>
                    </div>
                    {book.book.stock < 4 && book.book.stock > 0 && <p className="bookCard_cart_message">{`Only available: ${book.book.stock}units`}</p>}
                    {book.book.stock === 0 && <p className="bookCard_cart_message errorMessage">{"This book isn't available"}</p>}
                </div>
            </div >
            <h3>{currencyFormat(bookPrice)}</h3>
        </section>
    )
}

export default CheckoutBookContainer