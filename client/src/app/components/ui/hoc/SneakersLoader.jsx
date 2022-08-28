import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { getDataStatus, loadSneakersList } from '../../../store/sneakers';
import { Loader } from '../../common';

const SneakersLoader = ({ children }) => {
  const dispatch = useDispatch();
  const dataStatus = useSelector(getDataStatus());

  useEffect(() => {
    if (!dataStatus) dispatch(loadSneakersList());
  }, []);
  if (!dataStatus) return <Loader />;
  return children;
};
SneakersLoader.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
};
export default SneakersLoader;
