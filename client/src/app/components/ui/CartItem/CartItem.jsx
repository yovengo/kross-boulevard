import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from './CartItem.module.scss';

import { RightArrow } from '../../../assets/svg';
import { Brand } from '../Brand';

const CartItem = ({ sneakers, onRemoveCartItem }) => {
  return (
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
              <button onClick={() => onRemoveCartItem(s._id)} className={styles.removeBtn}>
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
  );
};
CartItem.propTypes = {
  onRemoveCartItem: PropTypes.func.isRequired,
  sneakers: PropTypes.array,
};
export default CartItem;
