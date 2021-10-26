import React, { Suspense } from 'react';
import { useRouteMatch, Switch, Route } from 'react-router-dom';
import PropTypes from 'prop-types';

const RoutesLoader = ({ fallback, routes }) => {
  const { url } = useRouteMatch();

  if (!routes || !routes.length) {
    return null;
  }

  return (
    <Suspense fallback={fallback}>
      <Switch>
        {routes.map(({ exact, path, Component, props }) => (
          <Route
            exact={exact}
            path={url === '/' ? path : `${url}${path}`}
            key={path}
          >
            {(routeProps) => <Component {...routeProps} {...props} />}
          </Route>
        ))}
      </Switch>
    </Suspense>
  );
};

RoutesLoader.propTypes = {
  fallback: PropTypes.element,
  routes: PropTypes.array.isRequired,
};

RoutesLoader.defaultProps = {
  fallback: null,
  routes: [],
};

export default RoutesLoader;
