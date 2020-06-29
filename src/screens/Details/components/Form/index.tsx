import React, {useState, useCallback} from 'react';
import {View} from 'react-native';
import {Layout, Icon, Input, Button, Spinner} from '@ui-kitten/components';
import {useForm, Controller} from 'react-hook-form';
import {ScrollView} from 'react-native-gesture-handler';
import {MaskService} from 'react-native-masked-text';
import {useDispatch} from 'react-redux';
import * as yup from 'yup';
import CepData from 'cep-promise';
import UUIDGenerator from 'react-native-uuid-generator';

import styles from './styles';
import {
  Contact,
  deleteContact,
  editContact,
  createContact,
} from '../../../../store/ducks/contacts';
import {useNavigation} from '@react-navigation/native';

const SignupSchema = yup.object().shape({
  name: yup.string().required('Nome é obrigatório'),
  phone: yup.string().min(14, 'Celular inválido'),
  email: yup.string().email('E-mail inválido'),
  cep: yup.string().length(9, 'Cep inválido'),
});

const Form: React.FC<{isNew?: boolean; item?: Contact}> = ({isNew, item}) => {
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  const {handleSubmit, errors, control, setValue} = useForm({
    mode: 'onBlur',
    validationSchema: SignupSchema,
  });

  const handleCep = async (cep: string) => {
    setLoading(true);
    try {
      const data = await CepData(cep.replace('-', ''));
      setValue('city', data.city);
      setValue('neighborhood', data.neighborhood);
      setValue('state', data.state);
      setValue('street', data.street);
    } catch (error) {
    } finally {
      setLoading(false);
    }
  };

  const navigation = useNavigation();
  const dispatch = useDispatch();

  const deleteContactState = useCallback((id) => dispatch(deleteContact(id)), [
    dispatch,
  ]);
  const editContactState = useCallback(
    (contact) => dispatch(editContact(contact)),
    [dispatch],
  );
  const createContactState = useCallback(
    (contact) => dispatch(createContact(contact)),
    [dispatch],
  );
  const onSubmit = async (data: any) => {
    if (!isNew && item) {
      const formatedData: Contact = {
        id: item.id,
        address: {
          cep: data.cep,
          city: data.city,
          complement: data.complement,
          neighborhood: data.neighborhood,
          number: data.number,
          state: data.state,
          street: data.street,
        },
        email: data.email,
        name: data.name,
        phone: data.phone,
      };
      editContactState(formatedData);
    } else {
      const formatedData: Contact = {
        id: await UUIDGenerator.getRandomUUID(),
        address: {
          cep: data.cep,
          city: data.city,
          complement: data.complement,
          neighborhood: data.neighborhood,
          number: data.number,
          state: data.state,
          street: data.street,
        },
        email: data.email,
        name: data.name,
        phone: data.phone,
      };
      createContactState(formatedData);
    }
    navigation.goBack();
  };
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <Layout level="1" style={styles.container}>
        <Layout level="1" style={styles.inputContainer}>
          <Icon name="person-outline" fill="#8F9BB3" style={styles.icon} />
          <Controller
            as={Input}
            defaultValue={item?.name}
            placeholder="Nome"
            caption={errors.name?.message}
            status={errors.name ? 'danger' : 'basic'}
            onChange={(args) => args[0].nativeEvent.text}
            style={styles.input}
            name="name"
            control={control}
            disabled={isNew ? false : !isEdit}
          />
        </Layout>

        <Layout level="1" style={[styles.inputContainer, {marginTop: 20}]}>
          <Icon name="phone-outline" fill="#8F9BB3" style={styles.icon} />
          <Controller
            as={Input}
            defaultValue={item?.phone}
            caption={errors.phone?.message}
            status={errors.phone ? 'danger' : 'basic'}
            placeholder="Celular"
            onChange={(args) =>
              MaskService.toMask('cel-phone', args[0].nativeEvent.text)
            }
            style={styles.input}
            name="phone"
            keyboardType="numeric"
            control={control}
            disabled={isNew ? false : !isEdit}
          />
        </Layout>

        <Layout level="1" style={[styles.inputContainer, {marginTop: 20}]}>
          <Icon name="email-outline" fill="#8F9BB3" style={styles.icon} />
          <Controller
            as={Input}
            defaultValue={item?.email}
            placeholder="Email"
            caption={errors.email?.message}
            status={errors.email ? 'danger' : 'basic'}
            onChange={(args) => args[0].nativeEvent.text}
            style={styles.input}
            name="email"
            control={control}
            disabled={isNew ? false : !isEdit}
          />
        </Layout>

        <Layout level="1" style={[styles.inputContainer, {marginTop: 20}]}>
          <Icon name="pin-outline" fill="#8F9BB3" style={styles.icon} />
          <Controller
            as={Input}
            defaultValue={item?.address.cep}
            placeholder="Cep"
            accessoryRight={() => (loading ? <Spinner size="tiny" /> : <></>)}
            keyboardType="numeric"
            caption={errors.cep?.message}
            status={errors.cep ? 'danger' : 'basic'}
            onChange={(args) => {
              const newValue = MaskService.toMask(
                'zip-code',
                args[0].nativeEvent.text,
              );
              if (newValue.length === 9) handleCep(newValue);
              return newValue;
            }}
            style={styles.input}
            name="cep"
            control={control}
            disabled={isNew ? false : !isEdit}
          />
        </Layout>

        <Layout level="1" style={styles.inputContainer}>
          <View style={styles.icon} />
          <Controller
            as={Input}
            defaultValue={item?.address.state}
            placeholder="Estado"
            onChange={(args) => args[0].nativeEvent.text}
            style={styles.input}
            name="state"
            control={control}
            disabled={isNew ? false : !isEdit}
          />
        </Layout>

        <Layout level="1" style={styles.inputContainer}>
          <View style={styles.icon} />
          <Controller
            as={Input}
            defaultValue={item?.address.city}
            placeholder="Cidade"
            onChange={(args) => args[0].nativeEvent.text}
            style={styles.input}
            name="city"
            control={control}
            disabled={isNew ? false : !isEdit}
          />
        </Layout>

        <Layout level="1" style={styles.inputContainer}>
          <View style={styles.icon} />
          <Controller
            as={Input}
            defaultValue={item?.address.street}
            placeholder="Rua"
            onChange={(args) => args[0].nativeEvent.text}
            style={styles.input}
            name="street"
            control={control}
            disabled={isNew ? false : !isEdit}
          />
        </Layout>

        <Layout level="1" style={styles.inputContainer}>
          <View style={styles.icon} />
          <Controller
            as={Input}
            defaultValue={item?.address.neighborhood}
            placeholder="Endereço"
            onChange={(args) => args[0].nativeEvent.text}
            style={styles.input}
            name="neighborhood"
            control={control}
            disabled={isNew ? false : !isEdit}
          />
        </Layout>

        <Layout level="1" style={styles.inputContainer}>
          <View style={styles.icon} />
          <Controller
            as={Input}
            defaultValue={item?.address.number}
            placeholder="Número"
            onChange={(args) => args[0].nativeEvent.text}
            style={styles.input}
            name="number"
            control={control}
            disabled={isNew ? false : !isEdit}
          />
        </Layout>

        <Layout level="1" style={[styles.inputContainer, {marginBottom: 20}]}>
          <View style={styles.icon} />
          <Controller
            as={Input}
            defaultValue={item?.address.complement}
            placeholder="Complemento"
            onChange={(args) => args[0].nativeEvent.text}
            style={styles.input}
            name="complement"
            control={control}
            disabled={isNew ? false : !isEdit}
          />
        </Layout>
        {(isEdit || isNew) && (
          <>
            <Button
              style={{marginBottom: 10}}
              appearance="outline"
              onPress={handleSubmit(onSubmit)}>
              Salvar
            </Button>
            {!isNew && (
              <Button
                onPress={() => {
                  deleteContactState(item?.id);
                  navigation.goBack();
                }}
                appearance="ghost"
                status="danger">
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
