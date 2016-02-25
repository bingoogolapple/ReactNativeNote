'use strict';

import React, {
  Text,
  View,
  Image,
  ListView,
  ActivityIndicatorIOS,
  TouchableHighlight,
} from 'react-native';

import styles from '../Styles/Main';
import Detail from './Detail';
import Loading from './Loading';

const REQUEST_URL = 'https://api.douban.com/v2/movie/us_box';

class TwoContent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      movies: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2
      }),
      loaded: false
    };

    this.fetchData();
  }

  fetchData() {
    fetch(REQUEST_URL)
      .then(response => response.json())
      .then(responseData => {
        this.setState({
          movies: this.state.movies.cloneWithRows(responseData.subjects),
          loaded: true
        });
      })
      .done();
  }

  showDetail(movie) {
    this.props.navigator.push({
      title: movie.title,
      component: Detail,
      passProps: {movie},
    });
  }

  renderMovieList(movie) {
    return (
      <TouchableHighlight
        underlayColor="rgba(34, 26, 38, 0.1)"
        onPress={() => this.showDetail(movie.subject)}
      >
        <View style={styles.item}>
          <View style={styles.itemImage}>
            <Image
              source={{uri: movie.subject.images.large}}
              style={styles.image}
             />
          </View>
          <View style={styles.itemContent}>
            <Text style={styles.itemHeader}>{movie.subject.title}</Text>
            <Text style={styles.itemMeta}>
              {movie.subject.original_title} ( {movie.subject.year} )
            </Text>
            <Text style={styles.redText}>
              {movie.subject.rating.average}
            </Text>
          </View>
        </View>
      </TouchableHighlight>
    );
  }

  render() {
    if (!this.state.loaded) {
      return <Loading />
    }

    return (
      <View style={[styles.container, {paddingTop: 60, paddingBottom: 60}]}>
        <ListView
          dataSource={this.state.movies}
          renderRow={this.renderMovieList.bind(this)}   // 这里bind(this)是为了在renderMovieList使用this.showDetail(movie.subject)
        />
      </View>
    );
  }
}

export { TwoContent as default };
