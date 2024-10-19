import {Dimensions} from 'react-native';

export const screenHeight = Dimensions.get('screen').height;
export const screenWidth = Dimensions.get('screen').width;
export const fontScale = (size: number) =>
  Dimensions.get('screen').fontScale * size;
