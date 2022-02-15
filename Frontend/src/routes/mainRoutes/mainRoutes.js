import React from 'react';

export const guestRoutes = [
  {
    path: '/signin',
    name: 'Signin',
    exact: true,
    component: React.lazy(() => import('../../views/auth/Login/Login')),
  },
  {
    path: '/register',
    name: 'Register',
    exact: true,
    component: React.lazy(() => import('../../views/auth/Login/Register')),
  },
];

export const userRoutes = [
  {
    path: '/dashboard',
    name: 'Dashboard',
    exact: true,
    component: React.lazy(() => import('../../views/user/Dashboard/Dashboard')),
  },
  {
    path: '/services/:id',
    name: 'Services',
    exact: true,
    component: React.lazy(() => import('../../views/user/Services/Services')),
  },
  {
    redirectRoute: true,
    path: '/dashboard',
    name: 'Dashboard',
  },
];
