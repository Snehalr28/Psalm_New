import React, {useState} from 'react';
import {SafeAreaView} from 'react-native';
import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {TextInputComponent} from '../../../components/textInputComponent/TextInputComponent';
import {TextInput, HelperText} from 'react-native-paper';
import COLORS from '../../../constants/color';
import FONTS from '../../../constants/fonts';
import {Button} from '../../../components';

const AddSession = ({navigation}) => {
  const [sessionName, setSessionName] = useState('');
  const [sessionLink, setSessionLink] = useState('');
  const [duration, setDuration] = useState('');
  const [location, setLocation] = useState('');
  const [description, setDescription] = useState('');

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAwareScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.textInputMianView}>
          <TouchableOpacity
            onPress={e => {
              console.log('select image');
              // selectImage();
            }}>
            <Image
              style={styles.imageStyle}
              source={require('../../../assets/Icons/addProgram.png')}
            />
            <Text style={styles.uploadText}>Upload Program Thumbnail</Text>
          </TouchableOpacity>
        </View>
        <TextInputComponent
          emailView={styles.textInputView}
          placeholder={'Session Name'}
          label={'Session Name'}
          value={sessionName}
          onChangeText={e => setSessionName(e)}
          styleInput={styles.styleInput}
        />
        <TextInputComponent
          emailView={styles.textInputView}
          placeholder={'Session Link'}
          label={'Session Link'}
          value={sessionLink}
          onChangeText={e => setSessionLink(e)}
          styleInput={styles.styleInput}
        />
        <TextInputComponent
          emailView={styles.textInputView}
          placeholder={'Session duration'}
          label={'Session duration'}
          value={duration}
          onChangeText={e => setDuration(e)}
          styleInput={styles.styleInput}
        />
        <TextInputComponent
          emailView={styles.textInputView}
          placeholder={'Location'}
          label={'Location'}
          value={location}
          onChangeText={e => setLocation(e)}
          styleInput={styles.styleInput}
        />

        <View style={[styles.textInputView, {marginBottom: '10%'}]}>
          <TextInput
            multiline={true}
            placeholder="Program Description"
            mode="outlined"
            label={'Program Description'}
            outlineColor="#E5E4E2"
            activeOutlineColor="black"
            height={150}
            autoCapitalize="none"
            autoCorrect={false}
            // error={}
            value={description}
            onChangeText={e => setDescription(e)}
          />
          <View style={{marginTop: '20%', marginBottom: '-10%'}}>
            <Button
              onPress={() => {
                //   handleSubmitButton();
                // navigation.navigate('programs');
                console.log('button Clicked');
              }}
              title={'Add Program'}
            />
          </View>
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

export default AddSession;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    padding: 25,
    backgroundColor: '#fff',
  },
  textInputMianView: {
    flex: 1,
    // height: '50%',
    height: 130,
    width: '100%',
    borderWidth: 1,
    justifyContent: 'center',
    marginBottom: 10,
    borderRadius: 10,
    backgroundColor: COLORS.WHITE,
    // marginBottom: 15,
    borderColor: COLORS.HIGHLIGHT,
    elevation: 1,
  },
  imageStyle: {height: 45, width: 45, alignSelf: 'center'},
  uploadText: {alignSelf: 'center', fontFamily: FONTS.REGULAR, fontSize: 14},
  textInputView: {
    marginTop: 10,
  },
  styleInput: {fontFamily: FONTS.REGULAR, color: COLORS.BLACK},
});
