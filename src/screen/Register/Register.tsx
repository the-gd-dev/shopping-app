import React, {useState} from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {
  colors,
  emailIcon,
  hidePasswordIcon,
  passwordIcon,
  showPasswordIcon,
  userNameIcon,
  arrowLeft,
} from '../../assets';
import {
  AppLongLogo,
  BottomSheet,
  Button,
  Container,
  Input,
} from '../../component';
import {styles} from './Register.style';

const Register = ({navigation}: any) => {
  const [showPassword, setShowPassword] = useState({
    password: false,
    confirm_password: false,
  });

  return (
    <Container backgroundColor={colors.primary}>
      <View style={styles.container}>
        <AppLongLogo
          marginTop={{
            before: 60,
            after: 10,
          }}
        />
        <BottomSheet addtionalPadding={-130}>
          <View>
            <View>
              <Text style={styles.heading}>Register</Text>
              <Text style={styles.desc}>Shopping & explore more features.</Text>
            </View>
          </View>
          <View style={{flexDirection: 'row', columnGap: 10}}>
            <Input
              prependIconStyle={{left: 10}}
              prependIcon={userNameIcon}
              placeholder="First Name"
              inputStyle={{width: '49%'}}
            />
            <Input
              prependIconStyle={{left: 10}}
              prependIcon={userNameIcon}
              placeholder="Last Name"
              inputStyle={{width: '49%'}}
            />
          </View>

          <Input prependIcon={emailIcon} placeholder="Email Address" />
          <Input
            prependIcon={passwordIcon}
            secureTextEntry={!showPassword.password}
            onAppendIcon={() => {
              setShowPassword(prev => ({...prev, password: !prev.password}));
            }}
            appendIcon={
              showPassword.password ? showPasswordIcon : hidePasswordIcon
            }
            placeholder="Password"
          />
          <Input
            onAppendIcon={() => {
              setShowPassword(prev => ({
                ...prev,
                confirm_password: !prev.confirm_password,
              }));
            }}
            prependIcon={passwordIcon}
            appendIcon={
              showPassword.confirm_password
                ? showPasswordIcon
                : hidePasswordIcon
            }
            secureTextEntry={!showPassword.confirm_password}
            placeholder="Confirm Password"
          />
          <Button title="Signup" variant="primary" btnStyle={{marginTop: 14}} />
          <Text style={styles.bottomText}>
            Already have an account.{' '}
            <Button
              variant="link"
              btnStyle={{marginBottom: -3, width: 'auto'}}
              title="Log In"
              onPress={() => navigation.navigate('Login')}
            />{' '}
            here.
          </Text>
        </BottomSheet>
      </View>
    </Container>
  );
};

export default Register;
