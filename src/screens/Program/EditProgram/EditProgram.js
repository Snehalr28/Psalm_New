import React, {useState, useEffect} from 'react';
import {SafeAreaView} from 'react-native';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {TextInputComponent} from '../../../components/textInputComponent/TextInputComponent';
import {TextInput} from 'react-native-paper';
import {useSelector, useDispatch} from 'react-redux';
import {getUser} from '../../selectors/UserSelectors';
import {useNavigation} from '@react-navigation/native';
import {updateProgram} from '../../../actions/UserActions';

const EditProgram = () => {
  const [programName, setProgramName] = useState('');
  const [mentorShip, setMentorShip] = useState('');
  const [exp, setExp] = useState('');
  const [date, setDate] = useState('');
  const [price, setPrice] = useState('');
  const [mentee, setMentee] = useState('');
  const [availablity, setAvailablity] = useState('');
  const [description, setDescription] = useState('');

  const navigation = useNavigation();
  const dispatch = useDispatch();

  const handleSubmitButton = () => {
    console.log('edit Program');
    let updateProgramObj = {
      category_id: '63ce4cb8655d803c9fdb5df7',
      mentorship_name: 'React Native',
      description: 'java script classes',
      mentorship_mode: 1,
      start_date: '12/11/1981',
      expiry_date: '12/11/1991',
      duration: '1',
      experience: '10',
      price: '1500',
      payment_mode: 'card',
      mentee_limit: '20',
      user_id: '63c7bff0ec3143ab8ae9af7c',
    };

    console.log('updateProgramOb', updateProgramObj);

    dispatch(
      updateProgram(updateProgramObj, cb => {
        console.log('CB Response of Edit Program', cb);
        // if (cb != false) {
        //   if (cb.messageID == 200) {
        //   }
        // }
      }),
    );
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
        flexDirection: 'column',
        padding: 20,
        backgroundColor: '#fff',
      }}>
      <KeyboardAwareScrollView showsVerticalScrollIndicator={false}>
        <View>
          <Image
            style={{width: '100%', borderRadius: 10}}
            // style={{height: '50%', width: '100%', borderRadius: 10}}
            source={require('../../../assets/Images/Sample/session.png')}
          />
          <TouchableOpacity
            onPress={() => {
              console.log('buttonPressed');
            }}>
            <Image
              style={{alignSelf: 'flex-end', marginTop: -25, marginRight: 20}}
              // style={{alignSelf: 'flex-end', marginTop: -25, marginRight: 20}}
              source={require('../../../assets/Icons/Play.png')}
            />
          </TouchableOpacity>
        </View>

        <View>
          <TextInputComponent
            emailView={styles.textInputView}
            placeholder={'Program Name'}
            label={'Program Name'}
            onChangeText={setProgramName}
            value={programName}
          />

          <TextInputComponent
            emailView={styles.textInputView}
            placeholder={'Mentorship Mode'}
            label={'Mentorship Mode'}
            value={mentorShip}
            onChangeText={setMentorShip}
          />

          <TextInputComponent
            emailView={styles.textInputView}
            placeholder={'Years of Experience'}
            label={'Years of Experience'}
            value={exp}
            onChangeText={setExp}
          />

          <TextInputComponent
            emailView={styles.textInputView}
            placeholder={'Start Date'}
            label={'Start Date'}
            value={date}
            onChangeText={setDate}
          />

          <TextInputComponent
            emailView={styles.textInputView}
            placeholder={'Price'}
            label={'Price'}
            value={price}
            onChangeText={setPrice}
          />

          <TextInputComponent
            emailView={styles.textInputView}
            placeholder={'Mentee allowed'}
            label={'Mentee allowed'}
            value={mentee}
            onChangeText={setMentee}
          />

          <TextInputComponent
            emailView={styles.textInputView}
            placeholder={'Availability'}
            label={'Availability'}
            value={availablity}
            onChangeText={setAvailablity}
          />

          <View style={[styles.textInputView, {marginBottom: 20}]}>
            {/* <TextInputComponent
            placeholder={'Write Your Bio'}
            label={'Bio'}
            onChangeText={setBio}
            value={bio}
            height={160}
            // height={160}
          /> */}
            <TextInput
              // style={{borderRadius: 10, width: '224%', height:"200%"}}
              multiline={true}
              placeholder="Program Description"
              mode="outlined"
              label={'Program Description'}
              outlineColor="#E5E4E2"
              activeOutlineColor="black"
              height={160}
              autoCapitalize="none"
              autoCorrect={false}
              value={description}
              onChangeText={e => setDescription(e)}
            />
          </View>

          <View style={{marginTop: 15}}>
            <View style={[styles.buttonView, {marginTop: 5}]}>
              <TouchableOpacity
                onPress={() => handleSubmitButton()}
                // onPress={handleSubmitButton()}
                // onPress={() => navigation.navigate('Add Bank Details')}
                style={{
                  height: 50,
                  width: '100%',
                  backgroundColor: '#FE4D4D',
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderColor: '#FE4D4D',
                  borderRadius: 10,
                  marginBottom: 20,
                }}>
                <Text
                  style={{
                    color: 'white',
                    fontWeight: '700',
                    fontSize: 16,
                    alignSelf: 'center',
                  }}>
                  Save Program
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

export default EditProgram;

const styles = StyleSheet.create({
  textInputView: {
    marginTop: '5%',
    // marginLeft: '10%',
    // marginRight: '10%',
    // marginBottom: 10,
  },
});
