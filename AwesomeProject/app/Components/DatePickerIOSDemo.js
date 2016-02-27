'use strict';

import React, {
  Text,
  View,
  DatePickerIOS,
} from 'react-native';

import styles from '../Styles/Main';

class DatePickerIOSDemo extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      date: new Date()
    }
  }

  render() {
    return (
      <View style={[styles.container, {
        flexDirection: 'column',
        paddingTop: 60,
        paddingBottom: 60
      }]}>
        <DatePickerIOS
          onDateChange={(date) => this.setState({date})}
          date={this.state.date}
          mode="datetime"
        />
      </View>
    );
  }
}

export { DatePickerIOSDemo as default };
