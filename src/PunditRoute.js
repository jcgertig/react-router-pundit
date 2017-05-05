import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { PunditComponent } from 'react-pundit';
import omit from 'lodash.omit';

class PunditRoute extends PunditComponent {

  static displayName = 'PunditRoute';

  static propTypes = {
    ...PunditComponent.propTypes,
    component: PropTypes.any,
    redirectPath: PropTypes.string,
    componentProps: PropTypes.object,
  };

  static defaultProps = {
    ...PunditComponent.defaultProps,
    redirectPath: '/login',
    componentProps: {},
  };

  handleRouteRender = (props) => {
    const { redirectPath, component: Component, componentProps } = this.props;
    const res = this.passesPermissions();
    if (res === true) {
      return <Component {...props} {...componentProps} />;
    }
    const pathname = typeof res === 'string' ? res : redirectPath;
    return (
      <Redirect
        to={{
          pathname,
          state: { from: props.location }
        }}
      />
    );
  };

  render() {
    const props = omit(this.props, Object.keys(PunditRoute.propTypes));
    return <Route {...props} render={this.handleRouteRender} />;
  }
}

export default PunditRoute;
