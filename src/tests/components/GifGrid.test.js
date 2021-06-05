import { shallow } from 'enzyme';
import { GifGrid } from '../../components/GifGrid';
import { useFetchGifs } from '../../hooks/useFetchGifs';
import '@testing-library/jest-dom';

jest.mock('../../hooks/useFetchGifs');

describe('Test en GifGrid', () => {
  const category = 'Microsoft';

  test('should match the snapshot ', () => {
    useFetchGifs.mockReturnValue({
      data: [],
      loading: true,
    });
    const wrapper = shallow(<GifGrid category={category} quantity={2} />);
    expect(wrapper).toMatchSnapshot();
  });

  test('should show items when images are loaded with useFetchGifs', () => {
    const gifs = [
      {
        id: 'ABC',
        url: 'http://www.google.com/HOLA.jpg',
        title: 'TITULO 1',
      },
      {
        id: 'DFG',
        url: 'http://www.google.com/CHAU.jpg',
        title: 'TITULO 2',
      },
    ];
    useFetchGifs.mockReturnValue({
      data: gifs,
      loading: false,
    });
    const wrapper = shallow(<GifGrid category={category} quantity={2} />);
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('p').exists()).toBe(false);
    expect(wrapper.find('GifGridItem').length).toBe(gifs.length);
  });
});
