import { useState } from 'react'
import { FC } from 'react'

type unitsProps = {
    units: number,
}

export const BuyButtonsStack: FC<unitsProps> = ({units}) => {


    const [quantity, setQuantity] = useState<number>(0)

    const add = () => {
        if (quantity < units) {
            setQuantity(current => current + 1)
        }
    }
    const rest = () => {
        if (quantity > 0) {
            setQuantity(current => current - 1)
        }
    }
    const buy = () => {
        // add to cart (locale storage)
        setQuantity(0)
    }
    return (
        <>
            <div className="bookCard_cart_container">
                <div className="bookCard_cart">
                <div>
                <button onClick={rest}>-</button>
                    <h4 className="bookCard_cart_quantity">{quantity}</h4>
                    <button onClick={add}>+</button>
                </div>
                <button 
                    className="bookCard_cart_buyBtn" 
                    onClick={buy}
                    >C
                    </button>
                </div>
                {units < 4 && units > 0 &&  <p className="bookCard_cart_message">{`Only available: ${units}units`}</p>}
                {units === 0 &&  <p className="bookCard_cart_message errorMessage">{"This book isn't available"}</p>}
            </div>
        </>
    )
}

export default BuyButtonsStack