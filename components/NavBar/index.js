import React from 'react';
import {StyleSheet, View} from 'react-native';
import MenuButton from './MenuButton';

export default class NavBar extends React.Component {
  render() {
    console.log('this.props: ', this.props);
    return (
      <View style={styles.container}>
        <MenuButton navigation={this.props.navigation} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});
