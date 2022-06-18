import React from 'react';
import { useParams } from 'react-router-dom';
import { SneakersListPage, SneakersPage } from '../components/page';

const Sneakers = () => {
  const params = useParams();
  const { sneakersId } = params;

  return <>{sneakersId ? <SneakersPage /> : <SneakersListPage />}</>;
};

export default Sneakers;
