/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';
import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View,
  DeviceEventEmitter,
} from 'react-native';

// import后面的名字随便取， ./后面的名字和模块文件的文件名相同
import ToastAndroid from './CustomToast';
import MathAndroid from './CustomMath';
import BGABadgeViewAndroid from './app/Components/BGABadgeView/BGABadgeViewAndroid';

class HelloWorld extends Component {
  constructor(props) {
    super(props);

    DeviceEventEmitter.addListener('testEvent', function(e: Event) {
      ToastAndroid.show('收到了java发送过来的事件: ' + e.stringKey, ToastAndroid.SHORT);
    });
  }

  componentDidMount() {
    // MathAndroid.add(
    //   1,
    //   1,
    //   (msg) => {
    //     ToastAndroid.show('结果是: ' + msg, ToastAndroid.SHORT);
    //   }
    // );
    //
    // MathAndroid.addWithError(
    //   0,
    //   1,
    //   (msg) => {
    //     ToastAndroid.show('错误消息: ' + msg, ToastAndroid.SHORT);
    //   },
    //   (a, b, count) => {
    //     ToastAndroid.show(a + " + " + b + " = " + count, ToastAndroid.SHORT);
    //   }
    // );
  }

  render() {
    return this.renderBGABadgeViewAndroid();
  }

  onDismiss(event) {
    ToastAndroid.show('RN消失', ToastAndroid.SHORT);
  }

  renderBGABadgeViewAndroid() {
    return (
      <View style={styles.container}>
        <Text style={{fontSize: 30, color: '#00ff00'}}>Hello React Native</Text>
        <BGABadgeViewAndroid textBadge="5" style={styles.test} onDismiss={this.onDismiss} />
        <BGABadgeViewAndroid textBadge="10" style={styles.test} onDismiss={this.onDismiss} />
        <BGABadgeViewAndroid textBadge="6" style={styles.test} onDismiss={this.onDismiss} />
        <BGABadgeViewAndroid circlePointBadge={true} style={styles.test} onDismiss={this.onDismiss} />
        <BGABadgeViewAndroid textBadge="50" style={styles.test} onDismiss={this.onDismiss} />
        <BGABadgeViewAndroid circlePointBadge={true} style={styles.test} onDismiss={this.onDismiss} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  test: {
    width: 150,
    height: 80,
  },
});

AppRegistry.registerComponent('HelloWorld', () => HelloWorld);
