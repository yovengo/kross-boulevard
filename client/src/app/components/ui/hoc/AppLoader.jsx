import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { getSneakersLoadingStatus, loadSneakersList } from '../../../store/sneakers';
import { loadBrandsList } from '../../../store/brands';
import { loadMaterialsList } from '../../../store/materials';
import { getIsLoggedIn, getUsersLoadingStatus, loadUsersList } from '../../../store/users';
import { Loader } from '../../common';

const AppLoader = ({ children }) => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(getIsLoggedIn());

  const sneakersLoadingStatus = useSelector(getSneakersLoadingStatus());
  const usersLoadingStatus = useSelector(getUsersLoadingStatus());

  useEffect(() => {
    dispatch(loadSneakersList());
    dispatch(loadBrandsList());
    dispatch(loadMaterialsList());
    if (isLoggedIn) {
      dispatch(loadUsersList());
    }
  }, [isLoggedIn]);

  if (sneakersLoadingStatus && usersLoadingStatus) return <Loader />;
  return children;
};
AppLoader.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
};
export default AppLoader;
