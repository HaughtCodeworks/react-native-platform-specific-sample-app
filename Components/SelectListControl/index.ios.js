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
      onChange={event =>
        updateSelectedIndex(event.nativeEvent.selectedSegmentIndex)
      }
      selectedIndex={selectedIndex}
      values={segmentTitles}
      tintColor="#f46969"
    />
  </View>
);

SelectListControl.propTypes = {
  segmentTitles: PropTypes.array,
  selectedIndex: PropTypes.number,
  updateSelectedIndex: PropTypes.func,
};

export default SelectListControl;
