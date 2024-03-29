import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from './SneakersPage.module.scss';

import { Brand, MaterialsList, Slider } from '../../ui';

import { useDispatch, useSelector } from 'react-redux';
import { getBrandById } from '../../../store/brands';
import { getSneakersById } from '../../../store/sneakers';
import { getCartData, getIsLoggedIn, updateUserData } from '../../../store/users';

const SneakersPage = ({ sneakersId }) => {
  const dispatch = useDispatch();

  const sneakers = useSelector(getSneakersById(sneakersId));
  const brand = useSelector(getBrandById(sneakers.brand));

  const currentCart = useSelector(getCartData());
  const isLoggedIn = useSelector(getIsLoggedIn());

  const [buttonState, setButtonState] = useState(false);

  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    const cartValue = !currentCart ? [sneakersId] : [...currentCart, sneakersId];
    cartValue.sort();

    dispatch(
      updateUserData({
        cart: cartValue,
      })
    );
    setButtonState(true);
  };

  if (sneakers && brand) {
    return (
      <section className={styles.parent}>
        <div className={styles.mainContainer}>
          <h1 className={styles.pathHeading}>
            <Link to="/">Home</Link> > <Link to="/sneakers">Sneakers</Link> >{' '}
            <span className={styles.selectedPath}>{sneakers.name}</span>
          </h1>
          <div className={styles.content}>
            <Slider images={sneakers.image} />
            <div className={styles.contentRight}>
              <h2 className={styles.brandName}>
                <Brand id={sneakers.brand} />
              </h2>
              <h1 className={styles.sneakersName}>{sneakers.name}</h1>
              <div className={styles.socialMediaContainer}>
                <a href={brand.officialSiteURL} target="_blank">
                  <img
                    src="https://www.svgrepo.com/show/14443/home.svg"
                    alt="Official site"
                    className={styles.officialSiteIcon}
                  />
                </a>
                <a href={brand.instagramURL} target="_blank">
                  <img
                    src="https://cdn.worldvectorlogo.com/logos/instagram-glyph-1.svg"
                    alt="Instagram"
                    className={styles.instagramIcon}
                  />
                </a>
              </div>
              <p className={styles.description}>{sneakers.description}</p>
              <div className={styles.characteristicsContainer}>
                <div className={styles.characteristicsInnerContainer}>
                  <span className={styles.materials}>
                    Materials: <MaterialsList materials={sneakers.materials} />
                  </span>
                  <span className={styles.sexContainer}>
                    Sex: <span className={styles.sex}>{sneakers.sex}</span>
                  </span>
                </div>
              </div>
              <form onSubmit={handleSubmit}>
                <div className={styles.sizesContainer}>
                  <span className={styles.sizesInscription}>Available sizes:</span>
                  <div className={styles.sizesInnerContainer}>
                    {sneakers && sneakers.sizes.map((size) => <p className={styles.sizeItem}>{size}</p>)}
                  </div>
                </div>

                <div className={styles.priceAndBtnContainer}>
                  <span className={styles.price}>{sneakers.price} &#8381;</span>
                  {!buttonState ? (
                    <button type="submit" disabled={!isLoggedIn} className={styles.cartBtn}>
                      Add to cart
                    </button>
                  ) : (
                    <Link to="/cart" className={styles.cartBtnAdded}>
                      <p>
                        {' '}
                        Added to <span className={styles.cartInscription}>cart</span>
                      </p>
                    </Link>
                  )}
                </div>
                {!isLoggedIn ? (
                  <p className={styles.notice}>
                    <Link to="/login" className={styles.loginLink}>
                      Login
                    </Link>{' '}
                    before shopping
                  </p>
                ) : (
                  <p className={styles.notice}>Choose your size in the shopping cart!</p>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>
    );
  }
};
SneakersPage.propTypes = {
  sneakersId: PropTypes.string.isRequired,
};
export default SneakersPage;
