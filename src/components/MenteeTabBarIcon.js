import PropTypes from 'prop-types';
import React from 'react';
import { Image } from 'react-native';
import { chatIcon, homeIcon, mentorIcon,programIcon, sessionIcon,} from '../assets';
import { NAVIGATION } from '../constants';

const tabIcon = {
  [NAVIGATION.home]: homeIcon,
  [NAVIGATION.program]: programIcon,
  [NAVIGATION.mentors]: mentorIcon,
  [NAVIGATION.session]: sessionIcon,
  [NAVIGATION.chat]: chatIcon,
 
};

export function MenteeTabBarIcon({ color, routeName }) {
  return (
    <Image
      accessibilityIgnoresInvertColors
      source={tabIcon[routeName]}
      style={{ tintColor: color }}
    />
  );
}

MenteeTabBarIcon.propTypes = {
  color: PropTypes.string.isRequired,
  routeName: PropTypes.string.isRequired,
};
