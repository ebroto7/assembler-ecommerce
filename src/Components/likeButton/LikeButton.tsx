import { FC, useEffect, useState } from 'react'

import { BookType } from '../../Types/book'

import "./likeButton.styles.css"
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai'




export const LikeButton: FC<BookType> = (book) => {
    const [isLike, setIsLike] = useState<boolean>()
    const [icon, setIcon] = useState(<AiOutlineHeart />)
    // const wishList: BookType[] = []
    const [wishList, setWishList] = useState<BookType[]>([])


    const handleLike = (event: any) => {
        event.preventDefault()
        setIsLike(current => !current)
        console.log(" wishlist button")

    }


    useEffect(() => {
        if (isLike) {
            setIcon(<AiFillHeart />)
            // const updatetedWishList: BookType[] = wishList.splice(0, 0, book)
            // const updatetedWishList: BookType[] = (...wishList, book)
            // setWishList(updatetedWishList) 
            setWishList([...wishList, book])
            console.log("useEffect book", book)
            console.log("useEffect wishlist", wishList)
        }

        if (!isLike) {
            setIcon(<AiOutlineHeart />)
            const updatetedWishList = wishList.filter(a =>
                a.id !== book.id)
            setWishList(updatetedWishList)

        }

    }, [isLike])

    useEffect(() => {
        localStorage.setItem("wishList", JSON.stringify(wishList));
        console.log("save wishlist", wishList)
    }, [wishList])

    return (<>
        <button onClick={handleLike} className='likeButton'> {icon}</button>
    </>

    )
}

export default LikeButton