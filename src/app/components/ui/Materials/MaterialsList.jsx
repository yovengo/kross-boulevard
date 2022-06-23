import React from 'react';
import { useMaterials } from '../../../hooks/useMaterials';
import { Material } from './index';

const MaterialsList = ({ materials }) => {
  const { isLoading } = useMaterials();
  if (!isLoading) {
    return (
      <>
        {materials.map((m) => (
          <Material key={m} id={m} />
        ))}
      </>
    );
  } else {
    return 'Loading...';
  }
};

export default MaterialsList;
