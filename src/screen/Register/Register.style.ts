import {StyleSheet} from 'react-native';
import colors from '../../assets/colors';
import {fontScale} from '../../utils';

export const styles = StyleSheet.create({
  bottomText: {
    textAlign: 'center',
    marginVertical: 16,
    fontSize: 18,
    color: colors.grey_dark,
    fontWeight: '500',
  },
  container: {
    height: '100%',
  },
  appTitleLogoWrap: {
    paddingHorizontal: 10,
  },
  appDesc: {
    textAlign: 'left',
    color: colors.white,
    fontSize: fontScale(17),
  },
  formHeading: {
    textAlign: 'left',
    color: colors.white,
    fontSize: fontScale(26),
    marginBottom: 20,
  },
  logo: {
    width: '38%',
    height: 60,
    alignSelf: 'flex-start',
  },
  heading: {
    color: colors.blackDark,
    fontWeight: '500',
    fontSize: fontScale(24),
  },
  desc: {
    fontSize: fontScale(16),
    marginBottom: 16,
    marginTop: 5,
    color: colors.grey_dark,
  },
});
