import { Dispatch } from 'redux';
import { ActionTypes } from './types';
import { fetchHelper } from '../../helpers';

export interface ILoginData {
  message: string;
  data: {
    token: string;
  };
}

export interface ILoginCred {
  email: string;
  password: string;
}

export interface LoginAction {
  type: ActionTypes.Login;
  payload: ILoginData;
}

export const Login = (loginCred: ILoginCred) => {
  return async (dispatch: Dispatch) => {
    await fetchHelper('auth/login', 'POST', loginCred)
      .then((response) => response.json())
      .then((data) =>
        dispatch({
          type: ActionTypes.Login,
          payload: data,
        })
      );
  };
};
