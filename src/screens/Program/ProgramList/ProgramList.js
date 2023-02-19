import React, {useState} from 'react';
import {SafeAreaView} from 'react-native';
import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  TouchableOpacity,
  ScrollView,
  TouchableWithoutFeedback
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {Searchbar} from 'react-native-paper';
import {TextInput, IconButton} from 'react-native-paper';
import Images from '../../../assets/Images/Sample/index';
import { styles } from '../../Program/ProgramList/ProgramList.styles';
const image = '../';
const ProgramList = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const onChangeSearch = query => setSearchQuery(query);

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
  const navigation = useNavigation();
  const Item = ({title, image, date, totalSession, price}) => (
    // onPress={() => navigation.navigate('programs')}
<TouchableWithoutFeedback
      onPress={() => navigation.navigate('programs')}
      // onPress={() => console.log("btn presses")}
   
      //    onPress={() => navigation('Register')}
      // style={styles.itemContainer}
      >
    <View style={[styles.card, styles.elevation]}>
      <Image source={image} style={styles.image} />
      <View style={styles.textContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.date}>{date}</Text>

        {/* <View style={{flexDirection: 'row', justifyContent: 'space-between'}}> */}
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <View>
            <Text style={styles.priceText}>Price</Text>
            <Text style={styles.price}>{`$${price}`}</Text>
          </View>

          <View>
            <Text style={styles.sessionText}>Total Sessions</Text>
            <Text style={styles.session}>{totalSession}</Text>
          </View>
        </View>

        {/* </View> */}
      </View>
    </View>
    </TouchableWithoutFeedback>
  );

  return (
    <SafeAreaView
      style={{
        flex: 1,
        flexDirection: 'column',
        padding: 20,
        backgroundColor: '#fff',
      }}>
      {/* <ScrollView> */}
      <View>
        <Searchbar
          style={{
            // borderWidth: 0.5,
            borderColor: 'black',
            borderRadius: 10,
            height: 43,
          }}
          placeholder="Search"
          padding={2}
          // height={30}
          // mode="outlined"
          // outlineColor="black"
          onChangeText={onChangeSearch}
          value={searchQuery}
        />
      </View>

      <View
        style={{
          marginTop: 23,
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginBottom:10
        }}>
        <Text style={{fontSize: 20, fontWeight: '500', color: '#313131'}}>
          Career Consultation
        </Text>
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
        data={data}
        renderItem={({item}) => <Item {...item} />}
        keyExtractor={item => item.title}
      />

      <TouchableOpacity
          onPress={e => {
              navigation.navigate('Add New Program');
            }}
        style={{
          justifyContent: 'center',
          alignSelf: 'center',
          borderWidth: 1,
          height: 45,
          width: '100%',
          borderRadius: 10,
          backgroundColor: '#FE4D4D',
          borderColor: '#FE4D4D',
        }}>
        <Text
          style={{
            alignSelf: 'center',
            color: 'white',
            fontWeight: '700',
            fontSize: 16,
          }}>
          Add New Program
        </Text>
      </TouchableOpacity>
      {/* </ScrollView> */}
    </SafeAreaView>
  );
};

export default ProgramList;

