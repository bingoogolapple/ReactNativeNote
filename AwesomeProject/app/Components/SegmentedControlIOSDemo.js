'use strict';

import React, {
  Text,
  View,
  SegmentedControlIOS,
} from 'react-native';

import styles from '../Styles/Main';

class SegmentedControlIOSDemo extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      values: ['全部', '工具', '应用'],
      value: '全部',
      selectedIndex: 0,
    }
  }

  render() {
    return (
      <View style={[styles.container, {
        flexDirection: 'column',
        paddingTop: 100,
        paddingBottom: 100
      }]}>
        <SegmentedControlIOS
          style={{marginBottom: 30}}
          onChange={(event) => {
            this.setState({
              selectedIndex: event.nativeEvent.selectedSegmentIndex
            });
          }}
          onValueChange={(value) => this.setState({value})}
          values={this.state.values}
          selectedIndex={this.state.selectedIndex}
          tintColor="#6435c9"
          // enabled={false}
        />
        <Text>{this.state.value}, {this.state.selectedIndex}</Text>
      </View>
    );
  }
}

export { SegmentedControlIOSDemo as default };
