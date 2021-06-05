import { shallow } from 'enzyme';
import { GifGridItem } from '../../components/GifGridItem';

describe('Test en GifGridItem', () => {
  // let wrapper = shallow(<GifGridItem />);
  // beforeEach(() => {
  //   wrapper = shallow(<GifGridItem />);
  // });

  const title = 'Titulo de prueba';
  const url = 'https://www.google.com';

  test('should show the component correctly', () => {
    let wrapper = shallow(<GifGridItem url={url} title={title} />);
    expect(wrapper).toMatchSnapshot();
  });
});
