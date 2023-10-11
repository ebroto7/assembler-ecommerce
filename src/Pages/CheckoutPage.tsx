import { useContext, useId } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../context/authContext'
import { CartContext } from '../context/BookContext'
import { currencyFormat } from '../utils/utils'
import { HOME } from '../Routes/paths'


const CheckoutPage = () => {
    const navigate = useNavigate()

    const { cartItems } = useContext(CartContext)
    const isAuthenticated  = useContext(AuthContext)

    const id = useId()
    console.log(localStorage.getItem('userLogin'))
    console.log("CheckoutPage",isAuthenticated)

    const handleBuy = () => {
        localStorage.removeItem("books")
        alert("The purchase has been made successfully, in the next 72 hours you will receive your order")
        navigate("/")
    }

    const totalPrice = cartItems.map((book) =>  book.book.price * book.units)
                                .reduce((a, b) => a + b, 0);

    return (
        <div>
            <h1>Cart Resume</h1>
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
            <Link to={HOME}>
                <button onClick={handleBuy}> Pay 
                </button>
            </Link>
        </div>
    )
}

export default CheckoutPage

