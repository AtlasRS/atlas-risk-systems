// import React from 'react';
// import PropTypes from 'prop-types';
// import { connect } from 'react-redux';
// import { Route, Redirect } from 'react-router-dom';

// Higher Order Component
// const RequireAuth = ({ authenticated, component: Component, ...rest }) => (
//   <Route {...rest} render={props => authenticated ? <Component {...props} /> : <Redirect to='/' />}/>
// );
//
// RequireAuth.propTypes = {
//   component: PropTypes.func.isRequired,
//   authenticated: PropTypes.bool.isRequired
// };
//
// function mapStateToProps(state) {
//   return { authentiated: state.auth.authenticated };
// }
//
// export default connect(mapStateToProps)(RequireAuth);

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

export default function(ComposedComponent) {
  class Authentication extends Component {
    static contextTypes: {
      router: React.PropTypes.Object
    }

    componentWillMount() {
      if (!this.props.authenticated) {
        this.props.history.push('/');
      }
    }

    componentWillUpdate(nextProps) {
      if (!nextProps.authenticated) {
        this.props.history.push('/');
      }
    }

    render() {
      return <ComposedComponent {...this.props} />
    }
  }

  function mapStateToProps(state) {
    return { authenticated: state.auth.authenticated };
  }

  return connect(mapStateToProps)(withRouter(Authentication));
}
