'use strict';

import React, {
  Text,
  View,
  Switch,
} from 'react-native';

import styles from '../Styles/Main';

class SwitchDemo extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      switchDemoOne: true,
      switchDemoTwo: false,
      switchDemoTwoDisabled: true,
    }
  }

  render() {
    return (
      <View style={[styles.container, {
        flexDirection: 'column',
        paddingTop: 100,
        paddingBottom: 100
      }]}>
        <Switch
            style={{marginBottom: 30}}
            onTintColor="#ff0000"
            tintColor="#00ff00"
            thumbTintColor="#0000ff"
            value={this.state.switchDemoOne}
            onValueChange={(value) => {
              this.setState({
                switchDemoOne: value,
                switchDemoTwoDisabled: this.state.switchDemoTwoDisabled ? false : true
              })}
            }
          />
        <Switch
          disabled={this.state.switchDemoTwoDisabled}
          onTintColor="#ff0000"
          tintColor="#00ff00"
          thumbTintColor="#0000ff"
          value={this.state.switchDemoTwo}
          onValueChange={(value) => this.setState({switchDemoTwo: value})}
        />
      </View>
    );
  }
}

export { SwitchDemo as default };
