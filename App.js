import React from 'react';
import {ImageBackground, StyleSheet} from 'react-native';
import WelcomeScreen from './components/welcome_screen';
import LoginScreen from './components/login_screen';

const App = () => (
  <ImageBackground source={require('./assets/background.jpeg')} resizeMode="cover" style={styles.image}>
    <LoginScreen/>
  </ImageBackground>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: 'flex-end',
  },
});

export default App;
