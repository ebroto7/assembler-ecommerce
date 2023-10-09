import { useContext, useEffect, useState } from 'react'
import { Link, Outlet } from 'react-router-dom'

import { bookContext } from '../context/BookContext'
import { apiContext} from '../context/APIContext'

import Navbar from '../Components/Navbar'
import BookInlineContainer from '../Components/bookInlineContainer/BookInlineContainer'

import { IoBagCheckOutline } from "react-icons/io5"

const bookFilters = ['Best seller','fiction', 'Best rated']

enum BookFilters {
  BestSeller = 'Best seller',
  BestRated = 'Best rated',
  WishList = 'Wish list',
  Science = "Science"
}

// type Props = {}

export const HomePage = () => {

  const {apiBooks} = apiContext()

  const {cartItems, numberBooksOnCart}  = bookContext()
   const [cartNumber, setCartNumber] = useState<number>(cartItems.length)
  console.log("HomePage numberBooksOnCart:"+numberBooksOnCart)


  console.log(cartItems.length)
  useEffect(() => {
     setCartNumber(cartItems.length)
  }, [cartItems])

  return (
    <>
      <Navbar />
      <main className='main'>
        <Link to="/cart" key="cart">
          <button className='homePage_gotocart_Btn'>
            <IoBagCheckOutline />
            {cartItems && <p>{cartNumber}</p> }
          </button>
        </Link>

        {bookFilters.map((filter) => (
          <BookInlineContainer key={filter} title={filter} bookList={apiBooks} />
          // <BookInlineContainer key={filter} title={filter} bookList={books.filter((book)=>book.bestseller === true )} />

        ))}
      </main>
    </>
  )
}
