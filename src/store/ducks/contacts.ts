import {Reducer} from 'redux';

export const Types = {
  DELETE: 'contact/DELETE',
  EDIT: 'contact/EDIT',
  CREATE: 'contact/CREATE',
};
interface Address {
  cep: string;
  state: string;
  city: string;
  street: string;
  neighborhood: string;
  number: string;
  complement: string;
}

export interface Contact {
  id: string;
  name: string;
  phone: string;
  email: string;
  address: Address;
}
export interface ContactsState {
  data: Contact[];
}

const initialState: ContactsState = {
  data: [],
};

const reducer: Reducer<ContactsState> = (state = initialState, action) => {
  switch (action.type) {
    case Types.CREATE:
      return {
        ...state,
        data: [action.payload, ...state.data],
      };
    case Types.DELETE:
      return {
        ...state,
        data: state.data.filter((item) => item.id !== action.payload),
      };
    case Types.EDIT:
      console.log(action.payload);
      return {
        ...state,
        data: [
          action.payload,
          ...state.data.filter((item) => item.id !== action.payload.id),
        ],
      };

    default:
      return state;
  }
};

export const deleteContact = (id: string) => ({
  type: Types.DELETE,
  payload: id,
});

export const editContact = (contact: Contact) => ({
  type: Types.EDIT,
  payload: contact,
});

export const createContact = (contact: Contact) => ({
  type: Types.CREATE,
  payload: contact,
});

export default reducer;
