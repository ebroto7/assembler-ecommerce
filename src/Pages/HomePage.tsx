import React from 'react'
import Navbar from '../Components/Navbar'
import BookInlineContainer from '../Components/bookInlineContainer/BookInlineContainer'
import booksList from '../Assets/db/db'
import { BookType } from '../Types/book'


type Props = {}

export const HomePage = (props: Props) => {

    const bookList: BookType[] = booksList

  return (
    <main className='main'>
    <Navbar />
      
    <BookInlineContainer title='Best seller' bookList={bookList}/>
    <BookInlineContainer title='Best rated' bookList={bookList}/>
    <BookInlineContainer title='Wish list' bookList={bookList}/>
   
  </main>
  )
}