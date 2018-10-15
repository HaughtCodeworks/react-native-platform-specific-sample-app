import React from 'react';
import PropTypes from 'prop-types';

import { FlatList } from 'react-native';
import SelectListItem from '../SelectListItem';

const SelectList = ({ selectedItems, selectedList, updateSelectedItems }) => {
  const renderSelectListItem = ({ item }) => {
    const itemLabel = item.name ? item.name : item.title;
    const isSelected = selectedItems.includes(itemLabel);

    return (
      <SelectListItem
        isSelected={isSelected}
        itemLabel={itemLabel}
        selectedItems={selectedItems}
        updateSelectedItems={updateSelectedItems}
      />
    );
  };

  return (
    <FlatList
      data={selectedList}
      extraData={selectedItems}
      keyExtractor={(item, index) => `${item.name}${index}`}
      renderItem={item => renderSelectListItem(item)}
    />
  );
};

SelectList.propTypes = {
  selectedItems: PropTypes.array,
  selectedList: PropTypes.array,
  updateSelectedItems: PropTypes.func,
};

export default SelectList;
