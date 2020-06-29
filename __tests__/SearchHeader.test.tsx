import React from 'react';

import {shallow} from 'enzyme';
import toJson from 'enzyme-to-json';
import SearchHeader from '../src/screens/Home/components/SearchHeader';
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

describe('SearchHeader', () => {
  describe('Rendering', () => {
    it('should match to snapshot - Primary', () => {
      const component = shallow(<SearchHeader />);
      expect(toJson(component)).toMatchSnapshot(
        'Primary SearchHeader  snapshot',
      );
    });
  });
});
