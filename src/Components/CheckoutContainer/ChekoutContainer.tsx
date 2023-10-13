import { ButtonHTMLAttributes, FC, useEffect, useRef } from 'react'
import "./checkoutContainer.styles.css";
import { currencyFormat } from '../../utils/utils';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { CHECKOUT } from '../../Routes/paths';
import { bookContext } from '../../context/BookContext';
  


type Props = {
  price: number
  numberProducts: number,
}

export const ChekoutContainer: FC<Props> = ({ price, numberProducts }) => {
const {cartItems} = bookContext()
const Navigate = useNavigate()

const button = useRef<HTMLButtonElement>(null)
useEffect(()=>{
    if (button != null ) {
       (cartItems.length != 0) && button!.current!.removeAttribute("disabled")  
    }
},[])
const handleCheckout = () => {
  Navigate("/checkout")
  console.log("click checkout button")

}
  return (
    <section className='cartPage_checkoutContainer'>
      <div className='cartPage_infoContainer'>
        <div className="cartPage_checkoutInfo">
          <h4>total books:</h4>
          <h4>{`${numberProducts} books`}</h4>
        </div>
        <div className="cartPage_checkoutInfo">
          <h3>Subtotal:</h3>
          <h3>{currencyFormat(price)}</h3>
        </div>

      </div>

        {/* {(cartItems.length !== 0) && <button className='cartPage_chekoutButton' onClick={handleCheckout}> Checkout </button>}
        {(!cartItems.length ) && <button className='cartPage_chekoutButton' ref={button} disabled> Checkout </button>} */}
      <button className='cartPage_chekoutButton' ref={button} onClick={handleCheckout} > Checkout </button>
 
    </section>
  )
}

export default ChekoutContainer