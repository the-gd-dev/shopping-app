import {Animated, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useRef} from 'react';
import {colors, logoTitle} from '../../assets';
import {fontScale} from '../../utils';
import {useKeyboard} from '../../hooks';
import {ViewStyle} from 'react-native';
import {TextStyle} from 'react-native';

type animatedValue = {
  before?: number;
  after?: number;
};

interface AppLongLogoPropsType {
  marginTop?: animatedValue;
  width?: animatedValue;
  height?: animatedValue;
  logoCustomStyle?: ViewStyle;
  descCustomStyle?: TextStyle;
}

const AppLongLogo = ({
  marginTop = {before: 100, after: 25},
  width = {before: 180, after: 160},
  height = {before: 80, after: 50},
  logoCustomStyle,
  descCustomStyle,
}: AppLongLogoPropsType) => {
  const {keyboardVisible} = useKeyboard();

  const animatedMarginTop = useRef(
    new Animated.Value(marginTop.before),
  ).current;
  const animatedWidth = useRef(new Animated.Value(width.before)).current;
  const animatedHeight = useRef(new Animated.Value(height.before)).current;

  useEffect(() => {
    Animated.timing(animatedWidth, {
      toValue: keyboardVisible ? width.after : width.before,
      duration: 200,
      useNativeDriver: false,
    }).start();
    Animated.timing(animatedHeight, {
      toValue: keyboardVisible ? height.after : height.before,
      duration: 200,
      useNativeDriver: false,
    }).start();
    Animated.timing(animatedMarginTop, {
      toValue: keyboardVisible ? marginTop.after : marginTop.before,
      duration: 200,
      useNativeDriver: false,
    }).start();
  }, [keyboardVisible]);

  return (
    <Animated.View
      style={[styles.appTitleLogoWrap, {marginTop: animatedMarginTop}]}>
      <Animated.Image
        style={[
          styles.logo,
          logoCustomStyle,
          {
            width: animatedWidth,
            height: animatedHeight,
          },
        ]}
        source={logoTitle}
      />

      <Animated.Text style={[styles.appDesc, descCustomStyle]}>
        {`Your Style, Your Store | Anytime, Anywhere!`}
      </Animated.Text>
    </Animated.View>
  );
};

export default AppLongLogo;

const styles = StyleSheet.create({
  appTitleLogoWrap: {
    paddingHorizontal: 16,
  },
  appDesc: {
    textAlign: 'center',
    color: colors.white,
    fontSize: fontScale(18),
  },
  logo: {
    width: 180,
    height: 80,
    alignSelf: 'center',
  },
});
