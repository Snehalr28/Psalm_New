import {useNavigation} from '@react-navigation/native';
import {useDispatch} from 'react-redux';
import {addMentor} from '../../../actions/UserActions';
import React, {useState} from 'react';
import {View, Text, SafeAreaView, Image, TouchableOpacity} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {TextInput} from 'react-native-paper';
import {TextInputComponent} from '../../../components/textInputComponent/TextInputComponent';
import {Button} from '../../../components/Button';
import {styles} from './AddNewProgram.styles';
import CustomHeader from '../../../components/customHeader';
import {useSelector} from 'react-redux';
import {getUser} from '../../../selectors/UserSelectors';
export function AddNewProgram({route}) {
  const navigation = useNavigation();
  const {passId} = route.params;
  const dispatch = useDispatch();
  let getUserId = useSelector(getUser);
  console.log('add new program ID isss', passId);
  console.log('User ID is', getUserId.response.data._id);

  const [programName, setProgramName] = useState('');
  const [mentorshipMode, setMentorshipMode] = useState('');
  const [exprience, setExprience] = useState('');
  const [startDate, setStartDate] = useState('');
  const [price, setPrice] = useState('');
  const [allow, setAllow] = useState('');
  const [available, setAvailable] = useState('');
  const [programExpir, setProgramExpir] = useState('');
  const [certificate, setCertificate] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmitButton = props => {
    const addMentorObj = {
      category_id: passId,
      mentorship_name: programName,
      description: description,
      mentorship_mode: mentorshipMode,
      start_date: startDate,
      expiry_date: programExpir,
      duration: 1,
      experience: exprience,
      price: price,
      payment_mode: 'card',
      mentee_limit: allow,
      user_id: getUserId.response.data._id,
    };

    console.log('Add new program data', addMentorObj);
    dispatch(
      addMentor(addMentorObj, cb => {
        console.log('final response of add new program', cb);
        if (cb != false) {
          if (cb.messageID == 200) {
          }
        }
      }),
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          marginLeft: 18,
          marginRight: 20,
          marginTop: 10,
        }}>
        <CustomHeader
          title="Add New Program"
          // textStyle={{marginLeft:1}}
          leftIcon={require('../../../assets/Icons/userProfile.png')}
          rightIcon={require('../../../assets/Icons/Notification1.png')}
        />
      </View>

      <KeyboardAwareScrollView>
        <View
          style={{
            flex: 1,
            marginTop: 15,
            marginLeft: 18,
            marginRight: 20,
            marginBottom: '20%',
          }}>
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
            placeholder={'Program Name'}
            label={'Program Name'}
            value={programName}
            onChangeText={e => setProgramName(e)}
          />
          <TextInputComponent
            emailView={styles.textInputView}
            placeholder={'Mentorship Mode'}
            label={'Mentorship Mode'}
            value={exprience}
            onChangeText={e => setExprience(e)}
            emailIconView={styles.imageViewStyle}
            emailIcon={styles.imageIconStyle}
            source={require('../../../assets/Icons/Vector.png')}
          />

          <TextInputComponent
            emailView={styles.textInputView}
            placeholder={'Year of Exprience'}
            label={'Year of Exprience'}
            value={mentorshipMode}
            onChangeText={e => setMentorshipMode(e)}
            emailIconView={styles.imageViewStyle}
            emailIcon={styles.imageIconStyle}
            source={require('../../../assets/Icons/Vector.png')}
          />

          <View>
            <TextInputComponent
              emailView={styles.textInputView}
              placeholder={'Start Date'}
              label={'Start Date'}
              value={startDate}
              onChangeText={setStartDate}
              emailIconView={styles.imageViewStyle}
              emailIcon={styles.imageIconStyle}
              source={require('../../../assets/Icons/Calendar.png')}
            />

            <TextInputComponent
              emailView={styles.textInputView}
              placeholder={'Price'}
              label={'Price'}
              value={price}
              onChangeText={e => setPrice(e)}
            />
          </View>

          <TextInputComponent
            emailView={styles.textInputView}
            placeholder={'Mentee Allowed'}
            label={'Mentee Allowed'}
            value={allow}
            onChangeText={e => setAllow(e)}
          />

          <TextInputComponent
            emailView={styles.textInputView}
            placeholder={'Mentor Availability'}
            label={'Mentor Availability'}
            value={available}
            onChangeText={e => setAvailable(e)}
          />

          <TextInputComponent
            emailView={styles.textInputView}
            placeholder={'Program Expiry Date'}
            label={'Program Expiry Date'}
            value={programExpir}
            onChangeText={e => setProgramExpir(e)}
            emailIconView={styles.imageViewStyle}
            emailIcon={styles.imageIconStyle}
            source={require('../../../assets/Icons/Calendar.png')}
            onPress={() => {
              console.log('press on Icon');
            }}
          />

          <TextInputComponent
            emailView={styles.textInputView}
            placeholder={'Upload Skill Certificate'}
            label={'Upload Skill Certificate'}
            value={certificate}
            onChangeText={e => setCertificate(e)}
            emailIconView={styles.imageViewStyle}
            emailIcon={styles.imageIconStyle}
            source={require('../../../assets/Icons/Group.png')}
            onPress={() => {
              console.log('press on Icon');
            }}
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
          </View>
          <Button
            onPress={() => {
              // handleSubmitButton();
              navigation.navigate('programs');
              console.log('button Clicked');
            }}
            title={'Add Program'}
          />
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
}
