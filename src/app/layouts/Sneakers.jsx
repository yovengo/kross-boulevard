import React from 'react';
import { useParams } from 'react-router-dom';
import { SneakersProvider } from '../hooks/useSneakers';
import { SneakersListPage, SneakersPage } from '../components/page';

const Sneakers = () => {
  const params = useParams();
  const { sneakersId } = params;

  return (
    <>
      <SneakersProvider>{sneakersId ? <SneakersPage /> : <SneakersListPage />}</SneakersProvider>
    </>
  );
};

export default Sneakers;
