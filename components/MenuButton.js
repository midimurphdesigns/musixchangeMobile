import React from 'react';
import {StyleSheet} from 'react-native';
import {Icon} from 'react-native-elements';

export default class MenuButton extends React.Component {
  render() {
    return (
      <Icon
        name="menu"
        color="black"
        size={32}
        style={styles.menuIcon}
        onPress={() => {
          console.log('pressed menu button');
        }}
      />
    );
  }
}

const styles = StyleSheet.create({
  menuIcon: {
    zIndex: 0,
    position: 'absolute',
    top: 40,
    left: 20,
  },
});
