import { lazy } from 'react';

const routes = [
  {
    path: '/',
    key: 'base',
    exact: true,
    Component: lazy(() => import('./routes/apiList')),
  },
  {
    path: '/:id',
    key: 'path',
    // exact: true,
    Component: lazy(() => import('./routes/apiConsole')),
  },
];

export default routes;
