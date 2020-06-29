import React from 'react';

import {shallow} from 'enzyme';
import toJson from 'enzyme-to-json';
import Form from '../src/screens/Details/components/Form';
import * as redux from 'react-redux';

const spy = jest.spyOn(redux, 'useSelector');
spy.mockReturnValue({data: [], name: ''});

const spyOnUseDispatch = jest;
spyOnUseDispatch.spyOn(redux, 'useDispatch').mockReturnValue(jest.fn());

jest.mock('@react-navigation/native', () => {
  const actualNav = jest.requireActual('@react-navigation/native');
  return {
    ...actualNav,
    useFocusEffect: () => jest.fn(),
    useNavigation: () => {
      navigation: () => jest.fn();
    },
  };
});

describe('Form', () => {
  describe('Rendering', () => {
    it('should match to snapshot - Primary', () => {
      const component = shallow(<Form />);
      expect(toJson(component)).toMatchSnapshot('Primary Form  snapshot');
    });
  });
});
