import React from 'react';
import { Material } from './index';
import { useSelector } from 'react-redux';
import { getMaterialsByIds, getMaterialsLoadingStatus } from '../../../store/materials';

const MaterialsList = ({ materials }) => {
  const isLoading = useSelector(getMaterialsLoadingStatus());
  if (isLoading) return 'Loading...';
  const materialsList = useSelector(getMaterialsByIds(materials));

  return (
    <>
      {materialsList.map((material) => (
        <Material key={material._id} {...material} />
      ))}
    </>
  );
};

export default MaterialsList;
