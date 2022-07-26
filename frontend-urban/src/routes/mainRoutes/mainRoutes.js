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
    path: '/vendors/:id',
    name: 'Vendors',
    exact: true,
    component: React.lazy(() => import('../../views/user/Vendor/vendor')),
  },
  {
    path: '/vendor/:id',
    name: 'Vendor',
    exact: true,
    component: React.lazy(() => import('../../views/user/Vendor/vendorDetail')),
  },
  {
    path: '/regVenderservice/:id',
    name: 'VendorsService',
    exact: true,
    component: React.lazy(() => import('../../views/user/Services/Venderservice')),
  },
  {
    path: '/booking',
    name: 'Booking',
    exact: true,
    component: React.lazy(() => import('../../views/user/Booking/booking')),
  },
  {
    path: '/servicebooking',
    name: 'serviceBooking',
    exact: true,
    component: React.lazy(() => import('../../views/user/Booking/servicebooking')),
  },
  {
    redirectRoute: true,
    path: '/dashboard',
    name: 'Dashboard',
  },
];
