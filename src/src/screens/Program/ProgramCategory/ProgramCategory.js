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
import {styles} from './ProgramCategory.styles';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {TextInput} from 'react-native';
import {getUser} from '../../../selectors/UserSelectors';
import CustomSearch from '../../../components/customSearch';
import CustomHeader from '../../../components/customHeader';
import {CategoryDisplay} from '../../../actions/UserActions';
import Images from '../../../assets/Images/Sample';
const ProgramCategory = props => {
  const [dataNew, setData] = useState([]);
  const [category_id, setCategory_id] = useState([]);
  console.log("NewData",dataNew)
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

    try {
      dispatch(
        CategoryDisplay(cb => {
          console.log('category response check ', cb.data.docs[0]);
          console.log('category response check Name', cb.data.docs[0].docs[0].category.categoryName);
          if (cb != false) {
            // setData(cb.data.docs)
            console.log('doc length', cb.data.docs.length);
            if (cb.messageID === 200) {
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
    return item.docs[0].category.categoryName.toLowerCase().includes(searchTerm.toLowerCase());
  });
  const baseURL = 'http://54.190.192.105:9192/';
  const Item = ({title, image, passId}) => (

    <View style={styles.itemContainer}>
      <TouchableWithoutFeedback
   
        onPress={() => navigation.navigate('ProgramList',{passId:passId})}>
        <View style={styles.imageView}>
          {/* <Image
            source={{
              uri: 'https://www.devteam.space/wp-content/uploads/2021/11/How-to-Build-a-Mobile-App-With-React-Native-656x369.jpg',
            }}
            style={styles.image}
          /> */}
           <Image source={{uri:baseURL+image}} style={styles.image} />
           {/* <Image source={{image}} style={styles.image} /> */}
           
          <Text style={styles.title}>{title}</Text>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );

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
          // data={dataNew}
          data={filteredData}
          renderItem={({item}) => 
          {
            console.log("item is--->",item.docs[0].category._id)
            console.log("item is------>",item.docs[0].category.categoryName)
            console.log("item is------>",item.docs[0].category.image)
            // console.log("item is----->",item.docs[0].mentorship_name)
           
          //  return <Item title={item._id} />
           return <Item title={item.docs[0].category.categoryName} image={item.docs[0].category.image} passId={item.docs[0].category._id} />
          }
        }
          keyExtractor={item => item._id}
        />
      </View>
    </SafeAreaView>
  );
};

export default ProgramCategory;
