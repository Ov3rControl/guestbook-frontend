import React from 'react';

import { fetchHelper } from '../../helpers/fetch.helper';
import { Aux } from '../../HOC';
import HomeView from './home.view';
import { ILoginCred, ILoginData } from '../../store/actions';

interface IHomeProps {
  login: ILoginData;
  Login(loginCred: ILoginCred): void;
}

export default class Home extends React.Component<IHomeProps> {
  state = { signUpView: false };
  setSignUpView() {
    this.setState({
      signUpView: true,
    });
  }
  signUp = (formData: Object) => {
    fetchHelper('auth/signUp', 'POST', formData)
      .then((response) => response.json())
      .then((data) => alert(data.message));
  };
  render() {
    console.log(this.props.login);
    return (
      <Aux>
        <HomeView
          setSignUpView={this.setSignUpView}
          signUp={this.signUp}
          {...this.props}
        />
      </Aux>
    );
  }
}
