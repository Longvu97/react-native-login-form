import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';

const WelcomeScreen = () => (
  <View style={styles.daddy}>
    <View style={styles.logo}>
      <Image source={require('../assets/Circle-icons-water.svg.png')} style={styles.logoImage} /> 
    </View>
    <View style={styles.container}>
      <Text style={styles.heading}>
        WATER DELIVERY
      </Text>
      <Text style={styles.description}>
        We deliver water at any point of the Earth in 30 seconds
      </Text>
      <TouchableOpacity
        onPress={() => ({})}
      >
        <View style={[styles.btnLogin, styles.btn]}>
          <Text style={styles.btnTxt}>Login</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        color='black'
        title="Sign up"
        onPress={() => ({})}
      > 
        <View style={[styles.btnSignup, styles.btn]}>
          <Text style={[styles.btnTxt, styles.txtSignup]}>Sign up</Text>
        </View>
      </TouchableOpacity>
    </View>
  </View>
);

const styles = StyleSheet.create({
  daddy: {
    flex: 1,
    flexDirection: 'column',
  },
  logo: {
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoImage: {
    width: 300,
    height: 300,
  },
  container: {
    height: '40%',
    padding: 20,
    paddingLeft: 30,
    paddingRight: 30,
  },
  heading: {
    fontSize: 30,
    color: 'white',
    fontWeight: 'bold',
  },
  description: {
    color: 'white',
    fontSize: 15,
    paddingTop: 20,
  },
  btn: {
    borderRadius: 10,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnLogin: {
    marginTop: 50,
    backgroundColor: 'white',
  },
  btnSignup: {
    marginTop: 20,
    borderColor: 'white',
    borderWidth: 2,
  },
  btnTxt: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  txtSignup: {
    color: 'white',
  }
});

export default WelcomeScreen;