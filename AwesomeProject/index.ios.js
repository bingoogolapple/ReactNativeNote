/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

import React, {
  TabBarIOS
} from 'react-native';

import icons  from './app/Assets/Icons';
import One from './app/Components/One';
import OneContent from './app/Components/OneContent';
import Two from './app/Components/Two';

class AwesomeProject extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
        selectedTab: 'one'
      };
  }

  render() {
    return (
      <TabBarIOS barTintColor="darkslateblue" tintColor="white">
        <TabBarIOS.Item
          // systemIcon="featured"
          icon={{uri: icons.star, scale: 4.6}}
          selectedIcon={{uri: icons.starActive, scale: 4.6}}
          title="One"
          selected={this.state.selectedTab === 'one'}
          onPress={() => {
            this.setState({
              selectedTab: 'one'
            });
          }}>
          <One />
        </TabBarIOS.Item>
        <TabBarIOS.Item
          systemIcon="most-viewed"
          selected={this.state.selectedTab === 'two'}
          onPress={() => {
            this.setState({
              selectedTab: 'two'
            });
          }}>
          <Two />
        </TabBarIOS.Item>
      </TabBarIOS>
    );
  }
}

React.AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
