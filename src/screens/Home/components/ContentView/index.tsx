import React, {useMemo} from 'react';
import {List, ListItem, useStyleSheet} from '@ui-kitten/components';
import {useSelector} from 'react-redux';

import SearchHeader from '../SearchHeader';
import RigthIcon from '../RigthIcon';
import LeftIcon from '../LeftIcon';
import themedStyles from './themedStyles';

import {ApplicationState} from '../../../../store/';
import {Contact} from '../../../../store/ducks/contacts';

//remove accents and capital letters
const normalizeText = (text: string): string =>
  text
    .toLowerCase()
    .normalize('NFD')
    .replace(/([\u0300-\u036f]|[^0-9a-zA-Z])/g, '');

const ContentView: React.FC = (): React.ReactElement => {
  const styles = useStyleSheet(themedStyles);

  const {data} = useSelector((state: ApplicationState) => state.contacts);
  const {name} = useSelector((state: ApplicationState) => state.search);

  const filteredData: Contact[] = useMemo(() => {
    if (name.length === 0) return data;
    return data.filter((item) =>
      normalizeText(item.name).includes(normalizeText(name)),
    );
  }, [data, name]);

  return (
    <List
      data={filteredData}
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
