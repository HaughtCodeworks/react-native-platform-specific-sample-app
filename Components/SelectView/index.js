import React, { Component } from 'react';

import { View } from 'react-native';
import SelectListControl from '../SelectListControl';
import SelectList from '../SelectList';

import usersList from '../../data/users.json';
import locationsList from '../../data/locations.json';

import styles from './styles';

class SelectView extends Component {
  state = {
    selectedIndex: 0,
    selectedItems: [],
    selectedLocations: {},
  };

  updateSelectedIndex = selectedIndex => this.setState({ selectedIndex });

  updateSelectedItems = (itemLabel, isSelected) => {
    let { selectedItems } = this.state;
    if (isSelected) {
      selectedItems = selectedItems.filter(item => item !== itemLabel);
    } else {
      selectedItems = selectedItems.concat(itemLabel);
    }

    this.setState({ selectedItems });
  };

  render() {
    const { selectedIndex, selectedItems } = this.state;
    const selectedLists = [usersList.users, locationsList.locations];
    const segmentTitles = ['Users', 'Locations'];

    return (
      <View style={styles.viewContainer}>
        <SelectListControl
          segmentTitles={segmentTitles}
          selectedIndex={selectedIndex}
          updateSelectedIndex={this.updateSelectedIndex}
        />
        <SelectList
          selectedItems={selectedItems}
          selectedList={selectedLists[selectedIndex]}
          updateSelectedItems={this.updateSelectedItems}
        />
      </View>
    );
  }
}

export default SelectView;
