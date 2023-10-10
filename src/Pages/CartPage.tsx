import ChekoutContainer from '../Components/CheckoutContainer/ChekoutContainer'
import CheckoutBookContainer from '../Components/CheckoutBookContainer/CheckoutBookContainer'
import { Link } from 'react-router-dom'
import {useContext, useState, useEffect } from 'react'
import { CartContext } from '../context/BookContext'

import { CartBookType } from '../context/BookContext'
import {IoArrowBackCircleOutline} from "react-icons/io5"
import {MdOutlineRemoveShoppingCart} from "react-icons/md"



export const CartPage = () => {
  const  {cartItems, totalPrice, numberBooksOnCart}  = useContext(CartContext)
  console.log("detail page",cartItems)

  useEffect(() => {
    console.log("detail page",cartItems.length)
    console.log("detail page price",totalPrice)
    console.log("detail page n books",numberBooksOnCart)
  }, [cartItems, totalPrice, numberBooksOnCart])

 

   return (
    <>
      <div className='pages_Header'>
        <Link to="/home"key ="home">
              <button><IoArrowBackCircleOutline /> Home</button>
        </Link>   
      </div>
      <section className='cartPage_bookContainer'>
        {(cartItems.length == 0) && 
        <div>
            <h1><MdOutlineRemoveShoppingCart/></h1>          
           <h3>your cart is empty</h3>
        </div>
        }
        {cartItems && cartItems.map((book) => (
          <CheckoutBookContainer key={book.book.isbn} book={book} />
        ))}
      </section>
     
      <ChekoutContainer price={totalPrice} numberProducts={numberBooksOnCart}/>
    </>
   
  )
}