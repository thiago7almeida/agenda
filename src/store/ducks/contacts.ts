import {Reducer} from 'redux';

export const Types = {
  // LOGIN: 'login/LOGIN',
};
interface Address {
  cep: string;
  state: string;
  city: string;
  street: string;
  neighborhood: string;
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
  data: [
    {
      id: '1',
      name: 'name',
      phone: '(16) 9963894106',
      email: 'thiagoa.silva@outlook.com',
      address: {
        cep: '05010000',
        state: 'SP',
        city: 'São Paulo',
        street: 'Rua Caiubí',
        neighborhood: 'Perdizes',
      },
    },
    {
      id: '2',
      name: 'thiago',
      phone: '(16) 9963894106',
      email: 'thiagoa.silva@outlook.com',
      address: {
        cep: '05010000',
        state: 'SP',
        city: 'São Paulo',
        street: 'Rua Caiubí',
        neighborhood: 'Perdizes',
      },
    },
    {
      id: '3',
      name: 'Jose',
      phone: '(16) 9963894106',
      email: 'thiagoa.silva@outlook.com',
      address: {
        cep: '05010000',
        state: 'SP',
        city: 'São Paulo',
        street: 'Rua Caiubí',
        neighborhood: 'Perdizes',
      },
    },
    {
      id: '4',
      name: 'Valmir',
      phone: '(16) 9963894106',
      email: 'thiagoa.silva@outlook.com',
      address: {
        cep: '05010000',
        state: 'SP',
        city: 'São Paulo',
        street: 'Rua Caiubí',
        neighborhood: 'Perdizes',
      },
    },
    {
      id: '5',
      name: 'Gustavo',
      phone: '(16) 9963894106',
      email: 'thiagoa.silva@outlook.com',
      address: {
        cep: '05010000',
        state: 'SP',
        city: 'São Paulo',
        street: 'Rua Caiubí',
        neighborhood: 'Perdizes',
      },
    },
    {
      id: '6',
      name: 'Gabi',
      phone: '(16) 9963894106',
      email: 'thiagoa.silva@outlook.com',
      address: {
        cep: '05010000',
        state: 'SP',
        city: 'São Paulo',
        street: 'Rua Caiubí',
        neighborhood: 'Perdizes',
      },
    },
    {
      id: '7',
      name: 'Cristina',
      phone: '(16) 9963894106',
      email: 'thiagoa.silva@outlook.com',
      address: {
        cep: '05010000',
        state: 'SP',
        city: 'São Paulo',
        street: 'Rua Caiubí',
        neighborhood: 'Perdizes',
      },
    },
    {
      id: '8',
      name: 'Patricia',
      email: 'thiagoa.silva@outlook.com',
      phone: '(16) 9963894106',
      address: {
        cep: '05010000',
        state: 'SP',
        city: 'São Paulo',
        street: 'Rua Caiubí',
        neighborhood: 'Perdizes',
      },
    },
    {
      id: '9',
      email: 'thiagoa.silva@outlook.com',
      name: 'Priscila',
      phone: '(16) 9963894106',
      address: {
        cep: '05010000',
        state: 'SP',
        city: 'São Paulo',
        street: 'Rua Caiubí',
        neighborhood: 'Perdizes',
      },
    },
    {
      id: '10',
      email: 'thiagoa.silva@outlook.com',
      name: 'thiago',
      phone: '(16) 9963894106',
      address: {
        cep: '05010000',
        state: 'SP',
        city: 'São Paulo',
        street: 'Rua Caiubí',
        neighborhood: 'Perdizes',
      },
    },
    {
      id: '11',
      name: 'Jose',
      email: 'thiagoa.silva@outlook.com',
      phone: '(16) 9963894106',
      address: {
        cep: '05010000',
        state: 'SP',
        city: 'São Paulo',
        street: 'Rua Caiubí',
        neighborhood: 'Perdizes',
      },
    },
    {
      id: '12',
      email: 'thiagoa.silva@outlook.com',
      name: 'Valmir',
      phone: '(16) 9963894106',
      address: {
        cep: '05010000',
        state: 'SP',
        city: 'São Paulo',
        street: 'Rua Caiubí',
        neighborhood: 'Perdizes',
      },
    },
  ],
};

const reducer: Reducer<ContactsState> = (state = initialState, action) => {
  switch (action.type) {
    // case Types.LOGIN:
    //   return {...state, isLoged: true};

    default:
      return state;
  }
};
export default reducer;
