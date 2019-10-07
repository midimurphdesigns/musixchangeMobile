import React from 'react';
import {Button, View, Text} from 'react-native';

class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Home',
  };
  render() {
    const {navigate} = this.props.navigation;
    return (
      <View>
        <Text>Musixchange</Text>
        <Text>By Kevin Murphy</Text>
        <Button
          title="Profile"
          onPress={() => navigate('Profile', {name: 'Jane'})}
        />
      </View>
    );
  }
}

export default HomeScreen;
