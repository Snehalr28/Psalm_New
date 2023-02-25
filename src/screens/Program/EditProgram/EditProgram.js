import React, {useState} from 'react';
import {SafeAreaView} from 'react-native';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {TextInputComponent} from '../../../components/textInputComponent/TextInputComponent';
import {TextInput} from 'react-native-paper';
import {Button} from '../../../components/Button';
import {styles} from './EditProgram.styles';
import {useSelector, useDispatch} from 'react-redux';
import {getUser} from '../../selectors/UserSelectors';
import {useNavigation} from '@react-navigation/native';
import {updateProgram} from '../../../actions/UserActions';

const EditProgram = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [programName, setProgramName] = useState('');
  const [mentorShip, setMentorShip] = useState('');
  const [exp, setExp] = useState('');
  const [date, setDate] = useState('');
  const [price, setPrice] = useState('');
  const [mentee, setMentee] = useState('');
  const [availablity, setAvailablity] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmitButton = () => {
    console.log('edit Program');
    let updateProgramObj = {
      category_id: '63c936090a9a959d9ed369d3',
      mentorship_name: 'React Native Development',
      description: 'React Native classes',
      mentorship_mode: 1,
      start_date: '12/11/1981',
      expiry_date: '12/11/1991',
      duration: '1',
      experience: '10',
      price: '1500',
      payment_mode: 'card',
      mentee_limit: '20',
      user_id: '63f5af8c247174c71f3e2133',
    };

    console.log('updateProgramOb', updateProgramObj);

    dispatch(
      updateProgram(updateProgramObj, cb => {
        console.log('CB Response of Edit Program', cb);
        if (cb != false) {
          if (cb.messageID == 200) {
          }
        }
      }),
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.imageView}>
        <Image
          style={styles.imageStyle}
          source={require('../../../assets/Icons/BackIcon.png')}
        />
        <Text style={styles.editText}>Edit Program</Text>
        <Image
          style={styles.imageIcon}
          source={require('../../../assets/Icons/Notification1.png')}
        />
      </View>
      <KeyboardAwareScrollView showsVerticalScrollIndicator={false}>
        <View>
          <Image
            style={{width: '100%', borderRadius: 10}}
            source={require('../../../assets/Images/Sample/session.png')}
          />
          <TouchableOpacity
            onPress={() => {
              console.log('buttonPressed');
            }}>
            <Image
              style={styles.playIcon}
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

          <Button
          onPress={() => handleSubmitButton()}
            // onPress={() => {
            //   navigation.navigate('Add Bank Details');
            //   console.log('button');
            // }}
            title={'Save Program'}
          />
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

export default EditProgram;
