import React from 'react';
import { StyleSheet, Text, View,ScrollView,Dimensions } from 'react-native';
import {Header} from 'react-native-elements';
import CardView from '../components/CardView';
import NavBar from '../components/NavBar';


class FeaturedScreen extends React.Component {
  render() {
    return (
      <View style={{flex:1}}>
        <View style={{flex:1.35}}>
          <Header
            // leftComponent={{ icon: 'menu', color: '#fff' }}
            centerComponent={{ text: 'Featured', style: { color: '#fff' } }}
            // rightComponent={{ icon: 'home', color: '#fff' }}
            outerContainerStyles={{ backgroundColor: '#3D0240' }}
          />
          </View>
        <View style={{flex:10}}>
      <ScrollView>
        <View style={{ flex:1, flexDirection: 'row', flexWrap: 'wrap'}}>
        {/* <CardView  style={{ flex:1,flexBasis: '50%'}}/> */}

        </View>
      </ScrollView>
      </View>
    </View>
    );
  }
}

export default FeaturedScreen;
