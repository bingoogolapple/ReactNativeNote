'use strict';

import React, {
  Text,
  View,
  TouchableHighlight,
} from 'react-native';

import styles from '../Styles/Main';
import DemoItem from './DemoItem';
import DatePickerIOSDemo from './DatePickerIOSDemo';
import ModalDemo from './ModalDemo';
import PickerIOSDemo from './PickerIOSDemo';
import ProgressViewIOSDemo from './ProgressViewIOSDemo';
import SegmentedControlIOSDemo from './SegmentedControlIOSDemo';
import SliderIOSDemo from './SliderIOSDemo';
import SwitchDemo from './SwitchDemo';

class DemoList extends React.Component {
  render() {
    return (
      <View style={[styles.container, {
        flexDirection: 'column',
        paddingTop: 60,
        paddingBottom: 60
      }]}>

        <DemoItem title="DatePickerIOSDemo" handleClick={this.datePicker.bind(this)} />
        <DemoItem title="ModalDemo" handleClick={this.modalDemo.bind(this)} />
        <DemoItem title="PickerIOSDemo" handleClick={this.pickerIOSDemo.bind(this)} />
        <DemoItem title="ProgressViewIOSDemo" handleClick={this.progressViewIOSDemo.bind(this)} />
        <DemoItem title="SegmentedControlIOSDemo" handleClick={this.segmentedControlIOSDemo.bind(this)} />
        <DemoItem title="SliderIOSDemo" handleClick={this.sliderIOSDemo.bind(this)} />
        <DemoItem title="SwitchDemo" handleClick={this.switchDemo.bind(this)} />
      </View>
    );
  }

  datePicker() {
    this.props.navigator.push({
      title: "DatePickerIOSDemo",
      component: DatePickerIOSDemo,
    });
  }

  modalDemo() {
    this.props.navigator.push({
      title: "ModalDemo",
      component: ModalDemo,
    });
  }

  pickerIOSDemo() {
    this.props.navigator.push({
      title: "PickerIOSDemo",
      component: PickerIOSDemo,
    });
  }

  progressViewIOSDemo() {
    this.props.navigator.push({
      title: "ProgressViewIOSDemo",
      component: ProgressViewIOSDemo,
    });
  }

  segmentedControlIOSDemo() {
    this.props.navigator.push({
      title: "SegmentedControlIOSDemo",
      component: SegmentedControlIOSDemo,
    });
  }

  sliderIOSDemo() {
    this.props.navigator.push({
      title: "SliderIOSDemo",
      component: SliderIOSDemo,
    });
  }

  switchDemo() {
    this.props.navigator.push({
      title: "SwitchDemo",
      component: SwitchDemo,
    });
  }
}

export { DemoList as default };
