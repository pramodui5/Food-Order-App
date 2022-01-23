import React from 'react';

import classes from './Cart';

const Cart = (props) => {
    const cartItem = <ul className={classes['cart-item']}>{[{id:'c1', name: 'Sushi', amount: 2, price: 12.99},].map((item) => (
        <li>{item.name}</li>
    ))}</ul>
  return (
    <div>
        {cartItem}
        <div className={classes.total}>
            <span>Total Amount</span>
            <span>45.60</span>
        </div>
        <div className={classes.actions}>
            <button className={classes['button--alt']}>Close</button>
            <button className={classes.button}>Order</button>
        </div>
    </div>
  )
}

export default Cart;
