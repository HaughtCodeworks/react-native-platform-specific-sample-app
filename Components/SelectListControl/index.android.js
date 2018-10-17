import React from 'react';
import PropTypes from 'prop-types';

import { TouchableOpacity, View, Text } from 'react-native';

import styles from './styles';

const SelectListControl = ({
  segmentTitles,
  selectedIndex,
  updateSelectedIndex,
}) => {
  const controlTabs = segmentTitles.map((segmentTitle, index) => {
    const isSelected = index === selectedIndex;
    return (
      <TouchableOpacity
        style={[
          styles.tabContainer,
          { backgroundColor: isSelected ? '#fff' : 'transparent' },
        ]}
        key={`${segmentTitle}${index}`}
        onPress={() => updateSelectedIndex(index)}
      >
        <Text
          style={[
            styles.tabText,
            { color: isSelected ? '#f46969' : 'rgba(0, 0, 0, 0.40)' },
          ]}
        >
          {segmentTitle}
        </Text>
      </TouchableOpacity>
    );
  });

  return <View style={styles.controlContainer}>{controlTabs}</View>;
};

export default SelectListControl;
