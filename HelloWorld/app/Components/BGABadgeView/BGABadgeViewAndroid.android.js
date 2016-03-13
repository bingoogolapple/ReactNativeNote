'use strict';

import React, {
  Component,
  View,
  requireNativeComponent,
  PropTypes
} from 'react-native';

class BGABadgeViewAndroid extends Component {
  constructor(props) {
    super(props);
  }

  _onDismiss(event) {
    if (this.props.onDismiss) {
      this.props.onDismiss(event);
    }
  }
  render() {
    return <NativeBGABadgeView {...this.props} onDismiss={this._onDismiss.bind(this)} />;
  }
}

BGABadgeViewAndroid.propTypes = {
  ...View.propTypes,
  textBadge: PropTypes.string,
  circlePointBadge: PropTypes.bool,
  onDismiss: PropTypes.func,
};

var NativeBGABadgeView = requireNativeComponent(`AndroidBGABadgeView`, BGABadgeViewAndroid);

export { BGABadgeViewAndroid as default };
