import React from 'react';

import {shallow} from 'enzyme';
import toJson from 'enzyme-to-json';
import ContentView from '../src/screens/Home/components/ContentView';
import * as redux from 'react-redux';

const spy = jest.spyOn(redux, 'useSelector');

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

describe('ContentView', () => {
  describe('Rendering', () => {
    it('should match to snapshot - Primary', () => {
      spy.mockReturnValue({data: [], name: ''});
      const component = shallow(<ContentView />);
      expect(toJson(component)).toMatchSnapshot(
        'Primary ContentView  snapshot',
      );
    });
    it('should match to snapshot - Second', () => {
      spy.mockReturnValue({data: [{name: 'nome'}], name: ''});
      const component = shallow(<ContentView />);
      expect(toJson(component)).toMatchSnapshot('Second ContentView snapshot');
    });
    it('should match to snapshot - Third', () => {
      spy.mockReturnValue({data: [{name: 'nome'}], name: 'n'});
      const component = shallow(<ContentView />);
      expect(toJson(component)).toMatchSnapshot('Third ContentView snapshot');
    });
    it('should match to snapshot - Fourth', () => {
      spy.mockReturnValue({data: [{name: 'nome'}], name: 'd'});
      const component = shallow(<ContentView />);
      expect(toJson(component)).toMatchSnapshot('Fourth ContentView snapshot');
    });
  });
});
