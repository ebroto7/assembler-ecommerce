import { FC, useState, useContext, useEffect } from 'react'
import { BookType } from '../../Types/book'
import { CartContext } from '../../context/BookContext'

import { BiCartDownload } from "react-icons/bi"
import { BsCartDash } from 'react-icons/bs'


export const BuyBookButton: FC<BookType> = (book) => {
    const { cartItems, handleAddBook, removeFromCart } = useContext(CartContext)
    const filterItems = cartItems.find((cartBook) => cartBook.book.isbn === book.isbn)

    useEffect(() => {
        if (filterItems !== undefined) {
            setIsBuy(true)
        } else {
            setIsBuy(false)
        }
    }, [])


    const [isBuy, setIsBuy] = useState(false)

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
            {(!isBuy) && <button onClick={AddBook} className="bookCard_buyButton">Add <BiCartDownload /></button>}
            {(isBuy) && <button onClick={RemoveBook} className="bookCard_buyButton">Remove <BsCartDash/></button>}
        </>

    )
}

export default BuyBookButton