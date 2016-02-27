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
import Two from './app/Components/Two';
import Search from './app/Components/Search';
import User from './app/Components/User';
import Demo from './app/Components/Demo';

class AwesomeProject extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
        selectedTab: 'demo'
      };
  }

  render() {
    return (
      <TabBarIOS barTintColor="darkslateblue" tintColor="white">
        <TabBarIOS.Item
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
        <TabBarIOS.Item
            icon={{uri: icons.search, scale: 4.6}}
            title="搜索"
            selected={this.state.selectedTab === 'search'}
            onPress={() => {
              this.setState({
                selectedTab: 'search'
              });
            }}>
            <Search />
          </TabBarIOS.Item>
          <TabBarIOS.Item
            icon={{uri: icons.user, scale: 3.3}}
            title="我的"
            selected={this.state.selectedTab === 'user'}
            onPress={() => {
              this.setState({
                selectedTab: 'user'
              });
            }}>
            <User />
          </TabBarIOS.Item>
          <TabBarIOS.Item
            systemIcon="featured"
            selected={this.state.selectedTab === 'demo'}
            onPress={() => {
              this.setState({
                selectedTab: 'demo'
              });
            }}>
            <Demo />
          </TabBarIOS.Item>
        </TabBarIOS>
    );
  }
}

React.AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
