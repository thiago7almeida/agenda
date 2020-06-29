import React from 'react';

import {shallow} from 'enzyme';
import toJson from 'enzyme-to-json';
import Home from '../src/screens/Home';

describe('Home', () => {
  describe('Rendering', () => {
    it('should match to snapshot - Primary', () => {
      const component = shallow(<Home />);
      expect(toJson(component)).toMatchSnapshot('Primary Home snapshot');
    });
  });
});
