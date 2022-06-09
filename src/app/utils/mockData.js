import React, { useEffect, useState } from 'react';

import brands from '../mockData/brands.json';
import materials from '../mockData/materials.json';
import sneakers from '../mockData/sneakers.json';
import httpService from '../services/http.service';

const useMockData = () => {
  const statusConst = {
    idle: 'Not Started',
    pending: 'In Process',
    success: 'Ready',
    error: 'Error occured',
  };

  const [error, setError] = useState(null);
  const [status, setStatus] = useState(statusConst.idle);
  const [progress, setProgress] = useState(0);
  const [count, setCount] = useState(0);

  const summaryCount =
    Object.keys(brands).length + Object.keys(materials).length + Object.keys(sneakers).length;

  const incrementCount = () => {
    setCount((prevState) => prevState + 1);
  };

  const updateProgress = () => {
    if (count !== 0 && status === statusConst.idle) {
      setStatus(statusConst.pending);
    }

    const newProgress = Math.floor((count / summaryCount) * 100);
    if (progress < newProgress) {
      setProgress(() => newProgress);
    }

    if (newProgress === 100) {
      setStatus(statusConst.success);
    }
  };

  useEffect(() => {
    updateProgress();
  }, [count]);

  async function initialize() {
    try {
      for (const brand of brands) {
        await httpService.put('brand/' + brand._id, brand);
        incrementCount();
      }
      for (const material of materials) {
        await httpService.put('material/' + material._id, material);
        incrementCount();
      }
      for (const sneaker of sneakers) {
        await httpService.put('sneakers/' + sneaker._id, sneaker);
        incrementCount();
      }
    } catch (error) {
      setError(error);
      setStatus(statusConst.error);
    }
  }

  return { error, initialize, progress, status };
};

export default useMockData;
