import React, { useState } from 'react';
import { ILoginData, ILoginCred } from '../../store/actions';
import { Aux } from '../../HOC';
import LoginView from './components/login';
import SignUpView from './components/signUp';
interface IHomeViewProps {
  login: ILoginData;
  Login(loginCred: ILoginCred): void;
  signUp(formData: Object): void;
}

const HomeView: React.FC<IHomeViewProps> = (props) => {
  //const [signUpView, setSignUpView] = useState(false);
  const [formData, setFormData] = useState({ email: '', password: '' });

  return (
    <Aux>
      {signUpView ? (
        <SignUpView setSignUpView={setSignUpView} {...props} />
      ) : (
        <LoginView
          formData={formData}
          setFormData={setFormData}
          signUp={props.signUp}
          setSignUpView={setSignUpView}
          {...props}
        />
      )}
    </Aux>
  );
};

export default HomeView;
