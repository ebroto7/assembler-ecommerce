import { FC, useState, useContext } from 'react'
import { BookType } from '../../Types/book'
import { CartContext } from '../../context/BookContext'




export const BuyBookButton: FC<BookType> = (book) => {
    const  cartItems  = useContext(CartContext)

    const [isBuy, setIsBuy] = useState(false)

    const handleCart = (event: any) => {
        event.preventDefault()

        setIsBuy(current => !current)

        if (!isBuy && book !== undefined) {
            addToCart()
            //  setCartItems(current => current.push(book))
        }
        if (isBuy && book !== undefined) {
            console.log(book.title + ' is not in cart')
            // remove from buyed books array
            // setCartItems()
        }
    }

    function addToCart() {
        // console.log(book+' is in cart')

        // const buyBook: BookType = cartItems.bookList.find((cartBook) => cartBook == book)
        // console.log(buyBook + ' is in cart')

        {
            cartItems?.bookList.push({
                book: book,
                isbn: book.isbn,
                units: 3
            })
        }
    }

    return (
        <>
            {(!isBuy) && <button onClick={handleCart} className="bookCard_buyButton">Add to cart</button>}
            {(isBuy) && <button onClick={handleCart} className="bookCard_buyButton">Remove from cart</button>}
        </>

    )
}

export default BuyBookButton