import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from './AdminPanelItem.module.scss';

import { Brand } from '../Brand';
import { MaterialsList } from '../Materials';

const AdminPanelItem = ({ sneakers, onEdit, onRemove }) => {
  return (
    <div className={styles.rightContent}>
      {sneakers &&
        sneakers.map((sneakersPair) => (
          <div key={sneakersPair?._id} className={styles.cartItem}>
            <img src={sneakersPair?.image[0]} alt="sneakers" className={styles.img} />
            <div className={styles.cartContentLeft}>
              <span className={styles.brand}>
                <Brand id={sneakersPair?.brand} />
              </span>
              <span className={styles.name}>{sneakersPair?.name}</span>
              <h2 className={styles.idContainer}>
                Product Id: <span className={styles.id}>{sneakersPair?._id}</span>
              </h2>
            </div>
            <div className={styles.cartContentMiddle}>
              <div className={styles.cartContentMiddleContainer}>
                <span className={styles.stock}>{sneakersPair?.isInStock ? 'In Stock' : 'Out of Stock'}</span>
                <h2>
                  Sex: <span className={styles.sex}>{sneakersPair?.sex}</span>
                </h2>
                <h2>
                  Sizes:{' '}
                  {sneakersPair?.sizes.map((size) => (
                    <span className={styles.sizes} key={`${sneakersPair.name} + ${size}`}>
                      {size},{' '}
                    </span>
                  ))}
                </h2>
                <h2>
                  Materials: <MaterialsList materials={sneakersPair?.materials} />
                </h2>
                <h2>
                  Описание на{' '}
                  <Link to={`/sneakers/${sneakersPair?._id}`} className={styles.description}>
                    странице товара
                  </Link>
                </h2>
              </div>
            </div>
            <div>
              <h2 className={styles.price}>{sneakersPair?.price}&nbsp;&#8381;</h2>
              <div>
                <button onClick={() => onEdit(sneakersPair)} className={styles.editBtn}>
                  Edit
                </button>
              </div>
              <div>
                <button onClick={() => onRemove(sneakersPair._id)} className={styles.removeBtn}>
                  Remove
                </button>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};
AdminPanelItem.propTypes = {
  sneakers: PropTypes.array,
  onEdit: PropTypes.func,
  onRemove: PropTypes.func,
};
export default AdminPanelItem;
