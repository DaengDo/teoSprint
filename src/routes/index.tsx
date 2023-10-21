import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import { Root } from '../pages/Root';
import { Layout } from '../components/Layout';
import { Category } from '../pages/Category';
import Profile from '../pages/Profile';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: '/:bookmark',
        element: <Layout />,
        children: [
          {
            path: 'category',
            element: <Category />,
          },
          {
            path: 'album',
            element: <h4>Album</h4>,
          },
        ],
      },
      {
        path: 'profile',
        element: <Profile />,
      },
    ],
  },
]);
