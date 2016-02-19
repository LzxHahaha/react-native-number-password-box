import React, {
  Component,
  PropTypes,
  Text,
  View,
  TouchableOpacity,
  TouchableWithoutFeedback
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import Modal from 'react-native-modalbox';

import {styles} from './NumberPasswordBox.style';

propTypes = {
  onChange: PropTypes.func
};

defaultProps = {};

export default class NumberPasswordBox extends Component {
  constructor(props) {
    super(props);

    this.state = {
      password: ''
    };
  }

  _setPassword(key) {
    let {password} = this.state;
    if (isNaN(key)) {
      if (password.length > 0) {
        let pwd = password.substring(0, password.length - 1);
        this.setState({password: pwd});
        this.props.onChange && this.props.onChange(pwd);
      }
      return;
    }

    if (password.length < 6) {
      let pwd = password + key;
      this.setState({password: pwd});
      this.props.onChange && this.props.onChange(pwd);
    }
  }

  showKeyboard() {
    this.keyboard.open();
  }

  hideKeyboard() {
    this.keyboard.close();
  }

  renderBoxes() {
    const {password} = this.state;
    let boxes = [];
    for (let i = 0; i < 6; ++i) {
      boxes.push(
        <TouchableWithoutFeedback onPress={()=>this.showKeyboard()} key={'box' + i}>
          <View style={styles.box}>
            {password[i] ? <View style={styles.circle} /> : <View/>}
          </View>
        </TouchableWithoutFeedback>
      );
    }

    return boxes;
  }

  render() {
    return (
      <View style={[styles.container, this.props.style]}>
        <View style={[styles.passwordBox, this.props.containerStyle]}>
          {this.renderBoxes()}
        </View>

        {this.props.children}

        <Modal ref={ref=>this.keyboard=ref}
               position="bottom"
               backdrop={false}
               style={styles.keyboard}
        >
          <View style={styles.keyboardHeader}>
            <TouchableOpacity onPress={()=>{this.hideKeyboard()}}>
              <Icon name="ios-arrow-down" color="gray" size={24} />
            </TouchableOpacity>
          </View>
          <View style={styles.keyboardContent}>
            {
              [1,2,3,4,5,6,7,8,9,'',0,'back'].map((el, index) => {
                if (el !== '') {
                  return (
                    <TouchableOpacity style={styles.key} key={index} onPress={()=>this._setPassword(el)}>
                      {
                        !isNaN(el)
                          ? <Text style={styles.keyText}>{el}</Text>
                          : <Icon name="backspace-outline" size={16} color="black"/>
                      }
                    </TouchableOpacity>
                  );
                }
                else {
                  return <View style={styles.key} key={index} />
                }
              })
            }
          </View>
        </Modal>
      </View>
    );
  }
}

NumberPasswordBox.propTypes = propTypes;
NumberPasswordBox.defaultProps = defaultProps;
