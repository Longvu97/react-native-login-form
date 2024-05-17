import React, { useEffect, useState } from "react";
import { StyleSheet, View, Text, TextInput, TouchableOpacity } from 'react-native';
import Svg, { Path } from 'react-native-svg';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const COLOR_THEME_BLUE = '#1E65B0';
const COLOR_THEME_GREY = '#B2B2B2';

function Input({
  label,
  iconFirst,
  iconLast,
  onFocus = () => {},
  styleInput,
  value,
  setValue,
}) {
  const [isFocused, setIsFocused] = useState(false);
  const [isShowed, setIsShowed] = useState(false);
  const colorFocuse = isFocused ? COLOR_THEME_BLUE : COLOR_THEME_GREY;

  return (
    <View
      style={[
        styles.input,
        styleInput,
        { borderBottomColor: colorFocuse}
      ]}
    >
      <Icon
        name={iconFirst}
        style={{
          fontSize: 20,
          color: colorFocuse,
        }}
      ></Icon>
      <TextInput
        onFocus={() => {
          onFocus(),
          setIsFocused(true);
        }}
        onBlur={() => {
          setIsFocused(false);
        }}
        placeholder={label}
        style={{
          paddingHorizontal: 20,
          width: '85%',
        }}
        value={value}
        onChangeText={setValue}
        secureTextEntry={label !== 'Email' ? !isShowed : false }
      >
      </TextInput>
      { iconLast !== 'eye-off-outline' ? (
        <Icon
        name={iconLast}
        style={{
          fontSize: 20,
          color: colorFocuse,
        }}
        ></Icon>
      ) : (
        <TouchableOpacity
          onPress={() => setIsShowed(!isShowed)}
        >
          <Icon
            name={!isShowed ? iconLast : 'eye-outline' }
            style={{
              fontSize: 20,
              color: colorFocuse,
            }}
          ></Icon>
        </TouchableOpacity>
      )}
    </View>
  )
}

function LoginScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [markEmailIcon, setMarkEmailIcon] = useState('');

  useEffect(() => {
    validateForm();
  }, [email, password]);

  const validateForm = () => {
    if (email && /\S+@\S+\.\S+/.test(email)) {
      setMarkEmailIcon('check');
    } else {
      setMarkEmailIcon('window-close');
    }

    if (!email) {
      setMarkEmailIcon('');
    }
  }

  return (
    <View style={styles.daddy}>
      <View style={styles.titleHeader}>
        <Text style={styles.headerTxt}>
          Welcome
        </Text>
        <Text style={styles.headerTxt}>
          Back
        </Text>
      </View>
      <View style={styles.container}>
        <Svg
          height='100%'
          width="100%"
          viewBox="0 0 1440 320"
          style={{ position: 'absolute', top: -250 }}
        >
          <Path
            fill='white'
            d='M0,160L80,149.3C160,139,320,117,480,133.3C640,149,800,203,960,218.7C1120,235,1280,213,1360,202.7L1440,192L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z'
          />
        </Svg>
        <View style={styles.inputs}>
          <Input value={email} setValue={setEmail} label='Email' iconFirst='email-outline' iconLast={markEmailIcon} styleInput={{ marginBottom: 30 }}/>
          <Input value={password} setValue={setPassword} label='Password' iconFirst='lock-outline' iconLast='eye-off-outline' />
        </View>
        <View style={styles.forgotPwd}>
          <TouchableOpacity>
            <Text style={{color: COLOR_THEME_BLUE, fontWeight: 'bold'}}>Forgot password?</Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity
            onPress={() => ({})}
          >
            <View style={[styles.btnLogin, styles.btn]}>
              <Text style={styles.btnTxt}>Log in</Text>
            </View>
          </TouchableOpacity>
          <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 15, marginHorizontal: 50 }}>
            <View style={{flex: 1, height: 1, backgroundColor: COLOR_THEME_GREY}} />
            <View>
              <Text style={{width: 50, textAlign: 'center', color: COLOR_THEME_GREY}}>or</Text>
            </View>
            <View style={{flex: 1, height: 1, backgroundColor: COLOR_THEME_GREY}} />
          </View>
        </View>
        <View>
          <TouchableOpacity
            onPress={() => ({})}
          >
            <View style={[styles.btnSignup, styles.btn]}>
              <Text style={{color: COLOR_THEME_GREY}}>Sign up</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  daddy: {
    flex: 1,
    flexDirection: 'column',
  },
  titleHeader: {
    flex: 1.3,
    justifyContent: 'center',
    paddingLeft: 30,
  },
  headerTxt: {
    fontSize: 40,
    color: 'white',
    fontWeight: 'bold',
  },
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  input: {
    flexDirection: 'row',
    borderColor: 'white',
    borderWidth: 1,
    paddingVertical: 12
  },
  inputs: {
    paddingHorizontal: 50
  },
  forgotPwd: {
    paddingTop: 10,
    marginHorizontal: 50,
    alignItems: 'flex-end',
  },
  btnLogin: {
    marginTop: 40,
    backgroundColor: COLOR_THEME_BLUE,
  },
  btn: {
    borderRadius: 10,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 50,
  },
  btnTxt: {
    fontSize: 15,
    fontWeight: 'bold',
    color: 'white'
  },
  btnSignup: {
    marginTop: 15,
    borderColor: COLOR_THEME_GREY,
    borderWidth: 2,
  },
});

export default LoginScreen;