import React, { useState } from 'react'
import ChekoutContainer from '../Components/CheckoutContainer/ChekoutContainer'
import booksList from '../Assets/db/db'
import CheckoutBookContainer from '../Components/CheckoutBookContainer/CheckoutBookContainer'
import { Link } from 'react-router-dom'

type Props = {}

export const CartPage = (props: Props) => {

  const [totalPrice, setTotalPrice] = useState(0)

  return (
    <>
      <div className='cartPage_Header'>
      <Link to="/home"key ="home">
						<button>Home</button>
				</Link>   
      </div>
      <section className='cartPage_bookContainer'>
        {booksList.map((book) => (
          <CheckoutBookContainer key={book.isbn} book={book}/>
        ))}
      </section>
     
      <ChekoutContainer price={totalPrice} />
    </>
   
  )
}