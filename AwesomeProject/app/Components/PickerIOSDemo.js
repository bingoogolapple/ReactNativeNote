'use strict';

import React, {
  View,
  PickerIOS,
} from 'react-native';

import styles from '../Styles/Main';

let PickerItemIOS = PickerIOS.Item;

let COURSE_CATEGORY = {
  tool: {
    name: '工具',
    subjects: ['基本工具', '前端工具'],
  },
  language: {
    name: '语言',
    subjects: ['HTML', 'CSS', 'JavaScript', 'PHP', 'SQL'],
  },
  app: {
    name: '应用',
    subjects: ['Node.js', 'React', 'Laravel', 'WordPress', 'Drupal'],
  },
};

class PickerIOSDemo extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      category: 'app',
      subjectIndex: 0,
    }
  }

  render() {
    return (
      <View style={[styles.container, {
        flexDirection: 'column',
        paddingTop: 60,
        paddingBottom: 60
      }]}>
        <PickerIOS
          selectedValue={this.state.category}
          onValueChange={(category) => this.setState({category})}
        >
          {Object.keys(COURSE_CATEGORY).map((category) => (
            <PickerItemIOS
              key={category}
              value={category}
              label={COURSE_CATEGORY[category].name}
            />
          ))}
        </PickerIOS>
        <PickerIOS
          selectedValue={this.state.subjectIndex}
          onValueChange={(subjectIndex) => this.setState({subjectIndex})}
        >
          {COURSE_CATEGORY[this.state.category].subjects.map((subject, subjectIndex) => (
            <PickerItemIOS
              key={`${subject}_${subjectIndex}`}
              value={subjectIndex}
              label={subject}
            />
          ))}
        </PickerIOS>
      </View>
    );
  }
}

export { PickerIOSDemo as default };
