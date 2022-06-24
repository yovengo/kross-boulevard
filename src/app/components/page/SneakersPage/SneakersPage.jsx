import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import styles from './SneakersPage.module.scss';
import { Link } from 'react-router-dom';
import { useSneakers } from '../../../hooks/useSneakers';
import { Brand, MaterialsList, Slider } from '../../ui';
import { useBrand } from '../../../hooks/useBrand';

const SneakersPage = ({ sneakersId }) => {
  const { getSneakersById } = useSneakers();
  const sneakers = getSneakersById(sneakersId);

  const { getBrand } = useBrand();
  const brand = getBrand(sneakers.brand);

  useEffect(() => {
    window.scroll(0, 0);
  }, []);

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
              <div className={styles.sizesContainer}>
                <div className={styles.sizesInnerContainer}>
                  <span className={styles.sizesInscription}>Sizes:</span>
                  <div className={styles.selectContainer}>
                    <select role="button" className={styles.selectClass}>
                      {sneakers.sizes.map((s) => (
                        <option key={s}>{s}</option>
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
                <button className={styles.cartBtn}>Add to cart</button>
              </div>
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
