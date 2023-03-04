import {StyleSheet} from "react-native";
export const styles = StyleSheet.create({
  container:{flex: 1, backgroundColor: 'white',  },
  headerView:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
    marginLeft: '5%',
    marginRight: '5%',
    paddingTop: 8,
  },
  addText:{
    fontSize: 14,
    fontWeight: 'bold',
    marginLeft: '-53%',
    marginTop: 3,
  },
  textInputMianView:{
    height: '12%',
    width: '100%',
    borderWidth: 1,
    justifyContent: 'center',
    marginBottom: 10,
    borderRadius: 10,
    backgroundColor: 'white',
    // marginBottom: 15,
    borderColor: '#E5E4E2',
  },
  imageStyle:{height: 45, width: 45, alignSelf: 'center'},
  imageIcon:{height: 25, width: 25},
  textInputView: {marginTop: 15},
  requiredView: {marginBottom: '-8%', marginTop: 5},
  requiredText: {marginLeft: '21%', color: '#FF0000'},
  textInputField: {borderWidth: 1, borderRadius: 10, borderColor: '#313131'},
  imageViewStyle: {
    alignSelf: 'flex-end',
    marginTop: 9,
    marginRight: '8%',
    position: 'absolute',
  },
  imageIconStyle: {height: 17, width: 19, marginTop: 13},
  imageView: {
    alignSelf: 'flex-end',
    marginTop: 12,
    marginRight: '10%',
    position: 'absolute',
  },
  image: {height: 20, width: 20, marginTop: 12},
  addDocument: {
    fontWeight: '500',
    fontSize: 16,
    marginBottom: 20,
    color: 'black',
  },
  uploadText:{alignSelf: 'center', fontWeight: '400'},
});
