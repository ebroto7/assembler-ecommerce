import { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import { CartContext } from '../context/BookContext'

import Navbar from '../Components/Navbar'
import BookInlineContainer from '../Components/bookInlineContainer/BookInlineContainer'

import { IoBagCheckOutline } from "react-icons/io5"

const bookFilters = ['Best seller', 'Best rated', 'Wish list', 'Science']

enum BookFilters {
  BestSeller = 'Best seller',
  BestRated = 'Best rated',
  WishList = 'Wish list',
  Science = "Science"
}

// type Props = {}

export const HomePage = () => {

  const {cartItems, numberBooksOnCart}  = useContext(CartContext)
  //  const [cartNumber, setCartNumber] = useState<number>(cartItems.length)
  console.log("HomePage numberBooksOnCart:"+numberBooksOnCart)
  const [books, setBooks] = useState([])
  useEffect(() => {
    const url = 'http://localhost:3000/books'
    const getProducts = async () => {
      const response = await fetch(url);
      const data = await response.json();
      console.log("json data= " + data)
      setBooks(data)
    }
    getProducts();

  }, [])

  // console.log(cartItems.length)
  // useEffect(() => {
  //    setCartNumber(cartItems.length)
  // }, [])

  return (
    <>
      <Navbar />
      <main className='main'>
        <Link to="/cart" key="cart">
          <button className='homePage_gotocart_Btn'>
            <IoBagCheckOutline />
            {cartItems && <p>{numberBooksOnCart}</p> }
          </button>
        </Link>


        {bookFilters.map((filter) => (
          <BookInlineContainer key={filter} title={filter} bookList={books} />
          // <BookInlineContainer key={filter} title={filter} bookList={books.filter((book)=>book.bestseller === true )} />

        ))}
      </main>
    </>
  )
}
