import React, { ChangeEvent } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { apiContext } from "../context/APIContext";
import BookCard from '../Components/bookCard/BookCard';
import { BookType } from '../Types/book';
import Navbar from '../Components/Navbar';

import { FaSearch } from "react-icons/fa"


function SearchPage() {
    const { apiBooks } = apiContext()
    const [searchParams, setSearchParams] = useSearchParams()
    const query = searchParams.get("q") ?? ""

    const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
        setSearchParams({ q: e.target.value })
    }
    return (
        <>
            <Navbar />
            <main className='searchPage_mainContainer'>

                <div className='searchPage_searchBar_container'>
                    <input type="search"
                        placeholder='search'
                        onChange={handleSearch}
                        value={query}
                    />
                    <p><FaSearch /></p>
                </div>
                 <section className='searchPage_searchResult_container' >
                    <h2 className='searchPage_Title'>{`Search by title: ${query}`}</h2>
                    <ul className='searchPage_BooksContainer'>
                        {(query.length > 1) && apiBooks.filter(book => {
                            if (!query) return true
                            const bookTitle = book.title.toLocaleLowerCase()
                            return bookTitle.includes(query.toLocaleLowerCase())
                        })
                            .map((book: BookType) => (
                                <BookCard {...book} key={book.isbn} />
                            ))}
                    </ul>

                    <h2 className='searchPage_Title'>{`Search by author: ${query}`}</h2>
                    <ul className='searchPage_BooksContainer'>
                        {(query.length > 1) && apiBooks.filter(book => {
                            if (!query) return true
                            const bookTitle = book.author.toLocaleLowerCase()
                            return bookTitle.includes(query.toLocaleLowerCase())
                        })
                            .map((book: BookType) =>
                                <BookCard {...book} key={book.isbn} />
                            )}
                    </ul>
                </section>

            </main>
        </>
    )
}

export default SearchPage