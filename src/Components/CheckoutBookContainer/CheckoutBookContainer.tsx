import { useState } from 'react'
import { FC } from 'react'
import { BookType } from '../../Types/book'
import "./checkoutBookContainer.styles.css"
import BuyButtonsStack from '../buyButtonsStack/BuyButtonsStack'

type Props = {
    book: BookType
}

export const CheckoutBookContainer: FC<Props> = ({book}) => {
    // const [totalPrice, setTotalPrice] = useState( 0 )

  return (
    <section className='CheckoutBookContainer'>
        <img src={book.img} alt={`${book.title} image`} />
        <div className="bookCard_body">
          <h2>{book.title}</h2>
          <h4>{book.author}</h4>
          <BuyButtonsStack units={2}/>
        </div >
        <h3>{`${book.price} €`}</h3>
    </section>
  )
}

export default CheckoutBookContainer