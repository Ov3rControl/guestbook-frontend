import React from 'react';
import { connect } from 'react-redux';

import { StoreState } from '../../store/reducers';
import { Login, ILoginData, ILoginCred } from '../../store/actions';
import { Aux } from '../../HOC';
import Home from './home.container';

interface IHomeReduxProps {
  login: ILoginData;
  Login(loginCred: ILoginCred): void;
}

const HomeRedux: React.FC<IHomeReduxProps> = (props) => {
  return (
    <Aux>
      <Home {...props} />
    </Aux>
  );
};
const mapStateToProps = (state: StoreState) => {
  return { login: state.login };
};

export default connect(mapStateToProps, { Login })(HomeRedux);
