import "./checkoutContainer.styles.css";

import { FC, useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom';

import { currencyFormat } from '../../utils/utils';
import { bookContext } from '../../context/BookContext';
  
type Props = {
  price: number
}

export const ChekoutContainer: FC<Props> = ({ price }) => {
const {cartItems, totalPrice} = bookContext()
const Navigate = useNavigate()

// const button = useRef<HTMLButtonElement>(null)
// useEffect(()=>{
//     if (cartItems.length == 0) {
//       (cartItems.length != 0) && button!.current!.setAttribute("disabled", "true")  

//     } 
//     if (cartItems.length !== 0) {
//       (cartItems.length != 0) && button!.current!.removeAttribute("disabled")  
//     } 
// },[cartItems])

const handleCheckout = () => {
  Navigate("/checkout")
  console.log("click checkout button")

}
  return (
    <section className='cartPage_checkoutContainer'>
      <div className=' cartPage_checkoutInfo'>
          <h3>Total:</h3>
          <h3>{currencyFormat(totalPrice)}</h3>
      </div>

       {/* <button className='cartPage_chekoutButton' ref={button} onClick={handleCheckout} disabled> Checkout </button> */}

       {(cartItems.length != 0 ) && <button className='cartPage_chekoutButton' onClick={handleCheckout} > Checkout </button>} 
       {(cartItems.length == 0) && <button className='cartPage_chekoutButton' onClick={handleCheckout} disabled> Checkout </button>} 
 
    </section>
  )
}

export default ChekoutContainer