import React,{Component} from 'react';
import {View,Image,Dimensions,Text,StyleSheet} from 'react-native';
import testimg from '../../assets/test.png';

class CardView extends Component{
  constructor(props) {
    super(props);
    this.state = {
    };
  }
render(){
  const {collection}=this.props;
  console.log("props", collection);
  return this.props.collection.map(photos => {
  return (
    <View style={styles.container} key={photos.id}>
      <Image
        resizeMode = 'cover'
        style={styles.image}
        source={{uri: photos.urls.regular} }
       />
       {/* <Text style={styles.textBottom}>
         Download
       </Text> */}
    </View>
  );
});
}
}
let width = Dimensions.get('window').width;
let height = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container:{
    overflow: "hidden"
  },
  image: {
    width: width*.47,
    height:height*.4,
    marginLeft:5,
    marginRight:5,
    marginTop:10,
    flexGrow:1,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
  },
  textBottom: {
    width: width*.47,
    marginLeft:5,
    marginRight:5,
    backgroundColor:'#B7B7B7',
    color:'#3D0240',
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0, padding:5,}
});

export default CardView;
