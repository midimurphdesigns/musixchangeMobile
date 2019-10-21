import React from 'react';
import {Button, View, Text} from 'react-native';

import MenuButton from '../MenuButton';

class HomeScreen extends React.Component {
  static navigationOptions = {
    drawerLabel: 'Home',
  };
  render() {
    return (
      <View>
        <MenuButton />
        <Button
          title="Open Drawer"
          navigation={this.props.navigation}
          onPress={() => this.props.navigation.toggleDrawer()}
        />
      </View>
    );
  }
}

export default HomeScreen;
