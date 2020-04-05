import { combineReducers } from 'redux';
import { loginReducer } from './login';
import { ILoginData } from '../actions';

export interface StoreState {
  login: ILoginData;
}
export const reducers = combineReducers<StoreState>({
  login: loginReducer,
});
