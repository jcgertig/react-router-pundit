import React, { Component } from 'react';
import PropTypes from 'prop-types';

class PunditRoute extends Component {

  static displayName = 'PunditRoute';

  static propTypes = {
    type: PropTypes.string,
    action: PropTypes.string,
    model: PropTypes.object,
    user: PropTypes.object,
    component: PropTypes.any,
    redirectPath: PropTypes.string,
    componentProps: PropTypes.object,
  };

  static defaultProps = {
    type: '',
    action: '',
    model: {},
    user: null,
    redirectPath: '/login',
    componentProps: {},
  };

  static contextTypes = {
    punditCheck: PropTypes.func,
  };

  handleRouteRender = (props) => {
    const { type, action, model, user, redirectPath, component: Component, componentProps } = this.props;
    if (this.context.punditCheck(type, action, model, user)) {
      return <Component {...props} {...componentProps} />;
    }
    return (
      <Redirect
        to={{
          pathname: redirectPath,
          state: { from: props.location }
        }}
      />
    );
  };

  render() {
    const { type, action, model, user, redirectPath, component: Component, componentProps, ...rest } = this.props;
    return <Route {...rest} render={this.handleRouteRender} />;
  }
}

export default PunditRoute;
