import {
  Image,
  StyleSheet,
  Text,
  TextInputProps,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import React from 'react';
import {TextInput} from 'react-native-gesture-handler';
import colors from '../../assets/colors';
import {fontScale} from '../../utils';

interface InputProps extends TextInputProps {
  placeholder?: string;
  value?: string;
  onChangeText?: (txt: string) => void;
  secureTextEntry?: boolean;
  appendIcon?: any;
  prependIcon?: any;
  onAppendIcon?: () => void | undefined;
  inputStyle?: ViewStyle;
  prependIconStyle?: ViewStyle;
}

const Input = React.forwardRef(
  (
    {
      placeholder = 'Placeholder Text',
      value,
      onChangeText,
      secureTextEntry = false,
      appendIcon,
      prependIcon,
      maxLength,
      multiline,
      onAppendIcon,
      inputStyle,
      prependIconStyle,
    }: InputProps,
    ref: any,
  ) => {
    return (
      <View style={[styles.inputContainer, inputStyle]}>
        {prependIcon && (
          <View style={[styles.prependIcon, prependIconStyle]}>
            <Image source={prependIcon} style={styles.imageIcon} />
          </View>
        )}

        <TextInput
          multiline={multiline}
          maxLength={maxLength}
          onChangeText={onChangeText}
          ref={ref}
          secureTextEntry={secureTextEntry}
          value={value}
          placeholder={placeholder}
          placeholderTextColor={colors.greyDark}
          verticalAlign="top"
          textAlign="left"
          style={[
            styles.input,
            {
              paddingLeft: prependIcon ? 40 : 16,
              paddingRight: appendIcon ? 50 : 16,
            },
          ]}
        />
        {appendIcon && (
          <TouchableOpacity
            onPress={onAppendIcon}
            disabled={!onAppendIcon}
            style={styles.appendIcon}>
            <Image source={appendIcon} style={styles.imageIcon} />
          </TouchableOpacity>
        )}
      </View>
    );
  },
);

export default Input;

const styles = StyleSheet.create({
  imageIcon: {
    height: 20,
    width: 20,
  },
  inputContainer: {
    position: 'relative',
    backgroundColor: colors.grey_lightest,
    marginBottom: 20,
    height: 50,
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    // shadowColor: colors.grey_dark,
    // shadowOpacity: 0.5,
    // shadowOffset: {width: 0, height: 0},
    // elevation: 10,
  },
  prependIcon: {
    height: '100%',
    width: '12%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    left: 0,
    borderTopLeftRadius: 8,
    borderBottomStartRadius: 8,
  },
  appendIcon: {
    position: 'absolute',
    right: 0,
    zIndex: 10,
    height: '100%',
    width: '12%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderTopRightRadius: 8,
    borderBottomEndRadius: 8,
    backgroundColor: colors.greyLight,
  },
  input: {
    position: 'relative',
    paddingLeft: 40,
    fontSize: fontScale(18),
    color: colors.grey_darkest,
    backgroundColor: 'transparent',
    width: '100%',
    height: '100%',
    zIndex: 5,
  },
});
