import {
  StyleSheet,
  Dimensions
} from 'react-native';

const SCREEN_WIDTH = Dimensions.get('window').width;

export var styles = StyleSheet.create({
  container: {
    flex: 1,
    alignSelf: 'stretch'
  },

  passwordBox: {
    flexDirection: 'row',
    alignSelf: 'center',
    borderColor: 'gray',
    borderLeftWidth: 1
  },

  box: {
    borderColor: 'gray',
    borderWidth: 1,
    borderLeftWidth: 0,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    width: 50,
    height: 40
  },

  password: {
    color: 'black',
    fontSize: 20
  },

  keyboard: {
    width: SCREEN_WIDTH,
    height: 270,
    backgroundColor: 'white'
  },

  keyboardHeader: {
    paddingHorizontal: 25,
    alignItems: 'flex-end',
    justifyContent: 'center',
    borderColor: 'gray',
    borderTopWidth: 1,
    borderBottomWidth: 0.5,
    height: 30
  },

  keyboardContent: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap'
  },

  key: {
    width: SCREEN_WIDTH / 3,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: 'gray',
    borderWidth: 0.5
  },

  keyText: {
    fontSize: 20
  },

  circle: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: 'gray'
  }
});