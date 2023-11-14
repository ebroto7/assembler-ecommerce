import { FC, useContext, useEffect, useState } from 'react'
import { WishListContext } from '../../context/WishListContext'

import { BookType } from '../../Types/book'

import "./likeButton.styles.css"
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai'




export const LikeButton: FC<BookType> = (book) => {
    const { wishList, addToWishList, removeFromWishList } = useContext(WishListContext)
    const [isLike, setIsLike] = useState<boolean>(false)
    const [icon, setIcon] = useState(<AiOutlineHeart />)
    const filterItems = wishList.find((wishBook) => wishBook.book.isbn === book.isbn)

    useEffect(() => {
        if (filterItems !== undefined) {
            setIsLike(true)
            setIcon(<AiFillHeart />)
        } else {
            setIsLike(false)
            setIcon(<AiOutlineHeart />)
        }
    }, [])



    const handleLike = (event: any) => {
        event.preventDefault()
        console.log(" wishlist button")
        if (isLike) {
            setIcon(<AiFillHeart />)
            addToWishList(book)
            setIsLike(current => !current)
            console.log("useEffect book", book)
            console.log("useEffect wishlist", wishList)
        }

        if (!isLike) {
            setIcon(<AiOutlineHeart />)
            removeFromWishList(book)
            setIsLike(current => !current)

        }
    }

    return (
        <>
            <button onClick={handleLike} className='likeButton'> {icon}</button>
        </>

    )
}

export default LikeButton