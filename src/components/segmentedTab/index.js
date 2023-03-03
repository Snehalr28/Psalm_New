import React from 'react';
import {StyleSheet} from "react-native"
import SegmentedTab from 'react-native-segmented-control-tab';
import FONTS from "../../constants/fonts"
import COLORS from "../../constants/color"

const CustomSegmentedTab = ({
  values,
  selectedIndex,
  onTabPress,
  tabsContainerStyle,
  tabStyle,
  activeTabStyle,
  tabTextStyle,
  activeTabTextStyle,
}) => {
  return (
    <SegmentedTab
      values={values}
      selectedIndex={styles.selectedIndex}
      onTabPress={onTabPress}
      tabsContainerStyle={styles.tabsContainerStyle}
      tabStyle={styles.tabStyle}
      activeTabStyle={styles.activeTabStyle}
      tabTextStyle={styles.tabTextStyle}
      activeTabTextStyle={styles.activeTabTextStyle}
    />
  );
};

export default CustomSegmentedTab;


const styles = StyleSheet.create({
  tabsContainerStyle: {
    borderWidth: 10,
    borderRadius: 10,
    borderColor: '#f5f5f5',
  },
  tabStyle:{
    borderColor: '#f5f5f5',
    height: 40,
    backgroundColor: '#f5f5f5',
  },
  activeTabStyle:{
    backgroundColor: '#343232',
    borderRadius: 10,
    borderTopStartRadius: 10,
    borderTopEndRadius: 10,
    borderBottomStartRadius: 10,
    borderBottomEndRadius: 10,
  },
  tabTextStyle:{ fontSize: 16,  fontFamily:FONTS.SEMI_BOLD,
    color:COLORS.BLACK, },
  activeTabTextStyle:{color: '#ffff'},
})
