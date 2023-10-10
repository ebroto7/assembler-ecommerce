import React, { ChangeEvent } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { apiContext } from "../context/APIContext";
import { IoArrowBackCircleOutline } from "react-icons/io5"
import BookCard from '../Components/bookCard/BookCard';
import { BookType } from '../Types/book';

type Props = {}

function SearchPage({ }: Props) {
    const { apiBooks } = apiContext()
    const [searchParams, setSearchParams] = useSearchParams()
    const query = searchParams.get("q") ?? ""

    const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
        setSearchParams({ q: e.target.value })
    }
    return (
        <>

            <header className="cartPage_Header">
                <Link to="/home" key="home">
                    <button><IoArrowBackCircleOutline />Home</button>
                </Link>
            </header>
            <div className='searchBar_container'>
                <input type="search"
                    placeholder='search'
                    onChange={handleSearch}
                    value={query}
                />
                <p>lupa</p>
            </div>
            <section>
                <h2 className='searchPage_Title'>{`Search by title: ${query}`}</h2>
                <ul className='searchPage_BooksContainer'>
                    {(query.length > 1) &&apiBooks.filter(book => {
                        if(!query) return true
                        const bookTitle = book.title.toLocaleLowerCase()
                        return bookTitle.includes(query.toLocaleLowerCase())
                    })
                    .map((book: BookType) => (
                        <BookCard {...book} key={book.isbn} />
                    ))} 
                </ul>

                <h2 className='searchPage_Title'>{`Search by author: ${query}`}</h2>
                <ul className='searchPage_BooksContainer'>
                    { (query.length > 1) && apiBooks.filter(book => {
                        if (!query ) return true
                        const bookTitle = book.author.toLocaleLowerCase()
                        return bookTitle.includes(query.toLocaleLowerCase())
                        
                    })
                        .map((book: BookType) => 
                            
                            <BookCard {...book} key={book.isbn} />
                        )}
                </ul>
            </section>
        </>
    )
}

export default SearchPage