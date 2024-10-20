import {
  Image,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import React from 'react';
import {fontScale, screenHeight} from '../../utils';
import {SafeAreaView} from 'react-native-safe-area-context';
import {colors, arrowLeft} from '../../assets';
import LinearGradient from 'react-native-linear-gradient';
import {useNavigation} from '@react-navigation/native';

const Container = ({
  children,
  showAppTitle = true,
  backgroundColor,
}: {
  children: React.ReactNode;
  showAppTitle?: boolean;
  backgroundColor?: string;
}) => {
  const navigation = useNavigation();
  const {index, routes}: any = navigation.getState();
  let previousScreenName = '';
  if (index && routes && routes[index - 1].name) {
    previousScreenName = routes[index - 1].name;
  }

  return (
    <View style={styles.appContainer}>
      <StatusBar
        animated
        networkActivityIndicatorVisible
        backgroundColor={'transparent'}
        barStyle={'dark-content'}
      />
      <View style={[styles.container, {backgroundColor}]}>
        {previousScreenName && (
          <View style={styles.iconContainer}>
            <TouchableOpacity
              style={styles.backBtn}
              onPress={() => navigation.goBack()}>
              <Image source={arrowLeft} style={styles.icon} />
            </TouchableOpacity>
          </View>
        )}
        <View>{children}</View>
      </View>
    </View>
  );
};

export default Container;

const styles = StyleSheet.create({
  backBtnText: {
    color: colors.white,
    fontSize: fontScale(20),
    fontWeight: '500',
  },
  backBtn: {flexDirection: 'row', alignItems: 'center', gap: 10},
  iconContainer: {paddingHorizontal: 16, top: 10},
  icon: {
    width: 24,
    height: 24,
    tintColor: colors.white,
  },
  appContainer: {
    flex: 1,
    height: '100%',
  },
  appTitle: {
    color: colors.primary,
    fontSize: fontScale(32),
    fontWeight: '500',
  },
  container: {
    height: '100%',
    paddingTop: (StatusBar.currentHeight || 0) + 60,
  },
});
