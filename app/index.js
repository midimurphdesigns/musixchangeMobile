import React from 'react';
import {View, SafeAreaView} from 'react-native';
import {createAppContainer, withNavigation} from 'react-navigation';

import DrawerNavigator from './navigation';
import NavBar from './components/NavBar';

const AppContainer = createAppContainer(DrawerNavigator);

function App(props) {
  return (
    <SafeAreaView>
      <NavBar />
      <AppContainer />
    </SafeAreaView>
  );
}

export default App;
// export default withNavigation(App);
