import { FC } from 'react'
import "./checkoutContainer.styles.css";
import { currencyFormat } from '../../utils/utils';


type Props = {
    price: number
    numberProducts: number,
}

export const ChekoutContainer: FC<Props> = ({price, numberProducts}) => {
    
  return (
    <section className='cartPage_checkoutContainer'>
      <div className='cartPage_infoContainer'>
        <div className="cartPage_checkoutInfo">
            <h4>total books:</h4>
            <h4>{`${numberProducts} books`}</h4>
        </div>
        <div className="cartPage_checkoutInfo">
            <h3>Subtotal:</h3>
            <h3>{currencyFormat(price)}</h3>
        </div>

      </div>
        
        <button className='cartPage_chekoutButton'> Checkout </button>
    </section>
  )
}

export default ChekoutContainer