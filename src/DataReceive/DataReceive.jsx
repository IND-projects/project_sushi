import React, { useState, useEffect } from 'react';
import axios from 'axios';

export const DataReseive = () => {
  const [sushiData, setSushiData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://localhost:7247/Home/GetRolls');
        setSushiData(response.data);
      } catch (error) {
        console.error('Ошибка при получении данных:', error);
      }
    };

    fetchData();
  }, []);

  return sushiData;
};