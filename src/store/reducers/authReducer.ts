import {createActions, createReducer} from 'reduxsauce';

type actionTypes = {
  email: string;
  name: string;
  first_name: string;
  picture_url: string;
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
});

const currentUser = (state = INITIAL_STATE, action: actionTypes) => ({
  ...state,
  email: action.email,
  name: action.name,
  first_name: action.first_name,
  picture_url: action.picture_url,
});

export default createReducer(INITIAL_STATE, {
  [Types.CURRENT_USER]: currentUser,
});
