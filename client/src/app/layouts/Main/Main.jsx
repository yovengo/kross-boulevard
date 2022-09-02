import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Main.module.scss';

const Main = () => {
  return (
    <section className={styles.parent}>
      <div className={styles.mainContainer}>
        <div className={styles.textBlock}>
          <h1 className={styles.heading}>Kross Boulevard is your guide to the world of sneakers</h1>
          <p className={styles.paragraph}>
            We are a rapidly developing project that will not leave anyone indifferent. New arrivals every week,
            limited-edition pairs of sneakers and much more are waiting for you with us. Join us and be in style
          </p>
          <Link to="/sneakers" className={styles.btn}>
            <button>Here goes!</button>
          </Link>
        </div>
        <h1 className={styles.editorsHeading}>Editor's Choice</h1>
        <div className={styles.imgBlock}>
          <div className={styles.imgBlockContainer}>
            <div className={styles.littleImgContainer}>
              <Link to="/sneakers/62e69d5a5458aac0ed320b14">
                <img
                  alt="sneakers"
                  className={styles.littleImg}
                  src="https://sneakerhead.ru/upload/iblock/72a/72a01d87a05d27120da22935512cf324.jpg"
                />
              </Link>
            </div>
            <div className={styles.littleImgContainer}>
              <Link to="/sneakers/62e69d5a5458aac0ed320b38">
                <img
                  alt="sneakers"
                  className={styles.littleImg}
                  src="https://sneakerhead.ru/upload/iblock/41a/41afe44c435f252b7857d4b657072a9f.JPG"
                />
              </Link>
            </div>
            <div className={styles.bigImgContainer}>
              <Link to="/sneakers/62e69d5a5458aac0ed320b35">
                <img
                  alt="sneakers"
                  className={styles.bigImg}
                  src="https://sneakerhead.ru/upload/iblock/4e6/4e6e19ec045189b5b356d11a3461ac65.jpg"
                />
              </Link>
            </div>
          </div>
          <div className={styles.imgBlockContainer}>
            <div className={styles.bigImgContainer}>
              <Link to="/sneakers/62e69d5a5458aac0ed320b2b">
                <img
                  alt="sneakers"
                  className={styles.bigImg}
                  src="https://sneakerhead.ru/upload/iblock/2b3/2b38316401f32983bed685bde617a797.jpg"
                />
              </Link>
            </div>
            <div className={styles.littleImgContainer}>
              <Link to="/sneakers/62e69d5a5458aac0ed320b49">
                <img
                  alt="sneakers"
                  className={styles.littleImg}
                  src="https://sneakerhead.ru/upload/iblock/6a8/6a84a75476d7fece2dc72defe69c34c7.jpg"
                />
              </Link>
            </div>
            <div className={styles.littleImgContainer}>
              <Link to="/sneakers/62e69d5a5458aac0ed320b52">
                <img
                  alt="sneakers"
                  className={styles.littleImg}
                  src="https://sneakerhead.ru/upload/iblock/c05/c05fd3482ea5998c99fb497fdb54fb4b.jpg"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Main;
