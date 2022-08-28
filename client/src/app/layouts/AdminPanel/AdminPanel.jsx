import React, { useState } from 'react';
import styles from './AdminPanel.module.scss';

import { useDispatch, useSelector } from 'react-redux';
import { createSneakers, getSneakers, removeSneakers, updateSneakersData } from '../../store/sneakers';
import { getBrands } from '../../store/brands';
import { getMaterials } from '../../store/materials';

import { AdminPanelItem } from '../../components/ui';
import { MultiSelectField, RadioField, SelectField, TextareaField, TextField } from '../../components/common/form';

const AdminPanel = () => {
  const dispatch = useDispatch();

  const sneakers = useSelector(getSneakers());
  const brands = useSelector(getBrands());
  const materials = useSelector(getMaterials());

  const reversedSneakers = sneakers && [...sneakers].reverse();

  const initData = {
    brand: '',
    name: '',
    sex: 'male',
    sizes: '',
    materials: [],
    description: '',
    isInStock: true,
    price: '',
    image: '',
  };
  const [data, setData] = useState(initData);
  const [mode, setMode] = useState('create');
  const [currentSneakers, setCurrentSneakers] = useState();

  const getMaterialsByIds = (materialsIds) => {
    if (materials) {
      const materialsArray = [];
      for (const materId of materialsIds) {
        for (const material of materials) {
          if (material._id === materId) {
            materialsArray.push(material);
            break;
          }
        }
      }
      return materialsArray;
    }
    return [];
  };

  const handleEdit = (sneakersPair) => {
    setMode('edit');
    setCurrentSneakers(sneakersPair);
    setData({
      ...sneakersPair,
      sizes: sneakersPair.sizes.join(),
      image: sneakersPair.image.join(),
      materials: getMaterialsByIds(sneakersPair.materials),
    });
  };

  const handleRemove = (sneakersPair) => {
    dispatch(removeSneakers(sneakersPair));
  };

  const handleChange = (target) => {
    setData((prevState) => ({
      ...prevState,
      [target.name]: target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (mode === 'create') {
      dispatch(
        createSneakers({
          ...data,
          sizes: data?.sizes.split(','),
          price: Number(data?.price),
          image: data?.image.split(','),
        })
      );
      setData(initData);
    } else {
      dispatch(
        updateSneakersData({
          ...data,
          _id: currentSneakers?._id,
          sizes: data?.sizes.split(','),
          price: Number(data?.price),
          image: data?.image.split(','),
        })
      );
      setData(initData);
      setMode('create');
    }

    console.log({
      ...data,
      sizes: data?.sizes.split(','),
      price: Number(data?.price),
      image: data?.image.split(','),
    });
  };

  return (
    <section className={styles.parent}>
      <div className={styles.mainContainer}>
        {brands && materials && (
          <form onSubmit={handleSubmit} className={styles.leftContent}>
            <div className={styles.formBlock}>
              <button
                type="button"
                onClick={() => {
                  setData(initData);
                  setCurrentSneakers();
                  setMode('create');
                }}
                className={styles.clearBtn}
              >
                Clear
              </button>
              <SelectField
                label="Choose brand"
                defaultOption="Choose..."
                options={brands}
                onChange={handleChange}
                value={data?.brand}
              />
              <TextField label="Enter name" name="name" value={data?.name} onChange={handleChange} />
              <RadioField
                options={[
                  { name: 'Male', value: 'male' },
                  { name: 'Female', value: 'female' },
                ]}
                value={data?.sex}
                name="sex"
                onChange={handleChange}
                label="Choose sex"
              />
              <TextField
                label="Enter sizes separated by commas"
                name="sizes"
                value={data?.sizes}
                onChange={handleChange}
              />
              <MultiSelectField
                options={materials}
                onChange={handleChange}
                defaultValue={data?.materials}
                name="materials"
                label="Choose materials"
              />
              <TextareaField
                value={data?.description}
                name="description"
                onChange={handleChange}
                label="Enter description"
              />
              <TextField label="Enter price" name="price" type="number" value={data?.price} onChange={handleChange} />
              <TextField
                label="Side, front, back photos URLs separated by commas"
                name="image"
                value={data?.image}
                onChange={handleChange}
              />
              <button type="submit" className={styles.submitBtn}>
                Submit
              </button>
            </div>
          </form>
        )}
        <AdminPanelItem sneakers={reversedSneakers} onEdit={handleEdit} onRemove={handleRemove} />
      </div>
    </section>
  );
};

export default AdminPanel;
