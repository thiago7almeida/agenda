import React from 'react';
import {TopNavigation, Divider, Button, Icon} from '@ui-kitten/components';
import styles from './styles';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useNavigation} from '@react-navigation/native';
import Form from './components/Form';
import {StackScreenProps} from '@react-navigation/stack';

type RootStackParamList = {
  Details: {isNew: boolean};
};

type Props = StackScreenProps<RootStackParamList, 'Details'>;
const IconPlus = () => {
  return (
    <Icon name="arrow-ios-back-outline" fill="black" style={styles.iconPlus} />
  );
};

const ButtonLeft = () => {
  const navigation = useNavigation();
  return (
    <Button
      appearance="ghost"
      onPress={() => navigation.goBack()}
      accessoryLeft={IconPlus}
    />
  );
};

const App = ({route}: Props) => {
  const {isNew} = route.params;
  return (
    <SafeAreaView style={styles.container}>
      <TopNavigation
        title="Detalhe do Contato"
        alignment={'center'}
        accessoryLeft={ButtonLeft}
      />
      <Divider />
      <Form isNew={isNew} />
    </SafeAreaView>
  );
};

export default App;
