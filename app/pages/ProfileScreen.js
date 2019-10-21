import React from 'react';
import {View, Button, Text} from 'react-native';

import NavBar from '../components/NavBar';

class ProfileScreen extends React.Component {
  static navigationOptions = {
    drawerLabel: 'Profile',
  };
  render() {
    return (
      <View>
        <NavBar navigation={this.props.navigation} />
      </View>
    );
  }
}

export default ProfileScreen;
