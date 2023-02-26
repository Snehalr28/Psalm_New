import React, {useState, useEffect} from 'react';
import {SafeAreaView} from 'react-native';
import {Text, View, Image, FlatList, Alert} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Images from '../../../assets/Images/Sample/index';
import {styles} from '../../Program/ProgramList/ProgramList.styles';
import {Button} from '../../../components/Button';
import CustomSearch from '../../../components/customSearch';
import CustomHeader from '../../../components/customHeader';
import {ShowProgram} from '../../../actions/UserActions';

const ProgramList = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const onChangeSearch = query => setSearchQuery(query);
  useEffect(() => {
    // ProgramByCategory();
  }, []);

  const ProgramByCategory = async () => {
    console.log('Program List');
    let ProgramDataOb = {
      mentorid: '63f5af8c247174c71f3e2133',
      category_id: '63c936090a9a959d9ed369d3',
    };
    try {
      dispatch(
        ShowProgram(ProgramDataOb, cb => {
          console.log('Display Category data iss', cb.data.docs);
          // var mydata=[]
          // mydata=cb.data.docs;
          // mydata.map((e1)=>{
          //   console.log(e1.image,"data is");
          // })
          if (cb != false) {
            // setData(cb.data.docs)
            console.log('check', cb.responseCode);
            if (cb.status === 'success') {
              //  setData(cb.data.docs)
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

  const [search, setSearch] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchTermChange = text => {
    setSearchTerm(text);
  };

  const filteredData = data.filter(item => {
    return item.title.toLowerCase().includes(searchTerm.toLowerCase());
  });

  const navigation = useNavigation();
  const Item = ({title, image, date, totalSession, price}) => (
    <View style={[styles.card, styles.elevation]}>
      <View style={{}}>
        <Image source={image} style={styles.image} />
      </View>

      <View style={styles.textContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.date}>{date}</Text>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <View
            style={{flexDirection: 'column', justifyContent: 'space-between'}}>
            <Text style={styles.priceText}>Price</Text>
            <Text style={styles.price}>{`$${price}`}</Text>
          </View>

          <View
            style={{
              marginLeft: 2,
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}>
            <Text style={{color: '#313131', marginLeft: 5, fontSize: 10}}>
              Total Sessions
            </Text>
            <Text style={{color: '#313131', marginLeft: 5}}>
              {totalSession}
            </Text>
          </View>
        </View>

        {/* </View> */}
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
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
        <Text style={styles.headingText}>Career Consultation</Text>
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
        data={filteredData}
        renderItem={({item}) => <Item {...item} />}
        keyExtractor={item => item.title}
      />
      <Button
        onPress={() => {
          navigation.navigate('Add New Program');
          console.log('button');
        }}
        title={'Add New Program'}
      />
    </SafeAreaView>
  );
};

export default ProgramList;
