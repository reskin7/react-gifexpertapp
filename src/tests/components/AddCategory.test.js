import { shallow } from 'enzyme';
import { AddCategory } from '../../components/AddCategory';

describe('', () => {
  const setCategories = jest.fn();
  let wrapper = shallow(
    <AddCategory setCategories={setCategories} setQuantity={2} />
  );

  beforeEach(() => {
    jest.clearAllMocks();
    wrapper = shallow(
      <AddCategory setCategories={setCategories} setQuantity={2} />
    );
  });

  test('should show correctly ', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('Must change the text input', () => {
    const input = wrapper.find('input');
    const value = 'Hola Mundo';
    input.simulate('change', { target: { value } });

    expect(wrapper.find('p').text().trim()).toBe(value);
  });

  test('should NOT call the setCategories', () => {
    wrapper.find('form').simulate('submit', { preventDefault() {} });

    expect(setCategories).not.toHaveBeenCalled();
  });

  test('should call setCategories and clean de textBox', () => {
    const value = 'Overwatch';
    const input = wrapper.find('input');
    // 1. Simular el input change
    input.simulate('change', { target: { value: value } });
    // 2. Simular el submit del form
    wrapper.find('form').simulate('submit', { preventDefault() {} });
    // 3. Debe llamarse el setCategories
    expect(setCategories).toHaveBeenCalled();
    expect(setCategories).toHaveBeenCalledTimes(1);
    expect(setCategories).toHaveBeenCalledWith(expect.any(Function));
    // 4. Value del input debe estar vacio ('')
    expect(wrapper.find('input').prop('value')).toBe('');
  });
});
