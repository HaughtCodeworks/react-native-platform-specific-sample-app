import React from 'react';
import { View } from 'react-native';

import Logo from '../Logo';

import styles from './styles';

const Header = () => (
  <View style={styles.headerContainer}>
    <Logo />
  </View>
);

export default Header;
