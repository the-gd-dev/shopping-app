import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import classes from './Login.style';
import {Button, Container, Input} from '../../component';
import {screenHeight} from '../../utils';

const Login = () => {
  return (
    <Container>
      <View style={{}}>
        <View>
          <Input />
          <Input />
          <Button />
        </View>
      </View>
    </Container>
  );
};

export default Login;

const styles = StyleSheet.create({});
