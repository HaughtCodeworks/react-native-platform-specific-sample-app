import React from 'react';
import PropTypes from 'prop-types';

import { View, SegmentedControlIOS } from 'react-native';

import styles from './styles';

const SelectListControl = ({
  segmentTitles,
  selectedIndex,
  updateSelectedIndex,
}) => (
  <View style={styles.controlContainer}>
    <SegmentedControlIOS
      values={segmentTitles}
      selectedIndex={selectedIndex}
      onChange={event => updateSelectedIndex(event)}
    />
  </View>
);

SelectListControl.propTypes = {
  segmentTitles: PropTypes.array,
  selectedIndex: PropTypes.number,
  updateSelectedIndex: PropTypes.func,
};

export default SelectListControl;
