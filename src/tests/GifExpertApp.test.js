import { shallow } from 'enzyme';
import '@testing-library/jest-dom';
import GifExpertApp from '../GifExpertApp';

describe('Test on GifExpertApp', () => {
  test('should match snapshot', () => {
    const wrapper = shallow(<GifExpertApp />);
    expect(wrapper).toMatchSnapshot();
  });

  test('should show an array of categories', () => {
    const categories = ['One punch', 'Dragon ball'];
    const wrapper = shallow(<GifExpertApp defaultCategories={categories} />);

    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('GifGrid').length).toBe(categories.length);
  });
});
