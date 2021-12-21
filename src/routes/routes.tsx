import React from 'react';
import HomePage from '@/views/Home';
import NotFound from '@/views/NotFound';
import AuthLayout from '@/layouts/AuthLayout';
import BasicLayout from '@/layouts/BasicLayout/index';

export default [
  {
    path: '/sign',
    element: <BasicLayout />,
    children: [],
  },
  {
    path: '/',
    element: <AuthLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
    ],
  },
  { path: '*', element: <NotFound /> },
];
