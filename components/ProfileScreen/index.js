import React from 'react';
import {View, Button, Text} from 'react-native';

class ProfileScreen extends React.Component {
  static navigationOptions = {
    drawerLabel: 'Profile',
  };
  render() {
    return (
      <View>
        <Button
          title="Open Drawer"
          onPress={() => this.props.navigation.toggleDrawer()}
        />
      </View>
    );
  }
}

export default ProfileScreen;
