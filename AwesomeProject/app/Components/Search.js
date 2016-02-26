'use strict';

import React, {
  NavigatorIOS
} from 'react-native';

import styles from '../Styles/Main';
import SearchForm from './SearchForm';

class Search extends React.Component {
  render() {
    return (
      <NavigatorIOS
        style={styles.container}
        initialRoute={{
          title: "Search",
          component: SearchForm
        }}
        shadowHidden={true} // 隐藏导航栏底部的线
        barTintColor="darkslateblue" // 导航栏背景色
        titleTextColor="rgba(255, 255, 255, 0.8)" // 导航栏文字颜色
        tintColor="rgba(255, 255, 255, 0.8)" // 导航栏图标的颜色
        translucent={true} // 导航栏半透明
        />
    );
  }
}

export { Search as default };
