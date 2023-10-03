import { FC } from 'react'
import { BookType } from '../../Types/book';
import BookCard from '../bookCard/BookCard';

type Props = {
    title: string;
    bookList: BookType[]
}

const BookInlineContainer:FC<Props> = ({title, bookList} ) => {
  return (
    <section className='best_sellers_section' >
        <h3>{title}</h3>
        <div className='books_inlineContainer'>
        {bookList.map((book: BookType) => (
            <BookCard {...book} key={book.isbn} />
        ))}
        </div>
    </section>
  )
}

export default BookInlineContainer