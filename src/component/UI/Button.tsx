import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import colors from '../../assets/colors';
import {fontScale} from '../../utils';
import {TouchableOpacityProps} from 'react-native';
import {ViewStyle} from 'react-native';

interface ButtonPropsTypes extends TouchableOpacityProps {
  title: string;
  variant?: 'primary' | 'secondary' | 'white' | 'link' | 'disabled';
  btnWidth?: number | string;
  iconImage?: any;
  btnStyle?: ViewStyle;
}

const Button = ({
  title = '',
  variant = 'primary',
  disabled,
  onPress,
  btnWidth,
  iconImage,
  btnStyle,
}: ButtonPropsTypes) => {
  const [btnType, setBtnType] = useState<string>('');
  useEffect(() => {
    if (disabled) {
      setBtnType('disabled');
    } else {
      setBtnType(variant);
    }
  }, [variant]);

  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.button,
        styles[btnType],
        {width: btnWidth || '100%'},
        btnStyle,
      ]}
      activeOpacity={0.8}>
      {title && (
        <Text style={[styles.buttonText, styles[btnType + 'Text']]}>
          {title}
        </Text>
      )}
      {iconImage && (
        <View style={styles.imageIconContainer}>
          <Image
            source={iconImage}
            style={[styles.imageIcon, styles[`${variant}ImageIcon`]]}
          />
        </View>
      )}
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  imageIconContainer: {
    height: 40,
    width: 40,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageIcon: {
    height: 25,
    width: 25,
  },
  white: {
    height: 50,
    backgroundColor: colors.white,
  },
  whiteText: {
    color: colors.grey_darkest,
  },
  secondary: {
    height: 50,
    backgroundColor: colors.grey_lighter,
  },
  secondaryText: {
    color: colors.white,
  },
  secondaryImageIcon: {
    tintColor: colors.grey_darkest,
  },
  primary: {
    height: 50,
    backgroundColor: colors.primary,
  },
  primaryText: {
    color: colors.white,
  },
  link: {},
  linkText: {
    color: colors.primary,
  },
  disabledText: {
    color: colors.grey_dark,
  },
  disabled: {
    height: 50,
    backgroundColor: colors.greyLight,
  },
  button: {
    flexDirection: 'row',

    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
  buttonText: {
    fontSize: fontScale(18),
    fontWeight: '500',
    color: colors.dark,
  },
});
