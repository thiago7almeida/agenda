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
  name: string;
  phone: string;
  address: Address;
}
export interface ContactsState {
  data: Contact[];
}

const initialState: ContactsState = {
  data: [
    {
      name: 'name',
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
      name: 'Jose',
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
    {
      name: 'Gustavo',
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
      name: 'Gabi',
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
      name: 'Cristina',
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
      name: 'Patricia',
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
      name: 'Jose',
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
    {
      name: 'Gustavo',
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
      name: 'Gabi',
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
      name: 'Cristina',
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
      name: 'Patricia',
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
      name: 'Deh',
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
