import { lazy } from 'react';

const routes = [
  {
    path: '/',
    Component: lazy(() => import('homescreen')),
  },
];

export default routes;
