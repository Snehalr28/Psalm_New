import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Animated,
  Dimensions,
  TouchableOpacity,
} from "react-native";

import styles, { _containerStyle, _selectedTabStyle } from "./SegmentedControl.style";
const { width: ScreenWidth } = Dimensions.get("screen");

const SegmentedControl = ({
  style,
  tabs,
  width,
  onChange,
  tabStyle,
  textStyle,
  selectedTabStyle,
  initialIndex = 0,
  activeTextColor = "#000",
  activeTabColor ="#fff" ,
  extraSpacing = 0
}) => {
  const translateValue =
    (width ? width + extraSpacing : ScreenWidth - 35) / tabs.length;
  const [slideAnimation, _] = useState(new Animated.Value(0));
  const [currentIndex, setCurrentIndex] = useState(initialIndex);

  const handleTabPress = React.useCallback((index) => {
    setCurrentIndex(index);
    onChange && onChange(index);
  }, []);

  useEffect(() => {
    Animated.spring(slideAnimation, {
      toValue: currentIndex * translateValue,
      useNativeDriver: true,
    }).start();
  }, [currentIndex]);

  const renderSelectedTab = () => (
    <Animated.View
      style={[
        _selectedTabStyle(tabs, activeTabColor,
           ),
        selectedTabStyle,
      ]}
    />
  );

  const renderTab = (tab, index) => {
    const isTabText = typeof tab === "string";
    return (
      <TouchableOpacity
        key={index}
        activeOpacity={0.5}
        style={[styles.tab, tabStyle]}
        style={{}}
        onPress={() => handleTabPress(index)}
      >
        {!isTabText ? (
          tab
        ) : (
          <Text
            numberOfLines={1}
            style={[
              styles.textStyle,
              textStyle,
              isActiveTab && { color: activeTextColor },
            ]}
          >
            {tab}
          </Text>
        )}
      </TouchableOpacity>
    );
  };

  return (
      <View style={{flexDirection:"row", }}>
            {renderSelectedTab()}
      {tabs.map((tab, index) => renderTab(tab, index))}
      </View>
  );
};

export default SegmentedControl;
