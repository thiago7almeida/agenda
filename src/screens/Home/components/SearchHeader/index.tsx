import React, {useCallback} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useStyleSheet, Layout, Input, Icon} from '@ui-kitten/components';

import themedStyles from './themedStyles';
import {setName} from '../../../../store/ducks/search';
import {ApplicationState} from 'src/store';

const SearchHeader: React.FC = (): React.ReactElement => {
  const styles = useStyleSheet(themedStyles);

  const {name} = useSelector((state: ApplicationState) => state.search);
  // const [searchQuery, setSearchQuery] = React.useState<string>();
  // const setValue = (newValue: string) => setSearchQuery(newValue);

  const dispatch = useDispatch();

  const setNameState = useCallback(
    (newValue) => {
      dispatch(setName(newValue));
    },
    [dispatch],
  );

  const accessoryRight = useCallback(
    () => <Icon style={styles.icon} fill="#8F9BB3" name="search" />,
    [],
  );

  return (
    <Layout style={styles.header} level="1">
      <Input
        placeholder="Buscar"
        value={name}
        onChangeText={setNameState}
        accessoryRight={accessoryRight}
      />
    </Layout>
  );
};

export default SearchHeader;
