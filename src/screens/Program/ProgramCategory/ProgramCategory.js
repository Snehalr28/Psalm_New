import React, {useEffect} from 'react';
import {SafeAreaView} from 'react-native';
import {
  View,
  Text,
  Image,
  StyleSheet,
  FlatList,
  TouchableWithoutFeedback,
} from 'react-native';
import Images from '../../../assets/Images/Sample';
import {Searchbar} from 'react-native-paper';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {styles} from './ProgramCategory.styles';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {useFocusEffect} from '@react-navigation/native';
import {CategoryDisplay} from '../../../actions/UserActions';
import {getUser} from '../../../selectors/UserSelectors';

const ProgramCategory = props => {
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
          console.log('Display Category data', cb.data.docs);
          if (cb != false) {
            console.log('check', cb.responseCode);
            if (cb.status === 'success') {
              
              // navigation.navigate('ProgramList');
            }
          }
        }),
      );
    } catch (error) {
      Alert.alert('Invalid Data');
    }
  };

  // const navigation = useNavigation();
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

  const Item = ({title, image}) => (
    <View style={styles.itemContainer}>
      <TouchableWithoutFeedback
        onPress={() => navigation.navigate('ProgramList')}
        // onPress={() => console.log("btn presses")}

        //    onPress={() => navigation('Register')}
        // style={styles.itemContainer}
      >
        <View
          style={{borderWidth: 1, borderColor: '#E5E4E2', borderRadius: 10}}>
          <Image source={image} style={styles.image} />
          <Text style={styles.title}>{title}</Text>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );

  // const [searchQuery, setSearchQuery] = useState('');
  // const onChangeSearch = query => setSearchQuery(query);

  return (
    <SafeAreaView
      style={{
        flex: 1,
        flexDirection: 'column',
        padding: 20,
        backgroundColor: '#fff',
      }}>
      {/* <Searchbar
        style={{
          borderColor: 'black',
          borderRadius: 10,
          height: 43,
          marginRight: 20,
          marginLeft: 20,
          marginBottom: -10,
        }}
        placeholder="Search"
        padding={2}
        onChangeText={onChangeSearch}
        value={searchQuery}
      /> */}

      <FlatList
        showsVerticalScrollIndicator={false}
        data={data}
        // data={Data}
        renderItem={({item}) => <Item title={item.title} image={item.image} />}
        // renderItem={({item}) => <Item title={item.categoryName} image={item.image} />}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
};

export default ProgramCategory;

{
  /* <FlatList
showsVerticalScrollIndicator={false}
data={data}
renderItem={
  ({item}) => {
    return (
      <View style={styles.itemContainer}>
        <TouchableOpacity
          style={{
            borderWidth: 1,
            borderColor: '#E5E4E2',
            borderRadius: 10,
          }}
          onPress={() => handleItemPress(item)}>
          <Image source={item.image} style={styles.image} />
          <Text style={styles.title}>{item.title}</Text>
        </TouchableOpacity>
      </View>
    );
  }
  // <Item title={item.title} image={item.image}
  // item={item.id} />
}
keyExtractor={(item, index) => {
  return index.toString();
}}
// keyExtractor={item => item.id}
/> */
}
