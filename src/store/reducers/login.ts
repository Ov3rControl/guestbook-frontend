import { ILoginData, ActionTypes, Action } from '../actions';
const initialState: ILoginData = {
  data: {
    token: '',
  },
  message: '',
};
export const loginReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case ActionTypes.Login:
      return action.payload;
    default:
      return state;
  }
};
