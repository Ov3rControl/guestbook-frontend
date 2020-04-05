import React from 'react';
import { Aux } from './HOC';
import { Home } from './components';
export default class _App extends React.Component {
  render() {
    return (
      <Aux>
        <Home />
      </Aux>
    );
  }
}
