import React from 'react';
import _ from 'lodash';
import { Link } from 'react-router-dom';
import styles from './Cart.module.scss';

import { Brand } from '../../components/ui';

import { useDispatch, useSelector } from 'react-redux';
import { getCartData, getCurrentUser, updateUserData } from '../../store/users';
import { getSneakersByIds } from '../../store/sneakers';
import { RightArrow } from '../../assets/svg';

const Cart = () => {
  const dispatch = useDispatch();

  const currentUser = useSelector(getCurrentUser());
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
        ...currentUser,
        cart: updatedCurrentCart,
      })
    );
  };

  return (
    <section className={styles.parent}>
      <div className={styles.mainContainer}>
        <div className={styles.leftContent}>
          {sneakers.length !== 0 ? (
            sneakers.map((s) => (
              <div key={s._id + Math.random().toString()} className={styles.cartItem}>
                <img src={s.image[0]} alt="sneakers" className={styles.img} />
                <div className={styles.cartContentLeft}>
                  <span className={styles.brand}>
                    <Brand id={s.brand} />
                  </span>
                  <span className={styles.name}>{s.name}</span>
                  <span className={styles.stock}>{s.isInStock ? 'In Stock' : 'Out of Stock'}</span>
                </div>
                <div className={styles.cartContentMiddle}>
                  <div className={styles.cartContentMiddleContainer}>
                    <label htmlFor="">Size: </label>
                    <select defaultValue="0" role="button" className={styles.select}>
                      {s.sizes.map((s, i) => (
                        <option key={s} value={i}>
                          {s}
                        </option>
                      ))}
                    </select>
                  </div>
                  <h2>
                    Product Code: <span className={styles.id}>{s._id}</span>
                  </h2>
                  <Link to={`/sneakers/${s._id}`} className={styles.productPageLink}>
                    Product page
                    <RightArrow />
                  </Link>
                </div>
                <div>
                  <h2 className={styles.price}>{s.price}&nbsp;&#8381;</h2>
                  <button onClick={() => handleRemoveCartItem(s._id)} className={styles.removeBtn}>
                    Remove
                  </button>
                </div>
              </div>
            ))
          ) : (
            <div className={styles.absenceCartItems}>
              <h1 className={styles.absenceHeading}>Your shopping cart is empty :(</h1>
              <p>Add items you want to shop</p>
              <Link to="/sneakers">
                <button className={styles.absenceBtn}>Shop now</button>
              </Link>
            </div>
          )}
        </div>
        <div className={styles.rightContent}>
          <div className={styles.rightContentContainer}>
            <div className={styles.checkout}>
              <h1 className={styles.orderSummary}>Order summary</h1>
              <div className={styles.subtotal}>
                Subtotal
                <span className={styles.subtotalNums}>{subtotal} &#8381;</span>
              </div>
              <div className={styles.shipping}>
                Shipping cost <span className={styles.subtotalNums}>{shippingCost} &#8381;</span>
              </div>
              <div className={styles.orderTotal}>
                Order total <span>{orderTotal} &#8381;</span>
              </div>
              <button disabled={!currentCart} className={styles.checkoutBtn} role="button">
                Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cart;
