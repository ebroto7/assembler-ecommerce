import { useContext, useId, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { CartContext } from '../context/BookContext'
import { currencyFormat } from '../utils/utils'
import { HOME } from '../Routes/paths'
import  {AuthContext}  from '../context/authContext/authContext'

import ConfettiExplosion from 'react-confetti-explosion';



const CheckoutPage = () => {
    const navigate = useNavigate()

    const { cartItems } = useContext(CartContext)
    const { logout } = useContext(AuthContext)
    
    const [isExploding, setIsExploding] = useState(false);

    const id = useId()

    const handleBuy = () => {
        localStorage.removeItem('books')
        localStorage.removeItem('wishList')
        setIsExploding(true)
        logout()
        alert("The purchase has been made successfully, in the next 72 hours you will receive your order")
        navigate("/home")
    }

    const totalPrice = cartItems.map((book) =>  book.book.price * book.units)
                                .reduce((a, b) => a + b, 0);
    
    return (
        <div>
            <h1>Cart Resume</h1>
            {isExploding && <ConfettiExplosion />}
            <table>
                <thead>
                    <tr key={"header"}>
                        <th key={id}>Book</th>
                        <th key={id + 1}>Units</th>
                        <th key={id + 2}>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {cartItems && cartItems.map((book) => (
                        <tr key={book.isbn}>
                            <td key={id + book.isbn + 1}>{book.book.title}</td>
                            <td key={id + book.isbn + 2}>{`x ${book.units}`}</td>
                            <td key={id + book.isbn + 3}>{currencyFormat(book.book.price * book.units)}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <h4>{`total buy: ${currencyFormat(totalPrice)}`}</h4>
                <button onClick={handleBuy}> Pay </button>
        </div>
    )
}

export default CheckoutPage

