import React from 'react';
import _ from 'lodash';
import styles from './Cart.module.scss';

import { CartItem, Checkout } from '../../components/ui';

import { useDispatch, useSelector } from 'react-redux';
import { getCartData, updateUserData } from '../../store/users';
import { getSneakersByIds } from '../../store/sneakers';

const Cart = () => {
  const dispatch = useDispatch();

  const currentCart = useSelector(getCartData());
  const sneakers = useSelector(getSneakersByIds(currentCart));

  const subtotal = _.sumBy(sneakers, 'price');
  const shippingCost = subtotal < 8500 && subtotal > 0 ? 750 : 0;
  const orderTotal = subtotal + shippingCost;

  const handleRemoveCartItem = (id) => {
    const updatedCurrentCart = [...currentCart];
    const indexOfCartItem = updatedCurrentCart.findIndex((i) => i === id);
    updatedCurrentCart.splice(indexOfCartItem, 1);

    dispatch(
      updateUserData({
        cart: updatedCurrentCart,
      })
    );
  };

  return (
    <section className={styles.parent}>
      <div className={styles.mainContainer}>
        <CartItem sneakers={sneakers} onRemoveCartItem={handleRemoveCartItem} />
        <Checkout shippingCost={shippingCost} subtotal={subtotal} orderTotal={orderTotal} currentCart={currentCart} />
      </div>
    </section>
  );
};

export default Cart;
