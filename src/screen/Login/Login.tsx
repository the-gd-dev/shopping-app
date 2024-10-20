import React, {useState} from 'react';
import {KeyboardAvoidingView, Text, View} from 'react-native';
import colors from '../../assets/colors';
import {
  emailIcon,
  hidePasswordIcon,
  passwordIcon,
  showPasswordIcon,
} from '../../assets/images';
import {
  AppLongLogo,
  BottomSheet,
  Button,
  Container,
  Input,
} from '../../component';
import {isIOS} from '../../utils';
import {styles} from './Login.style';

const Login = ({navigation}: any) => {
  const [showPassword, setShowPassword] = useState(true);

  return (
    <Container backgroundColor={colors.primary}>
      <View style={styles.container}>
        <AppLongLogo />
        <BottomSheet>
          <View style={styles.formTitleDesc}>
            <Text style={styles.heading}>Login</Text>
            <Text style={styles.desc}>Login with user name and password.</Text>
          </View>
          <KeyboardAvoidingView behavior={isIOS ? 'padding' : undefined}>
            <View>
              <Input
                placeholder="Email Address Or Username"
                prependIcon={emailIcon}
              />
              <Input
                placeholder="Password"
                secureTextEntry={showPassword}
                prependIcon={passwordIcon}
                onAppendIcon={() => setShowPassword(!showPassword)}
                appendIcon={!showPassword ? showPasswordIcon : hidePasswordIcon}
              />
              <Button title="Login" />
              <Button
                onPress={() => navigation.navigate('ForgotPassword')}
                style={{marginTop: 16, alignSelf: 'center'}}
                variant="link"
                title="Forgot My Password"
              />
            </View>
          </KeyboardAvoidingView>
          <View>
            <Text style={styles.bottomText}>
              Not having an account{' '}
              <Button
                onPress={() => navigation.navigate('Register')}
                btnStyle={{marginBottom: -3, width: 'auto'}}
                variant="link"
                title="Sign Up"
              />{' '}
              here
            </Text>
          </View>
        </BottomSheet>
      </View>
    </Container>
  );
};

export default Login;
