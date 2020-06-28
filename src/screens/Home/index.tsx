import React from 'react';
import {TopNavigation, Divider, Button, Icon} from '@ui-kitten/components';
import styles from './styles';
import ContentView from './components/ContentView';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useNavigation} from '@react-navigation/native';

const IconPlus = () => {
  return <Icon name="plus-outline" fill="black" style={styles.iconPlus} />;
};

const ButtonRigth = () => {
  const navigation = useNavigation();
  return (
    <Button
      appearance="ghost"
      onPress={() => navigation.navigate('Details')}
      accessoryLeft={IconPlus}
    />
  );
};

const App: React.FC = () => {
  return (
    <SafeAreaView style={styles.container}>
      <TopNavigation
        title="Contatos"
        alignment={'center'}
        accessoryRight={ButtonRigth}
      />
      <Divider />
      <ContentView />
    </SafeAreaView>
  );
};

export default App;
