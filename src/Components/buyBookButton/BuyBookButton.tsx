import { FC, useState, useContext } from 'react'
import { BookType } from '../../Types/book'
import { CartContext } from '../../context/BookContext'




export const BuyBookButton: FC<BookType> = (book) => {
    const { cartItems, handleAddBook, removeFromCart } = useContext(CartContext)
    const filterItems = cartItems.find((cartBook) => cartBook.book === book)

    let isBuyed: boolean
    if (filterItems !== undefined) {
        isBuyed = true
        console.log("buyButtonBook-is buyed!")
    } else {
        console.log("buyButtonBook-not buyed!")
        isBuyed = false
    }

    const [isBuy, setIsBuy] = useState(isBuyed)

    const AddBook = (event: any) => {
        event.preventDefault()
        handleAddBook(book)

        setIsBuy(current => !current)
    }

    const RemoveBook = (event: any) => {
        event.preventDefault()
        removeFromCart(book)

        setIsBuy(current => !current)
    }

    return (
        <>
            {/* <button onClick={AddBook} className="bookCard_buyButton">Add to cart</button> */}
            {(!isBuy) && <button onClick={AddBook} className="bookCard_buyButton">Add to cart</button>}
            {(isBuy) && <button onClick={RemoveBook} className="bookCard_buyButton">Remove from cart</button>}
        </>

    )
}

export default BuyBookButton