# react-native-number-password-box

## Demo

![demo](https://github.com/LzxHahaha/react-native-number-password-box/blob/master/demo.png?raw=true)



## Installation

``` shell
$ npm install --save react-native-number-password-box
```



## Use

``` javascript
import React, {View, Text, Component} from 'react-native';
import NumberPasswordBox from 'react-native-number-password-box';

class Demo extends React.Component {
  constructor(props) {
  	super(props);
    
    this.state = {
      password: ''
	};
  }
  
  render() {
  	return (
      <View style={{flex:1}}>
        <Text style={{marginVertical: 20}}>{this.state.password}</Text>
        
        <NumberPasswordBox onChange={password=>this.setState({password}) />
  	  </View>
  	);
  }
}
```



## Method

`onChange`: function(password)



## Props

`style`: 

`containerStyle`: 