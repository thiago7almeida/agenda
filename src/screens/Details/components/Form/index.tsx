import React, {useState} from 'react';
import {View} from 'react-native';
import {Layout, Icon, Input, Button} from '@ui-kitten/components';
import {useForm} from 'react-hook-form';
import {ScrollView} from 'react-native-gesture-handler';

import styles from './styles';
import {Contact} from 'src/store/ducks/contacts';

const Form: React.FC<{isNew?: boolean; item?: Contact}> = ({isNew, item}) => {
  const [isEdit, setIsEdit] = useState<boolean>(false);

  const {register, handleSubmit, errors} = useForm({});
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <Layout level="1" style={styles.container}>
        <Layout level="1" style={styles.inputContainer}>
          <Icon name="person-outline" fill="#8F9BB3" style={styles.icon} />
          <Input
            ref={register}
            defaultValue={item?.name}
            disabled={isNew ? false : !isEdit}
            placeholder="Nome"
            style={styles.input}
          />
        </Layout>

        <Layout level="1" style={[styles.inputContainer, {marginTop: 20}]}>
          <Icon name="phone-outline" fill="#8F9BB3" style={styles.icon} />
          <Input
            ref={register}
            defaultValue={item?.phone}
            disabled={isNew ? false : !isEdit}
            placeholder="Celular"
            style={styles.input}
          />
        </Layout>

        <Layout level="1" style={[styles.inputContainer, {marginTop: 20}]}>
          <Icon name="email-outline" fill="#8F9BB3" style={styles.icon} />
          <Input
            ref={register}
            defaultValue={item?.email}
            disabled={isNew ? false : !isEdit}
            placeholder="Email"
            style={styles.input}
          />
        </Layout>

        <Layout level="1" style={[styles.inputContainer, {marginTop: 20}]}>
          <Icon name="pin-outline" fill="#8F9BB3" style={styles.icon} />
          <Input
            ref={register}
            defaultValue={item?.address.cep}
            disabled={isNew ? false : !isEdit}
            placeholder="Cep"
            style={styles.input}
          />
        </Layout>

        <Layout level="1" style={styles.inputContainer}>
          <View style={styles.icon} />
          <Input
            ref={register}
            defaultValue={item?.address.state}
            disabled={isNew ? false : !isEdit}
            placeholder="Estado"
            style={styles.input}
          />
        </Layout>

        <Layout level="1" style={styles.inputContainer}>
          <View style={styles.icon} />
          <Input
            ref={register}
            defaultValue={item?.address.city}
            disabled={isNew ? false : !isEdit}
            placeholder="Cidade"
            style={styles.input}
          />
        </Layout>

        <Layout level="1" style={styles.inputContainer}>
          <View style={styles.icon} />
          <Input
            ref={register}
            disabled={isNew ? false : !isEdit}
            placeholder="Rua"
            defaultValue={item?.address.street}
            style={styles.input}
          />
        </Layout>

        <Layout level="1" style={styles.inputContainer}>
          <View style={styles.icon} />
          <Input
            ref={register}
            disabled={isNew ? false : !isEdit}
            placeholder="Endereço"
            defaultValue={item?.address.neighborhood}
            style={styles.input}
          />
        </Layout>

        <Layout level="1" style={styles.inputContainer}>
          <View style={styles.icon} />
          <Input
            ref={register}
            disabled={isNew ? false : !isEdit}
            placeholder="Número"
            defaultValue={item?.address.number}
            style={styles.input}
          />
        </Layout>

        <Layout level="1" style={[styles.inputContainer, {marginBottom: 20}]}>
          <View style={styles.icon} />
          <Input
            ref={register}
            disabled={isNew ? false : !isEdit}
            placeholder="Complemento"
            defaultValue={item?.address.complement}
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
