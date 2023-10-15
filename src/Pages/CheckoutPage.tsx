import { useContext, useId } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { CartContext } from '../context/BookContext'
import { currencyFormat } from '../utils/utils'
import { HOME } from '../Routes/paths'
import { AuthContext } from '../context/authContext/authContext'



const CheckoutPage = () => {
    const navigate = useNavigate()

    const { cartItems, removeAll } = useContext(CartContext)
    const { logout } = useContext(AuthContext)

    const id = useId()
    console.log(localStorage.getItem('userLogin'))

    const handleBuy = () => {
        // localStorage.removeItem('books')
        removeAll()
        logout()
        alert("The purchase has been made successfully, in the next 72 hours you will receive your order")
        navigate(HOME)
    }

    const totalPrice = cartItems.map((book) => book.book.price * book.units)
        .reduce((a, b) => a + b, 0);

    return (
        <main className='checkoutPage_mainContainer'>
            <div className='checkoutPage_infoContainer'>
                <h1>Cart Resume</h1>
                <table>
                    <thead>
                        <tr key={"header"}>
                            <th key={id}>Book</th>
                            <th key={id + 1} className='.rightAlign'>Units</th>
                            <th key={id + 2} className='.rightAlign'>Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cartItems && cartItems.map((book) => (
                            <tr key={book.isbn}>
                                <td key={id + book.isbn + 1}>{book.book.title}</td>
                                <td key={id + book.isbn + 2} className='.rightAlign'>{`x ${book.units}`}</td>
                                <td key={id + book.isbn + 3} className='.rightAlign'>{currencyFormat(book.book.price * book.units)}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <h4>{`total buy: ${currencyFormat(totalPrice)}`}</h4>
            </div>
            <div className="checkoutPage_buttonContainer">
                <button onClick={handleBuy}> Pay </button>
            </div>
        </main>
    )
}

export default CheckoutPage

