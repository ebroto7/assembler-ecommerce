import { useContext, useEffect, useState } from 'react'
import BookInlineContainer from '../Components/bookInlineContainer/BookInlineContainer'
import { BookType } from '../Types/book'
import { Link } from 'react-router-dom'


import { IoBagCheckOutline } from "react-icons/io5"
import { CartContext } from '../context/BookContext'
import Navbar from '../Components/Navbar'

const bookFilters = ['Best seller', 'Best rated', 'Wish list']

// type Props = {}

export const HomePage = () => {

  // const { cartItems } = useContext(CartContext)
  // const [cartNumber, setCartNumber] = useState<number>(cartItems.length)

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


  useEffect(() => {
    // setCartNumber(cartItems.length)
  }, [])

  return (
    <>
      <Navbar />
      <main className='main'>
        <Link to="/cart" key="cart">
          <button className='homePage_gotocart_Btn'>
            <IoBagCheckOutline />
            {/* <p>{cartNumber}</p>  */}
          </button>
        </Link>


        {bookFilters.map((filter) => (
          <BookInlineContainer key={filter} title={filter} bookList={books} />
        ))}
      </main>
    </>
  )
}
