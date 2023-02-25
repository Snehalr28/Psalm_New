import PropTypes from 'prop-types';
import React from 'react';
import { Image } from 'react-native';
import { chatIcon, homeIcon, programIcon, sessionIcon,  } from '../assets';
import { NAVIGATION } from '../constants';

const tabIcon = {
  [NAVIGATION.home]: homeIcon,
  [NAVIGATION.program]: programIcon,
  [NAVIGATION.session]: sessionIcon,
  [NAVIGATION.chat]: chatIcon,
};

export function TabBarIcon({ color, routeName }) {
  return (
    <Image
      accessibilityIgnoresInvertColors
      source={tabIcon[routeName]}
      style={{ tintColor: color }}
    />
  );
}

TabBarIcon.propTypes = {
  color: PropTypes.string.isRequired,
  routeName: PropTypes.string.isRequired,
};
