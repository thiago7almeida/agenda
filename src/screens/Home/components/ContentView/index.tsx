import React from 'react';
import {List, ListItem, useStyleSheet} from '@ui-kitten/components';

import SearchHeader from '../SearchHeader';
import RigthIcon from '../RigthIcon';
import LeftIcon from '../LeftIcon';
import themedStyles from './themedStyles';

const mockData = [
  {name: 'name', phone: '(16) 9963894106'},
  {name: 'thiago', phone: '(16) 9963894106'},
  {name: 'Jose', phone: '(16) 9963894106'},
  {name: 'Valmir', phone: '(16) 9963894106'},
  {name: 'Gustavo', phone: '(16) 9963894106'},
  {name: 'Gabi', phone: '(16) 9963894106'},
  {name: 'Cristina', phone: '(16) 9963894106'},
  {name: 'Patricia', phone: '(16) 9963894106'},
  {name: 'Priscila', phone: '(16) 9963894106'},
  {name: 'thiago', phone: '(16) 9963894106'},
  {name: 'Jose', phone: '(16) 9963894106'},
  {name: 'Valmir', phone: '(16) 9963894106'},
  {name: 'Gustavo', phone: '(16) 9963894106'},
  {name: 'Gabi', phone: '(16) 9963894106'},
  {name: 'Cristina', phone: '(16) 9963894106'},
  {name: 'Patricia', phone: '(16) 9963894106'},
  {name: 'Priscila', phone: '(16) 9963894106'},
  {name: 'Deh', phone: '(16) 9963894106'},
];

const ContentView: React.FC = (): React.ReactElement => {
  const styles = useStyleSheet(themedStyles);

  return (
    <List
      data={mockData}
      contentContainerStyle={styles.contentContainerStyle}
      renderItem={(props) => (
        <ListItem
          {...props}
          style={styles.listItem}
          title={props.item.name}
          description={props.item.phone}
          accessoryLeft={() => LeftIcon(props.item.name)}
          accessoryRight={RigthIcon}
        />
      )}
      ListHeaderComponent={SearchHeader}
    />
  );
};

export default ContentView;
