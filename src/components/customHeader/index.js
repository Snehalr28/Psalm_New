import React, {useEffect, useState} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
// import { TouchableWithoutFeedback } from 'react-native';
// import {TouchableOpacity} from 'react-native';
import {StyleSheet} from 'react-native';
import COLORS from '../../constants/color';
import FONTS from '../../constants/fonts';
import {getUser} from '../../selectors/UserSelectors';
import {useSelector, useDispatch} from 'react-redux';
import {FetchProfileData} from '../../actions/UserActions';
import {setAuthorization} from '../../controllers/HttpClient';
const CustomHeader = ({
  title,
  newtitle,
  onPresstitle,
  leftIcon,
  rightIcon,
  textStyle,
  onPress,
  onPressLeftIcon
}) => {
  let getuserData = useSelector(getUser);
  console.log('Mentor/mentee Id index', getuserData.response.data._id);
  const baseURL = 'http://54.190.192.105:9192/';
  const [image, setImage] = useState(true);
  console.log('Profileimage-->>>', image);
  const dispatch = useDispatch();
  useEffect(() => {
    setAuthorization(getuserData.response.data.token);
    FetchAllData(getuserData.response.data._id);
    return () => {};
  }, []);

  const FetchAllData = id_Param => {
    let DataOb = {user_id: id_Param};
    console.log('Fetch function call and ID for index', id_Param);
    dispatch(
      FetchProfileData(DataOb, cb => {
        console.log('Fetch Data response data  for index', cb);
        if (cb != false) {
          console.log('First name is for index', cb.data.image);

          if (cb.messageID === 200) {
            setImage(cb.data.image);

            // setArray(cb.data.skills)
          }
        }
        setisLoading(false);
      }),
    );
  };

  return (
    <View style={styles.containerView}>
      <TouchableOpacity onPress={onPressLeftIcon}>
      {leftIcon && (
        <Image
          style={styles.topIcon}
          source={{uri: baseURL + image}}
          // source={require('../../../assets/Icons/userProfile.png')}
          // source={leftIcon}
        />
      )}
      </TouchableOpacity>
     
      <View>
        <TouchableOpacity onPress={onPress}>
          <Text style={styles.topText}>{title}</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity onPress={onPresstitle}>
        <Text style={styles.topText}>{newtitle}</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => logoutUser()}
        style={{}}></TouchableOpacity>

      {rightIcon && <Image style={styles.topIcon} source={rightIcon} />}
    </View>
  );
};

const styles = StyleSheet.create({
  containerView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  topIcon: {height: 25, width: 25, borderRadius:25},
  topText: {
    fontSize: 14,

    color: COLORS.BLACK,
    fontFamily: FONTS.MEDIUM,
    // marginLeft: -130,
  },
});

export default CustomHeader;
