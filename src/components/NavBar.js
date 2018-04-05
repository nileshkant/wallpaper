import React from 'react';
import ReactNative, {
  Platform,
  StyleSheet,
  Text,
  View,
  ScrollView
} from 'react-native';

const NavBar=(props)=>{
  const {headerText,menuStyle}=styles;
  return(
    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <View><Text style={menuStyle} onPress={() => props.cartoon('details')}>Cartoon</Text></View>
        <View><Text style={menuStyle}>Movies</Text></View>
        <View><Text style={menuStyle}>Artistic</Text></View>
        <View><Text style={menuStyle}>Minimal</Text></View>
        <View><Text style={menuStyle}>Games</Text></View>
        <View><Text style={menuStyle}>Sports</Text></View>
        <View><Text style={menuStyle}>Motivation</Text></View>
        <View><Text style={menuStyle}>Flowers</Text></View>
        <View><Text style={menuStyle}>Cities</Text></View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  menuStyle: {
    borderRadius: 30,
    borderWidth: 0.5,
    color:'#000',
    backgroundColor:'#FAE3E3',
    padding:5,
    paddingLeft:10,
    paddingRight:10,
    marginLeft:5,
    marginRight:5,
  }
});

export default NavBar;
