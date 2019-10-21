import React from 'react';
import {Button, View, Text, StyleSheet, Platform} from 'react-native';

import NavBar from '../components/NavBar';

class HomeScreen extends React.Component {
  static navigationOptions = {
    drawerLabel: 'Home',
  };
  render() {
    return (
      <View style={styles.wrapper}>
        <View style={styles.statusBar} />
        {/* <NavBar navigation={this.props.navigation} /> */}
      </View>
    );
  }
}

export default HomeScreen;

const styles = StyleSheet.create({
  statusBar: {
    height: Platform.OS === 'ios' ? 44 : 0,
  },
  wrapper: {
    // padding: 20,
  },
});
