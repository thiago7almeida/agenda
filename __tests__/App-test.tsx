import React from 'react';

import {shallow, ShallowWrapper} from 'enzyme';
import App from '../App';
import {View} from 'react-native';

describe('App', () => {
  describe('rendering', () => {
    let wrapper: ShallowWrapper;
    let props: Object;
    beforeEach(() => {
      wrapper = shallow(<App />);
    });

    it('should render a <View />', () => {
      expect(wrapper.equals(<App />));
    });
  });
});
