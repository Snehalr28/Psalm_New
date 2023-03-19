import React, {useState, useEffect} from 'react';
import {SafeAreaView} from 'react-native';
import {
  View,
  Text,
  Image,
  FlatList,
  TouchableWithoutFeedback,
} from 'react-native';
// import Images from '../../../assets/Images/Sample';
import {styles} from './Mentorlist.styles';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {TextInput} from 'react-native';
import CustomSearch from '../../components/customSearch';
import CustomHeader from '../../components/customHeader';
import {CategoryDisplay} from '../../../actions/UserActions';
import Images from '../../assets/Images/Sample';
import {getUser} from '../../selectors/UserSelectors';
import {MentorsDisplay} from '../../actions/UserActions';
const Mentorlist = props => {
  const [dataNew, setData] = useState([]);
  const [category_id, setCategory_id] = useState([]);
  console.log('NewData respone', JSON.stringify(dataNew));
  let Data = useSelector(getUser);

  const dispatch = useDispatch();
  const navigation = useNavigation();
  let getuserData = useSelector(getUser);
  console.log('Mentor/mentee Id', getuserData.response.data._id);

  useEffect(() => {
    Display();
  }, []);

  const Display = async () => {
    console.log('display category');
    let MentorListOb = {
      page: 1,
      roles: 'mentor',
      // mentorid: getuserData.response.data._id,
      // category_id: passId,
    };
    try {
      dispatch(
        MentorsDisplay(MentorListOb, cb => {
          console.log('Program Object iss', MentorListOb);
          console.log('mentors check response check ', cb);
          console.log('category response check Name', cb.data.docs[0].firstName);
          if (cb != false) {
            // setData(cb.data.docs)
            console.log('doc length', cb.data.docs.length);
            if (cb.messageID === 200) {
              console.log('success');
              // setData(cb.data.docs[0].docs);
              setData(cb.data.docs);
              // navigation.navigate('ProgramList');
            }
          }
        }),
      );
    } catch (error) {
      Alert.alert('Invalid Data');
    }
  };

  const data = [
    {
      id: '1',
      title: 'Immigration',
      image: Images.immigration,
    },
    {
      id: '2',
      title: 'Career Consultation',
      image: Images.career,
    },
    {
      id: '3',
      title: 'Investment or Business',
      image: Images.investment,
    },
    {
      id: '4',
      title: 'Education',
      image: Images.education,
    },
  ];
  console.log('image', Images);
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchTermChange = text => {
    setSearchTerm(text);
  };

  const filteredData = dataNew.filter(item => {
    return (item.firstName.toLowerCase().includes(searchTerm.toLowerCase())||item.lastName.toLowerCase().includes(searchTerm.toLowerCase()));
  });

  const baseURL = 'http://54.190.192.105:9192/';

  const Item = ({image, firstName, lastName, bio, isEmailVerified}) => (
    <View style={styles.mainContainer}>
      <View style={styles.item}>
        {/* <Image source={item.image} style={styles.image} /> */}
        {/* <Image
          source={{
            uri: 'https://www.devteam.space/wp-content/uploads/2021/11/How-to-Build-a-Mobile-App-With-React-Native-656x369.jpg',
          }}
          style={styles.image}
        /> */}

        {image != '' ? (
          <Image source={{uri: baseURL + image}} style={styles.image} />
        ) : (
          <Image
            style={styles.image}
            source={require('../../assets/assets/placeholder.png')}
          />
        )}

        {/* alignSelf:"flex-start" */}

        {isEmailVerified ? (
          <View>
            <Image
              style={{
                height: 15,
                width: 15,
                marginTop: 60,
                marginRight: 5,
                marginLeft: -7,
              }}
              // style={[styles.nextImage, {marginLeft: '55%'}]}
              // source={require('../../../assets/Icons/star.png')}
              source={require('../../assets/Icons/NewStar.png')}
            />
            <Image
              style={{
                height: 7,
                width: 7,
                marginTop: -12,
                marginRight: 5,
                marginLeft: -3,

                //  backgroundColor:'red'
              }}
              // style={[styles.nextImage, {marginLeft: '55%'}]}
              // source={require('../../../assets/Icons/star.png')}
              source={require('../../assets/Icons/Layer.png')}
            />
          </View>
        ) : null}

        <View style={styles.details}>
          <View style={{flexDirection: 'column'}}>
            <View>
              <Text numberOfLines={2} style={styles.sequenceS}>
                {/* {item.id}.{item.session_name} */}
                {/* {item.session_name} */}
                {firstName} {lastName}
              </Text>
            </View>
            <View>
              <Text numberOfLines={2} style={styles.sequence3}>
                {bio}
              </Text>
            </View>
          </View>
        </View>

        <View style={{marginBottom: 50, marginRight: 20, flexDirection: 'row'}}>
          <Image
            style={{height: 10, width: 10, marginTop: 5, marginRight: 5}}
            // style={[styles.nextImage, {marginLeft: '55%'}]}
            // source={require('../../../assets/Icons/star.png')}
            source={require('../../assets/Icons/star.png')}
          />
          <Text style={styles.seq1}>
            4.5
            {/* {item.description} */}
          </Text>
        </View>

        {/* <View style={styles.details1}> */}
        {/* <Text style={styles.sequence}> */}
        {/* {item.id}.{item.session_name} */}
        {/* {item.session_name} */}
        {/* star */}
        {/* </Text> */}
        {/* <Text style={styles.descriptionText}> */}
        {/* 4.5 */}
        {/* {item.description} */}
        {/* </Text> */}
        {/* </View> */}
      </View>
    </View>
  );

  // const Item = ({title, image, passId}) => (

  //   <View style={styles.itemContainer}>
  //     <TouchableWithoutFeedback

  //       // onPress={() => navigation.navigate('ProgramList',{passId:passId,title:title})}
  //       >
  //       <View style={styles.imageView}>
  //         <Image
  //           source={{
  //             uri: 'https://www.devteam.space/wp-content/uploads/2021/11/How-to-Build-a-Mobile-App-With-React-Native-656x369.jpg',
  //           }}
  //           style={styles.image}
  //         />
  //          {/* <Image source={{uri:baseURL+image}} style={styles.image} /> */}
  //          {/* <Image source={{image}} style={styles.image} /> */}

  //         <Text style={styles.title}>{title}</Text>
  //       </View>
  //     </TouchableWithoutFeedback>
  //   </View>
  // );

  return (
    <SafeAreaView style={styles.container}>
      {/* <Button
        onPress={() => {
          navigation.navigate('ProgramList');
          console.log('button');
        }}
        title='Add New Program'/> */}
      <View style={{flex: 1, padding: 5, marginRight: 20, marginLeft: 20}}>
        <CustomHeader
          title="Discover Mentors"
          leftIcon={require('../../assets/Icons/userProfile.png')}
          rightIcon={require('../../assets/Icons/Notification1.png')}
        />
        <View style={{marginLeft: '-12%', marginRight: '-12%'}}>
          <CustomSearch
            searchTerm={searchTerm}
            onSearchTermChange={handleSearchTermChange}
            placeholder="Search Mentors"
          />
        </View>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={filteredData}
          // data={data}
          renderItem={({item}) => {
            // console.log("item is--->",item.docs[0].firstName)
            // console.log("item is------>",item.docs[0].category.categoryName)
            // console.log("item is------>",item.docs[0].category.image)
            // console.log("item is----->",item.docs[0].mentorship_name)

            return (
              <Item
                // title={item.mentorship_name}
                // id={item._id}
                image={item.image}
                firstName={item.firstName}
                lastName={item.lastName}
                bio={item.bio}
                isEmailVerified={item.isEmailVerified}

                // title={item.image}
              />
            );
            //    return <Item title={item.docs[0].category.categoryName} image={item.docs[0].category.image} passId={item.docs[0].category._id} />
          }}
          keyExtractor={item => item._id}
        />
      </View>
    </SafeAreaView>
  );
};

export default Mentorlist;
