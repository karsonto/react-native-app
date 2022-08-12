import * as React from 'react';
import {
  View,
  StyleSheet,
  ImageBackground,
  Text,
  Alert,
  ActivityIndicator,
} from 'react-native';
import {windowWidth} from '../../utils/styleKits';
import {Input, Button, Dialog} from '@rneui/themed';
import request from '../../utils/request';

const image = {uri: 'https://static.runoob.com/images/demo/demo2.jpg'};
export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.inputPhone = React.createRef();
    this.state = {validated: false, isLoading: false, phoneNum: ''};
  }
  handlerSubmit = () => {
    this.setState({isLoading: true});
    request
      .post('/login', {phone: this.state.phoneNum})
      .then(response => {
        this.setState({isLoading: false, phoneNum: ''});
        this.inputPhone.current.clear();
        Alert.alert(response.data + '');
      })
      .catch(error => {
        this.setState({isLoading: false});
      });
  };

  render() {
    const {isLoading} = this.state;
    return (
      <View style={styles.container}>
        <Dialog
          isVisible={isLoading}
          onBackdropPress={() => {
            this.setState({isLoading: !isLoading});
          }}
        >
          <Dialog.Loading />
        </Dialog>
        <ImageBackground source={image} resizeMode="cover" style={styles.image}>
          <View>
            <Text style={styles.text}>手机号码登录注册</Text>
            <Input
              ref={this.inputPhone}
              onChangeText={value => {
                this.setState({phoneNum: value});
              }}
              placeholder=""
              errorMessage=""
              leftIcon={{type: 'font-awesome', name: 'phone'}}
            />
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                paddingTop: 50,
              }}
            >
              <Button
                onPress={this.handlerSubmit}
                title="LOGIN"
                icon={{
                  name: 'home',
                  type: 'font-awesome',
                  size: 19,
                  color: 'white',
                }}
                iconContainerStyle={{marginRight: 10}}
                titleStyle={{fontWeight: '700'}}
                buttonStyle={{
                  backgroundColor: 'rgba(90, 154, 230, 1)',
                  borderColor: 'transparent',
                  borderWidth: 0,
                  borderRadius: 30,
                }}
                containerStyle={{
                  width: 300,
                  marginHorizontal: 40,
                }}
              />
            </View>
          </View>
        </ImageBackground>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
    alignItems: 'center',
    height: 80,
  },
  image: {
    flex: 1,
    justifyContent: 'center',
    height: 350,
  },
  text: {
    fontSize: 20,
    color: '#888',
    margin: 30,
    paddingTop: 80,
  },
});
