import { useEffect, useState } from 'react';
import { getGifs } from '../helpers/getGifs';
export const useFetchGifs = (category, quantity) => {
  const [state, setState] = useState({
    data: [],
    loading: true,
  });

  useEffect(() => {
    getGifs(category, quantity).then((imgs) => {
      setState({
        data: imgs,
        loading: false,
      });
    });
  }, [category]); // eslint-disable-line react-hooks/exhaustive-deps

  return state;
};
