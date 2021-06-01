import {createActions, createReducer} from 'reduxsauce';

type actionTypes = {
  email: string;
  name: string;
  first_name: string;
  picture_url: string;

  plataform_loggeded: string;
};

const INITIAL_STATE = {
  email: '',
  password: '',
  name: '',
  first_name: '',
  picture_url: '',
};

export const {Types, Creators} = createActions({
  currentUser: ['email', 'name', 'first_name', 'picture_url'],
  setPlataformLoggeded: ['plataform_loggeded'],
});

const currentUser = (state = INITIAL_STATE, action: actionTypes) => ({
  ...state,
  email: action.email,
  name: action.name,
  first_name: action.first_name,
  picture_url: action.picture_url,
});

const setPlataformLoggeded = (state = INITIAL_STATE, action: any) => ({
  ...state,
  plataform_loggeded: action.plataform_loggeded,
});

export default createReducer(INITIAL_STATE, {
  [Types.CURRENT_USER]: currentUser,
  [Types.SET_PLATAFORM_LOGGEDED]: setPlataformLoggeded,
});
