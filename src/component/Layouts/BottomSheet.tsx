import {StyleSheet, Animated, View, ScrollView} from 'react-native';
import React, {useEffect, useRef} from 'react';
import {useKeyboard} from '../../hooks';
import colors from '../../assets/colors';

const BottomSheet = ({
  children,
  defaultPadding = 50,
  addtionalPadding = -85,
  backgroundColor = colors.white,
  disableAnimation = false,
}: {
  children?: React.ReactNode;
  defaultPadding?: number;
  addtionalPadding?: number;
  backgroundColor?: string;
  disableAnimation?: boolean;
}) => {
  const {keyboardHeight, keyboardVisible} = useKeyboard();
  const animatedPadding = useRef(new Animated.Value(defaultPadding)).current;

  useEffect(() => {
    if (keyboardVisible && !disableAnimation) {
      Animated.timing(animatedPadding, {
        toValue: keyboardHeight + addtionalPadding,
        duration: 200,
        useNativeDriver: false,
      }).start();
    } else {
      Animated.timing(animatedPadding, {
        toValue: defaultPadding,
        duration: 20,
        useNativeDriver: false,
      }).start();
    }
  }, [keyboardHeight, keyboardVisible, disableAnimation]);

  return (
    <Animated.View
      style={[
        styles.container,
        {paddingBottom: animatedPadding, backgroundColor: backgroundColor},
      ]}>
      <View style={styles.barHold} />

      {children}
    </Animated.View>
  );
};

export default BottomSheet;

const styles = StyleSheet.create({
  barHold: {
    backgroundColor: colors.grey_light,
    height: 6,
    width: 120,
    borderRadius: 20,
    alignSelf: 'center',
    marginVertical: 16,
  },
  container: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: 25,
    paddingTop: 0,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    shadowColor: colors.black,
    shadowOffset: {width: 0, height: -2},
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5,
  },
});
