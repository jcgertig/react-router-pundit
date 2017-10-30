import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';

class PassPropsRoute extends Component {

  static displayName = 'PassPropsRoute';

  static propTypes = {
    componentProps: PropTypes.object,
  };

  static defaultProps = {
    componentProps: {},
  };

  handleRouteRender = (props) => {
    const { componentProps, component: Comp } = this.props;
    return <Comp {...props} {...componentProps} />;
  };

  render() {
    const { componentProps, ...rest } = this.props;
    return <Route {...rest} render={this.handleRouteRender} />;
  }
}

export default PassPropsRoute;
