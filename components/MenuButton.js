import React from 'react';
import {StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default class MenuButton extends React.Component {
  render() {
    console.log('this.props: ', this.props);
    return (
      <Icon
        name="menu"
        color="black"
        size={32}
        style={styles.menuIcon}
        onPress={() => {
          this.props.navigation.toggleDrawer();
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
