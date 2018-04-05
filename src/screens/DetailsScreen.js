import React from 'react';
import ReactNative, {
  Platform,
  StyleSheet,
  Text,
  View,
  ScrollView
} from 'react-native';


class DetailsScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Details Screen</Text>
      </View>
    );
  }
}

export default DetailsScreen;
