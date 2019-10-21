import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import MenuButton from './MenuButton';

export default class NavBar extends React.Component {
  render() {
    console.log('this.props: ', this.props);
    return (
      <View style={styles.container}>
        <MenuButton navigation={this.props.navigation} />
        <View style={{justifyContent: 'center'}}>
          <Text style={styles.title}>Musixchange</Text>
        </View>
        <View style={{flex: 1}} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  title: {
    flex: 1,
    fontWeight: 'bold',
    fontSize: 18,
  },
});
