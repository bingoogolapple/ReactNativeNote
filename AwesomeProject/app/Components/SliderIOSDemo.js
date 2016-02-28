'use strict';

import React, {
  Text,
  View,
  SliderIOS,
} from 'react-native';

import icons from '../Assets/Icons';
import styles from '../Styles/Main';

class SliderIOSDemo extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      sliderValue: 0,
    }
  }

  render() {
    return (
      <View style={[styles.container, {
        flexDirection: 'column',
        paddingTop: 60,
        paddingBottom: 60
      }]}>
        <SliderIOS
            minimumTrackTintColor="#ff0000"
            maximumTrackTintColor="#00ff00"
            thumbImage={{uri: icons.cupcake, scale: 3.6}}
            minimumValue={0}
            maximumValue={10}
            value={this.state.sliderValue}
            onValueChange={(value) => this.setState({sliderValue: value})}
            step={1}
            // disabled={true}
          />
          <Text>{this.state.sliderValue}</Text>
      </View>
    );
  }
}

export { SliderIOSDemo as default };
