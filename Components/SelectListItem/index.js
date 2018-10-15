import React from 'react';
import PropTypes from 'prop-types';

import { Text, TouchableOpacity } from 'react-native';
import CheckIcon from '../CheckIcon';

import styles from './styles';

const SelectListItem = ({ isSelected, itemLabel, updateSelectedItems }) => {
  const IconAttributes = {
    color: '#f46969',
    height: 16,
    width: 16,
  };

  const getSelectedIcon = () =>
    isSelected ? <CheckIcon iconAttributes={IconAttributes} /> : null;

  return (
    <TouchableOpacity
      onPress={() => updateSelectedItems(itemLabel, isSelected)}
      style={styles.row}
    >
      <Text style={styles.itemLabel}>{itemLabel}</Text>
      {getSelectedIcon(isSelected)}
    </TouchableOpacity>
  );
};

SelectListItem.propTypes = {
  isSelected: PropTypes.bool,
  itemLabel: PropTypes.string,
  updateSelectedItems: PropTypes.func,
};

export default SelectListItem;
