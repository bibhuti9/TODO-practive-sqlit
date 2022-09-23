import { Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');

export const COLORS = {
    primaryColor: '#ee5b59',

    gray1: "#bbb7b7",

    white: "#fff",
    black: '#413f3f',

}

export const SIZE = {
    width,
    height,
    h1: 25,
    h2: 20,
    padding1: 20,
    padding2: 10,
    margin1: 10,
    radious: 30,
}
export const commonStyle = {
    textStyle: {
        fontSize: SIZE.h2
    },
    iconStyle: {
        width: 30,
        height: 30
    }
}