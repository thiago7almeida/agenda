import React from 'react';
import {View, Text} from 'react-native';

import themedStyles from './themedStyles';
import {useStyleSheet} from '@ui-kitten/components';

const LeftIcon = (name: string) => {
  const styles = useStyleSheet(themedStyles);
  return (
    <View style={styles.iconCircle}>
      <Text>{name[0].toUpperCase()}</Text>
    </View>
  );
};

export default LeftIcon;
