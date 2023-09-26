import './App.css'
import BookCard from './Components/bookCard/BookCard'
import booksList from './Assets/db/db'
import { BookType } from './Types/book'
import Navbar from './Components/Navbar'
import BookInlineContainer from './Components/bookInlineContainer/BookInlineContainer'
// import { BrowserRouter, Routes, Route } from "react-router-dom";


const App = () => {
  const bookList: BookType[] = booksList
  const book: BookType = bookList[0]
  return (
    <main className='main'>
      <Navbar />
        
      <BookInlineContainer title='Best seller' bookList={bookList}/>
      <BookInlineContainer title='Best rated' bookList={bookList}/>
      <BookInlineContainer title='Wish list' bookList={bookList}/>
     
    </main>
  )
}

export default App
