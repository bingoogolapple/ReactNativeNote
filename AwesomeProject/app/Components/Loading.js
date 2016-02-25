'use strict';

import React, {
  Text,
  View,
  ActivityIndicatorIOS
} from 'react-native';

import styles from '../Styles/Main';

class Loading extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.loading}>
          <ActivityIndicatorIOS
            size="large"
            color="#6435c9"
          />
        </View>
      </View>
    );
  }
}

export { Loading as default };
