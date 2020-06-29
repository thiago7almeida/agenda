import React, {useState} from 'react';
import {View} from 'react-native';
import {Layout, Icon, Input, Button} from '@ui-kitten/components';

import styles from './styles';
import {ScrollView} from 'react-native-gesture-handler';

const Form: React.FC<{isNew?: boolean}> = ({isNew}) => {
  const [isEdit, setIsEdit] = useState<boolean>(false);

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <Layout level="1" style={styles.container}>
        <Layout level="1" style={styles.inputContainer}>
          <Icon name="person-outline" fill="#8F9BB3" style={styles.icon} />
          <Input
            disabled={isNew ? false : !isEdit}
            placeholder="Nome"
            style={styles.input}
          />
        </Layout>

        <Layout level="1" style={[styles.inputContainer, {marginTop: 20}]}>
          <Icon name="phone-outline" fill="#8F9BB3" style={styles.icon} />
          <Input
            disabled={isNew ? false : !isEdit}
            placeholder="Celular"
            style={styles.input}
          />
        </Layout>

        <Layout level="1" style={[styles.inputContainer, {marginTop: 20}]}>
          <Icon name="email-outline" fill="#8F9BB3" style={styles.icon} />
          <Input
            disabled={isNew ? false : !isEdit}
            placeholder="Email"
            style={styles.input}
          />
        </Layout>

        <Layout level="1" style={[styles.inputContainer, {marginTop: 20}]}>
          <Icon name="pin-outline" fill="#8F9BB3" style={styles.icon} />
          <Input
            disabled={isNew ? false : !isEdit}
            placeholder="Cep"
            style={styles.input}
          />
        </Layout>

        <Layout level="1" style={styles.inputContainer}>
          <View style={styles.icon} />
          <Input
            disabled={isNew ? false : !isEdit}
            placeholder="Estado"
            style={styles.input}
          />
        </Layout>

        <Layout level="1" style={styles.inputContainer}>
          <View style={styles.icon} />
          <Input
            disabled={isNew ? false : !isEdit}
            placeholder="Cidade"
            style={styles.input}
          />
        </Layout>

        <Layout level="1" style={styles.inputContainer}>
          <View style={styles.icon} />
          <Input
            disabled={isNew ? false : !isEdit}
            placeholder="Rua"
            style={styles.input}
          />
        </Layout>

        <Layout level="1" style={styles.inputContainer}>
          <View style={styles.icon} />
          <Input
            disabled={isNew ? false : !isEdit}
            placeholder="Endereço"
            style={styles.input}
          />
        </Layout>

        <Layout level="1" style={styles.inputContainer}>
          <View style={styles.icon} />
          <Input
            disabled={isNew ? false : !isEdit}
            placeholder="Número"
            style={styles.input}
          />
        </Layout>

        <Layout level="1" style={[styles.inputContainer, {marginBottom: 20}]}>
          <View style={styles.icon} />
          <Input
            disabled={isNew ? false : !isEdit}
            placeholder="Complemento"
            style={styles.input}
          />
        </Layout>
        {(isEdit || isNew) && (
          <>
            <Button
              style={{marginBottom: 10}}
              appearance="outline"
              onPress={() => setIsEdit(false)}>
              Salvar
            </Button>
            {!isNew && (
              <Button appearance="ghost" status="danger">
                Deletar
              </Button>
            )}
          </>
        )}
        {!isEdit && !isNew && (
          <Button onPress={() => setIsEdit(true)} appearance="outline">
            Editar
          </Button>
        )}
      </Layout>
    </ScrollView>
  );
};
Form.defaultProps = {
  isNew: false,
};

export default Form;
