import ChekoutContainer from '../Components/CheckoutContainer/ChekoutContainer'
import booksList from '../Assets/db/db'
import CheckoutBookContainer from '../Components/CheckoutBookContainer/CheckoutBookContainer'
import { Link } from 'react-router-dom'
import { useState, useEffect, FC } from 'react'
import { BookType } from '../Types/book'

import {IoArrowBackCircleOutline} from "react-icons/io5"

type Props = {
  book: BookType,
  units: number
}

export const CartPage = () => {

  const [totalPrice, setTotalPrice] = useState(0)

  return (
    <>
      <div className='cartPage_Header'>
      <Link to="/home"key ="home">
						<button><IoArrowBackCircleOutline /> Home</button>
				</Link>   
      </div>
      <section className='cartPage_bookContainer'>
        {booksList.map((book) => (
          <CheckoutBookContainer key={book.isbn} book={book} units={2}/>
        ))}
      </section>
     
      <ChekoutContainer price={totalPrice} numberProducts={4}/>
    </>
   
  )
}