import { FC } from 'react'
import { BookType } from '../../Types/book';
import BookCard from '../bookCard/BookCard';
import { shuffle } from '../../utils/utils';

type Props = {
    title: string;
    bookList: BookType[]
}

const BookInlineContainer:FC<Props> = ({title, bookList} ) => {

  let books: BookType[] = shuffle(bookList)

  if (title === 'Best seller') {
    books = books.filter((book) => book.bestseller === true );
    console.log("bestSeller"+ books.length)
  } 
  if (title === 'fiction') {
    books = books.filter((book) => book.genre === "fiction" );
    console.log("bestSeller"+ books.length)
  }
  if (title === 'Best r') {
    books = books.filter((book) => book.genre === "fiction" );
    console.log("bestSeller"+ books.length)
  }
  


  return (
    <section className='best_sellers_section' >
        <h3>{title}</h3>
        <div className='books_inlineContainer'>
        {books.map((book: BookType) => (
            <BookCard {...book} key={book.isbn} />
        ))}
        </div>
    </section>
  )
}

export default BookInlineContainer