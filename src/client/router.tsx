import { lazy } from 'react';
import { createBrowserRouter, RouteObject } from 'react-router-dom';

const routes: RouteObject[] = [
  {
    path: '/',
    Component: lazy(() => import('./pages/HomePage')),
  },
  {
    path: '/example/:itemId',
    Component: lazy(() => import('./pages/ExamplePage')),
  },
  {
    path: '/terms',
    Component: lazy(() => import('./pages/TermsPage')),
  },
  {
    path: '/impact',
    Component: lazy(() => import('./pages/ImpactPage')),
  },
  {
    path: '/todos',
    Component: lazy(() => import('./pages/TodoPage')),
  },
  {
    path: '/example/private',
    Component: lazy(() => import('./pages/PrivateExamplePage')),
  },
  {
    path: '/dashboard',
    Component: lazy(() => import('./pages/DashboardPage')),
  },
  {
    path: '/devices',
    Component: lazy(() => import('./pages/DevicesPage')),
  },
  {
    path: '/simulator',
    Component: lazy(() => import('./pages/SensorSimulatorPage')),
  },
  {
    path: '*',
    Component: lazy(() => import('./pages/NotFoundPage')),
  },
];

export const router = createBrowserRouter(routes);
