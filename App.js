import React, { Fragment } from 'react';

import { StatusBar } from 'react-native';

import Header from './Components/Header';
import SelectView from './Components/SelectView';

const App = () => (
  <Fragment>
    <StatusBar barStyle="light-content" />
    <Header />
    <SelectView />
  </Fragment>
);

export default App;
