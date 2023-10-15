import ChekoutContainer from '../Components/CheckoutContainer/ChekoutContainer'
import CheckoutBookContainer from '../Components/CheckoutBookContainer/CheckoutBookContainer'
import { useContext } from 'react'
import { CartContext } from '../context/BookContext'

import { MdOutlineRemoveShoppingCart } from "react-icons/md"
import Navbar from '../Components/Navbar'



export const CartPage = () => {
  const { cartItems, totalPrice } = useContext(CartContext)

  return (
    <>
      <Navbar />
      <section className='cartPage_bookContainer'>
        {(cartItems.length == 0) &&
          <div className='cartPage_emptycart_container'>
            <h1><MdOutlineRemoveShoppingCart /></h1>
            <h3>your cart is empty</h3>
          </div>
        }
        {cartItems && cartItems.map((book) => (
          <CheckoutBookContainer key={book.book.isbn} book={book} />
        ))}
      </section>

      <ChekoutContainer price={totalPrice} />
    </>

  )
}