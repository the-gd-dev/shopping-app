import React, {useState} from 'react';
import {KeyboardAvoidingView, Text, View} from 'react-native';
import colors from '../../assets/colors';
import {emailIcon} from '../../assets/images';
import {
  AppLongLogo,
  BottomSheet,
  Button,
  Container,
  Input,
} from '../../component';
import {isIOS} from '../../utils';
import {styles} from './ForgotPassword.style';

const ForgotPassword = ({navigation}: any) => {
  const [showPassword, setShowPassword] = useState(true);

  return (
    <Container backgroundColor={colors.primary}>
      <View style={styles.container}>
        <AppLongLogo marginTop={{
            before: 150,
            after: 50
        }} />
        <BottomSheet addtionalPadding={0}>
          <View style={styles.formTitleDesc}>
            <Text style={styles.heading}>Forgot Password</Text>
            <Text style={styles.desc}>Don't worry we got you.</Text>
          </View>
          <KeyboardAvoidingView behavior={isIOS ? 'padding' : undefined}>
            <View>
              <Input
                placeholder="Email Address Or Username"
                prependIcon={emailIcon}
              />

              <Button title="Submit" />
            </View>
          </KeyboardAvoidingView>
          <View>
            <Text style={styles.bottomText}>
              Remembered your password{' '}
              <Button
                onPress={() => navigation.navigate('Login')}
                btnStyle={{marginBottom: -3, width: 'auto'}}
                variant="link"
                title="Sign In"
              />{' '}
              here
            </Text>
          </View>
        </BottomSheet>
      </View>
    </Container>
  );
};

export default ForgotPassword;
