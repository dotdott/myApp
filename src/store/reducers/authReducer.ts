import {createActions, createReducer} from 'reduxsauce';

const INITIAL_STATE = {
  email: '',
  password: '',
};

export const {Types, Creators} = createActions({
  currentUser: ['email', 'password'],
});

const currentUser = (state = INITIAL_STATE, action: any) => ({
  ...state,
  email: action.email,
  password: action.password,
});

export default createReducer(INITIAL_STATE, {
  [Types.CURRENT_USER]: currentUser,
});
