import * as React from 'react';
import {View, Text} from 'react-native';
import Nav from './nav';

class App extends React.Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <Nav></Nav>
      </View>
    );
  }
}

export default App;
