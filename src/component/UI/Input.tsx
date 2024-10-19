import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {TextInput} from 'react-native-gesture-handler';
import colors from '../../assets/colors';
import {fontScale} from '../../utils';

const Input = ({placeholder = 'Placeholder Text'}) => {
  return (
    <View>
      <TextInput
        placeholder={placeholder}
        placeholderTextColor={colors.Battleship_Gray}
        verticalAlign="center"
        textAlign="left"
        style={styles.input}
      />
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  input: {
    height: 50,
    borderRadius: 8,
    paddingHorizontal: 16,
    fontSize: fontScale(20),
    backgroundColor: colors.White,
    marginBottom: 16,
    color: colors.Eerie_black
  },
});
