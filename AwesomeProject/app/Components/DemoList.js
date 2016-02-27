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
        <DemoItem title="Demo4" handleClick={this.demo4.bind(this)} />
        <DemoItem title="Demo5" handleClick={this.demo5.bind(this)} />
        <DemoItem title="Demo6" handleClick={this.demo6.bind(this)} />
        <DemoItem title="Demo7" handleClick={this.demo7.bind(this)} />
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

  demo4() {

  }

  demo5() {

  }

  demo6() {

  }

  demo7() {

  }
}

export { DemoList as default };
