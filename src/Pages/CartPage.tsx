import ChekoutContainer from '../Components/CheckoutContainer/ChekoutContainer'
import CheckoutBookContainer from '../Components/CheckoutBookContainer/CheckoutBookContainer'
import { Link } from 'react-router-dom'
import {useContext } from 'react'
import { CartContext } from '../context/BookContext'

import {IoArrowBackCircleOutline} from "react-icons/io5"
import {MdOutlineRemoveShoppingCart} from "react-icons/md"
import { HOME } from '../Routes/paths'



export const CartPage = () => {
  const  {cartItems, totalPrice, numberBooksOnCart}  = useContext(CartContext)
  console.log("detail page",cartItems)


 

   return (
    <>
      <div className='pages_Header'>
        <Link to={HOME} key ="home">
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