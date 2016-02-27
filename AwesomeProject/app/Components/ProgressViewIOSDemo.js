'use strict';

import React, {
  Text,
  View,
} from 'react-native';

import styles from '../Styles/Main';

class ProgressViewIOSDemo extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={[styles.container, {
        flexDirection: 'column',
        paddingTop: 60,
        paddingBottom: 60
      }]}>
        <Text style={{
          alignSelf: 'center',
          color: 'rgba(255, 255, 255, 0.9)'
        }}>ProgressViewIOSDemo</Text>
      </View>
    );
  }
}

export { ProgressViewIOSDemo as default };
