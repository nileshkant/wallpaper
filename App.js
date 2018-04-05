import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import store from './src/store';
import { StackNavigator,TabNavigator,TabBarBottom } from 'react-navigation';
import HomeScreen from './src/screens/HomeScreen';
import DetailsScreen from './src/screens/DetailsScreen';
import FeaturedScreen from './src/screens/FeaturedScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';


export default class App extends React.Component {
  render() {

    const HomeStack = StackNavigator({
      Home: { screen: HomeScreen,
              navigationOptions: {header: null}
            },
      Details: { screen: DetailsScreen, navigationOptions: { title: `Cartoon`}
    },
    });

    const SettingsStack = StackNavigator({
      Settings: { screen: FeaturedScreen,
                  navigationOptions: { header: null}
                },
    });

    const TabScreen=TabNavigator({
        Home: { screen: HomeStack },
        Featured: { screen: SettingsStack },
      },{
        navigationOptions: ({ navigation }) => ({
          tabBarIcon: ({ focused, tintColor }) => {
            const { routeName } = navigation.state;
            let iconName;
            if (routeName === 'Home') {
              iconName = `ios-home${focused ? '' : '-outline'}`;
            } else if (routeName === 'Featured') {
              iconName = `ios-bookmark${focused ? '' : '-outline'}`;
            }
            return <Ionicons name={iconName} size={25} color={tintColor} />;
          },
        }),
        lazyLoad:true,
        tabBarComponent: TabBarBottom,
        tabBarPosition: 'bottom',
        tabBarOptions: {
          activeTintColor: 'tomato',
          inactiveTintColor: 'gray',
          showLabel:false
        },
        animationEnabled: true,
        swipeEnabled: true,
      });

    return (
      <Provider store={store}>
        <View style={styles.container}>
          <TabScreen />
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
