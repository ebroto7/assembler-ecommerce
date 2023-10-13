import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import toast, { Toaster } from 'react-hot-toast';

import { bookContext } from '../context/BookContext'
import { apiContext } from '../context/APIContext'

import Navbar from '../Components/Navbar'
import BookInlineContainer from '../Components/bookInlineContainer/BookInlineContainer'

import { IoBagCheckOutline } from "react-icons/io5"
import { CART } from '../Routes/paths'
import ErrorView, { error }  from '../Components/errorView/ErrorView';

const bookFilters = ['Best seller', 'Fiction', 'Best rated']

enum BookFilters {
  BestSeller = 'Best seller',
  BestRated = 'Best rated',
  // WishList = 'Wish list',
  Science = "Science"
}

export const HomePage = () => {

  const { apiBooks, apiError } = apiContext()


  const { cartItems, numberBooksOnCart } = bookContext()
  const [cartNumber, setCartNumber] = useState<number>()
  console.log("HomePage numberBooksOnCart:" + numberBooksOnCart)


  useEffect(() => {
    localStorage.getItem('books')

    setCartNumber(cartItems.length)
  }, [cartNumber, cartItems])

  const notify = () => toast.success('Here is your toast.', { duration: 2000 });

  useEffect(() => {
    notify
    console.log("hello world")
  }, [])

  return (
    <>
      <Navbar />
      <main className='main'>
      {!apiError && <Link to={CART} key="cart">
          <button className='homePage_gotocart_Btn'>
            <IoBagCheckOutline />
            {cartNumber === 0 ? <p>{0}</p> : <p>{cartNumber}</p>}
          </button>
        </Link> }
        {apiError
          ? <ErrorView error={error.apiFail}/>
          : bookFilters.map((filter) => (
               <BookInlineContainer key={filter} title={filter} bookList={apiBooks} />
            ))
        }

        <Toaster position="bottom-center" reverseOrder={true} />

      </main>
    </>
  )
}
