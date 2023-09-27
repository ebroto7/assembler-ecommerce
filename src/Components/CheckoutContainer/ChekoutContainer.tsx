import React from 'react'
import { FC } from 'react'
import "./checkoutContainer.styles.css";
import { BookType } from '../../Types/book';


type Props = {
    price: number
}

export const ChekoutContainer: FC<Props> = ({price}) => {
    
  return (
    <section className='cartPage_container'>
        <div className="cartPage_checkoutInfo">
            <h3>Subtotal:</h3>
            <h3>{`${price} €`}</h3>
        </div>
        <button className='cartPage_chekoutButton'> Checkout </button>
    </section>
  )
}

export default ChekoutContainer