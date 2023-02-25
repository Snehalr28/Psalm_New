/* eslint-disable react-native-a11y/has-valid-accessibility-ignores-invert-colors */
// import { loginUser } from '@/actions/UserActions';
import {lock, login, auth, backArrow, mail} from '../../assets';
import {confirmOTP, resendOtp, forgotPassword} from '../../actions/UserActions';
import {Button, TextField} from '../../components';
import {NAVIGATION} from '../../constants';
// import OTPInputView from 'twotalltotems/react-native-otp-input'
import OTPInputView from '@twotalltotems/react-native-otp-input';
import {SafeAreaView} from 'react-native-safe-area-context';
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';
// import { InitiateNotification } from '@/test-utils/notificationManager';
// import * as regex from '@/test-utils/regex';
import {globalColors} from '../../theme/globalColors';
import React, {useRef, useState, useEffect} from 'react';
import {
  Image,
  ImageBackground,
  Platform,
  Text,
  TouchableOpacity,
  View,
  Pressable,
  ScrollView,
  TextInput,
  Alert,
} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

import {styles} from './TermsConditions.styles';

// import {useNavigation} from '@react-navigation/native';
export const TermsConditions = ({route, navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAwareScrollView>
        <View style={styles.TextView}>
          <Text style={styles.TextView}>1.Introduction</Text>
          <Text style={styles.InsideText}>
            This document outlines the terms and conditions of using Psalm. By
            signing up as a mentor or mentee, you are agreeing to abide by these
            terms and conditions.
          </Text>
        </View>
        <View style={styles.TextView}>
          <Text style={styles.TextView}>2.Mentorship Services</Text>
          <Text style={styles.InsideText}>
            Psalm provides a platform for individuals to connect with mentors
            and mentees for the purpose of personal and professional growth.
            Mentors and mentees can participate in both 1-on-1 and group
            mentorship sessions.
          </Text>
        </View>
        <View style={styles.TextView}>
          <Text style={styles.TextView}>3.Commission</Text>
          <Text style={styles.InsideText}>
            The Mentorship App will take 25% of the earnings paid by mentees to
            mentors. This amount may be reduced through incentives such as
            posting a video ad on social media or referring new mentors or
            mentees to the app.
          </Text>
        </View>
        <View style={styles.TextView}>
          <Text style={styles.TextView}>4. Mentorship Session Tracking</Text>
          <Text style={styles.InsideText}>
            Mentorship sessions can be tracked both online and offline. The app
            will monitor and verify the start and end time of each session to
            ensure the integrity of the mentorship program.
          </Text>
        </View>
        <View style={styles.TextView}>
          <Text style={styles.TextView}>
            5. Identification and Certifications
          </Text>
          <Text style={styles.InsideText}>
            All users of the app must upload a government-issued ID card for
            verification purposes. Mentors may also upload a document
            demonstrating their skills and expertise in their mentorship
            program. Mentees will be able to see a certified badge above
            programs created by mentors who have uploaded a skill certificate.
          </Text>
        </View>
        <View style={styles.TextView}>
          <Text style={styles.TextView}>
            6. Payments and Dispute Resolution
          </Text>
          <Text style={styles.InsideText}>
            Payments from mentees will be held in an escrow account until the
            start of the first session and then released to the mentor. In the
            event of a dispute, evidence must be provided and reviewed before
            resolution can be reached.
          </Text>
        </View>
        <View style={styles.TextView}>
          <Text style={styles.TextView}>7. Cancellation Policy</Text>
          <Text style={styles.InsideText}>
            Mentors are allowed to have a minimum of 85% cancellation rate
            before they can cancel mentorship sessions. When mentees and mentors
            have met during an offline mentorship session, the app must be
            notified.
          </Text>
        </View>
        <View style={styles.TextView}>
          <Text style={styles.TextView}>
            8. Offline Mentorship Session Safety
          </Text>
          <Text style={styles.InsideText}>
            Mentees are encouraged to share their offline mentorship location
            and ID with a trusted friend. In the case of an emergency, mentees
            can dial the emergency number during an offline mentorship session.
          </Text>
        </View>
        <View style={styles.TextView}>
          <Text style={styles.TextView}>9. Mentor Availability</Text>
          <Text style={styles.InsideText}>
            Mentors will indicate their availability for after-session support
            on the app. The exact location for offline mentorship sessions will
            only be revealed to mentees who have paid for the mentorship
            program.
          </Text>
        </View>
        <View style={styles.TextView}>
          <Text style={styles.TextView}>10. Prohibited Conduct</Text>
          <Text style={styles.InsideText}>
            Psalm does not tolerate fraud, foul language, or any other
            inappropriate behavior. Any user who violates these terms and
            conditions may be subject to immediate suspension or termination of
            their account.
          </Text>
        </View>
        <View style={styles.TextView}>
          <Text style={styles.InsideText}>
            By signing up to use Psalm, you agree to abide by these terms and
            conditions. Psalm reserves the right to update and modify these
            terms and conditions at any time without notice.
          </Text>
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};
export default TermsConditions;
