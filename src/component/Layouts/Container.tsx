import {StatusBar, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {fontScale, screenHeight} from '../../utils';
import {SafeAreaView} from 'react-native-safe-area-context';
import colors from '../../assets/colors';
import LinearGradient from 'react-native-linear-gradient';

const Container = ({children, showAppTitle = true}) => {
  return (
    <LinearGradient
      style={styles.appContainer}
      start={{x: -1, y: -1}}
      colors={[colors.White, colors.SGBUS_Green]}>
      <StatusBar
        animated
        networkActivityIndicatorVisible
        backgroundColor={'transparent'}
        barStyle={'dark-content'}
      />
      <View style={styles.container}>
        {showAppTitle && <Text style={styles.appTitle}>Shopyz</Text>}
        <View>{children}</View>
      </View>
    </LinearGradient>
  );
};

export default Container;

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    height: '100%',
    padding: 16,
  },
  appTitle: {
    color: colors.Dim_gray,
    fontSize: fontScale(32),
    fontWeight: '500',
  },
  container: {
    paddingTop: StatusBar.currentHeight + 60,
  },
});
