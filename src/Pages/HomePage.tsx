
import BookInlineContainer from '../Components/bookInlineContainer/BookInlineContainer'
import booksList from '../Assets/db/db'
import { BookType } from '../Types/book'

const bookFilters = ['Best seller', 'Best rated', 'Wish list', "chanchito" ]
 
// type Props = {}

export const HomePage = () => {

    const bookList: BookType[] = booksList

  return (
    <main className='main'>
      {bookFilters.map((filter) => (
         <BookInlineContainer key={filter} title={filter} bookList={bookList}/>
      ))}
  </main>
  )
}
