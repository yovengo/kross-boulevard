import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import styles from './SneakersPage.module.scss';
import { Link } from 'react-router-dom';
import { Brand, MaterialsList, Slider } from '../../ui';
import { useDispatch, useSelector } from 'react-redux';
import { getBrandById } from '../../../store/brands';
import { getSneakersById } from '../../../store/sneakers';
import { getCartData, getCurrentUser, getIsLoggedIn, updateUserData } from '../../../store/users';

const SneakersPage = ({ sneakersId }) => {
  const dispatch = useDispatch();
  const currentUser = useSelector(getCurrentUser());
  const currentCart = useSelector(getCartData());
  const isLoggedIn = useSelector(getIsLoggedIn());

  const sneakers = useSelector(getSneakersById(sneakersId));
  const brand = useSelector(getBrandById(sneakers.brand));

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
        ...currentUser,
        cart: cartValue,
      })
    );
    setButtonState(true);
  };

  if (sneakers && brand) {
    return (
      <section className={styles.parent}>
        <div className={styles.containerClass}>
          <h1 className={styles.links}>
            <Link to="/">Home</Link> > <Link to="/sneakers">Sneakers</Link> >{' '}
            <span className={styles.activeLink}>{sneakers.name}</span>
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
                  <span className={styles.sex}>
                    Sex: <span className={styles.sexContent}>{sneakers.sex}</span>
                  </span>
                </div>
              </div>
              <form onSubmit={handleSubmit}>
                <div className={styles.sizesContainer}>
                  <div className={styles.sizesInnerContainer}>
                    <span className={styles.sizesInscription}>Sizes:</span>
                    <div className={styles.selectContainer}>
                      <select defaultValue="0" role="button" className={styles.selectClass}>
                        {sneakers.sizes.map((s, i) => (
                          <option disabled key={s} value={i}>
                            {s}
                          </option>
                        ))}
                      </select>
                      <span className={styles.arrowIcon}>
                        <svg
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          className="w-4 h-4"
                          viewBox="0 0 24 24"
                        >
                          <path d="M6 9l6 6 6-6" />
                        </svg>
                      </span>
                    </div>
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
                        Added to <span className="underline hover:text-red-700">cart</span>
                      </p>
                    </Link>
                  )}
                </div>
                {!isLoggedIn && (
                  <p className="text-red-600">
                    <Link to="/login" className="underline hover:text-red-700">
                      Login
                    </Link>{' '}
                    before shopping
                  </p>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>
    );
  } else {
    return 'Loading...';
  }
};
SneakersPage.propTypes = {
  sneakersId: PropTypes.string.isRequired,
};
export default SneakersPage;
