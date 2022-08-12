import {Dimensions} from 'react-native';

export const windowWidth = Dimensions.get('window').width;
export const windowHeight = Dimensions.get('window').height;

export const pxToDp = elepx => (windowWidth * elepx) / 375;
