import React, {useCallback} from 'react';
import {useStyleSheet, Layout, Input, Icon} from '@ui-kitten/components';

import themedStyles from './themedStyles';

const SearchHeader: React.FC = (): React.ReactElement => {
  const styles = useStyleSheet(themedStyles);
  const [searchQuery, setSearchQuery] = React.useState<string>();
  const setValue = (newValue: string) => setSearchQuery(newValue);

  const accessoryRight = useCallback(
    () => <Icon style={styles.icon} fill="#8F9BB3" name="search" />,
    [],
  );

  return (
    <Layout style={styles.header} level="1">
      <Input
        placeholder="Buscar"
        value={searchQuery}
        onChangeText={setValue}
        accessoryRight={accessoryRight}
      />
    </Layout>
  );
};

export default SearchHeader;
