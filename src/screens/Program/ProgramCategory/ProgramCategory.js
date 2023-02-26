import React, {useState, useEffect} from 'react';
import {SafeAreaView} from 'react-native';
import {
  View,
  Text,
  Image,
  FlatList,
  TouchableWithoutFeedback,
} from 'react-native';
import Images from '../../../assets/Images/Sample';
import {styles} from './ProgramCategory.styles';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {getUser} from '../../../selectors/UserSelectors';
import CustomSearch from '../../../components/customSearch';
import CustomHeader from '../../../components/customHeader';
import {CategoryDisplay} from '../../../actions/UserActions';
const ProgramCategory = props => {
  const [dataNew, setData] = useState([]);
  let Data = useSelector(getUser);

  const dispatch = useDispatch();
  const navigation = useNavigation();

  useEffect(() => {
    Display();
  }, []);

  const Display = async () => {
    console.log('display category');

    try {
      dispatch(
        CategoryDisplay(cb => {
          console.log('category display cb response is', cb.data.docs[0]);
          if (cb != false) {
            // setData(cb.data.docs)
            console.log('checkCategory', cb.data.docs.length);
            if (cb.messageID === 200) {
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

  const filteredData = data.filter(item => {
    return item.title.toLowerCase().includes(searchTerm.toLowerCase());
  });
  const baseURL = 'http://54.190.192.105:9192';
  const Item = ({title, image}) => (
    <View style={styles.itemContainer}>
      <TouchableWithoutFeedback
        onPress={() => navigation.navigate('ProgramList')}>
        <View style={styles.imageView}>
          <Image
            source={{
              uri: 'https://www.devteam.space/wp-content/uploads/2021/11/How-to-Build-a-Mobile-App-With-React-Native-656x369.jpg',
            }}
            style={styles.image}
          />
          {/* ÷ <Image source={{uri:baseURL+image}} style={styles.image} /> */}
          <Text style={styles.title}>{title}</Text>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={{flex: 1, padding: 5, marginRight: 20, marginLeft: 20}}>
        <CustomHeader
          title="Programs"
          leftIcon={require('../../../assets/Icons/userProfile.png')}
          rightIcon={require('../../../assets/Icons/Notification1.png')}
        />
        <View style={{marginLeft: '-12%', marginRight: '-12%'}}>
          <CustomSearch
            searchTerm={searchTerm}
            onSearchTermChange={handleSearchTermChange}
            placeholder="Search"
          />
        </View>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={dataNew}
          renderItem={({item}) => 
          {
            console.log('Item:--', item);
           return <Item title={item.mentorship_name} image={item.image} />
          }
        }
          keyExtractor={item => item.id}
        />
      </View>
    </SafeAreaView>
  );
};

export default ProgramCategory;
