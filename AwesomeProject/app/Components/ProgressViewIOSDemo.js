'use strict';

import React, {
  ProgressViewIOS,
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
        paddingTop: 100,
        paddingBottom: 100
      }]}>
        <ProgressViewIOS
          progressTintColor="#ff0000"
          trackTintColor="#00ff00"
          progress={0.3}
        />
      </View>
    );
  }
}

export { ProgressViewIOSDemo as default };
