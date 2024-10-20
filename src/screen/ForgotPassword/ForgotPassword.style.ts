import {StyleSheet} from 'react-native';
import colors from '../../assets/colors';
import {fontScale} from '../../utils';

export const styles = StyleSheet.create({
  container: {
    height: '100%',
  },
  formTitleDesc: {marginBottom: 20},
  heading: {
    color: colors.blackDark,
    fontWeight: '500',
    fontSize: fontScale(24),
  },
  desc: {
    fontSize: fontScale(16),
    marginTop: 4,
    color: colors.grey_dark,
  },
  bottomText: {
    textAlign: 'center',
    marginVertical: 16,
    fontSize: 18,
    color: colors.grey_dark,
    fontWeight: '500',
  },
});
