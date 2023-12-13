import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import NewPost, { action as newPostAction } from '@/routes/NexPost';
import Posts, { loader as postsLoader } from '@/routes/Posts';
import RootLayout from '@/routes/RootLayout';

import '@/styles/index.scss';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        path: '/',
        element: <Posts />,
        loader: postsLoader, // loader (ex. data fetching) executes before element gets render
        children: [
          {
            path: '/create-post',
            element: <NewPost />,
            action: newPostAction,
          },
        ],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
