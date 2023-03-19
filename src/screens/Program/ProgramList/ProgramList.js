import React, {useState, useEffect} from 'react';
import {SafeAreaView} from 'react-native';
import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  TouchableOpacity,
  ScrollView,
  TextInput,
  ActivityIndicator
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useFocusEffect} from '@react-navigation/native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {Searchbar} from 'react-native-paper';
// import {TextInput, IconButton} from 'react-native-paper';
import Images from '../../../assets/Images/Sample/index';
import {styles} from '../../Program/ProgramList/ProgramList.styles';
import {Button} from '../../../components/Button';
import CustomSearch from '../../../components/customSearch';
import CustomHeader from '../../../components/customHeader';
import {ProgramListShow, ShowProgram} from '../../../actions/UserActions';
import {useDispatch, useSelector} from 'react-redux';
import {getUser} from '../../../selectors/UserSelectors';

const ProgramList = ({route}) => {
  const navigation = useNavigation();

  let getuserData = useSelector(getUser);
  console.log('Get userId for program list', getuserData.response.data._id);
  const {passId} = route.params;
  const {title} = route.params;

  console.log('program Id iss', passId);
  console.log('Title name iss', title);
  const [isLoading, setisLoading] = useState(true);
  const [showscreen, setShowScreen] = useState(false);
  console.log('isloading true for add program', isLoading);
  const [searchQuery, setSearchQuery] = useState('');
  const [dataNew, setData] = useState([]);
  console.log('response of program list', dataNew);
  const dispatch = useDispatch();
  const onChangeSearch = query => setSearchQuery(query);


  useFocusEffect(
    React.useCallback(() => {
      ProgramByCategory();
      return () => {
        
      };
    }, []),
  );
  useEffect(() => {
    ProgramByCategory();
  }, []);

  const ProgramByCategory = async () => {
    console.log('Program List call');
    let ProgramListOb = {
      mentorid: getuserData.response.data._id,
      category_id: passId,
    };
    try {
      dispatch(
        ProgramListShow(ProgramListOb, cb => {
          console.log('Program Object iss', ProgramListOb);
          console.log('Display Program Category', cb.data.docs[0]);
          // var mydata=[]
          // mydata=cb.data.docs;
          // mydata.map((e1)=>{
          //   console.log(e1.image,"data is");
          // })
          if (cb != false) {
            // setData(cb.data.docs)
            console.log('check', cb.responseCode);
            if (cb.messageID === 200) {
              setShowScreen(true);
              setisLoading(false);
              setData(cb.data.docs);
              //  setData(cb.data.docs)
              // navigation.navigate('ProgramList');
            }
          }
          setisLoading(false);
        }),
      );
    } catch (error) {
      Alert.alert('Invalid Data');
    }
  };

  const data = [
    {
      title: 'Aliqua id fugiat nostr...',
      image: Images.addImage1,
      date: '02-21-2022  |  03:50 PM',
      price: 14.99,
      totalSession: 12,
    },
    {
      title: 'Career Seeker',
      image: Images.addImage2,
      date: '02-21-2022  |  03:50 PM',
      price: 14.99,
      totalSession: 12,
    },
    {
      title: 'Career Seekers',
      image: Images.addImage3,
      date: '02-21-2022  |  03:50 PM',
      price: 14.99,
      totalSession: 12,
    },
  ];
  const showLoder = () => {
    return (
      <View style={{flex: 1, justifyContent: 'center'}}>
        <ActivityIndicator
          size={'large'}
          color={'black'}
          style={styles.activityIndicator}
        />
      </View>
    );
  };
  const [search, setSearch] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchTermChange = text => {
    setSearchTerm(text);
  };

  const filteredData = dataNew.filter(item => {
    return item.mentorship_name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
  });
  const baseURL = 'http://54.190.192.105:9192/';

  const Item = ({title, image, price, start_date, availibility_from, id}) => (
    <>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('programs', {
            passId: passId,
            title: title,
            ProgramID: id,
          });
          console.log('pressed');
        }}>
        <View style={[styles.card, styles.elevation]}>
          <View style={{}}>


          {image != '' ? (
               <Image source={{uri: baseURL + image}} style={styles.image} />
        ) : (
          <Image
            style={styles.image}
            // source={require('../../assets/assets/placeholder.png')}
            source={require('../../../assets/assets/placeholder.png')}
          />
        )}
         
            {/* <Image source={image} style={styles.image} /> */}
          </View>

          <View style={styles.textContainer}>
            <Text style={styles.title}>{title}</Text>
            <View style={{flexDirection: 'row'}}>
              <Text style={styles.date}>{start_date}</Text>
              <Text style={{marginLeft: 5, marginRight: 5}}>|</Text>
              <Text style={styles.date}>{availibility_from}</Text>
            </View>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <View
                style={{
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                }}>
                <Text style={styles.priceText}>Price</Text>
                <Text style={styles.price}>{`$${price}`}</Text>
                {/* <Text style={styles.price}>45</Text> */}
              </View>

              <View
                style={{
                  marginLeft: 2,
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                }}>
                <Text style={styles.totalSession}>Total Sessions</Text>
                {/* <Text style={styles.totalSessionNo}>
              {totalSession}
            </Text> */}
              </View>
            </View>

            {/* </View> */}
          </View>
        </View>
      </TouchableOpacity>
    </>
  );

  return (
    <>
       {isLoading && showLoder()}
       {showscreen? (<SafeAreaView style={styles.container}>
      <CustomHeader
        title="Programs"
        leftIcon={require('../../../assets/Icons/userProfile.png')}
        rightIcon={require('../../../assets/Icons/Notification1.png')}
      />
      <View style={{marginLeft: '-10%', marginRight: '-10%'}}>
        <CustomSearch
          searchTerm={searchTerm}
          onSearchTermChange={handleSearchTermChange}
          placeholder="Search"
        />
      </View>

      <View style={styles.topHeading}>
        <Text style={styles.headingText}>{title}</Text>
        <View
          style={{
            marginBottom: 10,
          }}>
          <View style={{}}>
            <Image
              style={{height: 20, width: 20, marginTop: 5}}
              source={require('../../../assets/Icons/Stroke.png')}
            />
          </View>
        </View>
      </View>
      <FlatList
        // data={dataNew}
        data={filteredData}
        renderItem={({item}) => {
          console.log(
            'Item Data:--->>>',
            item,
            item.mentorship_name,
            item.image,
            item.price,
            item.availibility_from,
            item.start_date,
          );
          return (
            <Item
              title={item.mentorship_name}
              id={item._id}
              image={item.image}
              price={item.price}
              availibility_from={item.availibility_from}
              start_date={item.start_date}
            />
          );
        }}
        keyExtractor={item => item.id}

        // renderItem={({item}) => <Item {...item} />}
        // keyExtractor={item => item.title}
      />
      <Button
        onPress={() => {
          navigation.navigate('Add New Program', {
            passId: passId,
            title: title,
          });
          console.log('button');
        }}
        title={'Add New Program'}
      />
        </SafeAreaView>):null}
    </>
  
  );
};

export default ProgramList;
