import React from 'react';
import { useParams } from 'react-router-dom';
import { SneakersListPage, SneakersPage } from '../../components/page';
import { SneakersLoader } from '../../components/ui/hoc';

const Sneakers = () => {
  const params = useParams();
  const { sneakersId } = params;

  return (
    <>
      <SneakersLoader>{sneakersId ? <SneakersPage sneakersId={sneakersId} /> : <SneakersListPage />}</SneakersLoader>
    </>
  );
};

export default Sneakers;
