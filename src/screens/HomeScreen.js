import React from 'react';
import { StyleSheet, Text, View,ScrollView,Dimensions,BackHandler,RefreshControl } from 'react-native';
import {Header} from 'react-native-elements';
import CardView from '../components/CardView';
import NavBar from '../components/NavBar';
import {fetchHomeCollection} from '../reducers/homeScreen';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'

class HomeScreen extends React.Component {
  constructor(props){
    super(props);
    this.state={
      refreshing:false
    }
  }

  componentDidMount(){
  this.props.fetchHomeCollection().then(this.successfetch).catch(this.failurefetch);
}

// fetchHome=()=>{
//
// }
// onRefresh() {
//     this.setState({refreshing: true});
//     this.props.fetchHomeCollection().then(() => {
//       this.setState({refreshing: false});
//     });
//   }

  render() {
    const {collection,loaded,loading}=this.props;
    return (
      <View style={{flex:1}}>
        <View style={{flex:1.35}}>
          <Header
            placement='left'
            //leftComponent={{ icon: 'menu', color: '#fff' }}
            centerComponent={{ text: 'Wallrox', style: { color: '#fff' } }}
            // rightComponent={{ icon: 'home', color: '#fff' }}
            outerContainerStyles={{ backgroundColor: '#3D0240' }}
          />
          </View>
          <View style={{flex:.9, backgroundColor: '#3D0240', elevation:5}}>
            <NavBar cartoon={()=>this.props.navigation.navigate('Details')}/>
          </View>
        <View style={{flex:10}}>
      <ScrollView
        // refreshControl={
          // <RefreshControl
          //   refreshing={this.state.refreshing}
          //   onRefresh={this.onRefresh}
          // />
        }
        >
        {loading && <Text>Loading...</Text>}
        <View style={{ flex:1, flexDirection: 'row', flexWrap: 'wrap'}}>
        {loaded && collection && <CardView  style={{ flex:1,flexBasis: '50%'}} collection={collection} loading={loading}/>}
        </View>
      </ScrollView>
      </View>
    </View>
    );
  }
}
const mapStateToProps = state => ({
  loading : state.homeScreen.loading,
  loaded : state.homeScreen.loaded,
  collection:state.homeScreen.collectionData
})

const mapDispatchToProps = dispatch => bindActionCreators({
  fetchHomeCollection
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps)(HomeScreen)
