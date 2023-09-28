
import BookInlineContainer from '../Components/bookInlineContainer/BookInlineContainer'
import booksList from '../Assets/db/db'
import { BookType } from '../Types/book'
import { Link } from 'react-router-dom'

import {IoBagCheckOutline } from "react-icons/io5"

const bookFilters = ['Best seller', 'Best rated', 'Wish list', "chanchito" ]
 
// type Props = {}

export const HomePage = () => {

    const bookList: BookType[] = booksList

  return (
    <main className='main'>
         <Link to="/cart"key ="cart">
						<button className='homePage_gotocart_Btn'>
              <IoBagCheckOutline />
              <p>3</p>
            </button>
				</Link>     
        {bookFilters.map((filter) => (
          <BookInlineContainer key={filter} title={filter} bookList={bookList}/>
        ))}
    </main>
  )
}
