import React from 'react';

import {shallow} from 'enzyme';
import toJson from 'enzyme-to-json';
import Details from '../src/screens/Details';
import {Contact} from '../src/store/ducks/contacts';
import {StackScreenProps} from '@react-navigation/stack';

type RootStackParamList = {
  Details: {isNew: boolean; item?: Contact};
};

type Props = StackScreenProps<RootStackParamList, 'Details'>;

describe('Details', () => {
  describe('rendering', () => {
    it('should match to snapshot - Primary', () => {
      const props: Props = {
        route: {params: {isNew: true}, key: 'Details', name: 'Details'},
        navigation: {
          addListener: jest.fn(),
          canGoBack: jest.fn(),
          dangerouslyGetParent: jest.fn(),
          dangerouslyGetState: jest.fn(),
          dispatch: jest.fn(),
          goBack: jest.fn(),
          isFocused: jest.fn(),
          navigate: jest.fn(),
          pop: jest.fn(),
          popToTop: jest.fn(),
          push: jest.fn(),
          removeListener: jest.fn(),
          replace: jest.fn(),
          reset: jest.fn(),
          setOptions: jest.fn(),
          setParams: jest.fn(),
        },
      };
      const component = shallow(<Details {...props} />);
      expect(toJson(component)).toMatchSnapshot('Primary Details snapshot');
    });
    it('should match to snapshot - Secondary', () => {
      const props: Props = {
        route: {
          params: {
            isNew: false,
            item: {
              email: '',
              name: 'nome',
              phone: '',
              id: '1234',
              address: {
                cep: '',
                city: '14955-000',
                complement: '',
                neighborhood: '',
                number: '',
                state: '',
                street: '',
              },
            },
          },
          key: 'Details',
          name: 'Details',
        },
        navigation: {
          addListener: jest.fn(),
          canGoBack: jest.fn(),
          dangerouslyGetParent: jest.fn(),
          dangerouslyGetState: jest.fn(),
          dispatch: jest.fn(),
          goBack: jest.fn(),
          isFocused: jest.fn(),
          navigate: jest.fn(),
          pop: jest.fn(),
          popToTop: jest.fn(),
          push: jest.fn(),
          removeListener: jest.fn(),
          replace: jest.fn(),
          reset: jest.fn(),
          setOptions: jest.fn(),
          setParams: jest.fn(),
        },
      };
      const component = shallow(<Details {...props} />);
      expect(toJson(component)).toMatchSnapshot('Secondary Details snapshot');
    });
  });
});
