'use strict';

import React, {
  Text,
  View,
  TouchableHighlight,
} from 'react-native';

import styles from '../Styles/Main';

class DemoItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableHighlight
          onPress={this.props.handleClick}
          underlayColor="rgba(34, 26, 38, 0.1)"
          style={{
            margin: 10,
            justifyContent: 'flex-end',
            marginBottom: 90,
          }}
        >
          <View style={{
            backgroundColor: '#9182E6',
            borderRadius: 3,
            padding: 13,
          }}>
            <Text style={{
              alignSelf: 'center',
              color: 'rgba(255, 255, 255, 0.9)'
            }}>{this.props.title}</Text>
          </View>
        </TouchableHighlight>
      </View>
    );
  }
}

export { DemoItem as default };
