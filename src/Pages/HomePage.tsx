import { useContext, useEffect, useState } from 'react'
import BookInlineContainer from '../Components/bookInlineContainer/BookInlineContainer'
import booksList from '../Assets/db/db'
import { BookType } from '../Types/book'
import { Link } from 'react-router-dom'
Navbar


import {IoBagCheckOutline } from "react-icons/io5"
 import { CartContext } from '../context/BookContext'
import Navbar from '../Components/Navbar'

const bookFilters = ['Best seller', 'Best rated', 'Wish list' ]
 
// type Props = {}

export const HomePage = () => {
    const bookList: BookType[] = booksList

       const { cartItems } = useContext(CartContext)

      const [cartNumber, setCartNumber] = useState<number>(cartItems.length)

      useEffect(() => {
        setCartNumber(cartItems.length)
      }, [])

  return (
    <>
      <Navbar />
      <main className='main'>
          <Link to="/cart"key ="cart">
              <button className='homePage_gotocart_Btn'>
                <IoBagCheckOutline />
                <p>{cartNumber}</p> 
              </button>
          </Link>   
          {bookFilters.map((filter) => (
            <BookInlineContainer key={filter} title={filter} bookList={bookList}/>
          ))}
      </main>
    </>
  )
}
