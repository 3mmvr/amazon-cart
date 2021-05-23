import React from 'react'
import './CartTotal.css'
import NumberFormat from 'react-number-format';

function CartTotal({items}) {

    const getTotalPrice = () => {
        let total = 0;
        items.forEach((item) => {
            total += (item.price * item.quantity)    
        });
        return total;
    }

    const getItemsNumber = () => {
        let number = 0;
        items.forEach((item) => {
            number += (item.quantity * 1)
        });
        return number;
    }

    return (
        <div className="CartTotal">
            <h3>
                Subtotal( 
                    <span className="numberOfItems">
                        <NumberFormat value={getItemsNumber()} displayType={'text'} thousandSeparator={true} />     
                    </span> items):
                <span className="CartTotal-price">
                    <NumberFormat value={getTotalPrice()} displayType={'text'} thousandSeparator={true} prefix={'$'} decimalScale={2} />
                </span>
            </h3>
            <button>
                Proceed to checkout
            </button>
        </div>
    )
}

export default CartTotal
