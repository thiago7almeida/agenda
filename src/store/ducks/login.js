export const Types = {
  LOGIN: "login/LOGIN",
};

const initialState = {
  isLoged: false,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case Types.LOGIN:
      return { ...state, isLoged: true };

    default:
      return state;
  }
}

export function login() {
  return {
    type: Types.LOGIN,
  };
}
