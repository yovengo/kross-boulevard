import React from 'react';
import PropTypes from 'prop-types';
import styles from './Checkout.module.scss';

const Checkout = ({ subtotal, shippingCost, orderTotal, currentCart }) => {
  return (
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
  );
};
Checkout.propTypes = {
  subtotal: PropTypes.number.isRequired,
  shippingCost: PropTypes.number.isRequired,
  orderTotal: PropTypes.number.isRequired,
  currentCart: PropTypes.array,
};
export default Checkout;
