import ChekoutContainer from '../Components/CheckoutContainer/ChekoutContainer'
import CheckoutBookContainer from '../Components/CheckoutBookContainer/CheckoutBookContainer'
import { Link } from 'react-router-dom'
import {useContext, useState, useEffect } from 'react'
import { CartContext } from '../context/BookContext'

import { CartBookType } from '../context/BookContext'
import {IoArrowBackCircleOutline} from "react-icons/io5"



export const CartPage = () => {
  const  {cartItems}  = useContext(CartContext)
  

  
  const [totalBooks, setTotalBooks] = useState<number>(0)
  const [totalPrice, setTotalPrice] = useState<number>(0)
  useEffect(() => {
    if (cartItems != undefined) {
      setTotalBooks(cartItems.length)
    }
  }, [cartItems])

  useEffect(() => {
    let price: number = 0
    cartItems.forEach((book: CartBookType) => {
       price += book.book.price * book.units
      console.log("calculate= "+(book.book.price * book.units))
      
    });
    setTotalPrice(price)
  }, [totalBooks])
    
  
   return (
    <>
      <div className='pages_Header'>
        <Link to="/home"key ="home">
              <button><IoArrowBackCircleOutline /> Home</button>
        </Link>   
      </div>
      <section className='cartPage_bookContainer'>
        {cartItems.map((book) => (

          <CheckoutBookContainer key={book.book.isbn} book={book.book} units={book.book.stock}/>
        ))}
      </section>
     
      <ChekoutContainer price={totalPrice} numberProducts={totalBooks}/>
    </>
   
  )
}