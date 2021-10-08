import { useFetchGifs } from '../../hooks/useFetchGifs';
import '@testing-library/jest-dom';
import { renderHook } from '@testing-library/react-hooks';

describe('Test on hook useFetchGifs', () => {
  test('should return the initial state ', () => {
    // const { result } = renderHook(() => {
    //   useFetchGifs('Pokemon', 1);
    // });
    // console.log(result.current);
    const rta = renderHook(() => {
      useFetchGifs('Pokemon', 1);
    });
    console.log(rta.result.current);
    // const { data, loading } = result.current;
    // const { data, loading } = useFetchGifs(category, quantity);
  });
});
